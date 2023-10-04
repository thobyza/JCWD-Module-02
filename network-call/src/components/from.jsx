import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
})

export const Formulir = () => {
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:2000/users", data)
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, action) => {
                    handleSubmit(values)
                    action.resetForm()
                }}
            >
                {(props) => {
                    console.log(props);
                    return (
                        <Form>
                            <div>
                                <label>Email :</label>
                                <Field 
                                    type="email"
                                    // name harus sesuai yg ada di initialValues
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage
                                    component="div"
                                    // nama samain dengan yg ada di field
                                    name="email"
                                    style={{color: "red"}}
                                />
                            </div>
                            <div>
                                <label>Password :</label>
                                <Field 
                                    type="password"
                                    // name harus sesuai yg ada di initialValues
                                    name="password"
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage
                                    component="div"
                                    // nama samain dengan yg ada di field
                                    name="password"
                                    style={{color: "red"}}
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}