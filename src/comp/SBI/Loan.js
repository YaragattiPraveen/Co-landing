import { useState } from 'react';

import dummyData from '../../dummy/manager/dpr';

import UploadExecutedDocs from '../Template/Modals/UploadExecutedDocs';
import UploadViewDocModal from '../Template/Modals/UploadViewDoc';
import DisbursementModal from './Modals/DisbursementModal';
import InProgressStatus from './Modals/InProgressStatus';
import TotalAmountModal from '../Template/Modals/TotalAmount';
import CreateLoanModal from './Modals/CreateLoanModal';
import LimitAppraisal from './Modals/LimitAppraisal';
import Interest from '../Template/Modals/Interest';
import DueDiligence from './Modals/DueDiligence';
import BureauCheck from './Modals/BureauCheck';
import Tabs from '../UIComp/Tabs';

const emptyDetails = {
  Name: 'ABC FPO',
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

function SanctionedTable({ data, updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Date</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed Loan amount</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Deed of Assignment</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Executed documents</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Due diligence</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan limit appraisal</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen("DeedofAssignment", "View")}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('DeedofAssignment', "Create")}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      Disbursed
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', 'Create')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='w-20 py-0.5 bg-[#bdf579] text-xs'
                  onClick={() => updateOpen('executedDoc', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className='w-20 py-0.5 bg-[#bdf579] text-xs'
                  onClick={() => updateOpen('DueDiligence', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className='w-20 py-0.5 bg-[#bdf579] text-xs'
                  onClick={() => updateOpen('LimitAppraisal', 'View')}
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

function InProgressTable({ data, updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Date</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed Loan amount</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>SBI's share</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Samunnati's share</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Due diligence</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan limit appraisal</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Executed documents</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
              <td className='px-2 py-1'>9%</td>
              <td className='px-2 py-1'>14%</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen('DueDiligence', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('DueDiligence', 'Edit')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen('LimitAppraisal', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('LimitAppraisal', 'Edit')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='w-20 py-0.5 bg-[#bdf579] text-xs'
                  onClick={() => updateOpen('executedDoc', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen('InProgressStatus', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('InProgressStatus', 'Edit')}
                    >
                      Pending
                    </button>
                }
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

function RejectedTable({ data, updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium'>Date</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Proposed Loan amount</td>
          <td className='w-80 px-2 py-4 text-gray-500 font-medium'>Reason for rejection (Comment of credit committee)</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map(d => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
              <td className='px-2 py-1'>
                Document is not correct
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

const tabList = ['In-progress', 'Sanctioned', 'Rejected']

function Loan() {
  const [open, setOpen] = useState("")
  const [type, setType] = useState('')

  const updateOpen = (val, condition) => {
    setOpen(val)
    if (condition) setType(condition)
  }

  const closeModal = () => {
    setOpen('')
    setType('')
  }

  return (
    <section className='dfc gap-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 px-8 pt-4'>
        <h1 className='text-2xl'>Loan Information</h1>
      </div>

      <Tabs
        tabsList={tabList}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y overflow-x-auto mx-4 mb-2 bg-white'
      >
        <InProgressTable
          data={dummyData}
          updateOpen={updateOpen}
        />
        <SanctionedTable
          data={dummyData}
          updateOpen={updateOpen}
        />
        <RejectedTable
          data={dummyData}
          updateOpen={updateOpen}
        />
      </Tabs>

      {
        open === "loan" &&
        <CreateLoanModal
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
        open === 'Disbursement' &&
        <DisbursementModal
          isOpen
          type={type}
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

      {
        open === "InProgressStatus" &&
        <InProgressStatus
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }

      {
        open === "LimitAppraisal" &&
        <LimitAppraisal
          isOpen
          type={type}
          closeModal={closeModal}
          openBueroCheck={() => updateOpen("BureauCheck")}
        />
      }

      {
        open === "DueDiligence" &&
        <DueDiligence
          isOpen
          type={type}
          closeModal={closeModal}
          openBueroCheck={() => updateOpen("BureauCheck")}
        />
      }

      {
        open === "BureauCheck" &&
        <BureauCheck
          isOpen
          type="View"
          closeModal={() => updateOpen("DueDiligence")}
        />
      }

      {
        open === "executedDoc" &&
        <UploadExecutedDocs
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }

      {
        open === "DeedofAssignment" &&
        <UploadViewDocModal
          isOpen
          type={type}
          title='Deed of Assignment'
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Loan