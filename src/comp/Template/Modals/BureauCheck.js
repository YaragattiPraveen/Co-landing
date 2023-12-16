import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import { ReactComponent as Add } from '../../../assets/svg/actions/add.svg';

const list = ["CIBIL", "Highmark", "EQUIFAX", "Worldcheck", "Experian"]

function Input({ title, type, data, onChangeOD, addNewBoxes }) {
  return (
    <div className='mb-4'>
      <h6 className='mb-1'>{title}</h6>
      {
        data.map(d => (
          <div
            key={d.key}
            className='grid grid-cols-2 gap-4 mb-1.5'
          >
            <input
              type="text"
              value={d.label}
              onChange={e => onChangeOD(title, d.key, "label", e.target.value)}
              disabled={type === 'View'}
            />
            <input
              type="text"
              value={d.val}
              onChange={e => onChangeOD(title, d.key, "val", e.target.value)}
              disabled={type === 'View'}
            />
          </div>
        ))
      }

      {
        type !== 'View' &&
        <Add
          className='ml-auto my-2'
          onClick={() => addNewBoxes(title)}
        />
      }
    </div>
  )
}

function BureauCheck({ isOpen, type, closeModal }) {
  const [ESMS, setESMS] = useState(type !== 'View' ? "" : 'Applicable')
  const [otherData, setOtherData] = useState(
    list.map(l => ({
      title: l,
      data: [{
        label: type !== 'View' ? '' : `Some ${l} Label`,
        val: type !== 'View' ? '' : `Some ${l} value`,
        key: 0
      }]
    }))
  )

  const onChange = e => setESMS(e.target.value)

  const onChangeOD = (title, key, type, value) => {
    setOtherData(prev => prev.map(pr => {
      if (pr.title === title) {
        return {
          title,
          data: pr.data.map(p => {
            if (p.key === key) {
              return {
                ...p,
                [type]: value
              }
            }
            return p
          })
        }
      }
      return pr
    }))
  }

  const addNewBoxes = title => {
    setOtherData(prev => prev.map(pr => {
      if (pr.title === title) {
        return {
          title,
          data: [...pr.data, {
            key: pr.data.length,
            label: '',
            val: ''
          }]
        }
      }
      return pr
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[450px] max-h-[80vh]'
    >
      <ModalHeader
        title='Bureau Check'
        closeModal={closeModal}
      />

      <div className="scroll-y pr-4 lg:pr-6 pl-px -mr-4 lg:-mr-6">
        {
          otherData.map(od => (
            <Input
              key={od.title}
              type={type}
              data={od.data}
              title={od.title}
              onChangeOD={onChangeOD}
              addNewBoxes={addNewBoxes}
            />
          ))
        }

        <div className='mb-4'>
          <label className='mb-1' htmlFor="esms-bu">ESMS</label>
          <select
            id='esms-bu'
            name='ESMS'
            onChange={onChange}
            value={ESMS}
            disabled={type === 'View'}
          >
            <option value="" disabled></option>
            <option value="Applicable">Applicable</option>
            <option value="Not applicable">Not applicable</option>
          </select>
        </div>
      </div>

      {
        type !== 'View' &&
        <button
          className='block w-3/4 mx-auto bg-[#a3dc5d] disabled:bg-[#b9e287] disabled:cursor-not-allowed'
          onClick={closeModal}
        >
          Update
        </button>
      }
    </Modal>
  )
}

export default BureauCheck