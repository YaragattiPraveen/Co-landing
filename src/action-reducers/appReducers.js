import loginReducer from './login/loginReducer';
import adminReducer from './admin/adminReducer';
import loanReducer from './loan/loanReducer';

const appReducers = {
  login: loginReducer,
  admin: adminReducer,
  loan: loanReducer,
}

export default appReducers