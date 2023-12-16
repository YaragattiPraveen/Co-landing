import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    key: "1",
    name: "Loan ID",
    desc: "2765-gk-12",
  },
  {
    key: "2",
    name: "FPO Name",
    desc: "ABC FPO",
  },
  {
    key: "3",
    name: "Loan Amount",
    desc: "12,000",
  },
  {
    key: "4",
    name: "Tenure",
    splited: true,
    desc1: "3",
    desc2: "Months",
  },
  {
    key: "5",
    name: "Principle repayment",
    desc: "Monthly",
  },
  {
    key: "6",
    name: "Interest repayment",
    desc: "Monthly",
  },
  {
    key: "7",
    name: "Total Interest Rate",
    desc: "12",
  },
  {
    key: "8",
    name: "Samunnati's Interest Rate",
    desc: "6",
  },
  {
    key: "9",
    name: "SBI's Interest Rate",
    desc: "6",
  },
  {
    key: "10",
    name: "Start date of loan",
    desc: "12.12.2021",
  },
]

function LoanRepaymentSchedule({ isOpen, closeModal, role = "", type = "" }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[400px]'
    >
      <ModalHeader
        title="Loan Repayment Schedule"
        closeModal={closeModal}
      />

      <div className='scroll-y pr-4 -mr-4'>
        {
          data.map(d => (
            <div className='df mb-4' key={d.key}>
              <p className='w-36 shrink-0 leading-[1.2]'>{d.name}</p>
              <p>:</p>
              {
                d.splited ?
                  <>
                    <input
                      disabled
                      type="text"
                      defaultValue={d.desc1}
                    />
                    <input
                      disabled
                      type="text"
                      defaultValue={d.desc2}
                    />
                  </>
                  :
                  <input
                    disabled
                    type="text"
                    defaultValue={d.desc}
                  />
              }
            </div>
          ))
        }
      </div>

      {
        role === "operations" && type === "Create" &&
        <div className='df justify-end'>
          <button className='w-24 bg-[#bdf579] hover:bg-[#a3dc5d]'>
            Approve
          </button>

          <button className='w-24 bg-red-200 hover:bg-red-300'>
            Reject
          </button>
        </div>
      }

      {
        ((role === "operations" && type === "View") || role !== "operations") &&
        <p className='text-[#62a80b]'>
          Approved
        </p>
      }
    </Modal>
  )
}

export default LoanRepaymentSchedule