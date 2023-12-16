import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getLoanByStatus } from '../action-reducers/loan/loanAction';

function useLoan(status) {
  // const loanData = useSelector(({ loan }) => loan?.loanList?.[status] || [])
  const [loading] = useState(false)
  // , setLoading
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const onSuccess = () => setLoading(false)
  //   dispatch(getLoanByStatus(status, onSuccess))
  // }, [dispatch, status])

  return {
    loading,
    loanData: {}
  }
}

export default useLoan