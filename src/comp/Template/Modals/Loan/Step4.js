import { useState } from 'react';
import InputFileWithLabel from '../../../Common/InputFileWithLabel';

function Step4({ type, details, updateImg, onStep4FileUpload }) {
  const [options] = useState([
    {
      head: "Company KYC",
      list: [
        "MOA", "AOA", "Registration certificate",
        "PAN card", "Address proof", "GST certificate"
      ],
      key: "Company_KYC"
    },
    {
      head: "Statutory license",
      list: [
        "Seeds", "Pesticide", "Fertilizer", "FSSAI", "APEDA",
        "MPEDA", "EXIM", "AGMARK", "APMC", "Organic certificate"
      ],
      key: "Statutory_license"
    },
    {
      head: "CEO & management KYC",
      list: ["PAN card", "Aadhar card"],
      key: "CEO_and_management_KYC"
    },
    {
      head: "Financials",
      list: [
        "Audited financials", "Provisional financials",
        "Projections and business plan",
        {
          lable: "Bank Details(Passbook/Cheque snapshot)",
          key: "Bank_Details"
        }
      ],
      key: "Financials"
    },
    {
      head: "Credit statement",
      list: [
        "Bank statement", "GST returns", "IT returns", "Debtors ageing",
        "Creditor ageing", "Sales report", "Purchase report", "Top customers",
        "Top suppliers", "Borrowing profile", "Sanction letters", "MSME Certificate",
        { lable: "CIBIL/Bureu Check", key: "Bureu_Check" },
        "Perfios Analysis", "CAM Report"
      ],
      key: "Credit_statement"
    }
  ])

  return (
    <>
      {
        options.map(doc => (
          <div key={doc.head} className='mb-8'>
            <h1 className='mb-2 text-lg font-medium'>{doc.head}</h1>
            {
              doc.list.map(li => (
                <InputFileWithLabel
                  key={typeof li === "string" ? li : li.key}
                  type={type}
                  lable={typeof li === "string" ? li : li.lable}
                  value={details?.[doc.key]?.[typeof li === "string" ? li.replace(" ", "_") : li.key] || ""}
                  updateImg={updateImg}
                  onChange={fileName => onStep4FileUpload(doc.key, li, fileName)}
                />
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default Step4