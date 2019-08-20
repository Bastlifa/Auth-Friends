import React, {useState} from "react"
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const LoginForm = (props) =>
{
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <Form>
                <div>
                    {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}
                    <Field type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </div>
                <button>Submit</button>
            </Form>
        </>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password })
    {
        return {
            username: username || "",
            password: password || "",
        }
    },

    //vallidation
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required")
    }),

    handleSubmit(values)
    {
        return
    }


})(LoginForm)

export default FormikLoginForm