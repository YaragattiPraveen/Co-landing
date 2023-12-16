import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersList } from '../../action-reducers/admin/adminAction';

import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';

import { DropDownWrapper } from '../UIComp/DropDown';
import AddMember from './Modals/AddMember';
import Loader from '../Common/Loader';

const list1 = ["Delete", "Activate"]
const list2 = ["Delete", "Inactivate"]

function User() {
  const users = useSelector(({ admin }) => admin)
  const [loading, setLoading] = useState("")
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   setLoading(true)

  //   dispatch(getUsersList(() => setLoading(false)))
  // }, [dispatch])

  // console.log(users)

  const updateOpen = () => setOpen(p => !p)

  // if (loading) return <Loader />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Members</h1>
        <button
          className='bg-[#477213] text-white hover:bg-[#739c47]'
          onClick={updateOpen}
        >
          Add user
        </button>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <th className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Photo</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Name</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Mobile</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Email</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Role</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Status</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((u, i) => (
                <tr key={u._id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>
                    {/* <img
                      className='w-10 h-10 rounded object-cover'
                      src={getImg(i)}
                      alt="profile"
                    /> */}
                  </td>
                  <td className='px-2 py-1'>{u.firstName} {u.lastName}</td>
                  <td className='px-2 py-1'>{u.phoneNumber}</td>
                  <td className='px-2 py-1'>{u.email}</td>
                  <td className='px-2 py-1'>{u.role}</td>
                  <td className='px-2 py-1'>
                    <button className={`dc w-20 h-6 p-0 rounded-full ${u.status === 'active' ? ' bg-green-200 text-green-900' : ' bg-red-200 text-red-900'}`}>
                      <span className='first-letter:uppercase'>{u.status}</span>
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <DropDownWrapper
                      list={u.status === 'active' ? list2 : list1}
                    >
                      <Dot className='w-5 h-5 [--svg-color:#333]' />
                    </DropDownWrapper>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <AddMember
        isOpen={open}
        closeModal={updateOpen}
      />
    </section>
  )
}

export default User