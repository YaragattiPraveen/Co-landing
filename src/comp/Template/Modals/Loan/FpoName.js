import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFpoList } from '../../../../action-reducers/loan/loanAction';
import SelectWithInput from '../../../UIComp/SelectWithInput';

function AddFPOName({ value = '', onClick = () => { } }) {
  return (
    <div className='df flex-wrap py-2 px-4'>
      <p className='text-xs xl:text-[13px] 2xl:text-sm'>Add New FPO:</p>
      <button
        className='bg-[#bdf579] font-medium'
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

function FpoName({ disabled, fpoName, setDetails }) {
  const fposLoaded = useSelector(({ loan }) => loan.fpoListLoaded)
  const fpos = useSelector(({ loan }) => loan?.fpoList?.map(fp => ({
    ...fp,
    key: fp._id,
    displayValue: fp.FPOname
  })))
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (!fposLoaded) {
      dispatch(getFpoList(() => { }))
    }
  }, [fposLoaded, dispatch])

  return (
    <SelectWithInput
      list={fpos}
      lable='FPO Name'
      btnCls='mb-4'
      value={fpoName}
      query={query}
      setQuery={setQuery}
      disabled={disabled}
      onChange={val => setDetails(pr => ({
        ...pr,
        fpoName: val.FPOname,
        fpoId: val._id
      }))}
      NotFoundComp={
        <AddFPOName
          value={query}
          onClick={() => {
            setDetails(pr => ({
              ...pr,
              FPO_Name: query
            }))
            document.body.click()
          }}
        />
      }
    />
  )
}

export default FpoName