import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import gst from '../../../assets/img/gst.jpg';

function DisbursementLetter({ isOpen, type, closeModal }) {
  const [status, setStatus] = useState("")

  return (
    <Modal
      isOpen={isOpen}
      contentCls="dfc w-[400px] relative"
    >
      <ModalHeader
        title="Disbursement request Letter"
        closeModal={closeModal}
      />

      <img
        className='h-96'
        src={gst}
        alt="gst"
      />

      {
        type === 'Create' &&
        <>
          <div className="df mt-4">
            <button
              className={`text-sm text-center bg-green-200 text-green-800 rounded-full ${status === "approved" ? "outline outline-green-500" : ""}`}
              onClick={() => setStatus("approved")}
            >
              Approve
            </button>

            <button
              className={`text-sm text-center bg-red-200 text-red-900 rounded-full ${status === "rejected" ? "outline outline-red-500" : ""}`}
              onClick={() => setStatus("rejected")}
            >
              Reject
            </button>

            <button className='ml-auto bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'>
              Submit
            </button>
          </div>
        </>
      }
    </Modal>
  )
}

export default DisbursementLetter