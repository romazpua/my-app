import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = () => dispatch => {
axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(res=>dispatch({
    type: GET_POSTS,
    payload: res.data,
  }))
}