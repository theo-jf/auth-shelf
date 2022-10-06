import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ShelfPageItem({item}) {

    const dispatch = useDispatch();

    const [editView, setEditView] = useState(false);
    const [description, setDescription] = useState(item.description);
    const [image_url, setImage_url] = useState(item.image_url);

      const editItem = () => {
        dispatch({
            type: 'SAGA_PUT_EDIT',
            payload: {description: description, image_url: image_url}
        })
        setEditView(false);
    }

    const deleteItem = () => {
        dispatch({
          type: 'SAGA_DELETE_THIS',
          payload: item.id
        });
      }

    return (
        (editView) ? 
        <li key={item.id}>
            <input placeholder="description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}/>
            <input placeholder="url"
                    value={image_url} 
                    onChange={(e) => setImage_url(e.target.value)}/>
            <button onClick={editItem}>confirm edits</button>
            <button onClick={deleteItem}>delete item</button>
        </li>
        :
        <li key={item.id}>
            {item.description} <img src={item.image_url}/>
            <button onClick={() => setEditView(true)}>edit item</button>
            <button onClick={deleteItem}>delete item</button>
        </li>
    );
}