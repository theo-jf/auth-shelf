import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ShelfPageForm() {

    const dispatch = useDispatch();

    const [description, setDescription] = useState('');
    const [image_url, setImage_url] = useState('');

    const user = useSelector((store) => store.user);

    const addToShelf = () => {
        if (description != '' && image_url != '') {
            dispatch({
                type: 'SAGA_POST_ITEM',
                payload: {
                            description: description,
                            image_url: image_url,
                            user_id: user.id
                         }
            });
            setDescription('');
            setImage_url('');
        } 
    }

    return (
        <>
        <input placeholder="description"
               value={description} 
               onChange={(e) => setDescription(e.target.value)}/>
        <input placeholder="url"
               value={image_url} 
               onChange={(e) => setImage_url(e.target.value)}/>
        <button onClick={addToShelf}>Add to shelf</button>
        </>
    );
}