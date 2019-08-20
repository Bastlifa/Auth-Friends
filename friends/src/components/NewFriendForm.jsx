import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import { postFriend } from '../actions'

const NewFriendForm = () =>
{
    const [inputs, setInputs] = useState({age: '', email: '', name: ''})
    const dispatch = useDispatch()

    const handleChange = event =>
    {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleSubmit = event =>
    {
        event.preventDefault()
        dispatch(postFriend(inputs))
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>
                {"New Friend Form"}
                <br/>
            </span> 
            <label>
                Name:
                <br/>
                <input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Age:
                <br/>
                <input type="number" name="age" placeholder="Age" value={inputs.age} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Email:
                <br/>
                <input type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
            </label>
            <br/>
            <button>Submit Friend!</button>
        </form>
    )
}

export default NewFriendForm