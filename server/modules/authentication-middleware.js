const rejectUnauthenticated = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.writeHead(302, {
      Location: 'http://localhost:3000/#/login'
    });
    res.end();
  }
};

module.exports = { rejectUnauthenticated };
