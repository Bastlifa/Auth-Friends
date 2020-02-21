import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import { postFriend } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Form} from './StyledComps'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const NewFriendForm = () =>
{
    const [inputs, setInputs] = useState({age: '', email: '', name: ''})
    const dispatch = useDispatch()
    const classes = useStyles();
    const handleChange = event =>
    {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const checkSubmit = event => event.keyCode === 13 ? handleSubmit(event) : null

    const handleSubmit = event =>
    {
        event.preventDefault()
        dispatch(postFriend(inputs))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <span>
                {"New Friend Form"}
                <br/>
            </span> 
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                name="name"
                onKeyDown={checkSubmit}
            />
            <TextField
                id="standard-number"
                label=" "
                placeholder="Age"
                value={inputs.age}
                onChange={handleChange}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                name="age"
                onKeyDown={checkSubmit}
            />
            <TextField
                id="standard-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                value={inputs.email}
                onChange={handleChange}
                onKeyDown={checkSubmit}
            />
            <Button onClick={handleSubmit} variant="outlined" color="primary" style={{width:"175px", margin:"20px auto"}}>
                Submit Friend
            </Button>
        </Form>
    )
}

export default NewFriendForm