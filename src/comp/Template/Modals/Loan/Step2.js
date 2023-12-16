import { useState } from 'react';
import InputFileWithLabel from '../../../Common/InputFileWithLabel';
import InputWithLabel from '../../../Common/InputWithLabel';

function Step2({ type, details, disabled, onChange, updateImg, fileChange }) {
  const [options] = useState({
    PSL: ["PSL farm credit", "PSL other agri", "PSL MSME", 'Weaker section', 'Others'],
    Average_tenor: ['Days', 'Months'],
  })

  return (
    <>
      <InputWithLabel
        isSelect
        name='PSL'
        value={details.PSL}
        options={options.PSL}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        isPercentage
        type='number'
        name='Coupon_rate'
        lable='Coupon rate'
        value={details.Coupon_rate}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        name='Payment_terms'
        lable='Payment terms'
        value={details.Payment_terms}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        name='Nature_of_underlying_asset'
        lable='Nature of underlying asset'
        value={details.Nature_of_underlying_asset}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        isSelect
        name='Average_tenor'
        lable='Average tenor'
        value={details.Average_tenor}
        options={options.Average_tenor}
        onChange={onChange}
        disabled={disabled}
      />

      <InputFileWithLabel
        type={type}
        updateImg={updateImg}
        lable='Tentative term-sheet'
        value={details.term_sheet_doc}
        onChange={fileName => fileChange("term_sheet_doc", fileName)}
      />

      <InputWithLabel
        type='number'
        name='Number_of_obligors'
        lable='Number of obligors'
        value={details.Number_of_obligors}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        isRupee
        type='number'
        name='Consideration_amount'
        lable='Consideration amount'
        value={details.Consideration_amount}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        type='date'
        name='Cut_off_date'
        lable='Cut-off date'
        value={details.Cut_off_date}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        name='Asignee'
        value={details.Asignee}
        onChange={onChange}
        disabled={disabled}
      />

      <InputWithLabel
        name='Originator'
        value={details.Originator}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  )
}

export default Step2