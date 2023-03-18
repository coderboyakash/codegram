import React, { ChangeEvent, FC, FormEvent, useReducer } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import FormGroup from '../../components/FormGroup/FormGroup'
import styles from './Signup.module.css'
import SignupFormReducer, { SignupIntialState } from './SignupFormReducer'

enum emailOrMobile {
    MOBILE = 'mobile',
    EMAIL = 'email',
    NONE = 'none',
}

const Signup: FC = () => {
    const [state, dispatch] = useReducer(SignupFormReducer, SignupIntialState)

    const handleSignSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/auth/signup', state)
        console.log(response.data.result);        
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE',
            name: event.target.name,
            payload: event.target.value,
        })
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

    const userNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const isEmailValid = validateEmail(event.target.value)
        const isMobileValid = validateMobile(event.target.value)
        if (isEmailValid || isMobileValid) {
            dispatch({
                type: 'UPDATE_USERNAME',
                name: event.target.name,
                payload: event.target.value,
                emailOrMobile: isEmailValid
                    ? emailOrMobile.EMAIL
                    : isMobileValid
                    ? emailOrMobile.MOBILE
                    : emailOrMobile.NONE,
            })
        }
    }

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
                        <form onSubmit={handleSignSubmit}>
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
                        </form>
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
