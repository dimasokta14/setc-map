import axios from "axios";
import {RootPath, Headers} from "./Config";

const Patch = (path, data = null) => {
    if( !(data instanceof FormData)){
        let form_data = new FormData();
        form_data.append('_method', 'PATCH');
        for ( let key in data ) {
            form_data.append(key, data[key]);
        }
        data = form_data;
    }

    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}`, data, Headers)
            .then((result) => {
                resolve(result.data);
            },(err) => {
                reject(err.response.data);
            });
    });

    return promise;
};

export default Patch;
