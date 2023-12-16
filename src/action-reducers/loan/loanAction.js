import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import loanConstants from './loanConstants';
import dpr from '../../dummy/manager/dpr';

export async function UploadFile(data, onSuccess) {
  try {
    const res = await sendApiReq({
      url: endPoints.doc,
      method: "post",
      headers: { 'content-type': 'multipart/form-data' },
      data
    })

    onSuccess(res.filename)

  } catch (error) {
    console.log(error)
  }
}

export function getFpoList(onSuccess) {
  return async dispatch => {
    try {
      // const { data: { message } } = await sendApiReq({
      //   url: endPoints.fpoList,
      // })

      dispatch({
        type: loanConstants.GET_FPO,
        payload: dpr.map(d => ({
          _id: d.id,
          FPOid: d.loanId,
          FPOname: d.fpo,
          ceoName: d.name,
          phoneNumber: d.phone,
          email: d.email,
          location: d.location,
        }))
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function getLoanByStatus(status, onSuccess) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        url: `${endPoints.loan}?status=${status}`,
      })

      dispatch({
        type: loanConstants.GET_LOAN_BY_STATUS,
        payload: {
          status,
          data: res
        }
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function createLoan(data, onSuccess) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        url: endPoints.loan,
        method: "post",
        data
      })

      console.log(res)
      // dispatch({
      //   type: loanConstants.GET_LOAN_BY_STATUS,
      //   payload: {
      //     data: JSON.parse(res)
      //   }
      // })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}
