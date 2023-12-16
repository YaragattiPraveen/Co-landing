import { useEffect, useMemo, useState } from 'react';
import data from '../../dummy/manager/dpr';

import DisbursementLetter from './Modals/DisbursementLetter';
import CreateLoanModal from './Modals/CreateLoanModal';
import { DropDownWrapper } from '../UIComp/DropDown';
import Interest from '../Template/Modals/Interest';

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

function Loan() {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])
  const [open, setOpen] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM])

  const updateOpen = (val, condition) => {
    setOpen(val)
    if (condition) setType(condition)
  }

  const closeModal = () => {
    setOpen('')
    setType('')
  }

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Loan Information</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
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
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed loan amount</td>
              <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
              <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement request letter</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan application</td>
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
                          onClick={() => updateOpen('DisbursementLetter', 'View')}
                        >
                          View
                        </button>
                        :
                        <button
                          className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                          onClick={() => updateOpen('DisbursementLetter', 'Create')}
                        >
                          Pending
                        </button>
                    }
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('View')}
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
        open === 'View' &&
        <CreateLoanModal
          isOpen
          type={open}
          data={open !== "Create" ? emptyDetails : false}
          closeModal={closeModal}
        />
      }

      {
        open === 'DisbursementLetter' &&
        <DisbursementLetter
          isOpen
          type={type}
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
    </section>
  )
}

export default Loan