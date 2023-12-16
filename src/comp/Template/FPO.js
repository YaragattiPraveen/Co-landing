import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFpoList } from '../../action-reducers/loan/loanAction';

// import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';
// import { DropDownWrapper } from '../UIComp/DropDown';
import Loader from '../Common/Loader';

// const l1 = ["Activate"]
// const l2 = ["De-activate"]

function FPO() {
  const fpoList = useSelector(({ loan }) => loan?.fpoList || [])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFpoList(() => setLoading(false)))
  }, [dispatch])

  if (loading) return <Loader />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>FPO Information</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>FPO Id</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>CEO Name</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Phone</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Email</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Location</td>
              {/* <td className='px-2 py-4 text-gray-500 font-medium'></td> */}
            </tr>
          </thead>

          <tbody>
            {
              fpoList.map(fpo => (
                <tr key={fpo._id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{fpo.FPOid}</td>
                  <td className='px-2 py-1 first-letter:uppercase'>{fpo.FPOname}</td>
                  <td className='px-2 py-1 first-letter:uppercase'>{fpo.ceoName}</td>
                  <td className='px-2 py-1'>{fpo.phoneNumber}</td>
                  <td className='px-2 py-1'>{fpo.email}</td>
                  <td className='px-2 py-1'>{fpo.location}</td>
                  {/* <td className='px-2 py-1'>
                    <DropDownWrapper
                      list={fpo.status === "active" ? l2 : l1}
                      needArrow
                    >
                      <Dot className="w-4" />
                    </DropDownWrapper>
                  </td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default FPO