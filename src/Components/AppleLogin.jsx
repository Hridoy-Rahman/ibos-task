import React, { useContext } from "react";

import { FaApple } from "react-icons/fa";

const AppleLogin = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" border-2 rounded p-2">
          <button className="flex items-center  gap-2">
            <FaApple /> Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppleLogin;
