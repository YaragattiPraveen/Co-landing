import { useState } from 'react';
import getRandom from '../../../../helper/getRandom';
import InputWithLabel from '../../../Common/InputWithLabel';
import FpoName from './FpoName';

function Step0({ disabled, details, onChange, setDetails }) {
  const [traId] = useState(getRandom(0, 1000))
  const [options] = useState({
    Arrangement: ["Co lending", "Business correspondent", "Direct Origination", "PTC", "Direct Assignment", "Other structured assets"],
    Tenure: ['Days', 'Months', 'Year'],
    Purpose: ["ARF", "Infra", "Input", "Output", "Gold loan", "Cattle loan", "SME", "Trade finance", "WHR", "Others"],
    Nature_of_facility: ['STL', 'MTL', 'LTL'],
    Revolving: ['Revolving', 'Non-revolving'],
    Principal_repayment: ['Monthly', 'Quartely', 'Half-yearly', 'Annually', 'Others'],
  })

  return (
    <>
      <InputWithLabel
        lable='Transaction number/ID'
        value={`2022${traId}07`}
        disabled
      />

      <FpoName
        fpoName={details.fpoName}
        setDetails={setDetails}
        disabled={disabled}
      />

      <InputWithLabel
        type='number'
        name='loanAmount'
        lable='Loan Amount'
        value={details.loanAmount}
        onChange={onChange}
        disabled={disabled}
        isRupee
      />

      <InputWithLabel
        isSelect
        name='Arrangement'
        value={details.Arrangement}
        options={options.Arrangement}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        type='number'
        name='Aggregate_disbursement'
        lable='Aggregate disbursement'
        value={details.Aggregate_disbursement}
        onChange={onChange}
        disabled={disabled}
      />

      <div className='mb-4'>
        <label htmlFor='tenure'>Tenure</label>
        <div className='df'>
          <input
            type="text"
            name='TenureNumber'
            value={details.TenureNumber}
            disabled={disabled}
            onChange={onChange}
          />

          <select
            id='tenure'
            name='Tenure'
            value={details.Tenure}
            onChange={onChange}
            disabled={disabled}
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
        disabled={disabled}
      />

      <InputWithLabel
        isSelect
        name='Purpose'
        options={options.Purpose}
        value={details.Purpose}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        isSelect
        name='Nature_of_facility'
        lable='Nature of facility'
        options={options.Nature_of_facility}
        value={details.Nature_of_facility}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        isSelect
        lable='Revolving/Non-revolving'
        options={options.Revolving}
        value={details.Revolving}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        name='Margin'
        type='number'
        value={details.Margin}
        onChange={onChange}
        disabled={disabled}
        isPercentage
      />

      <InputWithLabel
        isSelect
        name='Principal_repayment'
        lable='Principal repayment'
        options={options.Principal_repayment}
        value={details.Principal_repayment}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  )
}

export default Step0