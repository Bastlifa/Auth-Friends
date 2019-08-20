import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL,
    POST_FRIEND_START,
    POST_FRIEND_SUCCESS,
    POST_FRIEND_FAIL,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAIL,
    PUT_FRIEND_START,
    PUT_FRIEND_SUCCESS,
    PUT_FRIEND_FAIL,
    postLogin,
} from '../actions'

const initialState =
{
    friends: [],
    isLoading: false,
    error: "",

}

export const friendReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case POST_LOGIN_START:
            console.log('post login start')
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case POST_LOGIN_SUCCESS:
            console.log('post login success')
            return {
                ...state,
                error: "",
            }
        case POST_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_FRIENDS_START:
            return {
                ...state,
                error: ""
            }
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                error: "",
                friends: action.payload
            }
        case GET_FRIENDS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_FRIEND_START:
            return {
                ...state,
                error: "",
                isLoading: true
            }
        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: action.payload.data
            }
        case POST_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}