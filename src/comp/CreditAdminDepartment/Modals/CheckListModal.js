import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

const list = [
  'DPN',
  'DP Note Delivery Cum Waiver letter',
  'Hypothecation Agreement',
  'Term Loan Agreement',
  'Memorandum of Understanding (MOU)/Tripartite Agreement',
  'Personal Guarantee/Corporate Guarantee',
  'Net worth statement as per new format fully filled & signed',
  'Board Resolution for Corporate Borrower & Guarantor(s)',
  'UDC/PDC – CTS 2010 compliant & non SBI Subsidiary cheques from both Borrower & Guarantor(s)',
  'Documentation charges cheque as per Sanction Letter',
  'Acceptance of Sanction letter',
  'General Declaration & Undertaking',
  'Comfort letter',
  'Additional FLDG Documentations (Where it is stipulated in Sanction Letter, the same should be obtained separately)',
  'Mortgage Documents – Valuation Report, Legal Opinion, Mortgage property Documents (mother Deed, Sale Deed, Khata, EC, Latest Tax Paid receipt, Simple Mortgage Deed, EC post Simple Mortgage, etc) – All Originals',
  'KYC Documentation as per Samunnati Standard Practice for both Borrower & Guarantor duly verified with Originals by RM/RO',
  'Borrower Application form fully filled up',
  'NACH Mandate & NACH Form duly filled up and signed',
  'Document of Compliance with Samunnati Genetic Code',
  'Escrow Documents – Declaration cum Indemnity, Letter of Instruction & Confirmation',
]

function Select() {
  const [val, setVal] = useState('Yes')

  return (
    <select
      className='w-16 py-1 pl-2.5 pr-2 text-sm bg-[length:16px]'
      value={val}
      onChange={e => setVal(e.target.value)}
      disabled
    >
      <option value="" disabled></option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
      <option value="NA">NA</option>
    </select>
  )
}

function CheckListModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[70vw] max-h-[80vh]'
    >
      <ModalHeader
        title="List of executed documents"
        closeModal={closeModal}
      />

      <div className="scroll-y">
        <table className='w-full'>
          <tr className='sticky top-0 bg-white border'>
            <td className="px-4 py-2 font-medium">Sl No</td>
            <td className="px-4 py-2 font-medium">Name of the Document</td>
            <td className="px-4 py-2 font-medium"></td>
          </tr>

          {
            list.map((l, i) => (
              <tr key={l} className='border'>
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{l}</td>
                <td className="px-4 py-2">
                  <Select />
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </Modal>
  )
}

export default CheckListModal