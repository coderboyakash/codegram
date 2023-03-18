import React, { FC } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { AiFillFacebook } from 'react-icons/ai'
import styles from './Signup.module.css'

const Signup: FC = () => {
    return (
        <Row>
            <Col className={styles.signup_wrapper}>
                <div className={styles.signup_form_wrapper}>
                    <div>
                        <h2>CodeGram!!</h2>
                        <p>
                            Sign up to see photos and videos from your friends.
                        </p>
                        <form action="">
                            <Form.Group className={styles.form_group}>
                                <label htmlFor="email">
                                    Phone Number, username or email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                />
                            </Form.Group>
                            <Form.Group className={styles.form_group}>
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                />
                            </Form.Group>
                            <Form.Group className={styles.submit_btn}>
                                <Button>Sign up</Button>
                            </Form.Group>
                            <div className={styles.divider}>
                                <span>OR</span>
                            </div>
                            <div className={styles.login_with_facebook}>
                                <AiFillFacebook />
                                &nbsp;Login with facebook
                            </div>
                            <div className={styles.forgot_password}>
                                <a href="">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                    <div className={styles.sign_up_section}>
                        Don't have an account?
                        <strong>
                            &nbsp;
                            <a href="">Sign up</a>
                        </strong>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Signup
