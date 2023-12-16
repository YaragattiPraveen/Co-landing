import { useLocation, useNavigate } from 'react-router-dom';
import summunatiLogo from '../../assets/svg/Samunnati_Logo.svg';

function SideBar({ list = [], role = "" }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className='dfc px-2 pb-4 bg-[#d8f9b5] text-sm'>
      <img className='w-40 mt-3 mb-8 mr-auto' src={summunatiLogo} alt="Sumunnati Logo" />

      {
        list.map(l => (
          <div
            key={l.title}
            className={`df px-4 py-2 cursor-pointer ${pathname === `/${role}/${l.to}` ? "border-l-2 border-black bg-[#a3dc5d]" : "hover:bg-[#abf155] rounded"}`}
            onClick={() => navigate(`/${role}/${l.to}`)}
          >
            {l.icon}
            {l.title}
          </div>
        ))
      }
    </aside>
  )
}

export default SideBar