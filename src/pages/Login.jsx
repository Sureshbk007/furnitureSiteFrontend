import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/userReducer";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErr, setFormErr] = useState({});
  const dispatch = useDispatch();

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.code != 200) {
      let errors = {};
      if (typeof data?.message == "string") {
        return alert(data.message);
      }
      for (let item in data.message) {
        errors[item] = data.message[item];
      }
      return setFormErr(errors);
    }
    dispatch(login(data.data));
  };
  return (
    <div className="bg-brandBg flex justify-center p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-cs  w-[400px] p-6"
      >
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-semibold">Login</h2>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold">
              Join now
            </Link>
          </p>
        </div>
        <div className="flex justify-center ">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100.000000pt"
            height="100.000000pt"
            viewBox="0 0 256.000000 256.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1155 2339 c-358 -42 -672 -266 -833 -592 -74 -152 -105 -288 -105
-467 0 -283 95 -526 288 -729 210 -221 472 -334 775 -334 283 0 526 95 729
288 221 210 334 472 334 775 0 223 -54 406 -178 595 -50 77 -213 240 -290 290
-148 97 -309 155 -478 174 -107 12 -140 12 -242 0z m263 -558 c65 -33 118 -87
149 -149 38 -77 39 -190 4 -269 -28 -62 -103 -136 -169 -165 -65 -29 -179 -29
-244 0 -234 104 -264 418 -54 560 66 44 97 52 191 48 59 -2 91 -8 123 -25z
m52 -738 c141 -34 283 -117 388 -227 l64 -66 -31 -39 c-99 -125 -270 -227
-447 -267 -121 -27 -292 -16 -414 25 -142 48 -281 141 -360 241 l-32 40 64 66
c200 210 489 295 768 227z"
              />
            </g>
          </svg>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="" className="block">
            Email
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="border p-3 w-full rounded-lg"
            name="email"
            value={formData.email}
            onChange={handleForm}
          />
          {formErr?.email && (
            <div className="text-red-500 text-sm">*{formErr.email}</div>
          )}
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <div className="flex justify-between">
            <label htmlFor="">Password</label>
            {/* <span>Forgot Password?</span> */}
          </div>
          <input
            type="password"
            placeholder="Password (min 6 character)"
            className="border p-3 w-full rounded-lg"
            name="password"
            value={formData.password}
            onChange={handleForm}
          />
          {formErr?.password && (
            <div className="text-red-500 text-sm">*{formErr.password}</div>
          )}
        </div>
        <button
          className="bg-black text-slate-50 font-bold p-4 rounded-xl w-full my-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
