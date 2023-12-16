import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

function ShareToSBI({ isOpen, closeModal }) {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title='Share with SBI'
        closeModal={closeModal}
      />

      <div className='mt-4 leading-4 text-slate-500'>
        Please make sure you have verified every fields and documents.
      </div>

      <div className='df gap-1 mt-2 mb-4'>
        <input
          type="checkbox"
          id='confirm'
          className='w-fit'
          value={confirmed}
          onChange={() => setConfirmed(p => !p)}
        />
        <label htmlFor="confirm" className='mt-1'>I hereby confirm</label>
      </div>

      <button
        className='block w-3/4 mx-auto bg-[#a3dc5d] disabled:bg-[#b9e287] disabled:cursor-not-allowed'
        onClick={closeModal}
        disabled={!confirmed}
      >
        Share
      </button>
    </Modal>
  )
}

export default ShareToSBI