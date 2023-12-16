import { useId } from 'react';

function InputWithLabel({
  lable = '', name = '', type = 'text',
  wrapperCls = 'mb-4', labelCls = 'mb-1', inputCls = '',
  isSelect = false, options = [], disabled,
  value = '', onChange = () => { },
  isPercentage = false, isRupee = false,
}) {
  const id = useId()

  return (
    <div className={wrapperCls}>
      <label htmlFor={id} className={labelCls}>
        {lable || name}
      </label>

      {
        isSelect ?
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={inputCls}
            disabled={disabled}
          >
            <option value="" disabled></option>
            {
              options.map(op => (
                <option key={op} value={op}>{op}</option>
              ))
            }
          </select>
          :
          <div className='relative'>
            <input
              id={id}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className={`no-number-arrows ${isPercentage || isRupee ? "pr-8" : ""} ${inputCls}`}
              disabled={disabled}
            />

            {
              (isPercentage || isRupee) &&
              <p className='dc px-2 absolute top-0 right-0 h-full'>
                {isPercentage ? "%" : <>&#8377;</>}
              </p>
            }
          </div>
      }
    </div>
  )
}

export default InputWithLabel