import { ChangeEvent, FC, useRef, useState } from 'react'
import classNames from 'classnames'
import { Form } from 'react-bootstrap'
import styles from './FormGroup.module.css'
import { ErrorMessage, useField } from 'formik'

type FormGroupProps = {
    name: string
    type: string
    label: string,
}

const FormGroup: FC<FormGroupProps> = ({ label, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [focus, setFocus] = useState(false)
    const [field, meta] = useField(props)
    
    const toggleFocus = () => {
        if (inputRef.current && inputRef.current.value !== '') {
            setFocus(true)
        }
    }

    const handleBlur = () => {
        if (inputRef.current && inputRef.current.value === '') {
            setFocus(false)
        }
    }

    const handleFocus = () => {
        if (inputRef.current && inputRef.current.value === '') {
            setFocus(true)
        }
    }

    return (
        <>
            <Form.Group
                onKeyUp={toggleFocus}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className={styles.form_group}
            >
                <label
                    className={classNames(!focus ? styles.label : styles.label_focus)}
                    htmlFor={label}
                >
                    {label}
                </label>
                <input
                    {...props}
                    {...field}
                    ref={inputRef}
                    className={classNames(
                        'form-control',
                        !focus ? styles.input : styles.input_focus,
                        meta.error && meta.touched ? 'is-invalid' : ''
                    )}
                    autoComplete="off"
                />
            </Form.Group>
            <ErrorMessage component={'p'} name={field.name} className={styles.error_text} />
        </>
    )
}

export default FormGroup
