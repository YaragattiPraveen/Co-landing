import useLoan from '../../../hooks/useLoan';
import Loader from '../../Common/Loader';

function Granted({ data = [], updateOpen }) {
  const { loading, loanData } = useLoan("granted")

  console.log(loading, loanData)
  if (loading) return <Loader wrapperCls='h-full' />

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Loan date</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Repayment structure</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement request letter</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Updated checklist</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
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
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('repayment', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className={`py-0.5 px-0 w-[82px] text-xs ${i % 3 === 0 ? ' bg-yellow-200 text-yellow-900' : 'bg-green-300 text-green-800'}`}
                >
                  {i % 3 === 0 ? 'In progress' : 'Repaid'}
                </button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='block w-20 mx-auto py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='block w-20 mx-auto py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', "Create")}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('updateCLModal', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('loan', 'View')}
                >
                  View
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Granted