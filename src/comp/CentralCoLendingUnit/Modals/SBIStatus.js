import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    title: 'Loan Application form',
    status: 'Approved',
    comment: 'Comments added by SBI.'
  },
  {
    title: 'Due Diligence check',
    status: 'Approved',
    comment: 'Comments added by SBI.'
  },
  {
    title: 'Loan Limit Appraisal',
    status: 'Review',
    comment: 'Comments added by SBI.'
  },
  {
    title: 'Loan Sanction',
    status: 'Rejected',
    comment: 'Comments added by SBI.'
  },
]

function SBIStatus({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader
        title='SBI Status'
        closeModal={closeModal}
      />

      <table className='w-full'>
        <tr className='border'>
          <td className="px-4 py-2 font-medium">Title</td>
          <td className="px-4 py-2 font-medium">Status</td>
          <td className="px-4 py-2 font-medium">Comment</td>
        </tr>

        {
          data.map(d => (
            <tr key={d.role} className='border'>
              <td className="px-4 py-2">{d.title}</td>
              <td className="px-4 py-2">
                <button className={`w-24 px-0 text-sm ${d.status === "Approved" ? "bg-green-200 text-green-800" : ""} ${d.status === "Rejected" || d.status === "Review" ? "bg-red-200 text-red-900" : ""} ${d.status === "Pending" ? "bg-yellow-200 text-yellow-900" : ""}`}>
                  {d.status}
                </button>
              </td>
              <td className="px-4 py-2">{d.status !== "Pending" ? d.comment : '-'}</td>
            </tr>
          ))
        }
      </table>
    </Modal>
  )
}

export default SBIStatus