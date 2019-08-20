import React, {useState} from "react"
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import axios from 'axios'
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
                <div>
                    {/* {props.touched.username && props.errors.username && <p>{props.errors.username}</p>} */}
                    {/* <Field type="text" name="username" placeholder="Username" /> */}
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={inputs.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {/* {props.touched.password && props.errors.password && <p>{props.errors.password}</p>} */}
                    {/* <Field type="password" name="password" placeholder="Password" /> */}
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>
                <Button onClick={handleSubmit} variant="outlined" color="primary" style={{width:"175px"}}>
                    {state.isLoading ? <Loader type="TailSpin" color="#00BFFF" height={10} width={10} /> 
                    : 'Submit'}
                </Button>
            </form>
        </>
    )
}

export default LoginForm

// const FormikLoginForm = withFormik({
//     mapPropsToValues({ username, password, isLoading })
//     {
//         return {
//             username: username || "",
//             password: password || "",
//         }
//     },

//     //vallidation
//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//             .required("Username is required"),
//         password: Yup.string()
//             .min(6, "Password must be 6 characters or longer")
//             .required("Password is required")
//     }),

//     handleSubmit(values)
//     {
//         isLoading = true
//         // axios.post()
//     }


// })(LoginForm)

// export default FormikLoginForm