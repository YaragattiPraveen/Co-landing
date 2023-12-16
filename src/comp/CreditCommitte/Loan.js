import { useEffect, useMemo, useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import { DropDownWrapper } from '../UIComp/DropDown';
import LoanRepaymentSchedule from '../Template/Modals/LoanRepaymentSchedule';
import StatusUpdateModal from '../Template/Modals/StatusUpdate';
import CreateLoanModal from './Modals/CreateLoanModal';
import SharedStatus from '../Template/Modals/SharedStatus';
import BureauCheck from '../Template/Modals/BureauCheck';
import Interest from '../Template/Modals/Interest';
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

function GrantedTable({ data = [], updateOpen }) {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Loan date</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Bureau Check</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Repayment structure</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Bureau check', 'View')}
                    >
                      View
                    </button>
                    :
                    <button className='w-20 py-0.5 bg-red-200 text-xs cursor-default'>
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('Repayment', 'View')}
                >
                  View
                </button>
              </td>
              <td className='pl-2 pr-4 py-1'>
                <button
                  className={`py-0.5 px-0 w-[82px] text-xs ${i % 3 === 0 ? ' bg-yellow-200 text-yellow-900' : 'bg-green-300 text-green-800'}`}
                >
                  {i % 3 === 0 ? 'In progress' : 'Repaid'}
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

function RejectedTable({ data = [], updateOpen }) {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-80 px-2 py-4 xl:pr-12 text-gray-500 font-medium'>Reason for rejection (Comment of credit committee)</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map(d => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1 xl:pr-12'>
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

function ProcessTable({ data = [], updateOpen }) {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium'>Interest rate</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Bureau Check</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Action</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Status</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Bureau check', 'View')}
                    >
                      View
                    </button>
                    :
                    <button className='w-20 py-0.5 bg-red-200  text-xs cursor-default'>
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 !== 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Status', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Status')}
                    >
                      Update
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('OtherStatus')}
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

const lists = ['Granted Loans', 'Rejected Loans', 'Loans in process']

function Loan() {
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

  return (
    <section className='dfc gap-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 px-8 pt-4'>
        <h1 className='text-2xl'>Loan Information</h1>
      </div>

      <Tabs
        tabsList={lists}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y mx-4 my-2 bg-white'
      >
        <GrantedTable
          data={dummyData.filter(d => d.appOrRe === 'Accepted')}
          updateOpen={updateOpen}
        />
        <RejectedTable
          data={dummyData.filter(d => d.appOrRe === 'Rejected')}
          updateOpen={updateOpen}
        />
        <ProcessTable
          data={dummyData.filter(d => d.appOrRe === 'Pending')}
          updateOpen={updateOpen}
        />
      </Tabs>

      {
        open === 'loan' &&
        <CreateLoanModal
          type={type}
          data={type !== "Create" ? emptyDetails : false}
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'Status' &&
        <StatusUpdateModal
          isOpen
          type={type}
          role='credit_committee'
          closeModal={closeModal}
        />
      }

      {
        open === 'Repayment' &&
        <LoanRepaymentSchedule
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }

      {
        open === 'OtherStatus' &&
        <SharedStatus
          isOpen
          rolesAllowed={["credit_admin_department", "central_co_lending_unit"]}
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
        open === 'Bureau check' &&
        <BureauCheck
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Loan