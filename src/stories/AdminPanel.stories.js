import { storiesOf } from "@storybook/react";
import { useState } from "react";
import "../assets/css/main-theme.css";
import { AdminPanel } from "../components/AdminPanel";
import { AdminHeader } from "../components/AdminHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "../components/Button";
import { Functions } from '../hooks/Functions';
import { Logo } from "../assets/svgs";

const stories = storiesOf("AdminPanel", module);

stories.add("AdminPanel", () => {
    const { mobile } = Functions();
    console.log(mobile)

    const [mobileExpand, setMobileExpand] = useState(null);

    let mobileExpandFunc = (id) => {
        if(window.innerWidth <= 1300) {
            if(id !== mobileExpand) {
                setMobileExpand(id);
            } else {
                setMobileExpand(null);
            }
        }
    }

    const adminHeaderData = {
        username: 'Michael',
        svg: <Logo />,
        userImageUrl: '../../assets/DashboardCards/bitcoin.png',
    }
    const sideBar = [
        {
            id: 1,
            name: 'Dashboard',
            route: '/dashboard',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2672 0.583658C10.7398 0.163715 11.397 0.0415039 12.1083 0.0415039H15.475C16.1863 0.0415039 16.8435 0.163715 17.3162 0.583658C17.8077 1.02035 17.9583 1.64856 17.9583 2.3165V6.09984C17.9583 6.76731 17.8079 7.39649 17.3153 7.83245C16.8417 8.25154 16.184 8.37073 15.4731 8.3665H12.1083C11.3993 8.3665 10.7414 8.2472 10.2681 7.82828C9.77507 7.39197 9.625 6.76231 9.625 6.0915V2.3165C9.625 1.64856 9.77568 1.02035 10.2672 0.583658ZM11.0974 1.5181C10.991 1.61266 10.875 1.80944 10.875 2.3165V6.0915C10.875 6.60403 10.9916 6.79938 11.0965 6.89222C11.2211 7.00247 11.4924 7.1165 12.1083 7.1165H15.4789C16.0923 7.12036 16.3629 7.00606 16.4868 6.89639C16.5921 6.80319 16.7083 6.60736 16.7083 6.09984V2.3165C16.7083 1.80944 16.5923 1.61266 16.4859 1.5181C16.3606 1.40679 16.0887 1.2915 15.475 1.2915H12.1083C11.4946 1.2915 11.2227 1.40679 11.0974 1.5181Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2403 10.2403C10.7135 9.76724 11.3832 9.625 12.1083 9.625H15.475C16.2001 9.625 16.8699 9.76724 17.343 10.2403C17.8161 10.7135 17.9583 11.3832 17.9583 12.1083V15.475C17.9583 16.2001 17.8161 16.8699 17.343 17.343C16.8699 17.8161 16.2001 17.9583 15.475 17.9583H12.1083C11.3832 17.9583 10.7135 17.8161 10.2403 17.343C9.76724 16.8699 9.625 16.2001 9.625 15.475V12.1083C9.625 11.3832 9.76724 10.7135 10.2403 10.2403ZM11.1242 11.1242C10.9994 11.249 10.875 11.5084 10.875 12.1083V15.475C10.875 16.0749 10.9994 16.3343 11.1242 16.4591C11.249 16.5839 11.5084 16.7083 12.1083 16.7083H15.475C16.0749 16.7083 16.3343 16.5839 16.4591 16.4591C16.5839 16.3343 16.7083 16.0749 16.7083 15.475V12.1083C16.7083 11.5084 16.5839 11.249 16.4591 11.1242C16.3343 10.9994 16.0749 10.875 15.475 10.875H12.1083C11.5084 10.875 11.249 10.9994 11.1242 11.1242Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.683852 0.583658C1.15649 0.163715 1.81373 0.0415039 2.52502 0.0415039H5.89169C6.60298 0.0415039 7.26021 0.163715 7.73285 0.583658C8.22434 1.02035 8.37502 1.64856 8.37502 2.3165V6.09984C8.37502 6.76731 8.22455 7.39649 7.73194 7.83245C7.2584 8.25154 6.60067 8.37073 5.88983 8.3665H2.52502C1.81596 8.3665 1.15811 8.2472 0.684765 7.82828C0.19176 7.39197 0.041687 6.76231 0.041687 6.0915V2.3165C0.041687 1.64856 0.192364 1.02035 0.683852 0.583658ZM1.5141 1.5181C1.40768 1.61266 1.29169 1.80944 1.29169 2.3165V6.0915C1.29169 6.60403 1.40828 6.79938 1.51319 6.89222C1.63776 7.00247 1.90909 7.1165 2.52502 7.1165H5.89562C6.50898 7.12036 6.7796 7.00606 6.90351 6.89639C7.00883 6.80319 7.12502 6.60736 7.12502 6.09984V2.3165C7.12502 1.80944 7.00903 1.61266 6.9026 1.5181C6.77733 1.40679 6.5054 1.2915 5.89169 1.2915H2.52502C1.91131 1.2915 1.63938 1.40679 1.5141 1.5181Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.657037 10.2403C1.13015 9.76724 1.79992 9.625 2.52502 9.625H5.89169C6.61679 9.625 7.28656 9.76724 7.75967 10.2403C8.23278 10.7135 8.37502 11.3832 8.37502 12.1083V15.475C8.37502 16.2001 8.23278 16.8699 7.75967 17.343C7.28656 17.8161 6.61679 17.9583 5.89169 17.9583H2.52502C1.79992 17.9583 1.13015 17.8161 0.657037 17.343C0.183928 16.8699 0.041687 16.2001 0.041687 15.475V12.1083C0.041687 11.3832 0.183928 10.7135 0.657037 10.2403ZM1.54092 11.1242C1.41611 11.249 1.29169 11.5084 1.29169 12.1083V15.475C1.29169 16.0749 1.41611 16.3343 1.54092 16.4591C1.66573 16.5839 1.92512 16.7083 2.52502 16.7083H5.89169C6.49159 16.7083 6.75098 16.5839 6.87579 16.4591C7.00059 16.3343 7.12502 16.0749 7.12502 15.475V12.1083C7.12502 11.5084 7.00059 11.249 6.87579 11.1242C6.75098 10.9994 6.49159 10.875 5.89169 10.875H2.52502C1.92512 10.875 1.66573 10.9994 1.54092 11.1242Z" fill="#CDCED1"/>
                </svg>

        },
        {
            id: 2,
            name: 'Transactions',
            route: '/transactions',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0833 10.4915L10.9083 14.6748" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.916687 10.4917L15.0834 10.4917" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.916687 5.5083L5.09169 1.32497" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.0834 5.5083L0.916687 5.5083" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
        },
        {
            id: 3,
            name: 'Withdraw',
            route: '/withdraw',
            svg: <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.58331 8.9165C1.92849 8.9165 2.20831 9.19633 2.20831 9.5415C2.20831 11.6769 4.22051 13.3748 6.99998 13.3748C9.77945 13.3748 11.7916 11.6769 11.7916 9.5415C11.7916 9.19633 12.0715 8.9165 12.4166 8.9165C12.7618 8.9165 13.0416 9.19633 13.0416 9.5415V12.6248C13.0416 15.6494 10.2517 17.9582 6.99998 17.9582C3.74821 17.9582 0.958313 15.6494 0.958313 12.6248V9.5415C0.958313 9.19633 1.23814 8.9165 1.58331 8.9165ZM2.20927 12.706C2.25973 14.8475 4.30243 16.7082 6.99998 16.7082C9.69753 16.7082 11.7402 14.8475 11.7907 12.706C10.6633 13.918 8.89574 14.6248 6.99998 14.6248C5.10422 14.6248 3.33663 13.918 2.20927 12.706Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.99998 1.2915C5.64568 1.2915 4.4431 1.76525 3.57765 2.52069L3.57736 2.52095C2.71981 3.26855 2.20831 4.27887 2.20831 5.37484C2.20831 6.01608 2.38381 6.60359 2.69161 7.10726L2.69236 7.10849C3.44733 8.35031 5.05255 9.20817 6.99998 9.20817C8.9474 9.20817 10.5526 8.35031 11.3076 7.10849L11.3083 7.10726C11.6161 6.60359 11.7916 6.01607 11.7916 5.37484C11.7916 4.28013 11.2812 3.26941 10.4224 2.51248C9.55619 1.76462 8.35328 1.2915 6.99998 1.2915ZM2.75594 1.57873C3.85712 0.617654 5.35442 0.0415039 6.99998 0.0415039C8.64555 0.0415039 10.1418 0.617601 11.242 1.56867L11.2463 1.57237L11.2463 1.57239C12.3362 2.53192 13.0416 3.87044 13.0416 5.37484C13.0416 6.25001 12.8006 7.06227 12.3753 7.75846C11.3468 9.44961 9.28561 10.4582 6.99998 10.4582C4.71439 10.4582 2.6532 9.44964 1.62469 7.75856C1.19936 7.06234 0.958313 6.25005 0.958313 5.37484C0.958313 3.87094 1.66336 2.53136 2.75565 1.57898" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.99998 1.2915C4.26841 1.2915 2.20831 3.19935 2.20831 5.37484V9.5415C2.20831 11.6769 4.22051 13.3748 6.99998 13.3748C9.77945 13.3748 11.7916 11.6769 11.7916 9.5415V5.37484C11.7916 4.28013 11.2812 3.26941 10.4224 2.51248C9.55619 1.76462 8.35328 1.2915 6.99998 1.2915ZM0.958313 5.37484C0.958313 2.35032 3.74821 0.0415039 6.99998 0.0415039C8.64555 0.0415039 10.1418 0.617601 11.242 1.56867L11.2463 1.57237L11.2463 1.57239C12.3362 2.53192 13.0416 3.87044 13.0416 5.37484V9.5415C13.0416 12.6061 10.2038 14.6248 6.99998 14.6248C3.79612 14.6248 0.958313 12.6061 0.958313 9.5415V5.37484Z" fill="#CDCED1"/>
                </svg>

        },
        {
            id: 4,
            name: 'KYC List',
            route: '/kyc-list',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.63335 5.625C6.47553 5.625 6.29169 5.77238 6.29169 6.01667C6.29169 6.22664 6.33604 6.28206 6.34056 6.28771C6.34063 6.2878 6.3405 6.28764 6.34056 6.28771C6.35017 6.2999 6.38656 6.33903 6.54101 6.39384L8.54595 7.09557C8.7869 7.18272 9.08047 7.3236 9.30181 7.60675C9.52914 7.89758 9.61669 8.25496 9.61669 8.65C9.61669 9.52238 8.93386 10.2917 8.02502 10.2917H6.77502C5.79213 10.2917 5.04169 9.45672 5.04169 8.5C5.04169 8.15482 5.32151 7.875 5.66669 7.875C6.01187 7.875 6.29169 8.15482 6.29169 8.5C6.29169 8.82662 6.54124 9.04167 6.77502 9.04167H8.02502C8.18284 9.04167 8.36669 8.89429 8.36669 8.65C8.36669 8.43964 8.32215 8.38313 8.31717 8.37681C8.30732 8.36422 8.27193 8.32606 8.12357 8.27209L6.1247 7.57248C5.87999 7.48581 5.58299 7.34567 5.35929 7.06205C5.12919 6.77031 5.04169 6.41155 5.04169 6.01667C5.04169 5.14429 5.72451 4.375 6.63335 4.375H7.8918C8.86595 4.38816 9.62502 5.19896 9.62502 6.16667C9.62502 6.51185 9.3452 6.79167 9.00002 6.79167C8.65484 6.79167 8.37502 6.51185 8.37502 6.16667C8.37502 5.85239 8.13615 5.63035 7.87824 5.625H6.63335Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.33337 9.08301C7.67855 9.08301 7.95837 9.36283 7.95837 9.70801V10.3247C7.95837 10.6699 7.67855 10.9497 7.33337 10.9497C6.9882 10.9497 6.70837 10.6699 6.70837 10.3247V9.70801C6.70837 9.36283 6.9882 9.08301 7.33337 9.08301Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.33337 3.71631C7.67855 3.71631 7.95837 3.99613 7.95837 4.34131V4.99131C7.95837 5.33649 7.67855 5.61631 7.33337 5.61631C6.9882 5.61631 6.70837 5.33649 6.70837 4.99131V4.34131C6.70837 3.99613 6.9882 3.71631 7.33337 3.71631Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.17493 2.17474C3.54082 0.808853 5.39336 0.0415039 7.32502 0.0415039C9.25668 0.0415039 11.1092 0.808853 12.4751 2.17474C13.841 3.54063 14.6084 5.39318 14.6084 7.32484C14.6084 9.2565 13.841 11.109 12.4751 12.4749C11.1092 13.8408 9.25668 14.6082 7.32502 14.6082C5.39336 14.6082 3.54082 13.8408 2.17493 12.4749C0.809036 11.109 0.041687 9.2565 0.041687 7.32484C0.041687 5.39318 0.809036 3.54063 2.17493 2.17474ZM7.32502 13.3582C8.92516 13.3582 10.4598 12.7225 11.5912 11.591C12.7227 10.4596 13.3584 8.92498 13.3584 7.32484C13.3584 5.7247 12.7227 4.1901 11.5912 3.05863C10.4598 1.92716 8.92516 1.2915 7.32502 1.2915C5.72488 1.2915 4.19028 1.92716 3.05881 3.05863C1.92734 4.1901 1.29169 5.7247 1.29169 7.32484C1.29169 8.92498 1.92734 10.4596 3.05881 11.591C4.19028 12.7225 5.72488 13.3582 7.32502 13.3582Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0845 9.46786C15.2862 9.18774 15.6768 9.12416 15.9569 9.32585C17.1537 10.1875 17.9417 11.5974 17.9417 13.1914C17.9417 15.8116 15.8119 17.9414 13.1917 17.9414C11.579 17.9414 10.168 17.1431 9.30676 15.9278C9.10718 15.6461 9.1737 15.256 9.45533 15.0565C9.73696 14.8569 10.1271 14.9234 10.3266 15.205C10.9654 16.1064 12.0044 16.6914 13.1917 16.6914C15.1215 16.6914 16.6917 15.1212 16.6917 13.1914C16.6917 12.0187 16.113 10.9786 15.2265 10.3403C14.9464 10.1386 14.8828 9.74799 15.0845 9.46786Z" fill="#CDCED1"/>
                </svg>

        },
        {
            id: 5,
            name: 'User List',
            route: '/user-list',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.09923 6.29057C1.57066 6.81914 1.26666 7.70715 1.26666 9.20801V12.958C1.26666 14.4589 1.57066 15.3469 2.09923 15.8754C2.6278 16.404 3.51581 16.708 5.01666 16.708H8.76666C10.2675 16.708 11.1555 16.404 11.6841 15.8754C12.2127 15.3469 12.5167 14.4589 12.5167 12.958V9.20801C12.5167 7.70715 12.2127 6.81914 11.6841 6.29057C11.1555 5.76201 10.2675 5.45801 8.76666 5.45801H5.01666C3.51581 5.45801 2.6278 5.76201 2.09923 6.29057ZM1.21535 5.40669C2.09303 4.52901 3.39252 4.20801 5.01666 4.20801H8.76666C10.3908 4.20801 11.6903 4.52901 12.568 5.40669C13.4457 6.28437 13.7667 7.58386 13.7667 9.20801V12.958C13.7667 14.5822 13.4457 15.8816 12.568 16.7593C11.6903 17.637 10.3908 17.958 8.76666 17.958H5.01666C3.39252 17.958 2.09303 17.637 1.21535 16.7593C0.337664 15.8816 0.0166626 14.5822 0.0166626 12.958V9.20801C0.0166626 7.58386 0.337664 6.28437 1.21535 5.40669Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.90988 4.20902C10.4673 4.22764 11.7163 4.55512 12.568 5.40685C13.4197 6.25859 13.7472 7.50756 13.7658 9.06498C15.4504 8.61107 16.6834 7.07705 16.6834 5.24984C16.6834 5.07341 16.6691 4.90117 16.6426 4.74859C16.6411 4.73971 16.6397 4.73079 16.6385 4.72185C16.3869 2.78027 14.7328 1.2915 12.725 1.2915C10.8978 1.2915 9.36378 2.52447 8.90988 4.20902ZM7.54415 4.77778C7.78093 2.1164 10.0069 0.0415039 12.725 0.0415039C15.3627 0.0415039 17.539 1.996 17.8764 4.54797C17.915 4.77473 17.9334 5.0143 17.9334 5.24984C17.9334 7.96795 15.8585 10.1939 13.1971 10.4307C13.0224 10.4463 12.8492 10.3877 12.7198 10.2693C12.5904 10.1509 12.5167 9.98356 12.5167 9.80817V9.20817C12.5167 7.70731 12.2127 6.8193 11.6841 6.29074C11.1556 5.76217 10.2675 5.45817 8.76669 5.45817H8.16669C7.9913 5.45817 7.82398 5.38447 7.70558 5.25508C7.58718 5.12568 7.52861 4.95249 7.54415 4.77778Z" fill="#CDCED1"/>
                </svg>
        },
        {
            id: 6,
            name: 'Accounts',
            route: '/accounts',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.09923 6.29057C1.57066 6.81914 1.26666 7.70715 1.26666 9.20801V12.958C1.26666 14.4589 1.57066 15.3469 2.09923 15.8754C2.6278 16.404 3.51581 16.708 5.01666 16.708H8.76666C10.2675 16.708 11.1555 16.404 11.6841 15.8754C12.2127 15.3469 12.5167 14.4589 12.5167 12.958V9.20801C12.5167 7.70715 12.2127 6.81914 11.6841 6.29057C11.1555 5.76201 10.2675 5.45801 8.76666 5.45801H5.01666C3.51581 5.45801 2.6278 5.76201 2.09923 6.29057ZM1.21535 5.40669C2.09303 4.52901 3.39252 4.20801 5.01666 4.20801H8.76666C10.3908 4.20801 11.6903 4.52901 12.568 5.40669C13.4457 6.28437 13.7667 7.58386 13.7667 9.20801V12.958C13.7667 14.5822 13.4457 15.8816 12.568 16.7593C11.6903 17.637 10.3908 17.958 8.76666 17.958H5.01666C3.39252 17.958 2.09303 17.637 1.21535 16.7593C0.337664 15.8816 0.0166626 14.5822 0.0166626 12.958V9.20801C0.0166626 7.58386 0.337664 6.28437 1.21535 5.40669Z" fill="#CDCED1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.90988 4.20902C10.4673 4.22764 11.7163 4.55512 12.568 5.40685C13.4197 6.25859 13.7472 7.50756 13.7658 9.06498C15.4504 8.61107 16.6834 7.07705 16.6834 5.24984C16.6834 5.07341 16.6691 4.90117 16.6426 4.74859C16.6411 4.73971 16.6397 4.73079 16.6385 4.72185C16.3869 2.78027 14.7328 1.2915 12.725 1.2915C10.8978 1.2915 9.36378 2.52447 8.90988 4.20902ZM7.54415 4.77778C7.78093 2.1164 10.0069 0.0415039 12.725 0.0415039C15.3627 0.0415039 17.539 1.996 17.8764 4.54797C17.915 4.77473 17.9334 5.0143 17.9334 5.24984C17.9334 7.96795 15.8585 10.1939 13.1971 10.4307C13.0224 10.4463 12.8492 10.3877 12.7198 10.2693C12.5904 10.1509 12.5167 9.98356 12.5167 9.80817V9.20817C12.5167 7.70731 12.2127 6.8193 11.6841 6.29074C11.1556 5.76217 10.2675 5.45817 8.76669 5.45817H8.16669C7.9913 5.45817 7.82398 5.38447 7.70558 5.25508C7.58718 5.12568 7.52861 4.95249 7.54415 4.77778Z" fill="#CDCED1"/>
            </svg>
        },
        {
            id: 7,
            name: 'User Notifications',
            route: '/user-notifications',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.09923 6.29057C1.57066 6.81914 1.26666 7.70715 1.26666 9.20801V12.958C1.26666 14.4589 1.57066 15.3469 2.09923 15.8754C2.6278 16.404 3.51581 16.708 5.01666 16.708H8.76666C10.2675 16.708 11.1555 16.404 11.6841 15.8754C12.2127 15.3469 12.5167 14.4589 12.5167 12.958V9.20801C12.5167 7.70715 12.2127 6.81914 11.6841 6.29057C11.1555 5.76201 10.2675 5.45801 8.76666 5.45801H5.01666C3.51581 5.45801 2.6278 5.76201 2.09923 6.29057ZM1.21535 5.40669C2.09303 4.52901 3.39252 4.20801 5.01666 4.20801H8.76666C10.3908 4.20801 11.6903 4.52901 12.568 5.40669C13.4457 6.28437 13.7667 7.58386 13.7667 9.20801V12.958C13.7667 14.5822 13.4457 15.8816 12.568 16.7593C11.6903 17.637 10.3908 17.958 8.76666 17.958H5.01666C3.39252 17.958 2.09303 17.637 1.21535 16.7593C0.337664 15.8816 0.0166626 14.5822 0.0166626 12.958V9.20801C0.0166626 7.58386 0.337664 6.28437 1.21535 5.40669Z" fill="#CDCED1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.90988 4.20902C10.4673 4.22764 11.7163 4.55512 12.568 5.40685C13.4197 6.25859 13.7472 7.50756 13.7658 9.06498C15.4504 8.61107 16.6834 7.07705 16.6834 5.24984C16.6834 5.07341 16.6691 4.90117 16.6426 4.74859C16.6411 4.73971 16.6397 4.73079 16.6385 4.72185C16.3869 2.78027 14.7328 1.2915 12.725 1.2915C10.8978 1.2915 9.36378 2.52447 8.90988 4.20902ZM7.54415 4.77778C7.78093 2.1164 10.0069 0.0415039 12.725 0.0415039C15.3627 0.0415039 17.539 1.996 17.8764 4.54797C17.915 4.77473 17.9334 5.0143 17.9334 5.24984C17.9334 7.96795 15.8585 10.1939 13.1971 10.4307C13.0224 10.4463 12.8492 10.3877 12.7198 10.2693C12.5904 10.1509 12.5167 9.98356 12.5167 9.80817V9.20817C12.5167 7.70731 12.2127 6.8193 11.6841 6.29074C11.1556 5.76217 10.2675 5.45817 8.76669 5.45817H8.16669C7.9913 5.45817 7.82398 5.38447 7.70558 5.25508C7.58718 5.12568 7.52861 4.95249 7.54415 4.77778Z" fill="#CDCED1"/>
                </svg>
        }
    ]
    const defaultOutcomingData = {
        head: 'All',
        search: {
            option: 'Transaction'
        },
        selects: {}
    };

    const [tableFilterOutcomingData, setTableFilterOutcomingData] = useState(defaultOutcomingData);

    const tableFilterData = {
        head: [
            {
                title: 'All',
            }, {
                title: 'Pending',
            }, {
                title: 'Cenceled',
            }, {
                title: 'Approved',
            }, {
                title: 'Bonuses',
            }, {
                title: 'Claimed',
            },
        ],
        search: {
            options: [{
                name: 'Transaction'
            }, {
                name: 'Hash'
            }]
        },
        selects: [
            {
                name: 'Tranx Type',
                defaultOption: 'Any Type',
                options: [{
                    name: 'Transaction'
                }, {
                    name: 'Hash'
                }]
            },
            {
                name: 'Date Within',
                defaultOption: 'All Time',
                options: [{
                    name: 'Transaction'
                }, {
                    name: 'Hash'
                }]
            }
        ]
    };

    let th = [
        {
            name: "Tranx ID",
            width: 15,
            mobileWidth: 25,
            id: 0,
        },
        {
            name: "From",
            width: 15,
            mobileWidth: 25,
            id: 1,
        },
        {
            name: "To",
            width: 15,
            mobileWidth: 25,
            id: 2,
        },
        {
            name: "Amount",
            width: 15,
            mobileSlide: true,
            id: 3,
        },
        {
            name: "Domination",
            width: 10,
            mobileSlide: true,
            id: 4,
        },
        {
            name: "Time",
            width: 10,
            mobileSlide: true,
            id: 5,
        },
        {
            name: "Tranx Type",
            width: 10,
            position: 'right',
            mobileSlide: true,
            id: 6,
        },
    ];

    let td = [
        {
            id:12123,
            hash: "0xae0cf2498c23422340xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            to: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
        {
            id:121223323,
            hash: "0xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c",
            to: "0xae0cf2498c0xae0cf2498c",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
        {
            id:1212323,
            hash: "0xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c",
            to: "0xae0cf2498c0xae0cf2498c",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
    ];


    let tableData;
    tableData = td.map((item) => {
        return(
            <>
                <div className="table-parent"  key={item.id} onClick={() => {
                    mobileExpandFunc(item.id)
                }}>
                    <div className="table">
                        <div className={`td col ${th[0].mobileWidth ? true : false }`} style={{width: `${mobile ? th[0].mobileWidth : th[0].width}%`}}>
                            <span>{item.id}</span>
                            <span>{item.hash}</span>
                        </div>
                        <div className={`td ${th[1].mobileWidth ? true : false }`} style={{width: `${mobile ? th[1].mobileWidth : th[1].width}%`}}>
                            <span>{item.from}</span>
                        </div>
                        <div className={`td ${th[2].mobileWidth ? true : false }`} style={{width: `${mobile ? th[2].mobileWidth : th[3].width}%`}}>
                            <span>{item.to}</span>
                        </div>
                        <div className={`td ${th[3].mobileWidth ? true : false }`} style={{width: `${mobile ? th[3].mobileWidth : th[3].width}%`}}>
                            <span>{item.amount}</span>
                        </div>
                        <div className={`td ${th[4].mobileWidth ? true : false }`} style={{width: `${mobile ? th[4].mobileWidth : th[4].width}%`}}>
                            <span>{item.domination}</span>
                        </div>
                        <div className={`td col ${th[5].mobileWidth ? true : false }`} style={{width: `${mobile ? th[5].mobileWidth : th[5].width}%`}}>
                            <span>{item.date}</span>
                            <span>{item.time}</span>
                        </div>
                        <div className={`td ${th[6].mobileWidth ? true : false }`} style={{width: `${mobile ? th[6].mobileWidth : th[6].width}%`}}>
                            <span>{item.type}</span>
                        </div>
                    </div>
                    <div className="icon-place">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className={`table-mobile ${mobileExpand == item.id ? 'active' : ''}`}>
                        <div className="table-mobile-content">
                            <div className="td">
                                <div className="mobile-ttl">{th[2].name}</div>
                                <span>{item.to}</span>
                            </div>
                            <div className="td">
                                <div className="mobile-ttl">{th[3].name}</div>
                                <span>{item.amount}</span>
                            </div>
                            <div className="td">
                                <div className="mobile-ttl">{th[4].name}</div>
                                <span>{item.domination}</span>
                            </div>
                            <div className="td col">
                                <div className="mobile-ttl">{th[5].name}</div>
                                <span>{item.date}</span>
                                <span>{item.time}</span>
                            </div>
                            <div className="td">
                                <div className="mobile-ttl">{th[6].name}</div>
                                <span>{item.type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
       <>
           <AdminHeader
                username={adminHeaderData.username}
                headSvg={adminHeaderData.svg}
                userImageUrl={adminHeaderData.userImageUrl}
           />
           <div className={`admin-container`}>
               <div className={`admin-sidebar`}>

               </div>
               <AdminPanel
                   sideBarData={
                       <BrowserRouter>
                           <Routes>
                               <Route path="/*" element={
                                   sideBar.map((item) => {
                                       return (
                                           <Button
                                               label={item.name}
                                               route={item.route}
                                               element={'side-admin-button'}
                                               svg={item.svg}
                                               customStyles={{width: '100%'}}
                                           />
                                       )
                                   })
                               } />
                           </Routes>
                       </BrowserRouter>
                   }
                   headerList={true}
                   tableData={tableData}
                   tableHead={th}
                   mobile={mobile}
                   tableFilterData={tableFilterData}
                   tableFilterOutcomingData={tableFilterOutcomingData}
                   setTableFilterOutcomingData={setTableFilterOutcomingData}
               />
           </div>
       </>
    );
});
