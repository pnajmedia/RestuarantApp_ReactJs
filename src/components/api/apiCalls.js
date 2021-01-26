import axios from 'axios';

// For GET type of requests
export function getApiCall(config, callback, errorcallback) {

    let users = 'http://localhost:3333/users';
    let roomType = 'http://localhost:3333/roomType';
    let hotelDEtails = 'http://localhost:3333/hotelDEtails';
    let reviews = 'http://localhost:3333/reviews';


    const finalURL = (param) => {
        switch (param) {
            case 'users': return users;
            case 'roomType': return roomType;
            case 'hotelDEtails': return hotelDEtails;
            case 'reviews': return reviews;
        }
    }

    return axios.get(finalURL(config.api_URL))
        .then(res => {
            if (callback != null) {
                callback(res);
            }
        }).catch(err => {
            // catch error
            if (errorcallback != null) {
                errorcallback(err);
            }
        })
}

// For POST type of requests
export function postApiCall(config, callback, errorcallback) {
    return axios.post(config.api_URL, config.params).then((res) => {
        if (callback != null) {
            callback(res)
        }
    }).catch(err => {
        if (errorcallback != null) {
            errorcallback(err);
        }
    })
}