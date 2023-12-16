import { useId, useState } from 'react';
import { UploadFile } from '../../action-reducers/loan/loanAction';
import Loader from '../Common/Loader';

function InputFileWithLabel({
  lable = '', wrapperCls = 'mb-4', labelCls = 'mb-1',
  inputCls = '', onChange = () => { }, type = '', value = "", updateImg
}) {
  const [isUploading, setIsUploading] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const id = useId()

  const onFileUpload = e => {
    setIsUploading(true)
    const formData = new FormData()

    formData.append("document", e.target.files[0])
    const onSuccess = fileName => {
      setIsUploading(false)
      setIsUpdate(false)
      onChange(fileName)
    }

    UploadFile(formData, onSuccess)
  }

  return (
    <div className={wrapperCls}>
      {
        lable &&
        <label htmlFor={id} className={labelCls}>
          {lable}
        </label>
      }

      {
        isUploading &&
        <Loader wrapperCls="w-fit" loaderCls='w-7 h-7' />
      }

      {
        !isUploading && ((type === "Create" && !value) || isUpdate) &&
        <input
          type="file"
          id={id}
          onChange={onFileUpload}
          className={`mb-1 ${inputCls}`}
          multiple={false}
        />
      }

      {
        value && !isUpdate &&
        <button
          className='px-2 py-0.5 bg-[#a3dc5d] text-white text-sm'
          onClick={() => updateImg(value)}
        >
          View
        </button>
      }

      {
        !isUploading && (type === "Edit" || value) &&
        <button
          className='inline-block ml-2 px-2 py-0.5 bg-[#a3dc5d] text-white text-sm'
          onClick={() => setIsUpdate(p => !p)}
        >
          {!isUpdate ? "Update" : "Cancel"}
        </button>
      }
    </div>
  )
}

export default InputFileWithLabel