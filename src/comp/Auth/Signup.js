import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createOrg } from "../../action-reducers/login/loginAction";
import { ReactComponent as LoginImg } from '../../assets/svg/auth/logini.svg';
import AnimeInputField from "../Common/AnimeInputField";

function Signup() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    FirstName: "Raj",
    SurName: "kumar",
    PhoneNumber: "9876543210",
    CompanyName: "org1MSP",
    CompanySize: "10",
    Country: "India",
    State: "TamilNadu",
    LicenseKey: "ABC",
    BusinessEmail: "raj@gmail.com"
  })

  const navigate = useNavigate()

  const onChange = e => {
    setData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    setLoading(true)
    createOrg(data, () => navigate("/"))
  }

  return (
    <div className="dc auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <div className="w-fit -ml-4 py-2 px-6 bg-[#2c8c79] text-white rounded-r-full">Welcome Back</div>

          <header className="mt-8 mb-4 px-4 text-2xl">Signup your account</header>

          <div className="dfc scroll-y max-h-52">
            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="First Name"
              name="FirstName"
              value={data.FirstName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Surname"
              name="SurName"
              value={data.SurName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Phone Number"
              name="PhoneNumber"
              value={data.PhoneNumber}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Email"
              name="BusinessEmail"
              value={data.BusinessEmail}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Name"
              name="CompanyName"
              value={data.CompanyName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Size"
              name="CompanySize"
              value={data.CompanySize}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Country"
              name="Country"
              value={data.Country}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="State"
              name="State"
              value={data.State}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="License"
              name="LicenseKey"
              value={data.LicenseKey}
              onChange={onChange}
            />
          </div>

          <button
            className="mt-6 mb-2 px-8 bg-[#2c8c79] text-white hover:bg-[#1d3a34] transition-colors mx-auto rounded-full"
            onClick={onSubmit}
            disabled={loading}
          >
            Signup
          </button>

          <Link
            className="mb-4 hover:text-[#2c8c79]"
            to='/'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup