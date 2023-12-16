import { useState } from 'react';

function ApproveOrRejectBtn() {
  const [status, setStatus] = useState("")

  if (status) return (
    <p className={`text-sm ${status === "approved" ? "text-green-600" : "text-red-600"}`}>
      {status === "approved" ? "Approved" : "Rejected"}
    </p>
  )

  return (
    <>
      <button
        className='text-sm text-center bg-green-200 text-green-800 rounded-full'
        onClick={() => setStatus("approved")}
      >
        Approve
      </button>

      <button
        className='text-sm text-center bg-red-200 text-red-900 rounded-full'
        onClick={() => setStatus("rejected")}
      >
        Reject
      </button>
    </>
  )
}

export default ApproveOrRejectBtn