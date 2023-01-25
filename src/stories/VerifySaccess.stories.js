import { storiesOf } from "@storybook/react";
import { VerifySaccess } from "../components/verifySuccess/VerifySuccess";

const stories = storiesOf("VerifySaccess", module);

stories.add("VerifySaccess", () => {
    


    const verifyLogo = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <g clipPath="url(#clip0_1130_4198)">
    <path d="M25.0073 -0.000198695C24.9978 -0.00318898 24.9876 -0.00318898 24.9781 -0.000198695C17.3782 4.38478 11.0679 10.695 6.68281 18.2949C2.29776 25.8948 -0.00722532 34.5161 1.70142e-05 43.2903C7.59654 47.6761 16.2137 49.9851 24.9854 49.9851C33.7571 49.9851 42.3743 47.6761 49.9708 43.2903C49.9761 34.5182 47.6718 25.8993 43.2898 18.3001C38.9077 10.7009 32.6022 4.38928 25.0073 -0.000198695V-0.000198695ZM34.9986 34.8231C31.9609 36.5797 28.5139 37.5046 25.0049 37.5046C21.4959 37.5046 18.0489 36.5797 15.0112 34.8231C15.0101 31.3177 15.932 27.8739 17.6842 24.838C19.4363 21.802 21.957 19.2809 24.9927 17.5283C28.0306 19.2793 30.5543 21.7987 32.3106 24.8336C34.0669 27.8684 34.9939 31.3118 34.9986 34.8182V34.8231Z" fill="#3D5AFE"/>
    <path d="M25.0068 0V17.4993C28.0452 19.2546 30.568 21.7787 32.3219 24.818C34.0757 27.8572 34.9986 31.3045 34.9981 34.8135L49.9995 43.3002C50.0026 34.5238 47.6943 25.9013 43.307 18.3002C38.9196 10.6991 32.6079 4.38736 25.0068 0V0Z" fill="url(#paint0_linear_1130_4198)"/>
    <path opacity="0.6" d="M25.0068 0V17.4993C28.0452 19.2546 30.568 21.7787 32.3219 24.818C34.0757 27.8572 34.9986 31.3045 34.9981 34.8135L49.9995 43.3002C50.0026 34.5238 47.6943 25.9013 43.307 18.3002C38.9196 10.6991 32.6079 4.38736 25.0068 0V0Z" fill="url(#paint1_linear_1130_4198)"/>
    <path d="M24.9781 0.000244063C17.3782 4.38522 11.0679 10.6954 6.68281 18.2954C2.29776 25.8953 -0.00722532 34.5165 1.70142e-05 43.2907L15.0063 34.8186C15.0061 31.3142 15.9284 27.8714 17.6805 24.8363C19.4327 21.8013 21.9529 19.281 24.9878 17.5287V0.000244063C24.9846 -8.13543e-05 24.9813 -8.13543e-05 24.9781 0.000244063Z" fill="url(#paint2_linear_1130_4198)"/>
    <path opacity="0.6" d="M24.9781 0.000244063C17.3782 4.38522 11.0679 10.6954 6.68281 18.2954C2.29776 25.8953 -0.00722532 34.5165 1.70142e-05 43.2907L15.0063 34.8186C15.0061 31.3142 15.9284 27.8714 17.6805 24.8363C19.4327 21.8013 21.9529 19.281 24.9878 17.5287V0.000244063C24.9846 -8.13543e-05 24.9813 -8.13543e-05 24.9781 0.000244063Z" fill="url(#paint3_linear_1130_4198)"/>
    <path d="M34.9985 34.8184C31.9609 36.575 28.5139 37.4999 25.0049 37.4999C21.4959 37.4999 18.0489 36.575 15.0112 34.8184L0 43.2905C7.58992 47.6858 16.2073 49.9956 24.9781 49.9854C33.7536 49.9968 42.376 47.687 49.9708 43.2905L34.9985 34.8184Z" fill="url(#paint4_linear_1130_4198)"/>
    <path opacity="0.6" d="M34.9985 34.8184C31.9609 36.575 28.5139 37.4999 25.0049 37.4999C21.4959 37.4999 18.0489 36.575 15.0112 34.8184L0 43.2905C7.58992 47.6858 16.2073 49.9956 24.9781 49.9854C33.7536 49.9968 42.376 47.687 49.9708 43.2905L34.9985 34.8184Z" fill="url(#paint5_linear_1130_4198)"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_1130_4198" x1="29.6421" y1="26.3268" x2="47.6332" y2="15.6344" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3"/>
    <stop offset="0.05" stopColor="#45B0F5"/>
    <stop offset="0.12" stopColor="#4295F8"/>
    <stop offset="0.2" stopColor="#407FFA"/>
    <stop offset="0.29" stopColor="#3F6EFC"/>
    <stop offset="0.4" stopColor="#3E63FD"/>
    <stop offset="0.56" stopColor="#3D5CFE"/>
    <stop offset="1" stopColor="#3D5AFE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1130_4198" x1="36.6292" y1="22.1735" x2="16.9778" y2="33.8689" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3" stopOpacity="0"/>
    <stop offset="1" stopColor="#47C9F3"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1130_4198" x1="20.2308" y1="26.1323" x2="4.69862" y2="17.11" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3"/>
    <stop offset="0.05" stopColor="#45B0F5"/>
    <stop offset="0.12" stopColor="#4295F8"/>
    <stop offset="0.2" stopColor="#407FFA"/>
    <stop offset="0.29" stopColor="#3F6EFC"/>
    <stop offset="0.4" stopColor="#3E63FD"/>
    <stop offset="0.56" stopColor="#3D5CFE"/>
    <stop offset="1" stopColor="#3D5AFE"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1130_4198" x1="13.4823" y1="22.2079" x2="32.8805" y2="33.3092" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3" stopOpacity="0"/>
    <stop offset="1" stopColor="#47C9F3"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1130_4198" x1="24.9245" y1="34.6869" x2="25.0901" y2="53.457" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3"/>
    <stop offset="0.05" stopColor="#45B0F5"/>
    <stop offset="0.12" stopColor="#4295F8"/>
    <stop offset="0.2" stopColor="#407FFA"/>
    <stop offset="0.29" stopColor="#3F6EFC"/>
    <stop offset="0.4" stopColor="#3E63FD"/>
    <stop offset="0.56" stopColor="#3D5CFE"/>
    <stop offset="1" stopColor="#3D5AFE"/>
    </linearGradient>
    <linearGradient id="paint5_linear_1130_4198" x1="25.0024" y1="43.8553" x2="25.0024" y2="20.4353" gradientUnits="userSpaceOnUse">
    <stop stopColor="#47C9F3" stopOpacity="0"/>
    <stop offset="1" stopColor="#47C9F3"/>
    </linearGradient>
    <clipPath id="clip0_1130_4198">
    <rect width="50" height="50" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    const emailSvg = <svg xmlns="http://www.w3.org/2000/svg" width="130" height="94" viewBox="0 0 130 94" fill="none">
    <path opacity="0.05" d="M120.755 70.8829C129.778 61.9635 134.776 27.6663 123.469 16.7829C106.283 0.239919 77.8441 10.0549 56.0811 1.58123C34.3182 -6.89242 2.16748e-05 20.3597 1.96422e-05 43.6094C1.72911e-05 70.5026 41.5476 95.1807 66.0309 93.6854C90.5143 92.19 110.353 81.1663 120.755 70.8829Z" fill="#9CCC65"/>
    <circle opacity="0.6" cx="118.75" cy="7.5" r="2.5" fill="#9CCC65"/>
    <circle opacity="0.4" cx="110" cy="83.75" r="2.5" fill="#9CCC65"/>
    <circle opacity="0.4" cx="13.125" cy="78.125" r="3.125" fill="#9CCC65"/>
    <circle opacity="0.8" cx="16.875" cy="23.125" r="1.875" fill="#9CCC65"/>
    <circle opacity="0.6" cx="18.75" cy="71.25" r="1.25" fill="#9CCC65"/>
    <path d="M54.0625 66.0937H75.9375C82.5 66.0937 86.875 62.8125 86.875 55.1562V39.8437C86.875 32.1875 82.5 28.9062 75.9375 28.9062H54.0625C47.5 28.9062 43.125 32.1875 43.125 39.8437V45.067" stroke="#9CCC65" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39.8662 57.2005L45.3486 62.4005L56.3329 52.0005" stroke="#9CCC65" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M75.9375 40.9375L69.0906 46.4062C66.8375 48.2 63.1406 48.2 60.8875 46.4062L54.0625 40.9375" stroke="#9CCC65" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    const resendSvg = <svg xmlns="http://www.w3.org/2000/svg" width="130" height="94" viewBox="0 0 130 94" fill="none">
    <path opacity="0.05" d="M120.755 70.8829C129.778 61.9635 134.776 27.6663 123.469 16.7829C106.283 0.239919 77.8441 10.0549 56.0811 1.58123C34.3182 -6.89242 2.16748e-05 20.3597 1.96422e-05 43.6094C1.72911e-05 70.5026 41.5476 95.1807 66.0309 93.6854C90.5143 92.19 110.353 81.1663 120.755 70.8829Z" fill="#EF5350"/>
    <circle opacity="0.6" cx="118.75" cy="7.5" r="2.5" fill="#EF5350"/>
    <circle opacity="0.4" cx="110" cy="83.75" r="2.5" fill="#EF5350"/>
    <circle opacity="0.4" cx="13.125" cy="78.125" r="3.125" fill="#EF5350"/>
    <circle opacity="0.8" cx="16.875" cy="23.125" r="1.875" fill="#EF5350"/>
    <circle opacity="0.6" cx="18.75" cy="71.25" r="1.25" fill="#EF5350"/>
    <path d="M54.0625 66.0937H75.9375C82.5 66.0937 86.875 62.8125 86.875 55.1562V39.8437C86.875 32.1875 82.5 28.9062 75.9375 28.9062H54.0625C47.5 28.9062 43.125 32.1875 43.125 39.8437V45.067" stroke="#EF5350" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M75.9375 40.9375L69.0906 46.4062C66.8375 48.2 63.1406 48.2 60.8875 46.4062L54.0625 40.9375" stroke="#EF5350" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 62L52 50" stroke="#EF5350" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M52 62L40 50" stroke="#EF5350" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    const verifySaccess = {
        logo: verifyLogo,
        title: "Complend",
        email: emailSvg,
        h: "Verify Your Email",
        p: "Your email address has been verified. Now you can set up security",
        button: "Set Up Security"
    }

    const verifyFailed = {
        logo: verifyLogo,
        title: "Complend",
        email: resendSvg,
        h: "Email Not Verify",
        p: "Your email address hasn’t been verified. Please try again or click on the reset button to receive a new verification mail.",
        button: "Set Up Security"
    }

    return (
        <>
            <VerifySaccess 
                type="verify-saccess"
                cardBody={verifySaccess}
                active={true}
                customStyle={{width: "100%"}}
            />
             <VerifySaccess 
                type="verify-failed"
                cardBody={verifyFailed}
                active={true}
                customStyle={{width: "100%"}}
            />
        </>
    )
})