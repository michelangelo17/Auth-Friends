import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading, postSignIn } from '../../../redux/slices'

const SignIn = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state)
  return (
    <>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(setIsLoading(true))
          dispatch(postSignIn(values))
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(`can't be empty`),
          password: Yup.string().required(`can't be empty`),
        })}
      >
        <Form>
          <ErrorMessage name='username' component='p' />
          <Field type='username' name='username' placeholder='enter username' />
          <ErrorMessage name='password' component='p' />
          <Field type='password' name='password' placeholder='enter password' />
          <button type='submit' disabled={isLoading}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default SignIn
