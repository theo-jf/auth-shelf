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

function* deleteItem(action) {
    try {
        const deleteId = action.payload;
        yield axios.delete(`/api/shelf${deleteId}`);
        yield put ({
            type: 'SAGA_GET_SHELF'
        })
    } catch (error) {
        console.log(error);
        alert('Error deleting shelf item');
    }

}






function* shelfSaga() {
    yield takeLatest('SAGA_GET_SHELF', getShelf);
    yield takeLatest('SAGA_POST_ITEM', postItem);
    yield takeLatest('SAGA_DELETE_ITEM', deleteItem);
  }
  
  export default shelfSaga;