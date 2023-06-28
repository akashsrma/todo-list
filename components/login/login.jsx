import React from "react";
const Login = () => {
  return (
    <form className="text-center mt-32">
      <p className="font-semibold text-gray-600">LoGIn</p>

      <div className="flex  items-center justify-center mt-6 ">
        <input
          type="email"
          name="email-address"
          placeholder="Email-Address"
          className="border-2 h-[2rem] w-[29rem]"
          required
        />
      </div>

      <div className="flex  items-center justify-center mt-6">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-2 h-[2rem] w-[29rem]"
          required
        />
      </div>

      <div className="flex  items-center justify-center mt-6">
        <button
          type="submit"
          className="bg-gray-500 border-2 h-[2rem] w-[29rem] rounded-md text-white hover:bg-gray-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
