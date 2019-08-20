import React, {useState, useEffect} from "react"
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Loader from 'react-loader-spinner'

const LoginForm = (props) =>
{
    const [isLoading, setIsLoading] = useState(false)
    const [inputs, setInputs] = useState({username: '', password: ''})
    // useEffect(_ =>
    //     {
    //         console.log('inf')
    //         setIsLoading(props.isLoading)
    //     }, [props.isLoading])

    const handleChange = event =>
    {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleSubmit = event =>
    {
        event.preventDefault()
        if(isLoading) return
        setIsLoading(true)
        axios.post("http://localhost:5000/api/login", inputs)
            .then(res =>
                {
                    setIsLoading(false)
                    console.log(res)
                })
            .catch(err =>
                {
                    setIsLoading(false)
                    console.log("error from login:",err.results)
                })
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
                <button style={{width:"175px"}}>
                    {isLoading ? <Loader type="TailSpin" color="#00BFFF" height={10} width={10} /> 
                    : 'Submit'}
                </button>
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