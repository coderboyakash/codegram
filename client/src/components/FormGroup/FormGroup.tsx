import { FC, useRef, useState } from 'react'
import classNames from 'classnames'
import { Form } from 'react-bootstrap'
import styles from './FormGroup.module.css'

type FormGroupProps = {
    name: string
    type: string
    labelText: string
}

const FormGroup: FC<FormGroupProps> = ({ name, type, labelText }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [focus, setFocus] = useState(false)
    const toggleFocus = () => {
        if (inputRef.current && inputRef.current.value === '') {
            setFocus(!focus)
        }
    }

    return (
        <Form.Group
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            className={styles.form_group}
        >
            <label
                className={!focus ? styles.label : styles.label_focus}
                htmlFor="email"
            >
                {labelText ? labelText : name.toUpperCase()}
            </label>
            <input
                ref={inputRef}
                type={type ? type : 'text'}
                id={name}
                className={classNames(
                    'form-control',
                    !focus ? styles.input : styles.input_focus
                )}
            />
        </Form.Group>
    )
}

export default FormGroup
