
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SAGA_GET_SHELF' });
}, []);

const shelfItems = useSelector(store => store.shelf);
// console.log(shelfItems);

  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
          {/* {shelfItems.map(item => (
            <li key={item.id}>{item.description}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default ShelfPage;
