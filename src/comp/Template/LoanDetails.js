import { useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import LoanRepaymentStatus from './Modals/LoanRepaymentStatus';
import TotalAmountModal from './Modals/TotalAmount';
import CreateLoan from './Modals/CreateLoan';
import Interest from './Modals/Interest';

const emptyDetails = {
  FPO_Name: 'ABC FPO',
  Arrangement: 'PTC',
  Aggregate_disbursement: 500000,
  Tenure: "Months",
  TenureNumber: 3,
  Validity_of_limit: 10,
  Purpose: 'Infra',
  Nature_of_facility: 'LTL',
  Revolving: 'Non-revolving',
  Margin: 6770,
  Principal_repayment: 'Quartely',
  Interest_repayment: 'Monthly',
  Security: 'Corporate guarantee',
  Security_remarks: "There will be some remoarks added here.",
  Rate_of_Interest: 20,
  Referral_fee: 30,
  Processing_fee: 40,
  Name_of_the_pool: 'ABC',
  Average_yield: 2990,
  PSL: 'Others',
  Coupon_rate: 690,
  Payment_terms: 'Some payment',
  Nature_of_underlying_asset: 'Some Nature',
  Average_tenor: 'Months',
  Number_of_obligors: 98,
  Consideration_amount: 6780,
  Cut_off_date: '2022-07-15',
  Asignee: 'Raj kumar',
  Originator: 'Kesavan',
  Pool_size: 50,
  Execution_date: '2022-07-15',
  Pool_maturity_date: '2022-07-15',
  External_rating_Entity: '3.6',
  External_rating_Individual: '4.8',
  Bureau_check: 'Highmark',
  ESMS: 'Applicable',
  Samunnati_score: '5',
  Business_segment: 'Food processing',
  Nature_of_security: 'Secured',
  Guarantee: 'Partially',
  otherDocs: ["Driving Lisence", "Other Doc", "Legal Cert", "Extra doc"]
}

function LoanDetails({ role = "" }) {
  const [open, setOpen] = useState('')
  const [type, setType] = useState('')

  const updateOpen = (val, condition) => {
    setOpen(val)
    if (condition) setType(condition)
  }

  const closeModal = () => {
    setOpen('')
    setType('')
  }

  const onClkTotalAmt = () => {
    if (role === "sbi") {
      updateOpen("totalAmount")
    }
  }

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Loan Account Details</h1>
      </div>

      <div className='scroll-y overflow-x-auto mx-4 my-2 bg-white'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='w-40 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Date</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
              {
                role !== "sbi" &&
                <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
              }
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
              <td className='w-20 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Outstanding amount</td>
              <td className='w-36 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment date</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment amount</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
              <td className='w-36 px-2 py-4 text-gray-500 font-medium leading-5'>Payment history</td>
              <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
            </tr>
          </thead>

          <tbody>
            {
              dummyData.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-4 pr-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>{d.loanId}</td>
                  {
                    role !== "sbi" &&
                    <td className='px-2 py-1'>{d.fpo}</td>
                  }
                  <td
                    className={`px-2 py-1 ${role === "sbi" ? "cursor-pointer" : ""}`}
                    onClick={onClkTotalAmt}
                  >
                    &#8377; {d.amount}
                  </td>
                  <td className='px-2 py-1'>
                    <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
                  </td>
                  <td className='px-2 py-1'>&#8377; {d.due}</td>
                  <td className='px-2 py-1'>{d.end}</td>
                  <td className='px-2 py-1'>&#8377; {d.amount}</td>
                  <td className='px-2 py-1'>
                    {
                      i % 2 === 0
                        ?
                        <button
                          className='w-24 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                          onClick={() => updateOpen('Disbursement', 'View')}
                        >
                          Repaid
                        </button>
                        :
                        <button
                          className='w-24 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                          onClick={() => updateOpen('Disbursement', "Create")}
                        >
                          In-progress
                        </button>
                    }
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className='block w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('LoanRepaymentStatus')}
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
      </div>

      {
        open === "loan" &&
        <CreateLoan
          isOpen
          type={type}
          data={type !== "Create" ? emptyDetails : false}
          closeModal={closeModal}
        />
      }

      {
        open === "interest" &&
        <Interest
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "LoanRepaymentStatus" &&
        <LoanRepaymentStatus
          isOpen
          role={role}
          closeModal={closeModal}
        />
      }

      {
        open === "totalAmount" &&
        <TotalAmountModal
          isOpen
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default LoanDetails