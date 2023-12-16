import { useState } from 'react';
import Select from 'react-select';
import getRandom from '../../../helper/getRandom';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import gst from '../../../assets/img/gst.jpg';
import InputFileWithLabel from '../../Common/InputFileWithLabel';
import InputWithLabel from '../../Common/InputWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';

const emptyDetails = {
  Name: '',
  Arrangement: '',
  Aggregate_disbursement: 0,
  Tenure: "",
  TenureNumber: "",
  Validity_of_limit: 0,
  Purpose: '',
  Nature_of_facility: '',
  Revolving: '',
  Margin: 0,
  Principal_repayment: '',
  Interest_repayment: '',
  Security: '',
  Security_remarks: "",
  Rate_of_Interest: 0,
  Referral_fee: 0,
  Processing_fee: 0,
  Name_of_the_pool: '',
  Average_yield: 0,
  PSL: '',
  Coupon_rate: 0,
  Payment_terms: '',
  Nature_of_underlying_asset: '',
  Average_tenor: '',
  Number_of_obligors: 0,
  Consideration_amount: 0,
  Cut_off_date: '',
  Asignee: '',
  Originator: '',
  Pool_size: 0,
  Execution_date: '',
  Pool_maturity_date: '',
  External_rating_Entity: '',
  External_rating_Individual: '',
  Bureau_check: [''],
  ESMS: '',
  Samunnati_score: '',
  Business_segment: '',
  Nature_of_security: '',
  Guarantee: '',
  otherDocs: ["Driving Lisence", "Other Doc", "Legal Cert", "Extra doc"]
}

