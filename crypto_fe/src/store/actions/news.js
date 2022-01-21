import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import Server from '../../config/server';

const onPriceDataStart = () => {
    return {
        type: actionTypes.GET_PRICE_DATA_START
    }
}

const onPriceDataFailed = (error) => {
    return {
        type: actionTypes.GET_PRICE_DATA_FAILED,
        error: error
    }
}

const onPriceDataSucceed = (data) => {
    return {
        type: actionTypes.GET_PRICE_DATA_SUCCED,
        state: data
    }
}

export const getPrice = () => {
    return dispatch => {
        dispatch(onPriceDataStart())
        axios.get(Server.API+'/ethereum/price/')
            .then(function (response) {
                dispatch(onPriceDataSucceed(response.data))
            })
            .catch(function (error) {
                dispatch(onPriceDataFailed(error))
            });
    }
}

const newsDataStart = () => {
    return {
        type: actionTypes.NEWS_DATA_START
    }
}

const newsDataFailed = (error) => {
    return {
        type: actionTypes.NEWS_DATA_FAILED,
        error: error
    }
}

const newsDataSucceed = (data) => {
    return {
        type: actionTypes.NEWS_DATA_SUCCED,
        state: data
    }
}

export const getNews = () => {
    return dispatch => {
        dispatch(newsDataStart())
        axios.get(Server.API+'/news/')
            .then(function (response) {
                dispatch(newsDataSucceed(response.data))
            })
            .catch(function (error) {
                dispatch(newsDataFailed(error))
            });
    }
}