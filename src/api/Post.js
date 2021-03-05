import axios from "axios";
import {RootPath, Headers} from "./Config";

const Post = (path, data) => {
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

export default Post;
