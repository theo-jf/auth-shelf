import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import ShelfPageForm from './ShelfPageForm';


function ShelfPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SAGA_GET_SHELF' });
}, []);

const shelfItems = useSelector(store => store.shelf);
// console.log(shelfItems);

  
  return (
    <div className="container">
      <ShelfPageForm />
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
