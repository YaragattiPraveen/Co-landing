import Modal, { ModalHeader } from '../../UIComp/Modal';
import gst from '../../../assets/img/gst.jpg';

function ViewDoc({ isOpen, title, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[500px] relative'
    >
      <ModalHeader
        title={title}
        closeModal={closeModal}
      />

      <img src={gst} alt="gst" />
    </Modal>
  )
}

export default ViewDoc