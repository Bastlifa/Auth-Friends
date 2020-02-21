import axios from 'axios'
import {axiosWithAuth} from '../utils'

export const POST_LOGIN_START = "POST_LOGIN_START"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL"

export const GET_FRIENDS_START = "GET_FRIENDS_START"
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS"
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL"

export const POST_FRIEND_START = "POST_FRIEND_START"
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS"
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL"

export const PUT_FRIEND_START = "PUT_FRIEND_START"
export const PUT_FRIEND_SUCCESS = "PUT_FRIEND_SUCCESS"
export const PUT_FRIEND_FAIL = "PUT_FRIEND_FAIL"

export const DELETE_FRIEND_START = "DELETE_FRIEND_START"
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS"
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL"

export const postLogin = (inputs, history) => dispatch =>
{
    dispatch({ type: POST_LOGIN_START })
    axios
        .post("http://localhost:5000/api/login", inputs)
            .then(res =>
                {
                    dispatch({ type: POST_LOGIN_SUCCESS, payload: {data: res.data.payload, history: history} })
                    console.log("res from action:",res)
                    localStorage.setItem('token', res.data.payload)
                })
            .then(res =>
                {
                    history.push('/friends')
                })
            .then(res => getFriends())
            .catch(err =>
                {
                    dispatch({ type: POST_LOGIN_FAIL, payload: err.response })
                })
}

export const getFriends = _ => dispatch =>
{
    dispatch({ type: GET_FRIENDS_START })
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
            .then(res =>
                {
                    console.log('res from getFriends:',res)
                    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
                })
            .catch(err =>
                {
                    console.log('err from getFriends:', err.response)
                    dispatch({ type: GET_FRIENDS_FAIL, payload: err.response })
                })
}

export const postFriend = (inputs) => dispatch =>
{
    dispatch({ type: POST_FRIEND_START })
    axiosWithAuth()
        .post("http://localhost:5000/api/friends", inputs)
            .then(res =>
                {
                    console.log('res from postFriend', res)
                    dispatch({ type: POST_FRIEND_SUCCESS, payload: res })
                })
            .catch(err => 
                {
                    console.log('err from postFriend', err.response)
                    dispatch({ type: POST_FRIEND_FAIL, payload: err.response })
                })
}

export const deleteFriend = (id) => dispatch =>
{
    dispatch({ type: DELETE_FRIEND_START })
    axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/:${id}`)
            .then(res =>
                {
                    console.log('res from deleteFriend', res)
                    dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res })
                })
            .catch(err => 
                {
                    console.log('err from deleteFriend', err.response)
                    dispatch({ type: DELETE_FRIEND_FAIL, payload: err.response })
                })
}