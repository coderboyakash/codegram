import { FC } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
import { AiFillFacebook } from 'react-icons/ai'
import { Button, Col, Row } from 'react-bootstrap'
import { SignupIntialState } from './SignupFormReducer'
import FormGroup from '../../components/FormGroup/FormGroup'

const Signup: FC = () => {
    const handleSignSubmit = async (e: any) => {
        e.preventDefault()
    }

    const validateEmail = (email: string) => {
        const emailRegex = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        return emailRegex.test(email)
    }

    const validateMobile = (mobile: string) => {
        const mobileRegex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        return mobileRegex.test(mobile)
    }

    const validationSchema = Yup.object({
        emailOrMobile: Yup.string()
            .test(
                'emailOrMobile',
                'Email or Mobile is invalid!',
                function (value: any) {
                    const isValidEmail = validateEmail(value)
                    const isValidPhone = validateMobile(value)
                    console.log(isValidEmail || isValidPhone);
                    
                    if (!isValidEmail && !isValidPhone) {
                        return false
                    }
                    return true
                }
            )
            .required('Email Or Mobile field is required'),
        name: Yup.string().required('Name field is required'),
        username: Yup.string().required('Username field is required'),
        password: Yup.string().required('Password field is required'),
    })

    return (
        <Row>
            <Col className={styles.signup_wrapper}>
                <div className={styles.signup_form_wrapper}>
                    <div className={styles.signup_form}>
                        <h2>CodeGram!!</h2>
                        <p className={styles.qoute}>
                            Sign up to see photos and videos from your friends.
                        </p>
                        <Button className={styles.login_with_facebook}>
                            <AiFillFacebook size={20} />
                            &nbsp;Login with facebook
                        </Button>
                        <div className={styles.divider}>
                            <span>OR</span>
                        </div>
                        <Formik
                            initialValues={SignupIntialState}
                            validationSchema={validationSchema}
                            onSubmit={(values) => console.log(values)}
                        >
                            {(formik) => (
                                <Form onSubmit={formik.handleSubmit}>
                                    <FormGroup
                                        type="text"
                                        name="emailOrMobile"
                                        label="Email or Mobile number"
                                    />
                                    <FormGroup
                                        type="name"
                                        name="name"
                                        label="Name"
                                    />
                                    <FormGroup
                                        type="username"
                                        name="username"
                                        label="Username"
                                    />
                                    <FormGroup
                                        type="password"
                                        name="password"
                                        label="Password"
                                    />
                                    <Button className={styles.submit_btn} type="submit">Sign up</Button>
                                    <p className={styles.t_c}>
                                        People who use our service may have uploaded
                                        your contact information to Instagram.
                                        <a href="/">&nbsp;Learn more</a>
                                    </p>
                                    <p className={styles.t_c}>
                                        By signing up, you agree to our
                                        <a href="">
                                            &nbsp;Terms, Privacy Policy and Cookies
                                            Policy.
                                        </a>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                        {/* <form onSubmit={handleSubmit(handleSignSubmit)}>
                            <FormGroup
                                labelText="Phone Number, username or email"
                                type="text"
                                name="email"
                                value={state.email}
                                action={userNameInputHandler}
                            />
                            <FormGroup
                                labelText="Full Name"
                                type="text"
                                name="name"
                                value={state.name}
                                action={inputChangeHandler}
                            />
                            <FormGroup
                                labelText="Username"
                                type="text"
                                name="username"
                                value={state.username}
                                action={inputChangeHandler}
                            />
                            <FormGroup
                                labelText="Password"
                                type="password"
                                name="password"
                                value={state.password}
                                action={inputChangeHandler}
                            />
                            <Form.Group className={styles.submit_btn}>
                                <Button type="submit">Sign up</Button>
                            </Form.Group>
                            <p className={styles.t_c}>
                                People who use our service may have uploaded
                                your contact information to Instagram.
                                <a href="/">&nbsp;Learn more</a>
                            </p>
                            <p className={styles.t_c}>
                                By signing up, you agree to our
                                <a href="">
                                    &nbsp;Terms, Privacy Policy and Cookies
                                    Policy.
                                </a>
                            </p>
                        </form> */}
                    </div>
                </div>
                <div className={styles.login_section}>
                    Have an account?
                    <strong>
                        &nbsp;
                        <Link to={'/login'}>Login</Link>
                    </strong>
                </div>
            </Col>
        </Row>
    )
}

export default Signup
