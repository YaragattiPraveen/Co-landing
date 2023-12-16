import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createLoan } from '../../../../action-reducers/loan/loanAction';
import getRandom from '../../../../helper/getRandom';

import Modal, { ModalHeader } from '../../../UIComp/Modal';
import ShowDoc from './ShowDoc';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Btns from './Btns';

const emptyDetails = {
  fpoId: "6380747188caea850487941a",
  fpoName: 'XYZ',
  loanAmount: "1000000",
  Arrangement: 'PTC',
  Aggregate_disbursement: 1950,
  Tenure: "Months",
  TenureNumber: "10",
  Validity_of_limit: 2500,
  Purpose: 'Infra',
  Nature_of_facility: 'STL',
  Revolving: 'Revolving',
  Margin: 1000,
  Principal_repayment: 'Monthly',
  Interest_repayment: 'Monthly',
  Security: 'FD',
  Security_remarks: "Some remarks",
  Rate_of_Interest: 13,
  Referral_fee: 10,
  Processing_fee: 10,
  Name_of_the_pool: 'PoolName',
  Average_yield: 70,
  PSL: 'Others',
  Coupon_rate: 10,
  Payment_terms: 'Payment terms',
  Nature_of_underlying_asset: 'Nature of underlying asset',
  Average_tenor: 'Months',
  Number_of_obligors: 10,
  Consideration_amount: 20,
  Cut_off_date: '12.12.22',
  Asignee: 'Rajkumar',
  Originator: 'Kesavan',
  Pool_size: 10,
  Execution_date: '13.12.22',
  Pool_maturity_date: '14.12.22',
  grading_data: "Gl12",
  External_rating_Entity: '4',
  External_rating_Individual: '5',
  Bureau_check: [''],
  ESMS: '',
  Samunnati_score: '4',
  Business_segment: 'Trading',
  Nature_of_security: 'Secured',
  Guarantee: 'Fully',

  // docs
  Principal_repayment_doc: "1669694668247_images.jpg",
  Interest_repayment_doc: "1669694668247_images.jpg",
  term_sheet_doc: "1669694668247_images.jpg",
  Company_KYC: {
    MOA: "1669694668247_images.jpg",
    AOA: "1669694668247_images.jpg",
    Registration_certificate: "1669694668247_images.jpg",
    PAN_card: "1669694668247_images.jpg",
    Address_proof: "1669694668247_images.jpg",
    GST_certificate: "1669694668247_images.jpg",
  },
  Statutory_license: {
    Seeds: "1669694668247_images.jpg",
    Pesticide: "1669694668247_images.jpg",
    Fertilizer: "1669694668247_images.jpg",
    FSSAI: "1669694668247_images.jpg",
    APEDA: "1669694668247_images.jpg",
    MPEDA: "1669694668247_images.jpg",
    EXIM: "1669694668247_images.jpg",
    AGMARK: "1669694668247_images.jpg",
    APMC: "1669694668247_images.jpg",
    Organic_certificate: "1669694668247_images.jpg",
  },
  CEO_and_management_KYC: {
    PAN_card: "1669694668247_images.jpg",
    Aadhar_card: "1669694668247_images.jpg",
  },
  Financials: {
    Audited_financials: "1669694668247_images.jpg",
    Provisional_financials: "1669694668247_images.jpg",
    Projections_and_business_plan: "1669694668247_images.jpg",
    Bank_Details: "1669694668247_images.jpg",
  },
  Credit_statement: {
    Bank_statement: "1669694668247_images.jpg",
    GST_returns: "1669694668247_images.jpg",
    IT_returns: "1669694668247_images.jpg",
    Debtors_ageing: "1669694668247_images.jpg",
    Creditor_ageing: "1669694668247_images.jpg",
    Sales_report: "1669694668247_images.jpg",
    Purchase_report: "1669694668247_images.jpg",
    Top_customers: "1669694668247_images.jpg",
    Top_suppliers: "1669694668247_images.jpg",
    Borrowing_profile: "1669694668247_images.jpg",
    Sanction_letters: "1669694668247_images.jpg",
    MSME_Certificate: "1669694668247_images.jpg",
    Bureu_Check: "1669694668247_images.jpg",
    Perfios_Analysis: "1669694668247_images.jpg",
    CAM_Report: "1669694668247_images.jpg",
  },
  otherDocs: [{
    key: 0,
    label: 'UploadedDoc',
    img: "1669694668247_images.jpg"
  }]
}

