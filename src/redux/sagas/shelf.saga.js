// ALL NEW SAGA FUNCTIONS IN HERE!!!!!
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getShelf() {
    try {
        const shelf = yield axios.get('/api/shelf');
        yield put ({type: 'SET_SHELF', payload: shelf.data});
    } catch (error) {
        console.log(error);
        alert('Error fetching shelf');
    }
}

function* postItem(action) {
    try {
        const newItem = action.payload;
        yield axios.post('/api/shelf', newItem);
        yield put ({
            type: 'SAGA_GET_SHELF'
        })
    } catch (error) {
        console.log(error);
        alert('Error sending shelf item');
    }

}

function* putEdits(action) {
    try {
        const updateId = action.payload.id;
        yield axios.put(`/api/shelf/${updateId}`, action.payload);
        // yield put ({
        //     type: 'SAGA_GET_SHELF'
        // })
    } catch (error) {
        console.log(error);
        alert('Error confirming edits, you may not have permission');
    }
}

function* deleteItem(action) {
    try {
        const deleteId = action.payload;
        yield axios.delete(`/api/shelf/${deleteId}`);
        yield put ({
            type: 'SAGA_GET_SHELF'
        })
    } catch (error) {
        console.log(error);
        alert('Error deleting shelf item, you may not have permission');
    }

}





function* shelfSaga() {
    yield takeLatest('SAGA_GET_SHELF', getShelf);
    yield takeLatest('SAGA_POST_ITEM', postItem);
    yield takeLatest('SAGA_PUT_EDITS', putEdits);
    yield takeLatest('SAGA_DELETE_THIS', deleteItem);
  }
  
  export default shelfSaga;