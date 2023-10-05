import axios from "axios";

const instance = axios.create({
    baseURL : 'https://us-central1-clone-248c0.cloudfunctions.net/api ' // the api {cloud function} url
});

export default instance;

//http://127.0.0.1:5001/clone-248c0/us-central1/api