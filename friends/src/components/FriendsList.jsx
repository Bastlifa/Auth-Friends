import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getFriends } from "../actions";
import Friend from './Friend'
import NewFriendForm from './NewFriendForm'

const FriendsList = () =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getFriends())
        }, [])

    return (
        <>
            <NewFriendForm />
            <div>FriendsList</div>
            <div>
                {state.friends.map(friend => <Friend key={friend.id} friend={friend} /> )}
            </div>
        </>
    )
}

export default FriendsList