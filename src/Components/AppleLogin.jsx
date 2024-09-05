import React, { useContext } from "react";

import { FaApple } from "react-icons/fa";

const AppleLogin = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" border-2 rounded p-2">
          <button className="flex items-center  gap-2">
            <FaApple className="text-2xl"/> <span className='text-sm'>Sign in with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppleLogin;
