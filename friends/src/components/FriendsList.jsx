import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getFriends } from "../actions";
import Friend from './Friend'
import NewFriendForm from './NewFriendForm'
import {CardGrid, FriendListFB} from './StyledComps'

const FriendsList = () =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getFriends())
        }, [])

    return (
        <FriendListFB>
            <NewFriendForm />
            <div>FriendsList</div>
            <CardGrid>
                {state.friends.map(friend => <Friend key={friend.id} friend={friend} /> )}
            </CardGrid>
        </FriendListFB>
    )
}

export default FriendsList