import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import { login } from "../../action-reducers/login/loginAction";

import { ReactComponent as LoginImg } from "../../assets/svg/auth/signup.svg";
import summunatiLogo from "../../assets/svg/Samunnati_Logo.svg";
import AnimeInputField from "../Common/AnimeInputField";

function Login() {
  // const [loading, setLoading] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  // const onSuccess = role => {
  //   const lists = {
  //     admin: "user",
  //     relationship_manager: "fpo",
  //     credit_manager: "fpo",
  //     central_co_lending_unit: "fpo",
  //     credit_admin_department: "fpo",
  //     credit_committee: "fpo",
  //     credit_operations: "",
  //     operations: "",
  //     sbi: "",
  //   }

  //   const url = lists[role] ? `/${role}/${lists[role]}` : `/${role}`
  //   // console.log(url)
  //   navigate(url)
  // }

  // const onError = () => {
  //   setLoading(false)
  // }

  const onSubmit = () => {
    // setLoading(true)
    // navigate(`/${details.email.split("@")[0]}/loan`)
    navigate(`/${details.email}`);
    if (details?.email && details?.password === '123456') {
      navigate(`/${details.email}`);
    }else{
      alert("Invalid Credentials")
      navigate("/")
    }
    // dispatch(login(details, onSuccess, onError))
  };

  return (
    <div className="df flex-col justify-between pt-8 auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <img className="h-10" src={summunatiLogo} alt="logo" />

      <div className="-mt-4 text-xl font-medium text-gray-600">
        Blockchain enabled co-lending platform
      </div>

      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-96" />
        </div>

        <div className="dfc p-4 text-center">
          <p className="w-fit -ml-4 py-2 px-6 bg-[#2c8c79] text-white rounded-r-full">
            Welcome Back
          </p>

          <header className="mt-8 mb-4 px-4 text-2xl">
            Login your account
          </header>

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inpCls="border-0 border-b"
            txt="Email"
            name="email"
            value={details.email}
            onChange={onChange}
          />

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inputType="password"
            inpCls="border-0 border-b"
            txt="Password"
            name="password"
            value={details.password}
            onChange={onChange}
          />

          <button
            className="my-6 px-8 bg-[#2c8c79] text-white hover:bg-[#1d3a34] transition-colors mx-auto rounded-full"
            onClick={onSubmit}
            // disabled={loading}
          >
            Login
          </button>

          <Link className="hover:text-[#2c8c79]" to="/signup">
            Create Account
          </Link>

          <Link className="mt-auto hover:text-[#2c8c79]" to="/forget-password">
            Forgot Password
          </Link>
        </div>
      </div>

      <div className="df pt-4 pb-1 text-gray-600">
        Designed and Developed by{" "}
        <strong className="text-[#2d7658] text-lg font-medium">IGC</strong>
      </div>
    </div>
  );
}

export default Login;
