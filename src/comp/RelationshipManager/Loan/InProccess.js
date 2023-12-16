import useLoan from '../../../hooks/useLoan';
import Loader from '../../Common/Loader';

function InProccess({ data = [], updateOpen }) {
  const { loading, loanData } = useLoan("in_process")

  console.log(loading, loanData)
  if (loading) return <Loader wrapperCls='h-full' />

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan application</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Update checklist</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement request letter</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 === 0
                    ?
                    <button
                      className='w-16 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('loan', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-16 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('loan', 'Edit')}
                    >
                      Edit
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('status')}
                >
                  View
                </button>
              </td>
              <td>
                {
                  i % 2 === 0 ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('updateCLModal', "View")}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('updateCLModal', "Create")}
                    >
                      Update
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', "Create")}
                    >
                      Pending
                    </button>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default InProccess