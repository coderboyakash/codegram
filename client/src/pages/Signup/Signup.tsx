import React, { FC } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import FormGroup from '../../components/FormGroup/FormGroup'
import styles from './Signup.module.css'

const Signup: FC = () => {
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
                        <form action="">
                            <FormGroup
                                labelText='Phone Number, username or email'
                                type='text'
                                name='email'
                            />
                            <FormGroup
                                labelText='Full Name'
                                type='text'
                                name='name'
                            />
                            <FormGroup
                                labelText='Username'
                                type='text'
                                name='username'
                            />
                            <FormGroup
                                labelText='Password'
                                type='password'
                                name='password'
                            />
                            <Form.Group className={styles.submit_btn}>
                                <Button>Sign up</Button>
                            </Form.Group>
                            <p className={styles.t_c}>
                                People who use our service may have uploaded
                                your contact information to Instagram.
                                <a href="/">&nbsp;Learn more</a>
                            </p>
                            <p className={styles.t_c}>
                                By signing up, you agree to our
                                <a href="">
                                    &nbsp;Terms, Privacy Policy and Cookies Policy.
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
