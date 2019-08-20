import React, {useState} from "react"
import Loader from 'react-loader-spinner'
import { postLogin } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const LoginForm = (props) =>
{
    const dispatch = useDispatch()
    let state = useSelector(state => state)

    const classes = useStyles();

    const [inputs, setInputs] = useState({username: '', password: ''})

    const handleChange = event =>
    {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleSubmit = event =>
    {
        event.preventDefault()
        dispatch(postLogin(inputs, props.history))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={inputs.username}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={inputs.password}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} variant="outlined" color="primary" style={{width:"175px"}}>
                    {state.isLoading ? <Loader type="TailSpin" color="#00BFFF" height={10} width={10} /> 
                    : 'Submit'}
                </Button>
            </form>
        </>
    )
}

export default LoginForm
