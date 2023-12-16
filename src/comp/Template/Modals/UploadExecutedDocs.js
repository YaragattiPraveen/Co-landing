import { Fragment, useState } from 'react';
// import InputFileWithLabel from '../../Common/InputFileWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import gst from '../../../assets/img/gst.jpg';

const data = [
  "Board resolution for borrower",
  'Board resolution (On the letter head of the guarantor-for corporate guarantee)',
  "Demand promissory note",
  'D.P. note delivery cum waiver letter',
  'Nach mandate letter',
  "General declaration and undertaking",
  'Deed of hypothecation',
  'Form of special power of attorney',
  'Deed of guarantee',
  'Declaration cum indemnity for escrow account',
  'Deed of corporate guarantee',
  'Memorandum of understanding',
  'Welcome letter',
  "Fair practices code (samunnati's copy)",
  "Fair practices code (customer's copy)",
  "Indemnity letter relating to instructions/documents given by fax, email and other forms of electronic communication",
  "Assets & liabilities declaration",
  "Confirmation of compliance with samunnati genetic code",
  'Letter from the cbo',
  'Letter from the borrower',
  'Self-declaration form',
  'Term loan agreement',
  'Schedule – 1',
  'Schedule – 2 (final sanction letter)',
  'Other documents'
]

function UploadExecutedDocs({ isOpen, type, closeModal }) {
  const [showImg, setShowImg] = useState(false)

  const updateImg = () => setShowImg(p => !p)

  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[450px] h-[80vh] relative'
    >
      <ModalHeader
        title={type === "View" ? `Executed documents` : "Upload Executed documents"}
        closeModal={closeModal}
      />
      {
        showImg &&
        <div className='absolute p-4 bg-slate-50 inset-0 z-10 rounded-2xl'>
          <div className='df justify-end'>
            <Close className='w-8 h-8' onClick={updateImg} />
          </div>

          <img src={gst} alt="gst" />
        </div>
      }

      <div className='scroll-y pr-4 lg:pr-6 -mr-4 lg:-mr-6'>
        {/* {
          data.map(doc => (
            <InputFileWithLabel
              key={doc}
              val={type}
              updateImg={updateImg}
              lable={doc}
            />
          ))
        } */}
        {
          data.map(doc => (
            <Fragment key={doc}>
              <label className='mb-0'>{doc}</label>
              {
                type === 'Create' ?
                  <input className='mt-1 mb-4' type="file" />
                  :
                  <button
                    className='mb-4 px-2 py-0.5 bg-[#a3dc5d] text-white text-sm'
                    onClick={updateImg}
                  >
                    View
                  </button>
              }
            </Fragment>
          ))
        }
      </div>

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

export default UploadExecutedDocs