import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = [];

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRICE_DATA_SUCCED:
            return updateObject(state, { loading: false, priceData: action.state })
        case actionTypes.GET_PRICE_DATA_START:
            return updateObject(state, { loading: true })
        case actionTypes.GET_PRICE_DATA_FAILED:
            return updateObject(state, { loading: false,error:true })   
        case actionTypes.NEWS_DATA_SUCCED:
            return updateObject(state, { loading: false, newsData: action.state })     
        default:
            return updateObject(state, {loading: false, error: null});
    }
}
export default newsReducer;
