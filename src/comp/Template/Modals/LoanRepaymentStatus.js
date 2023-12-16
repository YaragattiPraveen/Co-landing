import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

const data3 = [
  {
    key: "1",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "2",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "3",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "4",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "5",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "6",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "7",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "8",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "9",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "10",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "11",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "12",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
  {
    key: "13",
    dueDate: "12.12.22",
    dueAmount: "2345765",
    receiptDate: "12.12.22",
    recievedAmount: "76543654",
    outstandingAmount: "345678",
  },
]

function LoanRepaymentStatus({ isOpen, closeModal, role = "" }) {
  const [title, setTitle] = useState(role === "relationship_manager" ? "Record payments" : "Payment history")
  const [data, setData] = useState({
    amountReceived: "",
    amount: "",
    date: ""
  })

  const onChange = e => {
    setData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls={`dfc ${title === "Payment history" ? "" : "w-[400px]"}`}
    >
      <ModalHeader
        title={title}
        closeModal={closeModal}
      />

      {
        title === "Record payments" &&
        <>
          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Due Date</p>
            <p>:</p>
            <input
              disabled
              type="text"
              defaultValue="12.12.22"
            />
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Due Amount</p>
            <p>:</p>
            <input
              disabled
              type="text"
              defaultValue="1234567"
            />
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Amount received</p>
            <p>:</p>
            <select
              value={data.amountReceived}
              name="amountReceived"
              onChange={onChange}
            >
              <option value="" disabled></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className='df mb-4 relative'>
            <p className='w-60 leading-[1.2]'>Amount</p>
            <p>:</p>
            <input
              name='amount'
              type="number"
              value={data.amount}
              onChange={onChange}
              className="no-number-arrows pr-5"
            />
            <p className='dc px-2 absolute top-0 right-0 h-full'>&#8377;</p>
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Date</p>
            <p>:</p>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={onChange}
            />
          </div>

          <div className='df'>
            <button
              className='mr-auto bg-[#bdf579] hover:bg-[#a3dc5d]'
            >
              Submit
            </button>

            <button
              className='bg-[#bdf579] hover:bg-[#a3dc5d]'
              onClick={() => setTitle("Payment history")}
            >
              Payment history
            </button>
          </div>
        </>
      }

      {
        title === "Payment history" &&
        <>

          <div className='scroll-y max-h-96'>
            <table className='w-full'>
              <tr className='font-medium'>
                <td className='px-4 py-2'>Due Date</td>
                <td className='px-4 py-2'>Due Amount</td>
                <td className='px-4 py-2'>Date of Receipt</td>
                <td className='px-4 py-2'>Recieved Amount</td>
                <td className='px-4 py-2'>Outstanding Amount</td>
              </tr>

              {
                data3.map(d => (
                  <tr className='' key={d.key}>
                    <td className='px-4 py-2'>{d.dueDate}</td>
                    <td className='px-4 py-2'>{d.dueAmount}</td>
                    <td className='px-4 py-2'>{d.receiptDate}</td>
                    <td className='px-4 py-2'>{d.recievedAmount}</td>
                    <td className='px-4 py-2'>{d.outstandingAmount}</td>
                  </tr>
                ))
              }
            </table>
          </div>

          {
            role === "relationship_manager" &&
            <button
              className='bg-[#bdf579] hover:bg-[#a3dc5d]'
              onClick={() => setTitle("Record payments")}
            >
              Previous
            </button>
          }
        </>
      }
    </Modal>
  )
}

export default LoanRepaymentStatus