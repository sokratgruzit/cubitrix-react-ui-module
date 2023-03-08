import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Referral } from "../components/Referral";
import { Header } from "../components/Header";
import { BrowserRouter } from "react-router-dom";

import { Button } from "../components/Button";
import { StickyNoteIcon, AddSquareIcon, NoHistoryIcon } from "../assets/svgs";
import { useMobileWidth } from "../hooks/useMobileWidth";
import { useState, useEffect } from "react";
import { Popup } from "../components/Popup";
import { PopupElement } from "../components/PopupElement";
import { LevelSystem } from "../components/LevelSystem";

const stories = storiesOf("Referral", module);

stories.add("Referral", () => {
  const [createCodePopupActive, setCreateCodePopupActive] = useState(false);
  const [levelSystemPopupActive, setLevelSystemPopupActive] = useState(false);
  const [createCodeObject, setCreateCodeObject] = useState({});
  const [mobileExpand, setMobileExpand] = useState(null);

  let mobileExpandFunc = (id) => {
    if (width <= 1300) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };
  const handleCreateCode = () => setCreateCodePopupActive(true);

  const { width } = useMobileWidth();
  const referalCards = [
    {
      label: "Create Code To Start",
      description: "Your Rebate Rate",
      button: (
        <Button
          element={"referral-button"}
          label={"Create Code"}
          icon={<AddSquareIcon color={"#FFF"} />}
          active={true}
          onClick={handleCreateCode}
        />
      ),
    },
    {
      label: "Create Code To Start",
      description: "Your Tier",
      button: (
        <Button
          element={"referral-button"}
          label={"Level System"}
          icon={<StickyNoteIcon />}
          onClick={() => setLevelSystemPopupActive(true)}
        />
      ),
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/referral/get_referral_options")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);

  let th = [
    {
      name: "My Referral Code",
      width: 15,
      mobileWidth: 45,
      id: 0,
    },
    {
      name: "User Address",
      width: 15,
      mobileWidth: 45,
      id: 1,
    },
    {
      name: "User Level",
      width: 15,
      id: 2,
    },
    {
      name: "Rate",
      width: 15,
      id: 3,
    },
    {
      name: "Total Earned",
      width: 15,
      id: 4,
    },
  ];

  let td = [
    {
      id: 12123,
      referal_code: "REF_lMJm0PoJ1yS3qyeGtVk",
      user_address: "0xae0cf2498c...",
      user_level: "VIP 1",
      rate: "5%",
      total_earned: "1,132,000.1",
    },
    {
      id: 121223323,
      referal_code: "REF_lMJm0PoJ1yS3qyeGtVk",
      user_address: "0xae0cf2498c...",
      user_level: "VIP 1",
      rate: "5%",
      total_earned: "1,132,000.1",
    },
    {
      id: 1212323,
      referal_code: "REF_lMJm0PoJ1yS3qyeGtVk",
      user_address: "0xae0cf2498c...",
      user_level: "VIP 1",
      rate: "5%",
      total_earned: "1,132,000.1",
    },
  ];

  let handleChange = (e) => {
    const { name, value } = e.target;
    setCreateCodeObject((prev) => ({ ...prev, [name]: value }));
  };

  const inputs = [
    {
      title: "",
      name: "code",
      placeholder: "Enter Code",
      required: true,
      validation: "text",
      successText: "it is valid",
      failureText: "its not valid",
      onChange: (e) => handleChange(e),
    },
  ];

  let mobile = width < 1300;

  let tableData;
  tableData = td.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item.id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item.id);
        }}
      >
        <div className={"table"}>
          {th?.slice(0, 5).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>
                {
                  [
                    item.referal_code,
                    item.user_address,
                    item.user_level,
                    item.rate,
                    item.total_earned,
                  ][index]
                }
              </span>
            </div>
          ))}
        </div>
        <div className="table-more" />
        <div className="icon-place">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="table-mobile">
          <div className="table-mobile-content">
            {[2, 3, 4].map((index) => (
              <div className="td" key={index}>
                <div className="mobile-ttl">{th[index].name}</div>
                <span>
                  {
                    item[
                      index === 1
                        ? "user_address"
                        : index === 2
                        ? "rate"
                        : "total_earned"
                    ]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  let totalReferralRebates = {
    totalTrading: "0.01",
    totalEarned: "0.00",
    totalEstimated: "0.00",
  };

  let popUpTh = [
    {
      name: "Level",
      width: 15,
      id: 0,
    },
    {
      name: "Compland Holding (USD)",
      width: 25,
      id: 1,
    },
    {
      name: "Rebate Rate",
      width: 15,
      id: 2,
    },
    {
      name: "Referee’s Discount",
      width: 25,
      id: 3,
    },
  ];

  let popUpTd = [
    {
      level: "Casual",
      complandHolding: "≥ $0",
      rebaseRate: "2.5%",
      refereesDiscount: "2.5%",
    },
    {
      level: "Casual",
      complandHolding: "≥ $0",
      rebaseRate: "2.5%",
      refereesDiscount: "2.5%",
    },
    {
      level: "Casual",
      complandHolding: "≥ $0",
      rebaseRate: "2.5%",
      refereesDiscount: "2.5%",
    },
    {
      level: "Casual",
      complandHolding: "≥ $0",
      rebaseRate: "2.5%",
      refereesDiscount: "2.5%",
    },
  ];

  let popUpTableData;
  popUpTableData = popUpTd.map((item, index) => (
    <div className="level-system-table" key={index}>
      {popUpTh?.slice(0, 4).map((i, index) => (
        <div
          key={index}
          className={`level-system-td`}
          style={{ width: `${i.width}%` }}
        >
          <span>
            {
              [
                item.level,
                item.complandHolding,
                item.rebaseRate,
                item.refereesDiscount,
              ][index]
            }
          </span>
        </div>
      ))}
    </div>
  ));

  const referralCodeTableEmpty = {
    label: "Please Create Your Code",
    button: (
      <Button
        element={"referral-button"}
        label={"Create Code"}
        icon={<AddSquareIcon color={"#FFF"} />}
        active={true}
        onClick={handleCreateCode}
      />
    ),
  };

  const referralHistoryTableEmpty = {
    label: "No Referral History",
    icon: <NoHistoryIcon />,
  };

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"shit"}
        location={{ pathName: "" }}
        title={"COMPLEND"}
        logoSvg={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_317_1822)">
              <path
                d="M20.0059 8.51846e-05C19.9982 -0.00230704 19.9901 -0.00230704 19.9825 8.51844e-05C13.9025 3.50807 8.8543 8.55624 5.34625 14.6362C1.83821 20.7161 -0.00578025 27.6131 1.36113e-05 34.6325V34.6325C6.07723 38.1412 12.971 39.9883 19.9883 39.9883C27.0057 39.9883 33.8994 38.1412 39.9766 34.6325V34.6325C39.9809 27.6148 38.1375 20.7196 34.6318 14.6403C31.1261 8.56095 26.0818 3.51167 20.0059 8.51844e-05V8.51846e-05ZM27.9988 27.8587C25.5687 29.264 22.8111 30.0039 20.0039 30.0039C17.1967 30.0039 14.4391 29.264 12.009 27.8587V27.8587C12.0081 25.0544 12.7456 22.2994 14.1473 19.8706C15.5491 17.4419 17.5656 15.425 19.9942 14.0229V14.0229C22.4244 15.4237 24.4434 17.4392 25.8485 19.8671C27.2535 22.2949 27.9951 25.0497 27.9988 27.8548V27.8587Z"
                fill="#3D5AFE"
              />
              <path
                d="M20.0059 0V13.9994C22.4366 15.4037 24.4548 17.423 25.8579 19.8544C27.2609 22.2858 27.9993 25.0436 27.9988 27.8508V27.8508L40 34.6402C40.0024 27.619 38.1558 20.7211 34.646 14.6402C31.1361 8.55925 26.0867 3.50989 20.0059 0V0Z"
                fill="url(#paint0_linear_317_1822)"
              />
              <path
                opacity="0.6"
                d="M20.0059 0V13.9994C22.4366 15.4037 24.4548 17.423 25.8579 19.8544C27.2609 22.2858 27.9993 25.0436 27.9988 27.8508V27.8508L40 34.6402C40.0024 27.619 38.1558 20.7211 34.646 14.6402C31.1361 8.55925 26.0867 3.50989 20.0059 0V0Z"
                fill="url(#paint1_linear_317_1822)"
              />
              <path
                d="M19.9825 -4.88904e-05C13.9025 3.50793 8.8543 8.55611 5.34625 14.636C1.83821 20.716 -0.00578025 27.613 1.36113e-05 34.6323L12.0051 27.8547C12.0049 25.0511 12.7427 22.2968 14.1444 19.8688C15.5461 17.4408 17.5623 15.4245 19.9903 14.0227V14.0227V-4.88904e-05C19.9877 -0.000309224 19.9851 -0.000309224 19.9825 -4.88904e-05V-4.88904e-05Z"
                fill="url(#paint2_linear_317_1822)"
              />
              <path
                opacity="0.6"
                d="M19.9825 -4.88904e-05C13.9025 3.50793 8.8543 8.55611 5.34625 14.636C1.83821 20.716 -0.00578025 27.613 1.36113e-05 34.6323L12.0051 27.8547C12.0049 25.0511 12.7427 22.2968 14.1444 19.8688C15.5461 17.4408 17.5623 15.4245 19.9903 14.0227V14.0227V-4.88904e-05C19.9877 -0.000309224 19.9851 -0.000309224 19.9825 -4.88904e-05V-4.88904e-05Z"
                fill="url(#paint3_linear_317_1822)"
              />
              <path
                d="M27.9988 27.8547C25.5687 29.2601 22.8111 30 20.0039 30C17.1967 30 14.4391 29.2601 12.009 27.8547L0 34.6324C6.07194 38.1487 12.9659 39.9965 19.9825 39.9883C27.0029 39.9975 33.9008 38.1497 39.9766 34.6324L27.9988 27.8547Z"
                fill="url(#paint4_linear_317_1822)"
              />
              <path
                opacity="0.6"
                d="M27.9988 27.8547C25.5687 29.2601 22.8111 30 20.0039 30C17.1967 30 14.4391 29.2601 12.009 27.8547L0 34.6324C6.07194 38.1487 12.9659 39.9965 19.9825 39.9883C27.0029 39.9975 33.9008 38.1497 39.9766 34.6324L27.9988 27.8547Z"
                fill="url(#paint5_linear_317_1822)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_317_1822"
                x1="23.7141"
                y1="21.0614"
                x2="38.1069"
                y2="12.5075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" />
                <stop offset="0.05" stopColor="#45B0F5" />
                <stop offset="0.12" stopColor="#4295F8" />
                <stop offset="0.2" stopColor="#407FFA" />
                <stop offset="0.29" stopColor="#3F6EFC" />
                <stop offset="0.4" stopColor="#3E63FD" />
                <stop offset="0.56" stopColor="#3D5CFE" />
                <stop offset="1" stopColor="#3D5AFE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_317_1822"
                x1="29.3037"
                y1="17.7388"
                x2="13.5826"
                y2="27.0951"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" stopOpacity="0" />
                <stop offset="1" stopColor="#47C9F3" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_317_1822"
                x1="16.1846"
                y1="20.9056"
                x2="3.7589"
                y2="13.6878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" />
                <stop offset="0.05" stopColor="#45B0F5" />
                <stop offset="0.12" stopColor="#4295F8" />
                <stop offset="0.2" stopColor="#407FFA" />
                <stop offset="0.29" stopColor="#3F6EFC" />
                <stop offset="0.4" stopColor="#3E63FD" />
                <stop offset="0.56" stopColor="#3D5CFE" />
                <stop offset="1" stopColor="#3D5AFE" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_317_1822"
                x1="10.7859"
                y1="17.766"
                x2="26.3044"
                y2="26.6471"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" stopOpacity="0" />
                <stop offset="1" stopColor="#47C9F3" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_317_1822"
                x1="19.9396"
                y1="27.7496"
                x2="20.0721"
                y2="42.7656"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" />
                <stop offset="0.05" stopColor="#45B0F5" />
                <stop offset="0.12" stopColor="#4295F8" />
                <stop offset="0.2" stopColor="#407FFA" />
                <stop offset="0.29" stopColor="#3F6EFC" />
                <stop offset="0.4" stopColor="#3E63FD" />
                <stop offset="0.56" stopColor="#3D5CFE" />
                <stop offset="1" stopColor="#3D5AFE" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_317_1822"
                x1="20.0019"
                y1="35.0843"
                x2="20.0019"
                y2="16.3483"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C9F3" stopOpacity="0" />
                <stop offset="1" stopColor="#47C9F3" />
              </linearGradient>
              <clipPath id="clip0_317_1822">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
        verified={false}
      />
      <Referral
        cards={referalCards}
        handleCreateCode={handleCreateCode}
        referalHistoryTableHead={th}
        referralHistoryTableData={tableData}
        referralCodeTableHead={th}
        referralCodeTableData={tableData}
        referralCodeTableEmpty={referralCodeTableEmpty}
        referralHistoryTableEmpty={referralHistoryTableEmpty}
        totalReferralRebates={totalReferralRebates}
        totalReferralRebatesLabel={"Total Referral Rebates"}
        referralHistoryPaginationCurrent={1}
        referralHistoryPaginationTotal={20}
        referralHistoryPaginationEvent={() => {
          console.log("hi");
        }}
        referralCodePaginationCurrent={1}
        referralCodePaginationTotal={20}
        referralCodePaginationEvent={() => {
          console.log("hi hi");
        }}
      />
      {createCodePopupActive && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={createCodeObject}
              setCurrentObject={setCreateCodeObject}
              handleSubmit={() => console.log("hi hi")}
              submitButtonLabel={"Enter a Code"}
              customStyles={{ gridTemplateColumns: "100%" }}
              // popUpElementError={"there is some error"}
            />
          }
          label={"Create Referral Code"}
          handlePopUpClose={() => setCreateCodePopupActive(false)}
          customStyles={{ width: "423px" }}
        />
      )}
      {levelSystemPopupActive && (
        <Popup
          popUpElement={
            <LevelSystem
              tableHead={popUpTh}
              tableData={popUpTableData}
              mobile={mobile}
            />
          }
          label={"Referrer Level System"}
          handlePopUpClose={() => setLevelSystemPopupActive(false)}
          description={
            "Everyone starts with the Casual tier, and you can level up the tier by increasing your Comland holding"
          }
        />
      )}
    </BrowserRouter>
  );
});
