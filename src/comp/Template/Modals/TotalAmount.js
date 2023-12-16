import Modal, { ModalHeader } from '../../UIComp/Modal';
import InputWithLabel from '../../Common/InputWithLabel';

function TotalAmount({ isOpen, closeModal }) {
  const details = {
    'Loan_amount': '46000',
    'FPO': 'ABC FPO',
    'AccountNumber': '343434344334343',
    'InterestRate': '14'
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[500px]'
    >
      <ModalHeader
        title=""
        closeModal={closeModal}
      />

      <InputWithLabel
        type='number'
        name='AccountNumber'
        lable='Account number'
        value={details.AccountNumber}
        onChange={() => { }}
        disabled
      />

      <InputWithLabel
        name='FPO'
        value={details.FPO}
        onChange={() => { }}
        disabled
      />

      <InputWithLabel
        type='number'
        name='Loan_amount'
        lable='Loan amount'
        value={details.Loan_amount}
        onChange={() => { }}
        disabled
        isRupee
      />

      <InputWithLabel
        type='number'
        name='InterestRate'
        lable='Interest Rate'
        value={details.InterestRate}
        onChange={() => { }}
        isPercentage
        disabled
      />
    </Modal>
  )
}

export default TotalAmount