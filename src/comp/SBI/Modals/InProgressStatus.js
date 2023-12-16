import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import { ReactComponent as Tick } from '../../../assets/svg/common/tick.svg';

function InProgressStatus({ isOpen, type, closeModal }) {
  const [confirmed, setConfirmed] = useState(false)
  const [comment, setComment] = useState(type === "View" ? "Some comment added" : '')
  const [status, setStatus] = useState(type === "View" ? "Sanctioned" : "")

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title="Status"
        closeModal={closeModal}
      />

      <div className='mb-1'>Comment : </div>
      <textarea
        cols="30"
        className='max-h-40'
        value={comment}
        onChange={e => setComment(e.target.value)}
        disabled={type === "View"}
      ></textarea>

      {
        type !== "View" &&
        <div className='df gap-1 my-4'>
          <input
            type="checkbox"
            id='confirm'
            className='w-fit'
            checked={confirmed}
            onChange={() => setConfirmed(p => !p)}
          />
          <label htmlFor="confirm" className='mt-1'>I hereby confirm</label>
        </div>
      }

      <div className='df gap-4 my-4'>
        {
          type === "View"
            ? <p className={status === "Sanctioned" ? "text-[#86ba46]" : "text-red-500"}>{status}</p>
            : <>
              <button
                className={`dfc w-24 items-center ml-auto py-4 px-8 rounded-lg border cursor-pointer ${status === 'Sanction' ? "border-green-600" : ""}`}
                onClick={() => setStatus('Sanction')}
                disabled={!confirmed}
              >
                <Tick className={`w-12 h-12 ${status === 'Sanction' ? '[--svg-color:rgb(22,163,74)]' : ''}`} />
                <p className={status === 'Sanction' ? 'text-green-600' : ''}>Sanction</p>
              </button>

              <button
                className={`dfc w-24 items-center mr-auto py-4 px-8 rounded-lg border cursor-pointer ${status === 'Review' ? "border-yellow-600" : ""}`}
                onClick={() => setStatus('Review')}
                disabled={!confirmed}
              >
                <Close className={`w-12 h-12 ${status === 'Review' ? '[--svg-color:rgb(202,138,4)]' : ''}`} />
                <p className={status === 'Review' ? 'text-yellow-600' : ''}>Review</p>
              </button>

              <button
                className={`dfc w-24 items-center mr-auto py-4 px-8 rounded-lg border cursor-pointer ${status === 'Reject' ? "border-red-600" : ""}`}
                onClick={() => setStatus('Reject')}
                disabled={!confirmed}
              >
                <Close className={`w-12 h-12 ${status === 'Reject' ? '[--svg-color:rgb(220,38,38)]' : ''}`} />
                <p className={status === 'Reject' ? 'text-red-600' : ''}>Reject</p>
              </button>
            </>
        }
      </div>

      {
        type !== "View" && status && confirmed &&
        <button className='block w-3/4 mt-8 mx-auto bg-[#a3dc5d] disabled:bg-[#b9e287] disabled:cursor-not-allowed'>
          Submit
        </button>
      }
    </Modal>
  )
}

export default InProgressStatus