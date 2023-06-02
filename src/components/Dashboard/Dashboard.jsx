import React from "react";

import { Link, useLocation } from "react-router-dom";

import { DashboardTable, CardSlider } from "./components";
import "./Dashboard.css";

export const Dashboard = () => {
  const location = {
    pathname: "/",
  };

  const links = [
    {
      to: "/",
      label: "Overview",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg ${location.pathname === "/" ? "active" : ""}`}
        >
          <path
            d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
            stroke="#141726"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.99V14.99"
            stroke="#141726"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      to: "#",
      label: "Transaction History",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg ${location.pathname === "#" ? "active" : ""}`}
        >
          <g opacity="0.6">
            <path
              d="M12 22.75C11.22 22.75 10.46 22.35 9.94002 21.65L8.93002 20.3C8.72002 20.02 8.44002 19.86 8.14002 19.84C7.84002 19.83 7.54002 19.96 7.30002 20.21C5.86002 21.75 4.75002 21.63 4.22002 21.42C3.68002 21.21 2.77002 20.52 2.77002 18.3V7.04C2.77002 2.6 4.05002 1.25 8.24002 1.25H15.8C19.99 1.25 21.27 2.6 21.27 7.04V18.3C21.27 20.51 20.36 21.2 19.82 21.42C19.29 21.63 18.19 21.75 16.74 20.21C16.5 19.95 16.2 19.82 15.89 19.84C15.59 19.86 15.3 20.02 15.09 20.3L14.08 21.65C13.54 22.35 12.78 22.75 12 22.75ZM8.08002 18.33H8.21002C8.95002 18.37 9.65002 18.76 10.12 19.39L11.13 20.74C11.62 21.39 12.37 21.39 12.86 20.74L13.87 19.39C14.35 18.76 15.04 18.37 15.79 18.33C16.54 18.29 17.27 18.6 17.81 19.18C18.57 19.99 19.06 20.09 19.24 20.02C19.48 19.92 19.74 19.34 19.74 18.3V7.04C19.74 3.43 19.11 2.75 15.77 2.75H8.21002C4.87002 2.75 4.24002 3.43 4.24002 7.04V18.3C4.24002 19.35 4.50002 19.93 4.74002 20.02C4.91002 20.09 5.41002 19.99 6.17002 19.18C6.72002 18.63 7.39002 18.33 8.08002 18.33Z"
              fill="white"
            />
            <path
              d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
              fill="white"
            />
          </g>
        </svg>
      ),
    },
  ];

  const transactionsData = [
    {
      _id: 13123123123,
      account: "CPL",
      time: "29.05.2023",
      amount: "15.00 CPL",
      type: "Top up balance",
    },
    {
      _id: 13123123123999,
      account: "CPL",
      time: "29.05.2023",
      amount: "15.00 CPL",
      type: "Top up balance",
    },
    {
      _id: 13123999123123,
      account: "CPL",
      time: "29.05.2023",
      amount: "15.00 CPL",
      type: "Top up balance",
    },
  ];

  const transactionHeader = [
    {
      name: "Account",
      width: 25,
      id: 0,
    },
    {
      name: "Type",
      width: 25,
      // mobileWidth: 45,
      id: 1,
    },
    {
      name: "Time",
      width: 25,
      id: 2,
    },
    {
      name: "Amount",
      width: 25,
      mobileWidth: 45,
      id: 3,
    },
  ];

  const referralCodeHeader = [
    {
      name: "My Referral Code",
      width: 20,
      id: 0,
      height: "40px",
    },
    {
      name: "User Address",
      width: 20,
      mobileWidth: 45,
      id: 1,
      height: "40px",
    },
    {
      name: "User Level",
      width: 20,
      id: 2,
      height: "40px",
    },
    {
      name: "Rate",
      width: 20,
      // mobileWidth: 45,
      id: 3,
      height: "40px",
    },
    {
      name: "Total Earned",
      width: 20,
      id: 3,
      height: "40px",
    },
  ];

  const referralHistoryHeader = [
    {
      name: "My Referral Code",
      width: 20,
      id: 0,
      height: "40px",
    },
    {
      name: "User Address",
      width: 20,
      mobileWidth: 45,
      id: 1,
      height: "40px",
    },
    {
      name: "User Level",
      width: 20,
      id: 2,
      height: "40px",
    },
    {
      name: "Rate",
      width: 20,
      id: 3,
      height: "40px",
    },
    {
      name: "Total Earned",
      width: 20,
      id: 3,
      height: "40px",
    },
  ];

  const referralCardsData = [
    {
      title: "Uni",
      active: true,
      data: [
        {
          title: "Level User",
          value: "2",
        },
        {
          title: "Total Comission",
          value: "4",
        },
      ],
    },
    {
      title: "Binary",
      data: [
        {
          title: "Level User",
          value: "2",
        },
        {
          title: "Total Comission",
          value: "7",
        },
      ],
    },
  ];

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-sidebar-container">
        <div className="dashboard-sidebar-links">
          {links?.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`font-16 dashboard-sidebar-link ${
                location.pathname === item.to ? "active" : ""
              }`}
            >
              {item.svg}
              {item.label}
            </Link>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-footer-support font-14">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 22.3199C7.72 22.3199 7.43 22.2499 7.17 22.1099C6.6 21.8099 6.25 21.2099 6.25 20.5699V19.1499C3.23 18.8399 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.97 22.0299C8.68 22.2199 8.34 22.3199 8 22.3199ZM7 3.17994C4.42 3.17994 2.75 4.84994 2.75 7.42994V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799C7.41 17.6799 7.75 18.0199 7.75 18.4299V20.5599C7.75 20.6899 7.83 20.7499 7.88 20.7799C7.93 20.8099 8.03 20.8399 8.14 20.7699L12.59 17.8099C12.71 17.7299 12.86 17.6799 13.01 17.6799H17.01C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42994C21.26 4.84994 19.59 3.17994 17.01 3.17994H7Z"
                fill="rgba(255, 255, 255, .6)"
              />
              <path
                d="M11.9998 12.1104C11.5898 12.1104 11.2498 11.7704 11.2498 11.3604V11.1504C11.2498 9.99035 12.0998 9.42035 12.4198 9.20035C12.7898 8.95035 12.9098 8.78035 12.9098 8.52035C12.9098 8.02035 12.4998 7.61035 11.9998 7.61035C11.4998 7.61035 11.0898 8.02035 11.0898 8.52035C11.0898 8.93035 10.7498 9.27035 10.3398 9.27035C9.92984 9.27035 9.58984 8.93035 9.58984 8.52035C9.58984 7.19035 10.6698 6.11035 11.9998 6.11035C13.3298 6.11035 14.4098 7.19035 14.4098 8.52035C14.4098 9.66035 13.5698 10.2304 13.2598 10.4404C12.8698 10.7004 12.7498 10.8704 12.7498 11.1504V11.3604C12.7498 11.7804 12.4098 12.1104 11.9998 12.1104Z"
                fill="rgba(255, 255, 255, .6)"
              />
              <path
                d="M12 14.6001C11.9016 14.6002 11.8042 14.5809 11.7133 14.5434C11.6224 14.5059 11.5397 14.4508 11.4701 14.3814C11.4004 14.3119 11.3452 14.2294 11.3074 14.1386C11.2696 14.0478 11.2501 13.9504 11.25 13.8521C11.2499 13.7537 11.2691 13.6563 11.3066 13.5653C11.3442 13.4744 11.3992 13.3918 11.4687 13.3221C11.5381 13.2525 11.6206 13.1972 11.7114 13.1594C11.8023 13.1217 11.8996 13.1022 11.998 13.1021C12.1966 13.1018 12.3873 13.1804 12.5279 13.3207C12.6686 13.461 12.7477 13.6514 12.748 13.8501C12.7483 14.0487 12.6696 14.2393 12.5293 14.38C12.3891 14.5206 12.1986 14.5998 12 14.6001Z"
                fill="rgba(255, 255, 255, .6)"
              />
            </svg>
            Help & Support
          </div>
          <div className="sidebar-footer-copyright font-14">
            <Link to="#">&copy; 2023 All rights reserved</Link>
          </div>
        </div>
      </div>
      <div className="dashboard-main-container">
        <CardSlider />
        <DashboardTable
          type={"transactions"}
          header={"Transactions"}
          description={`Total number of operations: ${(
            <span style={{ color: "#FFF" }}>54</span>
          )}`}
          rightPanelData={[
            {
              title: "Recieved",
              value: "2,032.03",
            },
            {
              title: "Spent",
              value: "-2,012.56",
            },
          ]}
          data={transactionsData}
          footer={{
            link: "/transactions",
            label: "All transactions",
          }}
          tableHeader={transactionHeader}
        />
        <DashboardTable
          type={"referral-code"}
          header={"Referral Code"}
          description={`You can create multiple referral codes to attract traders`}
          data={transactionsData}
          footer={{
            link: "/referral",
            label: "All Code",
          }}
          tableHeader={referralCodeHeader}
          referralCardsData={referralCardsData}
        />
        <DashboardTable
          type={"referral-history"}
          header={"Referral Revates History"}
          description={`The airdrop history of your weekly referral rebates.`}
          data={transactionsData}
          footer={{
            link: "/referral",
            label: "All Code",
          }}
          tableHeader={referralHistoryHeader}
        />
      </div>
    </div>
  );
};
