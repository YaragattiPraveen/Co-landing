import { useNavigate } from 'react-router-dom';
import { ReactComponent as Notification } from '../../assets/svg/common/notification.svg';
import { ReactComponent as TriArrow } from '../../assets/svg/arrows/traiangle.svg';
import { ReactComponent as Search } from '../../assets/svg/common/search.svg';
import { DropDownWrapper } from '../UIComp/DropDown';
import { useSelector } from 'react-redux';

function Nav({ role = "" }) {
  const user = useSelector(({ login }) => login.userDetails)
  const navigate = useNavigate()

  const onClk = val => {
    if (val === "Profile") {
      navigate(`/${role}/setting`)
    } else if (val === 'Log out') {
      navigate('/')
    }
  }

  return (
    <nav className='df gap-8 px-6 py-2 shadow-lg'>
      <div className='df gap-px pl-2 border rounded'>
        <Search className='w-4 h-4' />
        <input
          type="text"
          className='border-none py-1'
          placeholder='Search'
        />
      </div>

      <Notification className='ml-auto' />

      <div className='df'>
        <div>
          <p className='first-letter:uppercase'>{user?.firstName} {user?.lastName}</p>
          <p className='text-sm first-letter:uppercase'>{user?.role?.replace("_", " ")}</p>
        </div>

        <DropDownWrapper
          list={["Profile", "Log out"]}
          rootCls='p-0'
          needArrow
          onClk={onClk}
        >
          <TriArrow />
        </DropDownWrapper>
      </div>
    </nav>
  )
}

export default Nav