import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfPageForm from './ShelfPageForm';
import ShelfPageItem from './ShelfPageItem';


function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SAGA_GET_SHELF' });
  }, []);

  const shelfItems = useSelector(store => store.shelf);
  console.log('SHELF', shelfItems);

  
  return (
    <div className="container">
      <ShelfPageForm />
      <h2>Shelf</h2>
      <ul>
        {shelfItems.map((item) => {
          return (
            <ShelfPageItem key={item.id} item={item} />
          );
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
