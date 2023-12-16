// import InputFileWithLabel from '../../Common/InputFileWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import gst from '../../../assets/img/gst.jpg';

function UploadViewDoc({ isOpen, type, title = "", closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls={`dfc w-[400px] ${type === 'View' ? "h-[500px]" : "h-[250px]"}`}
    >
      <ModalHeader
        title={title}
        closeModal={closeModal}
      />

      {
        type === 'View' &&
        <img src={gst} alt="gst" />
      }

      {
        type === 'Create' &&
        <>
          <label className='mb-0'>{title}</label>
          <input type="file" />
          {/* <InputFileWithLabel
            type={type}
            lable='Disbursement request letter'
          /> */}
          <button
            className='ml-auto mt-auto bg-[#a3dc5d] hover:scale-105'
          >
            Submit
          </button>
        </>
      }
    </Modal>
  )
}

export default UploadViewDoc