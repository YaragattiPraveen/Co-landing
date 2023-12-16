import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ForgetImg } from '../../assets/svg/auth/forget5.svg';
import AnimeInputField from "../Common/AnimeInputField";

function ForgetPass() {
  const [loading, setLoading] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    setLoading(true)

  }

  return (
    <div className="dc auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50 max-h-[420px]">
          <ForgetImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <p className="w-fit -ml-4 py-2 px-6 bg-[#2c8c79] text-white rounded-r-full">See you soon</p>

          <header className="mt-auto mb-4 px-4 text-2xl">Forgot Password</header>

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inpCls="border-0 border-b"
            txt="Email"
            name="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button
            className="mt-6 px-8 bg-[#2c8c79] text-white hover:bg-[#1d3a34] transition-colors mx-auto rounded-full"
            onClick={onSubmit}
            disabled={loading}
          >
            Submit
          </button>

          <Link
            className="mb-auto hover:text-[#375fd8]"
            to='/'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass