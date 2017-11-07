// import {getCookie, eraseCookie, createCookie} from '../services/cookie-provider';
import fetchIntercept from 'fetch-intercept';
import { IMGUR_CID } from './constants';




export default function TokenInterceptor(){
    const unregister = fetchIntercept.register({
        request: function (url, config) {
            if (url.indexOf("api") > 0) {
                if (config) {
                    config.headers = {
                        ...config.headers,
                        Authorization : IMGUR_CID
                    }
                } else{
                    config = {
                        headers:{
                            Authorization: IMGUR_CID
                        }
                    }
                }
            }
            return [url, config];
        },
    });
}