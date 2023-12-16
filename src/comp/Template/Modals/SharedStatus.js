import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    by: "credit_manager",
    role: 'Credit Manager',
    status: 'Approved',
    comment: 'Some comment added by Credit Manager.'
  },
  {
    by: "credit_committee",
    role: 'Credit Committee',
    status: 'Approved',
    comment: 'Some comment added by Credit Committee.'
  },
  {
    by: "credit_admin_department",
    role: 'Credit Admin',
    status: 'Rejected',
    comment: 'Some comment added by Credit Admin.'
  },
  {
    by: "central_co_lending_unit",
    role: 'Central Co Lending Unit',
    status: 'Review',
    comment: 'Some comment added by Central Co Lending Unit.'
  },
]

function SharedStatus({ rolesAllowed = [], isOpen, closeModal }) {
  const [filtered] = useState(data.filter(d => rolesAllowed.includes(d.by)))

  return (
    <Modal
      isOpen={isOpen}
    >
      <ModalHeader
        title="Status"
        closeModal={closeModal}
      />

      <table className='w-full'>
        <tr className='border'>
          <td className="px-4 py-2 font-medium">Role</td>
          <td className="px-4 py-2 font-medium">Status</td>
          <td className="px-4 py-2 font-medium">Comment</td>
        </tr>

        {
          filtered.map(d => (
            <tr key={d.role} className='border'>
              <td className="px-4 py-2">{d.role}</td>
              <td className="px-4 py-2">
                <button className={` text-sm ${d.status === "Approved" ? "bg-green-200 text-green-800" : ""} ${d.status === "Rejected" ? "bg-red-200 text-red-900" : ""} ${d.status === "Review" ? "bg-yellow-200 text-yellow-900" : ""}`}>
                  {d.status}
                </button>
              </td>
              <td className="px-4 py-2">{d.status !== "Review" ? d.comment : '-'}</td>
            </tr>
          ))
        }
      </table>
    </Modal>
  )
}

export default SharedStatus