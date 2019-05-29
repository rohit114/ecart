import { FETCH_ITEM } from '../actions/types';


export default ( state = {}, action) => {
    console.log("......... itemReducer", action)
    switch( action.type){
        case FETCH_ITEM:
            return { ...state, item: action.payload }

        default:
            return state;
    }
}