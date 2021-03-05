import axios from "axios";
import {Headers, RootPath} from "./Config";

const Delete = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${RootPath}/${path}`, Headers)
            .then((result) => {
                resolve(result.data);
            },(err) => {
                reject(err.response.data);
            });
    });

    return promise;
};

export default Delete;
