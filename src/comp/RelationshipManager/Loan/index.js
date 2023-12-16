import { useState } from 'react';
import dummyData from '../../../dummy/manager/dpr';

import LoanRepaymentSchedule from '../../Template/Modals/LoanRepaymentSchedule';
import UploadViewDocModal from '../../Template/Modals/UploadViewDoc';
import CreateLoanModal from '../../Template/Modals/Loan';
import CheckListModal from '../../Template/Modals/CheckListModal';
import SharedStatus from '../../Template/Modals/SharedStatus';
import Interest from '../../Template/Modals/Interest';
import Tabs from '../../UIComp/Tabs';

import InProccess from './InProccess';
import Rejected from './Rejected';
import Granted from './Granted';

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
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Loan Information</h1>
        <button onClick={() => updateOpen('loan', 'Create')} className='bg-[#a3dc5d] hover:bg-[#bdf579]'>Create loan</button>
      </div>

      <Tabs
        tabsList={lists}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y overflow-x-auto mx-4 my-2 bg-white'
        panelChildCls="h-full"
      >
        <Granted
          data={dummyData.filter(d => d.appOrRe === 'Accepted')}
          updateOpen={updateOpen}
        />
        <Rejected
          data={dummyData.filter(d => d.appOrRe === 'Rejected')}
          updateOpen={updateOpen}
        />
        <InProccess
          data={dummyData.filter(d => d.appOrRe === 'Pending')}
          updateOpen={updateOpen}
        />
      </Tabs>

      {
        open === "loan" &&
        <CreateLoanModal
          isOpen
          type={type}
          role="relationship_manager"
          closeModal={closeModal}
        />
      }

      {
        open === "status" &&
        <SharedStatus
          isOpen
          rolesAllowed={["credit_manager", "credit_committee", "credit_admin_department", "central_co_lending_unit"]}
          closeModal={closeModal}
        />
      }

      {
        open === "repayment" &&
        <LoanRepaymentSchedule
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }

      {
        open === "updateCLModal" &&
        <CheckListModal
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

      {
        open === "Disbursement" &&
        <UploadViewDocModal
          isOpen
          type={type}
          title='Disbursement request Letter'
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Loan