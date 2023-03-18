enum emailOrMobile {
    MOBILE = 'mobile',
    EMAIL = 'email',
    NONE = 'none',
}

type SignupState = {
    name: string,
    email: string,
    mobile: string,
    username: string,
    password: string,
    emailOrMobile?: emailOrMobile
}

type Action = {
    type: string,
    name: string,
    payload: string,
    emailOrMobile?: emailOrMobile
}

export const SignupIntialState = {
    name: '',
    email: '',
    mobile: '',
    username: '',
    password: '',
    emailOrMobile: emailOrMobile.NONE

}

const SignupFormReducer = (state: SignupState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return { 
                ...state, 
                emailOrMobile: action.emailOrMobile ,
                [action.emailOrMobile !== emailOrMobile.EMAIL ? 'email' : 'mobile']: '',
                [action.emailOrMobile === emailOrMobile.EMAIL ? 'email' : 'mobile']: action.payload,
            }
        case 'UPDATE':
            return { ...state, [action.name]: action.payload }
        default:
            return state
    }
}

export default SignupFormReducer