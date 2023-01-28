import React from "react";

const Warning = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.19567 17.7842L10.4861 4.00206C10.6317 3.72683 10.8496 3.49651 11.1164 3.33586C11.3831 3.17522 11.6886 3.09033 12 3.09033C12.3114 3.09033 12.6169 3.17522 12.8836 3.33586C13.1504 3.49651 13.3683 3.72683 13.5139 4.00206L20.8043 17.7842C20.9412 18.0443 21.0083 18.3354 20.9992 18.6292C20.9901 18.9229 20.905 19.2093 20.7523 19.4604C20.5996 19.7115 20.3845 19.9188 20.1278 20.062C19.8712 20.2052 19.5819 20.2795 19.288 20.2777H4.70875C4.41514 20.279 4.1262 20.2042 3.87003 20.0608C3.61385 19.9173 3.39916 19.71 3.24684 19.459C3.09453 19.208 3.00976 18.9218 3.00079 18.6283C2.99183 18.3349 3.05896 18.0441 3.19567 17.7842V17.7842Z"
        stroke="#FFA726"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M11.9985 8.82129V13.7312"
        stroke="#FFA726"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M11.9985 17.8226C12.6764 17.8226 13.226 17.2731 13.226 16.5952C13.226 15.9172 12.6764 15.3677 11.9985 15.3677C11.3206 15.3677 10.771 15.9172 10.771 16.5952C10.771 17.2731 11.3206 17.8226 11.9985 17.8226Z"
        fill="#FFA726"
      />
    </svg>
  );
};

export default Warning;
