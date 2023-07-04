import React from "react";
import { Link } from "react-router-dom";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/sidhant.sharma.3760430/"
            target="_blank">
            <i class="ri-facebook-circle-line text-gray-500 text-2xl"></i>
          </a>

          <a href="https://twitter.com/Prince26001" target="_blank">
            <i class="ri-twitter-line text-gray-500 text-2xl"></i>
          </a>

          <a href="https://www.instagram.com/prin_.01/" target="_blank">
            <i class="ri-instagram-line text-gray-500 text-2xl"></i>
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank">
            <i class="ri-mail-line text-gray-500 text-2xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/prince-sharma-574007239/"
            target="_blank">
            <i class="ri-linkedin-box-line text-gray-500 text-2xl"></i>
          </a>
        </div>
        <div className="h-52 w-[1px] bg-gray-500 sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
