import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.luxand.cloud",
  headers: {
    'token': '2ce59255771d4dd6ad68795efc8e70e1',
  },

});

export default instance;