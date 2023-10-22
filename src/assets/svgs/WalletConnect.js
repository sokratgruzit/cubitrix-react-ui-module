import React from "react";

const WalletConnect = ({ ...props }) => {
  return (
    <svg
        className='LandingSteps__walletmetamaskIcon'
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 0C55.8844 0 72 16.1156 72 36C72 55.8844 55.8844 72 36 72C16.1156 72 0 55.8844 0 36C0 16.1156 16.1156 0 36 0Z"
        fill="url(#paint0_radial_3298_8713)"
      />
      <path
        d="M22.8799 27.8016C30.1221 20.7281 41.8783 20.7281 49.1205 27.8016L49.9924 28.6594C50.358 29.0109 50.358 29.5875 49.9924 29.9391L47.0111 32.85C46.8283 33.0328 46.533 33.0328 46.3502 32.85L45.1549 31.6828C40.0924 26.7469 31.908 26.7469 26.8455 31.6828L25.5658 32.9344C25.383 33.1172 25.0877 33.1172 24.9049 32.9344L21.9236 30.0234C21.558 29.6719 21.558 29.0953 21.9236 28.7438L22.8799 27.8016ZM55.2939 33.8203L57.9518 36.4078C58.3174 36.7594 58.3174 37.3359 57.9518 37.6875L45.9846 49.3734C45.6189 49.725 45.0283 49.725 44.6768 49.3734L36.183 41.0766C36.0986 40.9922 35.9439 40.9922 35.8596 41.0766L27.3658 49.3734C27.0002 49.725 26.4096 49.725 26.058 49.3734L14.0486 37.6875C13.683 37.3359 13.683 36.7594 14.0486 36.4078L16.7064 33.8203C17.0721 33.4688 17.6627 33.4688 18.0143 33.8203L26.508 42.1172C26.5924 42.2016 26.7471 42.2016 26.8314 42.1172L35.3252 33.8203C35.6908 33.4688 36.2814 33.4688 36.633 33.8203L45.1268 42.1172C45.2111 42.2016 45.3658 42.2016 45.4502 42.1172L53.9439 33.8203C54.3377 33.4688 54.9283 33.4688 55.2939 33.8203Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_3298_8713"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.00022316 36.0011) scale(72)"
        >
          <stop stopColor="#5D9DF6" />
          <stop offset="1" stopColor="#006FFF" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default WalletConnect;
