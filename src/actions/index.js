import { SIGN_IN, SIGN_OUT, FETCH_ITEM} from './types';
import items from '../apis/items';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT, 
    };
};

export const fetchItem = () => async dispatch => {
    const response = await items.get('/product');
    console.log("****** fetchItem response", response.data);

    dispatch({ type: FETCH_ITEM, payload: response.data });
}








