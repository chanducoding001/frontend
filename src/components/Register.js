import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name:'',
  email:'',
  mobile:'',
  password:'',
  confirmPassword:''
}
const Register = () => {
  const handleSubmit = (values)=>{
    console.log(values);
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const validationSchema = Yup.object({
    name:Yup.string().required('required name'),
    email:Yup.string().email('enter valid email!').required("email is required!"),
    mobile:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('mobile number is required!').min(10, "too short")
    .max(10, "too long"),
    password: Yup
    .string()
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  })
  return (
    <>
    <h4>Register</h4>
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <div>
        <Field name='name' type='text' placeholder = 'Enter name'/>  
        <ErrorMessage name='name'/>
        </div>
        <div>
        <Field name='email' type='email' placeholder = 'Enter email'/>  
        <ErrorMessage name='email'/>
        </div>
        <div>
        <Field name='mobile' type='number' placeholder = 'Enter mobile'/>  
        <ErrorMessage name='mobile'/>
        </div>
        <div>
        <Field name='password' type='password' placeholder = 'Enter password'/>  
        <ErrorMessage name='password'/>
        </div>
        <div>
        <Field name='confirmPassword' type='password' placeholder = 'Enter confirmPassword'/>  
        <ErrorMessage name='confirmPassword'/>
        </div>
        <button type='submit'>Submit</button>
      </Form>  
    </Formik>    
    </>
  )
}

export default Register;