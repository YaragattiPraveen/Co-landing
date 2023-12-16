import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

import Modal, { ModalHeader } from '../../UIComp/Modal';
import user from '../../../assets/img/user.png';
import { registerUser } from '../../../action-reducers/admin/adminAction';

function AddMember({ isOpen, closeModal }) {
  const [list] = useState(["Relationship Manager", "Credit Manager", "Credit committee", "Credit Administration", "Central Co-lending Unit", "Credit Operations", "Operations", "SBI"])
  const [loading, setLoading] = useState(false)
  const [fileData, setFileData] = useState({})
  const [file, setFile] = useState("")
  const dispatch = useDispatch()

  const [data, setData] = useState({
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  })

  const onChange = e => {
    setData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setFileData(file)
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (e) => {
        setFile(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': []
    },
  })

  const onSubmit = () => {
    setLoading(true)
    const formData = new FormData()

    formData.append("profileImg", fileData)
    formData.append("phoneNumber", data.phoneNumber)
    formData.append("firstName", data.firstName)
    formData.append("lastName", data.lastName)
    formData.append("email", data.email)
    formData.append("role", data.role)

    dispatch(registerUser(formData))
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title='Add Member'
        closeModal={closeModal}
      />

      <div className='dc mt-8'>
        <div
          className='w-32 h-32 rounded-full bg-slate-200 cursor-pointer'
          {...getRootProps()}
        // onClick={() => inputRef.current.click()}
        >
          <img className='w-32 h-32 rounded-full object-cover' src={file || user} alt="user" />
        </div>

        <input {...getInputProps()} />
      </div>

      <div className='grid grid-cols-2 gap-4 mt-8'>
        <div>
          <label htmlFor="am-firstName">First Name</label>
          <input
            id='am-firstName'
            type="text"
            name='firstName'
            value={data.firstName}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="am-lastName">Last Name</label>
          <input
            id='am-lastName'
            type="text"
            name='lastName'
            value={data.lastName}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="am-email">Email</label>
          <input
            id='am-email'
            type="text"
            name='email'
            value={data.email}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="am-phoneNumber">Mobile</label>
          <input
            id='am-phoneNumber'
            type="text"
            name='phoneNumber'
            value={data.phoneNumber}
            onChange={onChange}
          />
        </div>

        <div className='col-span-2'>
          <label htmlFor="am-role">Role</label>
          <select
            id='role'
            name='role'
            value={data.role}
            onChange={onChange}
          >
            <option value="" disabled></option>
            {
              list.map(li => (
                <option key={li} value={li}>{li}</option>
              ))
            }
          </select>
        </div>
      </div>

      <button
        className='block w-1/2 mx-auto mt-12 bg-[#477213] text-white hover:bg-[#739c47] hover:scale-105 transition-transform rounded'
        disabled={loading}
        onClick={onSubmit}
      >
        Create
      </button>
    </Modal>
  )
}

export default AddMember