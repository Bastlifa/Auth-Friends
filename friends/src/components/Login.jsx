import React, {useState} from "react"
import Loader from 'react-loader-spinner'
import { postLogin } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './StyledComps'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';

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

    const checkSubmit = event => event.keyCode === 13 ? handleSubmit(event) : null

    const handleSubmit = event =>
    {
        event.preventDefault()
        dispatch(postLogin(inputs, props.history))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormControl>
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={inputs.username}
                        onChange={handleChange}
                        margin="normal"
                        name="username"
                        required={true}
                        onKeyDown={checkSubmit}
                    />
                </FormControl>
                <TextField
                    id="standard-password"
                    label="Password"
                    className={classes.textField}
                    value={inputs.password}
                    onChange={handleChange}
                    margin="normal"
                    type="password"
                    name="password"
                    onKeyDown={checkSubmit}
                />
                <Button onClick={handleSubmit} variant="outlined" color="primary" style={{width:"175px"}}>
                    {state.isLoading ? <Loader type="TailSpin" color="#00BFFF" height={10} width={10} /> 
                    : 'Submit'}
                </Button>
            </Form>
        </>
    )
}

export default LoginForm
