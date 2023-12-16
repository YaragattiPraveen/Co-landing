import InputFileWithLabel from '../../Common/InputFileWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import gst from '../../../assets/img/gst.jpg';

function LSAModal({ isOpen, type, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls={`dfc w-[400px] ${type === 'View' ? "h-[500px]" : "h-[250px]"}`}
    >
      <ModalHeader
        title="LSA"
        closeModal={closeModal}
      />

      {
        type === 'View' &&
        <img src={gst} alt="gst" />
      }

      {
        type === 'Create' &&
        <>
          <InputFileWithLabel
            val={type}
            lable='LSA'
          />
          <button
            className='ml-auto bg-[#a3dc5d] hover:scale-105'
          >
            Submit
          </button>
        </>
      }
    </Modal>
  )
}

export default LSAModal