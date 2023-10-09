import { Navbar } from "../components/navbar"
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'

const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
})

export const LoginPage = () => {
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
            <Navbar/>
            <div className="flex justify-center mt-20">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, action) => {
                        handleSubmit(values)
                        action.resetForm()
                        console.log(values);
                    }}
                >
                    {(props) => {
                        // console.log(props);
                        return (
                            <Form className="p-8 border-solid border-2 rounded-lg shadow-md w-1/4">
                                <div className="text-2xl font-semibold flex justify-center mb-6">Sign up</div>
                                {/* Name */}
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1">Name :</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="border-solid border-2 border-zinc-200 rounded-md p-1 pl-3"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>
                                {/* Email */}
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1">Email :</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="border-solid border-2 border-zinc-200 rounded-md p-1 pl-3"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>
                                {/* Password */}
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1">Password :</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="border-solid border-2 border-zinc-200 rounded-md p-1 pl-3"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>
                                <div className="flex justify-center mt-7">
                                    <button 
                                        type="submit" 
                                        className="bg-sky-700 hover:bg-sky-500 text-white py-1.5 w-full rounded"
                                    >
                                    Register
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
                
            </div>
        </div>
        
    )
}