function Loan({ role = "", type = '', isOpen, closeModal }) {
  const user = useSelector(({ login }) => login.userDetails)
  const [extraDocs, setExtraDocs] = useState([{ key: 0, label: '', img: "" }])
  const [details, setDetails] = useState({ ...emptyDetails })
  const [loading, setLoading] = useState(false)
  const [showImg, setShowImg] = useState("")
  const [step, setStep] = useState(0)
  const dispatch = useDispatch()

  const disabled = type === "View"

  const updateImg = val => setShowImg(val)

  const onChange = e => {
    setDetails(pr => ({
      ...pr,
      [e.target.name]: e.target.value
    }))
  }

  const onBureauChange = e => {
    setDetails(pr => ({
      ...pr,
      Bureau_check: e
    }))
  }

  const addNewOtherDoc = () => {
    setExtraDocs(p => [
      ...p,
      { key: p.length, label: '', img: "" }
    ])
  }

  const onChangeOtherDocLable = (e, i) => {
    setExtraDocs(prev => prev.map(p => {
      if (p.key === i) {
        return {
          ...p,
          label: e.target.value
        }
      }
      return p
    }))
  }

  const onChangeOtherDocImg = (i, img) => {
    setExtraDocs(prev => prev.map(p => {
      if (p.key === i) {
        return {
          ...p,
          img
        }
      }
      return p
    }))
  }

  const fileChange = (key, val) => {
    setDetails(pr => ({
      ...pr,
      [key]: val
    }))
  }

  const onStep4FileUpload = (parent, key, val) => {
    const currentKey = typeof key === "string" ? key.replace(" ", "_") : key.key
    setDetails(pr => ({
      ...pr,
      [parent]: {
        ...pr[parent],
        [currentKey]: val
      }
    }))
  }

  const onSubmit = () => {
    const {
      Company_KYC, Statutory_license, CEO_and_management_KYC,
      Financials, Credit_statement, otherDocs, ...rest
    } = details

    const payload = {
      loanNo: getRandom(1000, 100000),
      fpoName: details.fpoName,
      fpoId: details.fpoId,
      rmName: `${user?.firstName} ${user?.lastName}`,
      loanAmount: details.loanAmount,
      intrestRate: details.Rate_of_Interest,
      loanDate: new Date(),
      completeLoanDetails: [{
        ...rest,
        createdBy: user.userId,
        otherDocs
      }],
      companyKyc: [{ ...Company_KYC }],
      statutoryLicense: [{ ...Statutory_license }],
      ceoAndManagementKyc: [{ ...CEO_and_management_KYC }],
      financials: [{ ...Financials }],
      creditStatement: [{ ...Credit_statement }]
    }

    console.log(payload)
    setLoading(true)
    dispatch(createLoan(payload, closeModal))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px] relative'
    >
      <div className='dfc max-h-[80vh]'>
        <ModalHeader
          title={`${type} Loan`}
          closeModal={closeModal}
        />

        {
          showImg &&
          <ShowDoc showImg={showImg} updateImg={updateImg} />
        }

        <div className='scroll-y pr-4 lg:pr-6 pl-px -mr-4 lg:-mr-6'>
          {
            step === 0 &&
            <Step0
              details={details}
              disabled={disabled}
              onChange={onChange}
              setDetails={setDetails}
            />
          }

          {
            step === 1 &&
            <Step1
              type={type}
              details={details}
              disabled={disabled}
              onChange={onChange}
              updateImg={updateImg}
              fileChange={fileChange}
            />
          }

          {
            step === 2 &&
            <Step2
              type={type}
              details={details}
              disabled={disabled}
              onChange={onChange}
              updateImg={updateImg}
              fileChange={fileChange}
            />
          }

          {
            step === 3 &&
            <Step3
              role={role}
              details={details}
              disabled={disabled}
              onChange={onChange}
              onBureauChange={onBureauChange}
            />
          }

          {
            step === 4 &&
            <Step4
              type={type}
              details={details}
              updateImg={updateImg}
              onStep4FileUpload={onStep4FileUpload}
            />
          }

          {
            step === 5 &&
            <Step5
              type={type}
              details={details}
              extraDocs={extraDocs}
              updateImg={updateImg}
              addNewOtherDoc={addNewOtherDoc}
              onChangeOtherDocImg={onChangeOtherDocImg}
              onChangeOtherDocLable={onChangeOtherDocLable}
            />
          }
        </div>

        <Btns
          step={step}
          type={type}
          loading={loading}
          setStep={setStep}
          onSubmit={onSubmit}
        />
      </div>
    </Modal>
  )
}

export default Loan