import loanConstants from './loanConstants';

const initialState = {
  fpoListLoaded: false,
  fpoList: [],
  loanList: {
    in_process: [],
    rejected: [],
    granted: []
  }
}

const loanReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loanConstants.GET_FPO:
      return {
        ...state,
        fpoListLoaded: true,
        fpoList: [
          ...payload
        ]
      }

    case loanConstants.GET_LOAN_BY_STATUS:
      return {
        ...state,
        loanList: {
          ...state.loanList,
          [payload.status]: [...payload.data]
        }
      }

    default: return state
  }
}

export default loanReducer;