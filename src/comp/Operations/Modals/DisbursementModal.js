import { useState } from 'react';
import InputWithLabel from '../../Common/InputWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';

let data = {
  'Loan_amount': '46000',
  'FPO': 'ABC FPO',
  'Account_number': '343434344334343',
  'Disburse': '4000',
  'Done': true,
}

function DisbursementModal({ isOpen, type, closeModal }) {
  const [details, setDetails] = useState(
    type === 'Create' ? {
      'Loan_amount': '',
      'FPO': '',
      'Account_number': '',
      'Disburse': '',
      'Done': false,
    } : { ...data }
  )

  const onChange = e => {
    setDetails(pr => ({
      ...pr,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[500px]'
    >
      <ModalHeader
        title="Disbursement"
        closeModal={closeModal}
      />

      <InputWithLabel
        type='number'
        name='Loan_amount'
        lable='Loan amount'
        value={details.Loan_amount}
        onChange={onChange}
        disabled={type === "View"}
        isRupee
      />

      <InputWithLabel
        name='FPO'
        value={details.FPO}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='number'
        name='Account_number'
        lable='Account number'
        value={details.Account_number}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='number'
        name='Disburse'
        lable='Disburse the amount'
        value={details.Disburse}
        onChange={onChange}
        disabled={type === "View"}
        isRupee
      />

      {
        type === 'Create' &&
        <button
          className='ml-auto bg-[#a3dc5d] hover:scale-105'
        >
          Submit
        </button>
      }
    </Modal>
  )
}

export default DisbursementModal