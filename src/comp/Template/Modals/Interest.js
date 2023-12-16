import Modal, { ModalHeader } from '../../UIComp/Modal';

const list = [
  {
    name: "Total loan amount",
    amount: "100"
  },
  {
    name: "Samunnati’s share",
    amount: "20"
  },
  {
    name: "SBI’s share",
    amount: "80"
  },
  {
    name: "Total interest rate",
    amount: "14%"
  },
  {
    name: "Samunnati Interest rate",
    amount: "14%"
  },
  {
    name: "SBI Interest rate",
    amount: "9%"
  },
]

function Interest({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title="Interest"
        closeModal={closeModal}
      />
      <table className='w-full'>
        {
          list.map(l => (
            <tr key={l.name} className='border'>
              <td className="px-4 py-2">{l.name}</td>
              <td className="px-4 py-2">{l.amount}</td>
            </tr>
          ))
        }
      </table>
    </Modal>
  )
}

export default Interest