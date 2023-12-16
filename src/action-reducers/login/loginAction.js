import sendApiReq, { cookies } from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import loginConstants from './loginConstants';

const setTokenToApp = token => {
  cookies.set("Sumunnati", token, {
    path: '/',
    domain: window.location.hostname,
    expires: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
  })
}

export function parseJwt(token) {
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}

export function login(data, onSuccess, onError) {
  return async dispatch => {
    try {
      const { firstName, lastName, token, role, userId } = await sendApiReq({
        isAuthendicated: false,
        method: 'post',
        url: endPoints.login,
        data,
      })

      setTokenToApp(token)

      dispatch({
        type: loginConstants.LOGIN_SUCCESSFUL,
        payload: {
          firstName, lastName, token,
          role, userId, email: data.email
        }
      })

      onSuccess(role)

    } catch (error) {
      console.log(error)
      onError()
    }
  }
}

export function onLogoutSuccess() {
  return async dispatch => {
    cookies.remove('Sumunnati', { path: '', domain: window.location.hostname })
    dispatch({
      type: loginConstants.LOGOUT_SUCCESSFUL
    })

    window.location.replace('/')
  }
}

export async function createOrg(data, onSuccess) {
  try {
    const res = await sendApiReq({
      isAuthendicated: false,
      method: 'post',
      url: endPoints.createOrg,
      data,
    })

    console.log(res)
    onSuccess()

  } catch (error) {
    console.log(error)
  }
}
