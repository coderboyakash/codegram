import React, { FC } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './Login.module.css'
import { AiFillFacebook } from 'react-icons/ai'

const Login: FC = () => {
	return (
        <Row className={styles.login_wrapper}>
            <Col 
                lg={6} 
                md={6} 
                sm={6}
                className={styles.login_left_section} 
            >
                <img src="/assets/images/screenshot2.png" />
            </Col>
            <Col 
                lg={6} 
                md={6} 
                sm={6}
                className={styles.login_right_section} 
            >
                <div className={styles.login_form}>
                    <h2>CodeGram!!</h2>
                    <form action="">
                        <Form.Group className={styles.form_group}>
                            <label htmlFor="email">Phone Number, username or email</label>
                            <input type="text" id="email" className="form-control" />
                        </Form.Group>
                        <Form.Group className={styles.form_group}>
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </Form.Group>
                        <Form.Group className={styles.submit_btn}>
                            <Button>
                                Log in
                            </Button>
                        </Form.Group>
                        <div className={styles.divider}>
                            <span>OR</span>
                        </div>
                        <div className={styles.login_with_facebook}>
                            <AiFillFacebook />
                            &nbsp;Login with facebook
                        </div>
                        <div className={styles.forgot_password}>
                            <a href="">
                                Forgot Password?
                            </a>
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
            </Col>
        </Row>
    )
};

export default Login;
