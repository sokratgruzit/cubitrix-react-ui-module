import { storiesOf } from "@storybook/react";
import { useState } from "react";
import "../assets/css/main-theme.css";
import { AdminPanel } from "../components/AdminPanel";
import { AdminHeader } from "../components/AdminHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "../components/Button";
import { useMobileWidth } from '../hooks/useMobileWidth';
import { Logo } from "../assets/svgs";
import { MoreButton } from "../components/MoreButton";

const stories = storiesOf("AdminPanel", module);

stories.add("AdminPanel", () => {
    const { mobile } = useMobileWidth();

    const [mobileExpand, setMobileExpand] = useState(null);
    const [tableExpand, setTableExpand] = useState(null);
    const [devAppObject, setDevAppObject] = useState({});

    let mobileExpandFunc = (id) => {
        if (window.innerWidth <= 1300) {
            if (id !== mobileExpand) {
                setMobileExpand(id);
            } else {
                setMobileExpand(null);
            }
        }
    }
    let tableExpandFunc = (id) => {
        if (id !== tableExpand) {
            setTableExpand(id);
        } else {
            setTableExpand(null);
        }
    }
    let dropdownData = [
        {
            id: 0,
            list: [
                {
                    title: "Mark All as Read",
                    onClick: () => console.log('mark all as read'),
                    svg: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.57891 1.57891C2.69097 0.466855 4.35504 0.041687 6.50002 0.041687H11.5C13.645 0.041687 15.3091 0.466855 16.4211 1.57891C17.5332 2.69097 17.9584 4.35504 17.9584 6.50002V11.5C17.9584 13.645 17.5332 15.3091 16.4211 16.4211C15.3091 17.5332 13.645 17.9584 11.5 17.9584H6.50002C4.35504 17.9584 2.69097 17.5332 1.57891 16.4211C0.466855 15.3091 0.041687 13.645 0.041687 11.5V6.50002C0.041687 4.35504 0.466855 2.69097 1.57891 1.57891ZM2.4628 2.4628C1.69985 3.22574 1.29169 4.47833 1.29169 6.50002V11.5C1.29169 13.5217 1.69985 14.7743 2.4628 15.5372C3.22574 16.3002 4.47833 16.7084 6.50002 16.7084H11.5C13.5217 16.7084 14.7743 16.3002 15.5372 15.5372C16.3002 14.7743 16.7084 13.5217 16.7084 11.5V6.50002C16.7084 4.47833 16.3002 3.22574 15.5372 2.4628C14.7743 1.69985 13.5217 1.29169 11.5 1.29169H6.50002C4.47833 1.29169 3.22574 1.69985 2.4628 2.4628Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.984 6.20011C13.2279 6.4444 13.2276 6.84013 12.9833 7.08399L8.25826 11.8007C8.01412 12.0444 7.61869 12.0442 7.37477 11.8003L5.01643 9.44194C4.77235 9.19786 4.77235 8.80213 5.01643 8.55805C5.26051 8.31398 5.65624 8.31398 5.90032 8.55805L7.8171 10.4748L12.1002 6.19933C12.3444 5.95547 12.7402 5.95582 12.984 6.20011Z"
                                fill="white"
                            />
                        </svg>
                    ),
                },
                {
                    title: "Delete All",
                    onClick: () => console.log('delete all'),
                    svg: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.13815 3.19472C4.80861 3.02602 6.47927 2.94165 8.15005 2.94165C10.9545 2.94165 13.7668 3.08439 16.5617 3.36136C16.9052 3.3954 17.156 3.70146 17.122 4.04495C17.088 4.38845 16.7819 4.63931 16.4384 4.60527C13.6833 4.33224 10.9122 4.19165 8.15005 4.19165C6.52113 4.19165 4.89209 4.27392 3.26286 4.43849L3.26103 4.43867L1.56103 4.60533C1.2175 4.63901 0.911707 4.38783 0.878027 4.0443C0.844348 3.70077 1.09553 3.39498 1.43906 3.3613L3.13815 3.19472Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.883 2.15388L6.69972 3.24526C6.64255 3.58567 6.32025 3.81528 5.97984 3.75812C5.63943 3.70095 5.40981 3.37865 5.46698 3.03824L5.65032 1.94657C5.65352 1.92755 5.65682 1.90764 5.66015 1.88748C5.71753 1.54091 5.80172 1.03247 6.14063 0.648157C6.53568 0.200179 7.13843 0.041748 7.90835 0.041748H10.0917C10.871 0.041748 11.4731 0.212914 11.8658 0.665453C12.2052 1.05654 12.2873 1.5668 12.3421 1.9075C12.3447 1.92408 12.3473 1.94026 12.3499 1.956L12.5329 3.03746C12.5905 3.3778 12.3613 3.70039 12.021 3.75799C11.6806 3.81558 11.358 3.58637 11.3004 3.24603L11.1165 2.15899C11.0468 1.73147 11.0027 1.57801 10.9217 1.48471C10.8769 1.43308 10.7207 1.29175 10.0917 1.29175H7.90835C7.26994 1.29175 7.11852 1.42915 7.07816 1.47492C7.00139 1.56197 6.95807 1.70822 6.883 2.15388Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.7487 5.99302C15.0932 6.01525 15.3544 6.31252 15.3321 6.65698L14.7903 15.0521L14.7891 15.0679C14.7672 15.3814 14.743 15.7262 14.6784 16.047C14.6114 16.3797 14.4934 16.7307 14.2541 17.0422C13.7531 17.6945 12.9006 17.9584 11.6751 17.9584H6.3251C5.09963 17.9584 4.24708 17.6945 3.7461 17.0422C3.50685 16.7307 3.38878 16.3797 3.32178 16.047C3.25717 15.7262 3.23303 15.3814 3.21107 15.0679L3.20973 15.0486L2.66807 6.65698C2.64583 6.31252 2.90705 6.01525 3.25151 5.99302C3.59597 5.97079 3.89324 6.232 3.91547 6.57646L4.45691 14.9647C4.45695 14.9653 4.45699 14.9658 4.45703 14.9664C4.48055 15.302 4.50045 15.5682 4.54718 15.8002C4.59268 16.0262 4.65586 16.1746 4.73744 16.2808C4.87813 16.464 5.22557 16.7084 6.3251 16.7084H11.6751C12.7746 16.7084 13.1221 16.464 13.2628 16.2808C13.3444 16.1746 13.4075 16.0262 13.453 15.8002C13.4998 15.5682 13.5197 15.302 13.5432 14.9664C13.5432 14.9658 13.5433 14.9653 13.5433 14.9647L14.0847 6.57646C14.107 6.232 14.4042 5.97079 14.7487 5.99302Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.9834 12.75C6.9834 12.4048 7.26322 12.125 7.6084 12.125H10.3834C10.7286 12.125 11.0084 12.4048 11.0084 12.75C11.0084 13.0952 10.7286 13.375 10.3834 13.375H7.6084C7.26322 13.375 6.9834 13.0952 6.9834 12.75Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29175 9.41675C6.29175 9.07157 6.57157 8.79175 6.91675 8.79175H11.0834C11.4286 8.79175 11.7084 9.07157 11.7084 9.41675C11.7084 9.76193 11.4286 10.0417 11.0834 10.0417H6.91675C6.57157 10.0417 6.29175 9.76193 6.29175 9.41675Z"
                                fill="white"
                            />
                        </svg>
                    ),
                },
            ],
        },
    ];
    const typeColors = [
        {
            id: 1,
            name: 'All Deposit',
            color: '#3D5AFE'
        },
        {
            id: 2,
            name: 'Withdraw',
            color: '#FFA726'
        },
        {
            id: 3,
            name: 'Transfer',
            color: '#57D29E'
        }
    ];
    const adminHeaderData = {
        username: 'Michael',
        svg: <Logo />,
        userImageUrl: 'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_512x512.png',
        authsDropdown: [
            {
                id: 1,
                title: '',
                list: [
                    {
                        id: 1,
                        title: "LOGOUT",
                        onClick: () => console.log('logout'),
                        svg: (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.57891 1.57891C2.69097 0.466855 4.35504 0.041687 6.50002 0.041687H11.5C13.645 0.041687 15.3091 0.466855 16.4211 1.57891C17.5332 2.69097 17.9584 4.35504 17.9584 6.50002V11.5C17.9584 13.645 17.5332 15.3091 16.4211 16.4211C15.3091 17.5332 13.645 17.9584 11.5 17.9584H6.50002C4.35504 17.9584 2.69097 17.5332 1.57891 16.4211C0.466855 15.3091 0.041687 13.645 0.041687 11.5V6.50002C0.041687 4.35504 0.466855 2.69097 1.57891 1.57891ZM2.4628 2.4628C1.69985 3.22574 1.29169 4.47833 1.29169 6.50002V11.5C1.29169 13.5217 1.69985 14.7743 2.4628 15.5372C3.22574 16.3002 4.47833 16.7084 6.50002 16.7084H11.5C13.5217 16.7084 14.7743 16.3002 15.5372 15.5372C16.3002 14.7743 16.7084 13.5217 16.7084 11.5V6.50002C16.7084 4.47833 16.3002 3.22574 15.5372 2.4628C14.7743 1.69985 13.5217 1.29169 11.5 1.29169H6.50002C4.47833 1.29169 3.22574 1.69985 2.4628 2.4628Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.984 6.20011C13.2279 6.4444 13.2276 6.84013 12.9833 7.08399L8.25826 11.8007C8.01412 12.0444 7.61869 12.0442 7.37477 11.8003L5.01643 9.44194C4.77235 9.19786 4.77235 8.80213 5.01643 8.55805C5.26051 8.31398 5.65624 8.31398 5.90032 8.55805L7.8171 10.4748L12.1002 6.19933C12.3444 5.95547 12.7402 5.95582 12.984 6.20011Z"
                                    fill="white"
                                />
                            </svg>
                        ),
                    },
                ],
            }
        ]
    }
    const sideBar = [
        {
            id: 1,
            name: 'Dashboard',
            route: '/dashboard',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2672 0.583658C10.7398 0.163715 11.397 0.0415039 12.1083 0.0415039H15.475C16.1863 0.0415039 16.8435 0.163715 17.3162 0.583658C17.8077 1.02035 17.9583 1.64856 17.9583 2.3165V6.09984C17.9583 6.76731 17.8079 7.39649 17.3153 7.83245C16.8417 8.25154 16.184 8.37073 15.4731 8.3665H12.1083C11.3993 8.3665 10.7414 8.2472 10.2681 7.82828C9.77507 7.39197 9.625 6.76231 9.625 6.0915V2.3165C9.625 1.64856 9.77568 1.02035 10.2672 0.583658ZM11.0974 1.5181C10.991 1.61266 10.875 1.80944 10.875 2.3165V6.0915C10.875 6.60403 10.9916 6.79938 11.0965 6.89222C11.2211 7.00247 11.4924 7.1165 12.1083 7.1165H15.4789C16.0923 7.12036 16.3629 7.00606 16.4868 6.89639C16.5921 6.80319 16.7083 6.60736 16.7083 6.09984V2.3165C16.7083 1.80944 16.5923 1.61266 16.4859 1.5181C16.3606 1.40679 16.0887 1.2915 15.475 1.2915H12.1083C11.4946 1.2915 11.2227 1.40679 11.0974 1.5181Z" fill="#CDCED1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2403 10.2403C10.7135 9.76724 11.3832 9.625 12.1083 9.625H15.475C16.2001 9.625 16.8699 9.76724 17.343 10.2403C17.8161 10.7135 17.9583 11.3832 17.9583 12.1083V15.475C17.9583 16.2001 17.8161 16.8699 17.343 17.343C16.8699 17.8161 16.2001 17.9583 15.475 17.9583H12.1083C11.3832 17.9583 10.7135 17.8161 10.2403 17.343C9.76724 16.8699 9.625 16.2001 9.625 15.475V12.1083C9.625 11.3832 9.76724 10.7135 10.2403 10.2403ZM11.1242 11.1242C10.9994 11.249 10.875 11.5084 10.875 12.1083V15.475C10.875 16.0749 10.9994 16.3343 11.1242 16.4591C11.249 16.5839 11.5084 16.7083 12.1083 16.7083H15.475C16.0749 16.7083 16.3343 16.5839 16.4591 16.4591C16.5839 16.3343 16.7083 16.0749 16.7083 15.475V12.1083C16.7083 11.5084 16.5839 11.249 16.4591 11.1242C16.3343 10.9994 16.0749 10.875 15.475 10.875H12.1083C11.5084 10.875 11.249 10.9994 11.1242 11.1242Z" fill="#CDCED1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.683852 0.583658C1.15649 0.163715 1.81373 0.0415039 2.52502 0.0415039H5.89169C6.60298 0.0415039 7.26021 0.163715 7.73285 0.583658C8.22434 1.02035 8.37502 1.64856 8.37502 2.3165V6.09984C8.37502 6.76731 8.22455 7.39649 7.73194 7.83245C7.2584 8.25154 6.60067 8.37073 5.88983 8.3665H2.52502C1.81596 8.3665 1.15811 8.2472 0.684765 7.82828C0.19176 7.39197 0.041687 6.76231 0.041687 6.0915V2.3165C0.041687 1.64856 0.192364 1.02035 0.683852 0.583658ZM1.5141 1.5181C1.40768 1.61266 1.29169 1.80944 1.29169 2.3165V6.0915C1.29169 6.60403 1.40828 6.79938 1.51319 6.89222C1.63776 7.00247 1.90909 7.1165 2.52502 7.1165H5.89562C6.50898 7.12036 6.7796 7.00606 6.90351 6.89639C7.00883 6.80319 7.12502 6.60736 7.12502 6.09984V2.3165C7.12502 1.80944 7.00903 1.61266 6.9026 1.5181C6.77733 1.40679 6.5054 1.2915 5.89169 1.2915H2.52502C1.91131 1.2915 1.63938 1.40679 1.5141 1.5181Z" fill="#CDCED1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.657037 10.2403C1.13015 9.76724 1.79992 9.625 2.52502 9.625H5.89169C6.61679 9.625 7.28656 9.76724 7.75967 10.2403C8.23278 10.7135 8.37502 11.3832 8.37502 12.1083V15.475C8.37502 16.2001 8.23278 16.8699 7.75967 17.343C7.28656 17.8161 6.61679 17.9583 5.89169 17.9583H2.52502C1.79992 17.9583 1.13015 17.8161 0.657037 17.343C0.183928 16.8699 0.041687 16.2001 0.041687 15.475V12.1083C0.041687 11.3832 0.183928 10.7135 0.657037 10.2403ZM1.54092 11.1242C1.41611 11.249 1.29169 11.5084 1.29169 12.1083V15.475C1.29169 16.0749 1.41611 16.3343 1.54092 16.4591C1.66573 16.5839 1.92512 16.7083 2.52502 16.7083H5.89169C6.49159 16.7083 6.75098 16.5839 6.87579 16.4591C7.00059 16.3343 7.12502 16.0749 7.12502 15.475V12.1083C7.12502 11.5084 7.00059 11.249 6.87579 11.1242C6.75098 10.9994 6.49159 10.875 5.89169 10.875H2.52502C1.92512 10.875 1.66573 10.9994 1.54092 11.1242Z" fill="#CDCED1" />
            </svg>,
            subMenu: []
        },
        {
            id: 2,
            name: 'Transactions',
            route: '/transactions',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0833 10.4915L10.9083 14.6748" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.916687 10.4917L15.0834 10.4917" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.916687 5.5083L5.09169 1.32497" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.0834 5.5083L0.916687 5.5083" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
            subMenu: []
        },
        {
            id: 3,
            name: 'User List',
            route: '/users-list',
            svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.63411 9.05817C7.55078 9.04984 7.45078 9.04984 7.35911 9.05817C5.37578 8.9915 3.80078 7.3665 3.80078 5.3665C3.80078 3.32484 5.45078 1.6665 7.50078 1.6665C9.54245 1.6665 11.2008 3.32484 11.2008 5.3665C11.1924 7.3665 9.61745 8.9915 7.63411 9.05817Z" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6747 3.3335C15.2914 3.3335 16.5914 4.64183 16.5914 6.25016C16.5914 7.82516 15.3414 9.1085 13.7831 9.16683C13.7164 9.1585 13.6414 9.1585 13.5664 9.16683" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.46758 12.1335C1.45091 13.4835 1.45091 15.6835 3.46758 17.0252C5.75924 18.5585 9.51758 18.5585 11.8092 17.0252C13.8259 15.6752 13.8259 13.4752 11.8092 12.1335C9.52591 10.6085 5.76758 10.6085 3.46758 12.1335Z" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.2832 16.6665C15.8832 16.5415 16.4499 16.2998 16.9165 15.9415C18.2165 14.9665 18.2165 13.3582 16.9165 12.3832C16.4582 12.0332 15.8999 11.7998 15.3082 11.6665" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
            subMenu: []
        },
        {
            id: 4,
            name: 'Accounts',
            route: '/accounts',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.09923 6.29057C1.57066 6.81914 1.26666 7.70715 1.26666 9.20801V12.958C1.26666 14.4589 1.57066 15.3469 2.09923 15.8754C2.6278 16.404 3.51581 16.708 5.01666 16.708H8.76666C10.2675 16.708 11.1555 16.404 11.6841 15.8754C12.2127 15.3469 12.5167 14.4589 12.5167 12.958V9.20801C12.5167 7.70715 12.2127 6.81914 11.6841 6.29057C11.1555 5.76201 10.2675 5.45801 8.76666 5.45801H5.01666C3.51581 5.45801 2.6278 5.76201 2.09923 6.29057ZM1.21535 5.40669C2.09303 4.52901 3.39252 4.20801 5.01666 4.20801H8.76666C10.3908 4.20801 11.6903 4.52901 12.568 5.40669C13.4457 6.28437 13.7667 7.58386 13.7667 9.20801V12.958C13.7667 14.5822 13.4457 15.8816 12.568 16.7593C11.6903 17.637 10.3908 17.958 8.76666 17.958H5.01666C3.39252 17.958 2.09303 17.637 1.21535 16.7593C0.337664 15.8816 0.0166626 14.5822 0.0166626 12.958V9.20801C0.0166626 7.58386 0.337664 6.28437 1.21535 5.40669Z" fill="#CDCED1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.90988 4.20902C10.4673 4.22764 11.7163 4.55512 12.568 5.40685C13.4197 6.25859 13.7472 7.50756 13.7658 9.06498C15.4504 8.61107 16.6834 7.07705 16.6834 5.24984C16.6834 5.07341 16.6691 4.90117 16.6426 4.74859C16.6411 4.73971 16.6397 4.73079 16.6385 4.72185C16.3869 2.78027 14.7328 1.2915 12.725 1.2915C10.8978 1.2915 9.36378 2.52447 8.90988 4.20902ZM7.54415 4.77778C7.78093 2.1164 10.0069 0.0415039 12.725 0.0415039C15.3627 0.0415039 17.539 1.996 17.8764 4.54797C17.915 4.77473 17.9334 5.0143 17.9334 5.24984C17.9334 7.96795 15.8585 10.1939 13.1971 10.4307C13.0224 10.4463 12.8492 10.3877 12.7198 10.2693C12.5904 10.1509 12.5167 9.98356 12.5167 9.80817V9.20817C12.5167 7.70731 12.2127 6.8193 11.6841 6.29074C11.1556 5.76217 10.2675 5.45817 8.76669 5.45817H8.16669C7.9913 5.45817 7.82398 5.38447 7.70558 5.25508C7.58718 5.12568 7.52861 4.95249 7.54415 4.77778Z" fill="#CDCED1" />
            </svg>,
            subMenu: []
        },
        {
            id: 4,
            name: 'Settings',
            route: '/settings',
            svg: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.5C10.663 11.5 11.2989 11.2366 11.7678 10.7678C12.2366 10.2989 12.5 9.66304 12.5 9C12.5 8.33696 12.2366 7.70107 11.7678 7.23223C11.2989 6.76339 10.663 6.5 10 6.5C9.33696 6.5 8.70107 6.76339 8.23223 7.23223C7.76339 7.70107 7.5 8.33696 7.5 9C7.5 9.66304 7.76339 10.2989 8.23223 10.7678C8.70107 11.2366 9.33696 11.5 10 11.5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.66602 9.73336V8.26669C1.66602 7.40003 2.37435 6.68336 3.24935 6.68336C4.75768 6.68336 5.37435 5.6167 4.61602 4.30836C4.18268 3.55836 4.44102 2.58336 5.19935 2.15003L6.64102 1.32503C7.29935 0.933362 8.14935 1.1667 8.54102 1.82503L8.63268 1.98336C9.38268 3.2917 10.616 3.2917 11.3743 1.98336L11.466 1.82503C11.8577 1.1667 12.7077 0.933362 13.366 1.32503L14.8077 2.15003C15.566 2.58336 15.8243 3.55836 15.391 4.30836C14.6327 5.6167 15.2493 6.68336 16.7577 6.68336C17.6243 6.68336 18.341 7.39169 18.341 8.26669V9.73336C18.341 10.6 17.6327 11.3167 16.7577 11.3167C15.2493 11.3167 14.6327 12.3834 15.391 13.6917C15.8243 14.45 15.566 15.4167 14.8077 15.85L13.366 16.675C12.7077 17.0667 11.8577 16.8334 11.466 16.175L11.3743 16.0167C10.6243 14.7084 9.39102 14.7084 8.63268 16.0167L8.54102 16.175C8.14935 16.8334 7.29935 17.0667 6.64102 16.675L5.19935 15.85C4.8361 15.6409 4.57067 15.2961 4.4613 14.8915C4.35194 14.4869 4.40758 14.0554 4.61602 13.6917C5.37435 12.3834 4.75768 11.3167 3.24935 11.3167C2.37435 11.3167 1.66602 10.6 1.66602 9.73336Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
            subMenu: [
                {
                    name: 'Admin Management',
                    route: '/admin-management',
                },
            ]
        },
    ];

    const [tableFilterOutcomingData, setTableFilterOutcomingData] = useState({});

    const tableFilterData = {
        search: {
            options: [
                {
                    name: 'Account Owner',
                    value: 'account_owner'
                },
                {
                    name: 'Account Type Id',
                    value: 'account_type_id'
                },
                {
                    name: 'Address',
                    value: 'address'
                }
            ]
        },
        selects: [
            {
                name: 'Tranx Type',
                value: 'tx_type',
                options: [
                    {
                        name: 'Transaction',
                        value: 'transaction'
                    },
                    {
                        name: 'Hash',
                        value: 'hash'
                    }
                ]
            },
            {
                name: 'Date Within',
                value: 'createdAt',
                options: [
                    {
                        name: 'Transaction',
                        value: 'transaction'
                    },
                    {
                        name: 'Hash',
                        value: 'hash'
                    }
                ]
            },
            {
                name: 'Transaction Status',
                value: 'ts_status',
                options: [
                    {
                        name: 'Pending',
                        value: 'pending'
                    },
                    {
                        name: 'Cenceled',
                        value: 'canceled'
                    },
                    {
                        name: 'Approved',
                        value: 'approved'
                    },
                    {
                        name: 'Bonuses',
                        value: 'bonuses'
                    },
                    {
                        name: 'Claimed',
                        value: 'claimed'
                    }
                ]
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
            id: 12123,
            hash: "0xae0cf2498c23422340xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            to: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'Transfer',

        },
        {
            id: 121223323,
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
            id: 1212323,
            hash: "0xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c",
            to: "0xae0cf2498c0xae0cf2498c",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'Withdraw',

        },
    ];

    let changeDevObject = (key, name, clear) => {
        if(clear !== true) {
            let data = devAppObject;
            data[key] = name;
            console.log(data);
            setDevAppObject(data);
            console.log(devAppObject)
        }
    };

    let developerApiArray = [
        {
            title: 'Trade',
            items: [
                {
                    description: 'Get trade items from basdla bla bla',
                    route: 'api/trade/blaasd',
                    type: 'POST',
                    inputs: [
                        {
                            title: 'Name',
                            name: 'name',
                            description: 'Name of trade',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.name);
                                changeDevObject(e.target.name,e.target.value,false)
                            }
                        },
                        {
                            title: 'Last Name',
                            name: 'last_name',
                            description: 'Name of trade',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                                console.log(e.target.name);
                                changeDevObject(e.target.name,e.target.value,false)
                            }
                        }
                    ]
                },
                {
                    description: 'Get trade items from bla bla bla',
                    route: 'api/trade/blaaaaa',
                    type: 'GET',
                    inputs: [
                        {
                            title: 'Name',
                            name: 'last_nameqqqqqqqq',
                            description: 'Name of trade',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        },
                        {
                            title: 'Last Name',
                            name: 'last_nameqqqqq',
                            description: 'Name of trade',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Stake',
            items: [
                {
                    description: 'Get trade items from bla bla bla',
                    route: 'api/trade/baaaaala',
                    type: 'GET',
                    inputs: [
                        {
                            title: 'Name',
                            description: 'Name of trade',
                            name: 'last_nameqwa',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        },
                        {
                            title: 'Last Name',
                            description: 'Name of trade',
                            name: 'last_namedsssss',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        }
                    ]
                },
                {
                    description: 'Get trade items from bla bla bla',
                    route: 'api/trade/bla',
                    type: 'POST',
                    inputs: [
                        {
                            title: 'Name',
                            description: 'Name of trade',
                            name: 'last_nameaaa',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        },
                        {
                            title: 'Last Name',
                            description: 'Name of trade',
                            name: 'last_nameasd',
                            value:'',
                            onChange: (e) => {
                                console.log(e.target.value);
                            }
                        }
                    ]
                }
            ]
        }
    ];

    let tableData;
    tableData = td.map((item, index) => {
        return (
            <div
                className={`table-parent ${mobileExpand == item.id ? 'active' : ''}`}
                onClick={() => {
                    mobileExpandFunc(item.id)
                }}
                key={index}
            >
                <div className="table">
                    <div className={`td col ${th[0].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[0].mobileWidth : th[0].width}%` }}>
                        <span>{item.id}</span>
                        <span>{item.hash}</span>
                    </div>
                    <div onClick={() => { tableExpandFunc(item.id) }} className={`td expand ${tableExpand == item.id ? 'active' : ''} ${th[1].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[1].mobileWidth : th[1].width}%` }}>
                        <div>
                            <span>
                                {item.from}
                            </span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.70095 5.6665L5.52859 1.83887C5.98063 1.38683 6.72032 1.38683 7.17236 1.83887L11 5.6665" stroke="#9C9DA3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={`td-expand`}>
                            <div><i>Loan</i>Name <span>23 Eth</span></div>
                            <div>Name 1</div>
                            <div>Name 3</div>
                        </div>
                    </div>
                    <div className={`td ${th[2].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[2].mobileWidth : th[3].width}%` }}>
                        <span>{item.to}</span>
                    </div>
                    <div className={`td ${th[3].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[3].mobileWidth : th[3].width}%` }}>
                        <span>{item.amount}</span>
                    </div>
                    <div className={`td ${th[4].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[4].mobileWidth : th[4].width}%` }}>
                        <span>{item.domination}</span>
                    </div>
                    <div className={`td col ${th[5].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[5].mobileWidth : th[5].width}%` }}>
                        <span>{item.date}</span>
                        <span>{item.time}</span>
                    </div>
                    <div className={`td ${th[6].mobileWidth ? true : false}`} style={{ width: `${mobile ? th[6].mobileWidth : th[6].width}%` }}>
                        <span
                            className={`alert-status-box 
                            ${item.type === 'All Deposit' && 'alert-blue'} 
                            ${item.type === 'Withdraw' && 'alert-yellow'}
                            ${item.type === 'Transfer' && 'alert-green'} 
                            font-14`}
                        >
                            {item.type}
                        </span>
                    </div>
                </div>
                <div className="table-more">
                    <MoreButton dropdownData={dropdownData} />
                </div>
                <div className="icon-place">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className={`table-mobile`}>
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
                        <div className="td type">
                            <div className="mobile-ttl">{th[6].name}</div>
                            <span
                                className={`alert-status-box 
                                ${item.type === 'All Deposit' && 'alert-status-blue'} 
                                ${item.type === 'Withdraw' && 'alert-status-yellow'}
                                ${item.type === 'Transfer' && 'alert-status-green'} 
                                font-14`}
                            >
                                {item.type}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <AdminHeader
                username={adminHeaderData.username}
                headSvg={adminHeaderData.svg}
                userImageUrl={adminHeaderData.userImageUrl}
                authsDropdown={adminHeaderData.authsDropdown}
            />
            <div className={`admin-container`}>
                <div className={`admin-sidebar`}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/*" element={
                                sideBar.map((item) => {
                                    return (
                                        <Button
                                            key={item.id}
                                            id={item.id}
                                            label={item.name}
                                            route={item.route}
                                            element={'side-admin-button'}
                                            svg={item.svg}
                                            customStyles={{ width: '100%' }}
                                            subMenu={item.subMenu}
                                            active={location.pathname === item.route}
                                            subMenuActive={location.pathname.includes(item.subMenu?.route)}
                                        />
                                    )
                                })
                            } />
                        </Routes>
                    </BrowserRouter>

                </div>
                <AdminPanel
                    sideBarData={
                        <BrowserRouter>
                            <Routes>
                                <Route path="/*" element={
                                    sideBar.map((item, index) => {
                                        return (
                                            <Button
                                                key={index}
                                                label={item.name}
                                                route={item.route}
                                                element={'side-admin-button'}
                                                svg={item.svg}
                                                customStyles={{ width: '100%' }}
                                            />
                                        )
                                    })
                                } />
                            </Routes>
                        </BrowserRouter>
                    }
                    //    tableData={tableData}
                    handleViewAll={() => console.log('view all')}
                    tableFilter={true}
                    tableHead={th}
                    adminPage={'developerApi'}
                    tableHeaderButtons={(
                        <>
                            <Button
                                label={'Hihi'}
                                size={'btn-lg'}
                                type={'btn-primary'}
                                arrow={'arrow-none'}
                                element={'button'}
                                onClick={() => console.log('hi')}
                                customStyles={{ margin: '0' }}
                            />
                        </>
                    )}
                    pageLabel={'Transactions'}
                    mobile={mobile}
                    tableHeader={2}
                    tableFilterData={tableFilterData}
                    setTableFilterOutcomingData={setTableFilterOutcomingData}
                    paginationCurrent={1}
                    tableSearchSelect={true}
                    paginationTotal={20}
                    paginationEvent={() => {
                        console.log('hi')
                    }}
                    developersApi={developerApiArray}
                    developersApiValues={devAppObject}
                />
            </div>
        </>
    );
});
