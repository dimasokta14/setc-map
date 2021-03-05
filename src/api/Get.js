import axios from "axios";
import {RootPath, Headers} from "./Config";

const Get = (path) => {
    Headers.headers.Authorization = localStorage.getItem('userToken');
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`, Headers)
            .then((result) => {
                resolve(result.data);
            },(err) => {
                reject(err);
            });
    });

    return promise;
};

export default Get;