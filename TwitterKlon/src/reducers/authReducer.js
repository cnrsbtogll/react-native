import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN,
  LOGIN_USER_FAILED,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: {},
  loading: true,
  error: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_FAILED:
      return {...state, loading: false, error: 'Authentication Failed'};
    default:
      return state;
  }
};
