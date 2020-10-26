import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-clone-two-9a7e4.cloudfunctions.net/api' //THE API (cloud function) URL
  
  //http://localhost:5001/clone-two-9a7e4/us-central1/api  for testing locally

})

export default instance;