function CreateLoanModal({
  data = false, type = '',
  isOpen, closeModal,
}) {
  const [details, setDetails] = useState(data ? { ...data } : { ...emptyDetails })
  const [step, setStep] = useState(0)
  const [showImg, setShowImg] = useState(false)

  // const [files, setFiles] = useState({})

  const [options] = useState({
    Arrangement: ["Co lending", "Business correspondent", "Direct Origination", "PTC", "Direct Assignment", "Other structured assets"],
    Tenure: ['Days', 'Months', 'Year'],
    Purpose: ["ARF", "Infra", "Input", "Output", "Gold loan", "Cattle loan", "SME", "Trade finance", "WHR", "Others"],
    Nature_of_facility: ['STL', 'MTL', 'LTL'],
    Revolving: ['Revolving', 'Non-revolving'],
    Principal_repayment: ['Monthly', 'Quartely', 'Half-yearly', 'Annually', 'Others'],
    Interest_repayment: ["Upfront", "Monthly", "Quartely", "Half-yearly", "Annually", "EMI", "Others"],
    PSL: ["PSL farm credit", "PSL other agri", "PSL MSME", 'Weaker section', 'Others'],
    Average_tenor: ['Days', 'Months'],
    Security: ["Hypothecation of current asset", "Mortgage-Commercial", "Mortgage-Residence", "Corporate guarantee", "Personnel Guarantee", "UDC-PDC", "Pledge of shares", "Warehouse receipt", "Lien", "FD", "Charge on plant-machinery-Equipment", "Vehicle hypothecation"],
    Business_segment: ['Agri-processing', 'Food processing', 'Crop cultivation', 'Agri-infra', 'Trading', 'Service provider', 'Animal Husbandry'],
    Nature_of_security: ['Secured', 'Unsecured', 'soft comfort', 'Credit enhancement'],
    Bureau_check: ["CIBIL", "Highmark", "EQUIFAX", "Worldcheck", "Experian"],
    ESMS: ['Applicable', "Not applicable"],
    Guarantee: ['Fully', 'Partially', 'NIL Cover'],
    documents: [
      {
        head: "Company KYC",
        list: ["MOA", "AOA", "Registration certificate", "PAN card", "Address proof", "GST certificate"]
      },
      {
        head: "Statutory license",
        list: ["Seeds", "Pesticide", "Fertilizer", "FSSAI", "APEDA", "MPEDA", "EXIM", "AGMARK", "APMC", "Organic certificate"]
      },
      {
        head: "CEO & management KYC",
        list: ["PAN card", "Aadhar card"]
      },
      {
        head: "Financials",
        list: ["Audited financials", "Provisional financials", "Projections and business plan", "Bank Details(Passbook/Cheque snapshot)"]
      },
      {
        head: "Credit statement",
        list: ["Bank statement", "GST returns", "IT returns", "Debtors ageing", "Creditor ageing", "Sales report", "Purchase report", "Top customers", "Top suppliers", "Borrowing profile", "Sanction letters", "MSME Certificate", "CIBIL/Bureu Check", "Perfios Analysis"]
      }
    ]
  })

  const updateImg = () => setShowImg(p => !p)

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

  // const onFileChg = (key, val) => {
  //   setFiles(p => ({
  //     ...p,
  //     [key]: val
  //   }))
  // }

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
          <div className='absolute p-4 bg-slate-50 inset-0 z-10'>
            <div className='df justify-end'>
              <Close className='w-8 h-8' onClick={updateImg} />
            </div>

            <img src={gst} alt="gst" />
          </div>
        }

        <div className='scroll-y pr-4 lg:pr-6 pl-px -mr-4 lg:-mr-6'>
          {
            step === 0 &&
            <>
              <InputWithLabel
                lable='Transaction number/ID'
                value={`2022${getRandom(0, 1000)}07`}
                disabled
              />

              <InputWithLabel
                name='Name'
                value={details.Name}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Arrangement'
                value={details.Arrangement}
                options={options.Arrangement}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                type='number'
                name='Aggregate_disbursement'
                lable='Aggregate disbursement'
                value={details.Aggregate_disbursement}
                onChange={onChange}
                disabled={type === "View"}
              />

              <div className='mb-4'>
                <label htmlFor='tenure'>Tenure</label>
                <div className='df'>
                  <input
                    type="text"
                    name='TenureNumber'
                    value={details.TenureNumber}
                    disabled={type === "View"}
                    onChange={onChange}
                  />

                  <select
                    id='tenure'
                    name='Tenure'
                    value={details.Tenure}
                    onChange={onChange}
                    disabled={type === "View"}
                  >
                    <option value="" disabled></option>
                    {
                      options.Tenure.map(op => (
                        <option key={op} value={op}>{op}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <InputWithLabel
                type='number'
                name='Validity_of_limit'
                lable='Validity of limit'
                value={details.Validity_of_limit}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Purpose'
                options={options.Purpose}
                value={details.Purpose}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Nature_of_facility'
                lable='Nature of facility'
                options={options.Nature_of_facility}
                value={details.Nature_of_facility}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                lable='Revolving/Non-revolving'
                options={options.Revolving}
                value={details.Revolving}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Margin'
                type='number'
                value={details.Margin}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Principal_repayment'
                lable='Principal repayment'
                options={options.Principal_repayment}
                value={details.Principal_repayment}
                onChange={onChange}
                disabled={type === "View"}
              />
            </>
          }

          {
            step === 1 &&
            <>
              <InputFileWithLabel
                val={type}
                updateImg={updateImg}
                lable='Principal repayment'
              />

              <InputWithLabel
                isSelect
                name='Interest_repayment'
                lable='Interest repayment'
                options={options.Interest_repayment}
                value={details.Interest_repayment}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputFileWithLabel
                val={type}
                updateImg={updateImg}
                lable='Interest repayment'
              />

              <InputWithLabel
                isSelect
                name='Security'
                options={options.Security}
                value={details.Security}
                onChange={onChange}
                disabled={type === "View"}
              />

              <div className='mb-4'>
                <label className='mb-1' htmlFor="idSecurityremarks">Security remarks</label>
                <textarea
                  id='idSecurityremarks'
                  name='Security_remarks'
                  value={details.Security_remarks}
                  onChange={onChange}
                  disabled={type === "View"}
                ></textarea>
              </div>

              <InputWithLabel
                isPercentage
                type='number'
                name='Rate_of_Interest'
                lable='Rate of Interest'
                value={details.Rate_of_Interest}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isPercentage
                type='number'
                name='Referral_fee'
                lable='Referral fee'
                value={details.Referral_fee}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isPercentage
                type='number'
                name='Processing_fee'
                lable='Processing fee'
                value={details.Processing_fee}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputFileWithLabel
                val={type}
                updateImg={updateImg}
                lable='Other supporting documents'
              />

              <InputWithLabel
                name='Name_of_the_pool'
                lable='Name of the pool'
                value={details.Name_of_the_pool}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isPercentage
                type='number'
                name='Average_yield'
                lable='Average yield'
                value={details.Average_yield}
                onChange={onChange}
                disabled={type === "View"}
              />
            </>
          }

          {
            step === 2 &&
            <>
              <InputWithLabel
                isSelect
                name='PSL'
                value={details.PSL}
                options={options.PSL}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isPercentage
                type='number'
                name='Coupon_rate'
                lable='Coupon rate'
                value={details.Coupon_rate}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Payment_terms'
                lable='Payment terms'
                value={details.Payment_terms}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Nature_of_underlying_asset'
                lable='Nature of underlying asset'
                value={details.Nature_of_underlying_asset}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Average_tenor'
                lable='Average tenor'
                value={details.Average_tenor}
                options={options.Average_tenor}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputFileWithLabel
                val={type}
                updateImg={updateImg}
                lable='Tentative term-sheet'
              />

              <InputWithLabel
                type='number'
                name='Number_of_obligors'
                lable='Number of obligors'
                value={details.Number_of_obligors}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isRupee
                type='number'
                name='Consideration_amount'
                lable='Consideration amount'
                value={details.Consideration_amount}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                type='date'
                name='Cut_off_date'
                lable='Cut-off date'
                value={details.Cut_off_date}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Asignee'
                value={details.Asignee}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Originator'
                value={details.Originator}
                onChange={onChange}
                disabled={type === "View"}
              />
            </>
          }

          {
            step === 3 &&
            <>
              <InputWithLabel
                isRupee
                type='number'
                name='Pool_size'
                lable='Pool size'
                value={details.Pool_size}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                type='date'
                name='Execution_date'
                lable='Execution date(Tentative)'
                value={details.Execution_date}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                type='date'
                name='Pool_maturity_date'
                lable='Pool maturity date'
                value={details.Pool_maturity_date}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                lable='FPO Grading data'
                value="hjkjhgf"
              />

              <InputWithLabel
                name='External_rating_Entity'
                lable='External rating(Entity)'
                value={details.External_rating_Entity}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='External_rating_Individual'
                lable='External rating(Individual)'
                value={details.External_rating_Individual}
                onChange={onChange}
                disabled={type === "View"}
              />

              <div className='mb-4'>
                <label htmlFor="Bureau_check">Bureau check</label>
                <Select
                  closeMenuOnSelect={false}
                  placeholder={type === "View" ? details.Bureau_check : ''}
                  isDisabled={type === "View"}
                  onChange={onBureauChange}
                  options={options.Bureau_check.map(v => ({ value: v, label: v }))}
                  value={details.Bureau_check}
                  name='Bureau_check'
                  isMulti
                />
              </div>

              <InputWithLabel
                name='ESMS'
                value={details.ESMS}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                name='Samunnati_score'
                lable='Samunnati score'
                value={details.Samunnati_score}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Business_segment'
                lable='Business segment'
                options={options.Business_segment}
                value={details.Business_segment}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Nature_of_security'
                lable='Nature of security'
                options={options.Nature_of_security}
                value={details.Nature_of_security}
                onChange={onChange}
                disabled={type === "View"}
              />

              <InputWithLabel
                isSelect
                name='Guarantee'
                options={options.Guarantee}
                value={details.Guarantee}
                onChange={onChange}
                disabled={type === "View"}
              />
            </>
          }

          {
            step === 4 &&
            <>
              {
                options.documents.map(doc => (
                  <div key={doc.head} className='mb-8'>
                    <h1 className='mb-2 text-lg font-medium'>{doc.head}</h1>
                    {
                      doc.list.map(li => (
                        <InputFileWithLabel
                          val={type}
                          updateImg={updateImg}
                          key={li}
                          lable={li}
                        />
                      ))
                    }
                  </div>
                ))
              }
            </>
          }

          {
            step === 5 &&
            <>
              <h1 className='mb-2 text-lg font-medium'>Other documents</h1>
              {
                details?.otherDocs?.map(d => (
                  <InputFileWithLabel
                    val={type}
                    updateImg={updateImg}
                    key={d}
                    lable={d}
                  />
                ))
              }
            </>
          }
        </div>

        <div className='df'>
          {
            step > 0 &&
            <button
              className='bg-[#a3dc5d] hover:scale-105'
              onClick={() => setStep(p => p - 1)}
            >
              Previous
            </button>
          }

          {
            step < 5 &&
            <button
              className='ml-auto bg-[#a3dc5d] hover:scale-105'
              onClick={() => setStep(p => p + 1)}
            >
              Next
            </button>
          }

          {
            step === 5 && type !== "View" &&
            <button
              className='ml-auto bg-[#a3dc5d] hover:scale-105'
            >
              Update
            </button>
          }
        </div>
      </div>
    </Modal>
  )
}

export default CreateLoanModal