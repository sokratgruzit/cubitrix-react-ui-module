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
import { Footer } from "../components/Footer";

const stories = storiesOf("Referral", module);

stories.add("Referral", () => {
  const [createCodePopupActive, setCreateCodePopupActive] = useState(false);
  const [levelSystemPopupActive, setLevelSystemPopupActive] = useState(false);
  const [createCodeObject, setCreateCodeObject] = useState({});
  const [codesTableData, setCodesTableData] = useState([]);
  const [rebatesTableData, setRebatesTableData] = useState([]);
  const [levelSystemTableOptions, setLevelSystemTableOptions] = useState([]);
  const [referralCodes, setReferralCodes] = useState({});
  const [rebatesCurrentPage, setRebatesCurrentPage] = useState(1);
  const [codesCurrentPage, setCodesCurrentPage] = useState(1);
  const [codesPaginationTotal, setCodesPaginationTotal] = useState(1);
  const [rebatesPaginationTotal, setRebatesPaginationTotal] = useState(1);
  const [referralType, setReferralType] = useState("binary");
  const [referralBinaryType, setReferralBinaryType] = useState("uni");

  const [referralTotal, setReferralTotal] = useState({
    rebatesUniLevel: 0,
    rebatesBinaryTotal: 0,
    weeklyUniLevel: 0,
    weeklyBinaryTotal: 0,
    rebatesTotal: 0,
    weeklyTotal: 0,
  });
  const { width } = useMobileWidth();

  const handleCreateCode = () => setCreateCodePopupActive(true);
  const handleLevelSystem = () => setLevelSystemPopupActive(true);
  let referralTreeActiveAddress = {
    _id: "64aa96b60a99eabe44767f8c",
    referral_address: "0x10352539f0a10955c056e4a1775bad9873070728",
    lvl: 1,
    side: "left",
    user_address: "0xd5228300dd76ad014c2700ca401ee335c817e38e",
    position: 1,
    createdAt: "2023-07-09T11:15:02.581Z",
    updatedAt: "2023-07-09T11:15:02.581Z",
    __v: 0,
    joinedAccounts: [
      {
        _id: "64aa96a60a99eabe44767f61",
        address: "0xd5228300dd76ad014c2700ca401ee335c817e38e",
        account_category: "external",
        account_owner: "",
        active: true,
        createdAt: "2023-07-09T11:14:46.320Z",
        updatedAt: "2023-07-09T11:14:46.320Z",
        __v: 0,
      },
    ],
    joinedAccountMetas: [],
  };
  let tableVisualType = (
    <div className={`referral-inner-table-more`}>
      <div
        className={`referral-table-more-svg ${
          referralBinaryType === "visual" ? "referral-table-more-svg_active" : ""
        }`}
        onClick={() => setReferralBinaryType("visual")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 19C11.25 19.41 11.59 19.75 12 19.75C12.41 19.75 12.75 19.41 12.75 19L12.75 11.75L17 11.75C18.58 11.75 19.25 12.42 19.25 14L19.25 19C19.25 19.41 19.59 19.75 20 19.75C20.41 19.75 20.75 19.41 20.75 19L20.75 14C20.75 11.58 19.42 10.25 17 10.25L12.75 10.25L12.75 5C12.75 4.59 12.41 4.25 12 4.25C11.59 4.25 11.25 4.59 11.25 5L11.25 10.25L7 10.25C4.58 10.25 3.25 11.58 3.25 14L3.25 19C3.25 19.41 3.59 19.75 4 19.75C4.41 19.75 4.75 19.41 4.75 19L4.75 14C4.75 12.42 5.42 11.75 7 11.75L11.25 11.75L11.25 19Z"
            fill="#B3B3B3"
          />
          <path
            d="M9.75 20C9.75 20.5967 9.98705 21.169 10.409 21.591C10.831 22.0129 11.4033 22.25 12 22.25C12.5967 22.25 13.169 22.0129 13.591 21.591C14.0129 21.169 14.25 20.5967 14.25 20C14.25 19.4033 14.0129 18.831 13.591 18.409C13.169 17.9871 12.5967 17.75 12 17.75C11.4033 17.75 10.831 17.9871 10.409 18.409C9.98705 18.831 9.75 19.4033 9.75 20Z"
            fill="white"
          />
          <path
            d="M17.75 20C17.75 20.5967 17.9871 21.169 18.409 21.591C18.831 22.0129 19.4033 22.25 20 22.25C20.5967 22.25 21.169 22.0129 21.591 21.591C22.0129 21.169 22.25 20.5967 22.25 20C22.25 19.4033 22.0129 18.831 21.591 18.409C21.169 17.9871 20.5967 17.75 20 17.75C19.4033 17.75 18.831 17.9871 18.409 18.409C17.9871 18.831 17.75 19.4033 17.75 20Z"
            fill="white"
          />
          <path
            d="M1.75 20C1.75 20.2955 1.8082 20.5881 1.92127 20.861C2.03434 21.134 2.20008 21.3821 2.40901 21.591C2.61794 21.7999 2.86598 21.9657 3.13896 22.0787C3.41194 22.1918 3.70453 22.25 4 22.25C4.29547 22.25 4.58806 22.1918 4.86104 22.0787C5.13402 21.9657 5.38206 21.7999 5.59099 21.591C5.79992 21.3821 5.96566 21.134 6.07873 20.861C6.1918 20.5881 6.25 20.2955 6.25 20C6.25 19.4033 6.01295 18.831 5.59099 18.409C5.16903 17.9871 4.59674 17.75 4 17.75C3.40326 17.75 2.83097 17.9871 2.40901 18.409C1.98705 18.831 1.75 19.4033 1.75 20Z"
            fill="white"
          />
          <path
            d="M9.75 4C9.75 4.59674 9.98705 5.16903 10.409 5.59099C10.831 6.01295 11.4033 6.25 12 6.25C12.5967 6.25 13.169 6.01295 13.591 5.59099C14.0129 5.16903 14.25 4.59674 14.25 4C14.25 3.40326 14.0129 2.83097 13.591 2.40901C13.169 1.98705 12.5967 1.75 12 1.75C11.4033 1.75 10.831 1.98705 10.409 2.40901C9.98705 2.83097 9.75 3.40326 9.75 4Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className={`referral-table-more-svg ${
          referralBinaryType === "table" ? "referral-table-more-svg_active" : ""
        }`}
        onClick={() => setReferralBinaryType("table")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
            fill="#B3B3B3"
          />
          <path
            d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
  let tableType = (
    <div className={`referral-inner-table-more`}>
      <div
        className={`referral-table-more-svg ${
          referralBinaryType === "visual" ? "referral-table-more-svg_active" : ""
        }`}
        onClick={() => setReferralBinaryType("visual")}
      >
        Uni
      </div>
      <div
        className={`referral-table-more-svg ${
          referralBinaryType === "uni" ? "referral-table-more-svg_active" : ""
        }`}
        onClick={() => setReferralBinaryType("uni")}
      >
        Binary
      </div>
    </div>
  );
  const referralCards = [
    {
      id: "001231",
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
      id: "00999231",
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

  const generateCode = async () => {
    const response = await fetch(
      "http://localhost:4000/api/referral/get_referrals_by_address",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "0x327a32d66ee9110d81992be6924a469bef5cd429",
        }),
      },
    );
    const data = await response.json();

    let codesData = {};

    Array.isArray(data) &&
      data.forEach((item) => {
        item.referral_type === "binary"
          ? (codesData = { ...codesData, binary: item.referral })
          : (codesData = { ...codesData, referral: item.referral });
      });

    if (data.length === 0) {
      const generateCodeResponse = await fetch(
        "http://localhost:4000/api/referral/bind_referral_to_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: "0x327a32d66ee9110d81992be6924a469bef5cd429",
          }),
        },
      );

      const generateCodeData = await generateCodeResponse.json();

      generateCodeData.forEach((item) => {
        item.referral_type === "binary"
          ? (codesData = { ...codesData, binary: item.referral })
          : (codesData = { ...codesData, referral: item.referral });
      });
    }

    setReferralCodes(codesData);
  };

  const generateTableData = async (table, page) => {
    const response = await fetch(
      `http://localhost:4000/api/referral/${
        table === "codes"
          ? "get_referral_code_of_user"
          : "get_referral_rebates_history_of_user"
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "0x43f59F41518903A274c7897dfFB24DB86a0dd23a",
          limit: 5,
          page: page || 1,
        }),
      },
    );

    const data = await response.json();

    if (table === "codes") {
      setCodesTableData(data.referral_code);
      setCodesPaginationTotal(data.total_pages);
    } else {
      setRebatesTableData(data.referral_rebates_history);
      setRebatesPaginationTotal(data.total_pages);
    }
  };

  const getReferralTotal = async () => {
    const response = await fetch(
      `http://localhost:4000/api/referral/get_referral_data_of_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "0x327a32d66ee9110d81992be6924a469bef5cd429",
        }),
      },
    );

    const data = await response.json();

    let total = {
      rebatesUniLevel: 0,
      rebatesBinaryTotal: 0,
      weeklyUniLevel: 0,
      weeklyBinaryTotal: 0,
    };

    data.total_referral_rebates_total.forEach((item) => {
      if (item._id === "referral_bonus_uni_level") {
        return (total.rebatesUniLevel = item.amount);
      }
      total.rebatesBinaryTotal = total.rebatesBinaryTotal + item.amount;
    });

    data.total_referral_rebates_weekly.forEach((item) => {
      if (item._id === "referral_bonus_uni_level") {
        return (total.weeklyUniLevel = item.amount);
      }
      total.weeklyBinaryTotal = total.weeklyBinaryTotal + item.amount;
    });

    setReferralTotal({
      ...total,
      rebatesTotal: total.rebatesUniLevel + total.rebatesBinaryTotal,
      weeklyTotal: total.weeklyUniLevel + total.weeklyBinaryTotal,
    });
  };
  const getReferralBinaryData = async () => {
    const response = await fetch(`http://localhost:4000/api/referral/get_referral_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: "1",
        limit: 10,
        page: 1,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  const getOptions = async () => {
    const response = await fetch(
      `http://localhost:4000/api/referral/get_referral_options`,
    );

    const data = await response.json();

    setLevelSystemTableOptions(data);
  };

  const handleCreateCodeSubmit = async () => {
    const response = await fetch(
      "http://localhost:4000/api/referral/assign_refferal_to_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referral: createCodeObject.referral,
          address: "0x327a32d66ee9110d81992be6924a469bef5cd429",
        }),
      },
    );
    const data = await response.json();

    generateCode();
  };

  useEffect(() => {
    getReferralBinaryData();
    // generateCode()
    // generateTableData('codes')
    // generateTableData('rebates')
    // getReferralTotal()
    // getOptions()
  }, []);

  let referralCodeTh = [
    {
      name: "My Referral Code",
      width: 15,
      id: 0,
      height: "40px",
    },
    {
      name: "User Address",
      width: 15,
      mobileWidth: 45,
      id: 1,
      height: "40px",
    },
    {
      name: "User Level",
      width: 15,
      id: 2,
      height: "40px",
    },
    {
      name: "Rate",
      width: 15,
      id: 3,
      height: "40px",
    },
    {
      name: "Total Earned",
      width: 15,
      mobileWidth: 45,
      id: 4,
      height: "40px",
    },
  ];

  let referralHistoryTh = [
    {
      name: "From",
      width: 15,
      mobileWidth: 45,
      id: 0,
      height: "40px",
    },
    {
      name: "Referral Code",
      width: 15,
      id: 1,
      height: "40px",
    },
    {
      name: "Referral Level",
      width: 15,
      id: 2,
      height: "40px",
    },
    {
      name: "Amount",
      width: 15,
      mobileWidth: 45,
      id: 3,
      height: "40px",
    },
  ];

  let handleChange = (e) => {
    const { name, value } = e.target;
    setCreateCodeObject((prev) => ({ ...prev, [name]: value }));
  };

  const inputs = [
    {
      title: "",
      name: "referral",
      placeholder: "Enter Code",
      required: true,
      validation: "text",
      successText: "it is valid",
      failureText: "its not valid",
      onChange: (e) => handleChange(e),
    },
  ];

  let popUpTh = [
    {
      name: "Level",
      width: 15,
      id: 0,
    },
    {
      name: "Compland Holding (USD)",
      width: 30,
      id: 1,
    },
    {
      name: "Rebate Rate",
      width: 15,
      id: 2,
    },
  ];

  let popUpTd = [
    {
      level: "UNI LVL",
      complandHolding: "-",
      rebaseRate: "-",
    },
    {
      level: "VIP 1",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_1,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_1,
    },
    {
      level: "VIP 2",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_2,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_2,
    },
    {
      level: "VIP 3",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_3,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_3,
    },
    {
      level: "VIP 4",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_4,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_4,
    },
    {
      level: "VIP 5",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_5,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_5,
    },
    {
      level: "VIP 6",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_6,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_6,
    },
    {
      level: "VIP 7",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_7,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_7,
    },
    {
      level: "VIP 8",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_8,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_8,
    },
    {
      level: "VIP 9",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_9,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_9,
    },
    {
      level: "VIP 10",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_10,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_10,
    },
    {
      level: "VIP 11",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_11,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_11,
    },
  ];

  // const referralCodeTableEmpty = {
  //   label: 'No Referral Code History',
  //   button: (
  //     <p>
  //       <Button
  //         element={'referral-button'}
  //         label={'Create Code'}
  //         icon={<AddSquareIcon color={'#C38C5C'} />}
  //         onClick={handleCreateCode}
  //         customStyles={{ border: 'none' }}
  //       />
  //     </p>
  //   ),
  // }

  const referralCodeTableEmpty = {
    label: "No Referral Code History",
    icon: <NoHistoryIcon />,
  };

  const referralHistoryTableEmpty = {
    label: "No Referral Rebates History",
    icon: <NoHistoryIcon />,
  };

  const referralBinaryTableEmpty = {
    label: "No Referral Binary History",
    icon: <NoHistoryIcon />,
  };

  const referralRebatesTotal = [
    {
      title: "Rebates UNI LVL Total",
      value: referralTotal?.rebatesUniLevel,
    },
    {
      title: "Total 2",
      value: referralTotal?.rebatesBinaryTotal,
    },
    {
      title: "Total 3",
      value: referralTotal?.rebatesTotal,
    },
  ];

  const referralCodesCardData = [
    {
      id: "0012331",
      title: "Referral Code",
      value: referralCodes?.referral || "-",
    },
    {
      id: "00133231",
      title: "Binary Code",
      value: referralCodes?.binary || "-",
    },
  ];

  const referralTree = [
    {
      lvl: 1,
      documents: [
        {
          _id: "649ede8a6060d3a02f6fe7a7",
          referral_address: "1",
          lvl: 1,
          side: "left",
          user_address: "2",
          position: 1,
          createdAt: "2023-06-30T13:54:18.220Z",
          updatedAt: "2023-06-30T13:54:18.220Z",
          __v: 0,
          joinedAccounts: [
            {
              _id: "64a68d7f5d26597e1e8aff99",
              address: "2",
              balance: 0,
              account_category: "main",
              account_owner: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              active: false,
              assets: {
                btc: 0,
                eth: 0,
                usdt: 0,
                gold: 0,
                platinium: 0,
              },
              step: 4,
              createdAt: "2023-07-05T08:29:39.642Z",
              updatedAt: "2023-07-05T15:06:30.708Z",
              extensions: {
                trade: "false",
                loan: "false",
                notify: "false",
                staking: "true",
                referral: "false",
                connect: "false",
              },
              __v: 0,
            },
          ],
          joinedAccountMetas: [
            {
              _id: "64a529f3f93bbcd9379f39c3",
              address: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              createdAt: "2023-07-05T08:29:39.736Z",
              updatedAt: "2023-07-05T12:26:17.849Z",
              __v: 0,
              email: "api.websocket@gmail.com",
              name: "websocket_api",
            },
          ],
        },
        {
          _id: "649ede8e6060d3a02f6fe7ac",
          referral_address: "1",
          lvl: 1,
          side: "right",
          user_address: "3",
          position: 2,
          createdAt: "2023-06-30T13:54:22.391Z",
          updatedAt: "2023-06-30T13:54:22.391Z",
          __v: 0,
          joinedAccounts: [
            {
              _id: "64a68d7f5d26597e1e8aff99",
              address: "2",
              balance: 0,
              account_category: "main",
              account_owner: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              active: false,
              assets: {
                btc: 0,
                eth: 0,
                usdt: 0,
                gold: 0,
                platinium: 0,
              },
              step: 4,
              createdAt: "2023-07-05T08:29:39.642Z",
              updatedAt: "2023-07-05T15:06:30.708Z",
              extensions: {
                trade: "false",
                loan: "false",
                notify: "false",
                staking: "true",
                referral: "false",
                connect: "false",
              },
              __v: 0,
            },
          ],
          joinedAccountMetas: [
            {
              _id: "64a529f3f93bbcd9379f39c3",
              address: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              createdAt: "2023-07-05T08:29:39.736Z",
              updatedAt: "2023-07-05T12:26:17.849Z",
              __v: 0,
              email: "api.websocket@gmail.com",
              name: "websocket_api",
            },
          ],
        },
      ],
    },
    {
      lvl: 2,
      documents: [
        {
          _id: "649ede956060d3a02f6fe7b6",
          referral_address: "1",
          lvl: 2,
          side: "left",
          user_address: "4",
          position: 1,
          createdAt: "2023-06-30T13:54:29.638Z",
          updatedAt: "2023-06-30T13:54:29.638Z",
          __v: 0,
          joinedAccounts: [
            {
              _id: "64a68d7f5d26597e1e8aff99",
              address: "2",
              balance: 0,
              account_category: "main",
              account_owner: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              active: false,
              assets: {
                btc: 0,
                eth: 0,
                usdt: 0,
                gold: 0,
                platinium: 0,
              },
              step: 4,
              createdAt: "2023-07-05T08:29:39.642Z",
              updatedAt: "2023-07-05T15:06:30.708Z",
              extensions: {
                trade: "false",
                loan: "false",
                notify: "false",
                staking: "true",
                referral: "false",
                connect: "false",
              },
              __v: 0,
            },
          ],
          joinedAccountMetas: [
            {
              _id: "64a529f3f93bbcd9379f39c3",
              address: "0x6b5c302b9b0d3d58739b79e660dde784e3bbb603",
              createdAt: "2023-07-05T08:29:39.736Z",
              updatedAt: "2023-07-05T12:26:17.849Z",
              __v: 0,
              email: "api.websocket@gmail.com",
              name: "websocket_api",
            },
          ],
        },
        {
          _id: "649ede9b6060d3a02f6fe7c0",
          referral_address: "1",
          lvl: 2,
          side: "left",
          user_address: "5",
          position: 2,
          createdAt: "2023-06-30T13:54:35.214Z",
          updatedAt: "2023-06-30T13:54:35.214Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          lvl: 2,
          position: 3,
          type: "missing",
        },
        {
          _id: "649edea56060d3a02f6fe7d4",
          referral_address: "1",
          lvl: 2,
          side: "right",
          user_address: "7",
          position: 4,
          createdAt: "2023-06-30T13:54:45.863Z",
          updatedAt: "2023-06-30T13:54:45.863Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
      ],
    },
    {
      lvl: 3,
      documents: [
        {
          _id: "649edeac6060d3a02f6fe7e2",
          referral_address: "1",
          lvl: 3,
          side: "left",
          user_address: "8",
          position: 1,
          createdAt: "2023-06-30T13:54:52.622Z",
          updatedAt: "2023-06-30T13:54:52.622Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          _id: "649edeb36060d3a02f6fe7f0",
          referral_address: "1",
          lvl: 3,
          side: "left",
          user_address: "9",
          position: 2,
          createdAt: "2023-06-30T13:54:59.175Z",
          updatedAt: "2023-06-30T13:54:59.175Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          _id: "649edebf6060d3a02f6fe7fe",
          referral_address: "1",
          lvl: 3,
          side: "left",
          user_address: "10",
          position: 3,
          createdAt: "2023-06-30T13:55:11.054Z",
          updatedAt: "2023-06-30T13:55:11.054Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          _id: "649edec76060d3a02f6fe80c",
          referral_address: "1",
          lvl: 3,
          side: "left",
          user_address: "11",
          position: 4,
          createdAt: "2023-06-30T13:55:19.452Z",
          updatedAt: "2023-06-30T13:55:19.452Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          lvl: 3,
          position: 5,
          type: "nothing",
        },
        {
          lvl: 3,
          position: 6,
          type: "nothing",
        },
        {
          _id: "649eded96060d3a02f6fe836",
          referral_address: "1",
          lvl: 3,
          side: "right",
          user_address: "14",
          position: 7,
          createdAt: "2023-06-30T13:55:37.361Z",
          updatedAt: "2023-06-30T13:55:37.361Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
        {
          _id: "649edefa6060d3a02f6fe844",
          referral_address: "1",
          lvl: 3,
          side: "right",
          user_address: "15",
          position: 8,
          createdAt: "2023-06-30T13:56:10.616Z",
          updatedAt: "2023-06-30T13:56:10.616Z",
          __v: 0,
          joinedAccounts: [],
          joinedAccountMetas: [],
        },
      ],
    },
  ];
  let referralAddress = "asdasdsad";
  let referralTreeAdd = (lvl, position) => {
    console.log(lvl);
    console.log(position);
  };
  let referralTreeUserClick = (address) => {
    console.log(address);
  };
  let referralTreeUserBackClick = () => {
    console.log("hii");
  };
  let referralTreeTableTh = [
    {
      name: "Member Name",
      width: 15,
      id: 0,
    },
    {
      name: "User Level / Position",
      width: 15,
      mobileWidth: 45,
      id: 1,
    },
    {
      name: "Total Staked",
      width: 15,
      id: 2,
    },
    {
      name: "Date Joined",
      width: 15,
      id: 3,
    },
  ];
  let referralTreeTableUniTh = [
    {
      name: "Member Name",
      width: 15,
      id: 0,
    },
    {
      name: "User Level / Position",
      width: 15,
      id: 1,
    },
    {
      name: "Rate",
      width: 15,
      id: 2,
    },
    {
      name: "Total Staked",
      width: 15,
      id: 3,
    },
    {
      name: "Total Earned",
      width: 15,
      id: 4,
    },
    {
      name: "Date Joined",
      width: 15,
      mobileWidth: 45,
      id: 5,
    },
  ];
  let refferalBody = [
    {
      _id: "64abfb3625deed575c940b5f",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      lvl: 1,
      side: "left",
      user_address: "0x2bb12bd6e8248d68d234d5d32caa570886b733b4",
      position: 1,
      createdAt: "2023-07-10T12:36:06.436Z",
      updatedAt: "2023-07-10T12:36:06.436Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64abfb2925deed575c940b4d",
          address: "0x2bb12bd6e8248d68d234d5d32caa570886b733b4",
          balance: 23500,
          account_category: "main",
          account_owner: "0xa23f08aaf4d3aa507e771424ff4e5b6636a98dbb",
          active: false,
          step: 4,
          createdAt: "2023-07-10T12:35:53.401Z",
          updatedAt: "2023-07-11T11:05:11.404Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "false",
            referral: "false",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 16000,
          stakedToday: 16000,
          stakedTotal: 16000,
          flush_out: {
            active: false,
            number: 3,
            left: 0,
            right: 300,
          },
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64abfb2925deed575c940b52",
          address: "0xa23f08aaf4d3aa507e771424ff4e5b6636a98dbb",
          createdAt: "2023-07-10T12:35:53.675Z",
          updatedAt: "2023-07-11T15:28:08.464Z",
          __v: 0,
          email: "asd@ad.com",
          name: "jonnjoli1",
          date_of_birth: "2023-07-11T15:28:04.939Z",
          nationality: "",
        },
      ],
    },
    {
      _id: "64ac1850ff9202b98adf9085",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      lvl: 1,
      side: "right",
      user_address: "0x18dad1068a6740d7942f569c7574e542451bab4d",
      position: 2,
      createdAt: "2023-07-10T14:40:16.437Z",
      updatedAt: "2023-07-10T14:40:16.437Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64ac182dff9202b98adf906d",
          address: "0x18dad1068a6740d7942f569c7574e542451bab4d",
          balance: 5000,
          account_category: "main",
          account_owner: "0xfccceb000af7305bfd33f20cece4e3f9a348bd6d",
          active: true,
          step: 5,
          createdAt: "2023-07-10T14:39:41.513Z",
          updatedAt: "2023-07-10T14:41:16.948Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5000,
          stakedToday: 5000,
          stakedTotal: 5000,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64ac182dff9202b98adf9073",
          address: "0xfccceb000af7305bfd33f20cece4e3f9a348bd6d",
          createdAt: "2023-07-10T14:39:41.840Z",
          updatedAt: "2023-07-10T14:40:23.518Z",
          __v: 0,
          email: "asdasd@sda.com",
          name: "oadfnojadnfnojadnf",
        },
      ],
    },
    {
      _id: "64ac1657ff9202b98adf8f94",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      lvl: 2,
      side: "left",
      user_address: "0x9a0ad04251b4d5e33f7b64e8650770e8e74bb28a",
      position: 1,
      createdAt: "2023-07-10T14:31:51.840Z",
      updatedAt: "2023-07-10T14:31:51.840Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64ac1621ff9202b98adf8f3f",
          address: "0x9a0ad04251b4d5e33f7b64e8650770e8e74bb28a",
          balance: 5000,
          account_category: "main",
          account_owner: "0x8f6cd9d1bc0586036a9f3bc5cc27b27ca72a37ef",
          active: true,
          step: 5,
          createdAt: "2023-07-10T14:30:57.616Z",
          updatedAt: "2023-07-10T14:32:40.718Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5000,
          stakedToday: 5000,
          stakedTotal: 5000,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64ac1621ff9202b98adf8f47",
          address: "0x8f6cd9d1bc0586036a9f3bc5cc27b27ca72a37ef",
          createdAt: "2023-07-10T14:30:57.879Z",
          updatedAt: "2023-07-10T14:31:53.478Z",
          __v: 0,
          email: "asd@ads.cad",
          name: "koki",
        },
      ],
    },
    {
      _id: "64abfc3e25deed575c940bef",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      lvl: 2,
      side: "left",
      user_address: "0xc152a2811f8cef373bd268e4d9d7a9614afbbb60",
      position: 2,
      createdAt: "2023-07-10T12:40:30.091Z",
      updatedAt: "2023-07-10T12:40:30.091Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64abfbc925deed575c940b88",
          address: "0xc152a2811f8cef373bd268e4d9d7a9614afbbb60",
          balance: 5100,
          account_category: "main",
          account_owner: "0x06b8789294c901bb54cfd8b26d5d03f863a68373",
          active: true,
          step: 5,
          createdAt: "2023-07-10T12:38:33.784Z",
          updatedAt: "2023-07-10T12:41:20.534Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5100,
          stakedToday: 5100,
          stakedTotal: 5100,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64abfbca25deed575c940b8d",
          address: "0x06b8789294c901bb54cfd8b26d5d03f863a68373",
          createdAt: "2023-07-10T12:38:34.024Z",
          updatedAt: "2023-07-11T15:27:02.502Z",
          __v: 0,
          email: "sad@asd.com",
          name: "samjoli3",
          date_of_birth: "2023-07-11T15:07:13.581Z",
          nationality: "",
        },
      ],
    },
  ];
  let refferalUniBody = [
    {
      _id: "64abfb3825deed575c940b6a",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      user_address: "0x2bb12bd6e8248d68d234d5d32caa570886b733b4",
      lvl: 1,
      createdAt: "2023-07-10T12:36:08.065Z",
      updatedAt: "2023-07-10T12:36:08.065Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64abfb2925deed575c940b4d",
          address: "0x2bb12bd6e8248d68d234d5d32caa570886b733b4",
          balance: 23500,
          account_category: "main",
          account_owner: "0xa23f08aaf4d3aa507e771424ff4e5b6636a98dbb",
          active: false,
          step: 4,
          createdAt: "2023-07-10T12:35:53.401Z",
          updatedAt: "2023-07-11T11:05:11.404Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "false",
            referral: "false",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 16000,
          stakedToday: 16000,
          stakedTotal: 16000,
          flush_out: {
            active: false,
            number: 3,
            left: 0,
            right: 300,
          },
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64abfb2925deed575c940b52",
          address: "0xa23f08aaf4d3aa507e771424ff4e5b6636a98dbb",
          createdAt: "2023-07-10T12:35:53.675Z",
          updatedAt: "2023-07-11T15:28:08.464Z",
          __v: 0,
          email: "asd@ad.com",
          name: "jonnjoli1",
          date_of_birth: "2023-07-11T15:28:04.939Z",
          nationality: "",
        },
      ],
      joinedTransactions: [
        {
          totalAmount: 12020000,
        },
      ],
    },
    {
      _id: "64abfc3f25deed575c940bfa",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      user_address: "0xc152a2811f8cef373bd268e4d9d7a9614afbbb60",
      lvl: 1,
      createdAt: "2023-07-10T12:40:31.024Z",
      updatedAt: "2023-07-10T12:40:31.024Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64abfbc925deed575c940b88",
          address: "0xc152a2811f8cef373bd268e4d9d7a9614afbbb60",
          balance: 5100,
          account_category: "main",
          account_owner: "0x06b8789294c901bb54cfd8b26d5d03f863a68373",
          active: true,
          step: 5,
          createdAt: "2023-07-10T12:38:33.784Z",
          updatedAt: "2023-07-10T12:41:20.534Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5100,
          stakedToday: 5100,
          stakedTotal: 5100,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64abfbca25deed575c940b8d",
          address: "0x06b8789294c901bb54cfd8b26d5d03f863a68373",
          createdAt: "2023-07-10T12:38:34.024Z",
          updatedAt: "2023-07-11T15:27:02.502Z",
          __v: 0,
          email: "sad@asd.com",
          name: "samjoli3",
          date_of_birth: "2023-07-11T15:07:13.581Z",
          nationality: "",
        },
      ],
      joinedTransactions: [
        {
          totalAmount: 12007355,
        },
      ],
    },
    {
      _id: "64ac1659ff9202b98adf8f9f",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      user_address: "0x9a0ad04251b4d5e33f7b64e8650770e8e74bb28a",
      lvl: 1,
      createdAt: "2023-07-10T14:31:53.040Z",
      updatedAt: "2023-07-10T14:31:53.040Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64ac1621ff9202b98adf8f3f",
          address: "0x9a0ad04251b4d5e33f7b64e8650770e8e74bb28a",
          balance: 5000,
          account_category: "main",
          account_owner: "0x8f6cd9d1bc0586036a9f3bc5cc27b27ca72a37ef",
          active: true,
          step: 5,
          createdAt: "2023-07-10T14:30:57.616Z",
          updatedAt: "2023-07-10T14:32:40.718Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5000,
          stakedToday: 5000,
          stakedTotal: 5000,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64ac1621ff9202b98adf8f47",
          address: "0x8f6cd9d1bc0586036a9f3bc5cc27b27ca72a37ef",
          createdAt: "2023-07-10T14:30:57.879Z",
          updatedAt: "2023-07-10T14:31:53.478Z",
          __v: 0,
          email: "asd@ads.cad",
          name: "koki",
        },
      ],
      joinedTransactions: [
        {
          totalAmount: 12005750,
        },
      ],
    },
    {
      _id: "64ac1855ff9202b98adf9091",
      referral_address: "0x101101f183f52f6126bf3b8138e0b9dee9a0fd38",
      user_address: "0x18dad1068a6740d7942f569c7574e542451bab4d",
      lvl: 1,
      createdAt: "2023-07-10T14:40:21.760Z",
      updatedAt: "2023-07-10T14:40:21.760Z",
      __v: 0,
      joinedAccounts: [
        {
          _id: "64ac182dff9202b98adf906d",
          address: "0x18dad1068a6740d7942f569c7574e542451bab4d",
          balance: 5000,
          account_category: "main",
          account_owner: "0xfccceb000af7305bfd33f20cece4e3f9a348bd6d",
          active: true,
          step: 5,
          createdAt: "2023-07-10T14:39:41.513Z",
          updatedAt: "2023-07-10T14:41:16.948Z",
          extensions: {
            trade: "false",
            loan: "false",
            notify: "false",
            staking: "true",
            referral: "true",
            connect: "false",
          },
          assets: {
            btc: 0,
            eth: 0,
            usdt: 0,
            gold: 0,
            platinum: 0,
          },
          __v: 0,
          stakedThisMonth: 5000,
          stakedToday: 5000,
          stakedTotal: 5000,
        },
      ],
      joinedAccountMetas: [
        {
          _id: "64ac182dff9202b98adf9073",
          address: "0xfccceb000af7305bfd33f20cece4e3f9a348bd6d",
          createdAt: "2023-07-10T14:39:41.840Z",
          updatedAt: "2023-07-10T14:40:23.518Z",
          __v: 0,
          email: "asdasd@sda.com",
          name: "oadfnojadnfnojadnf",
        },
      ],
      joinedTransactions: [
        {
          totalAmount: 12004750,
        },
      ],
    },
  ];
  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x0000000"}
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
        referralTableTitle={"your title"}
        referralTreeMainAddressData={{
          all_amount_sum: 0,
          left_total: 0,
          total_right: 0,
          uni: 650,
          name: "mainAcc8",
          external_address: "0xa3403975861b601ae111b4eeafba94060a58d0ca",
          total_left: 0,
          total_staked: 344603,
          users_left: 22,
          users_right: 28,
        }}
        cards={referralCards}
        handleCreateCode={handleCreateCode}
        referralBinaryType={referralBinaryType}
        referralTableType={"uni"}
        referralTreeTableData={refferalUniBody}
        referralTreeTableHead={referralTreeTableUniTh}
        referralAddress={referralAddress}
        referralTreeActiveAddress={referralTreeActiveAddress}
        referralTreeActive={true}
        referralTreeBtnsLeft={tableVisualType}
        referralTreeBtnsRight={tableType}
        referralTreeData={referralTree}
        referralTreeAddClick={referralTreeAdd}
        referralTreeUserClick={referralTreeUserClick}
        referralTreeUserBackClick={referralTreeUserBackClick}
        referralBackActive={false}
        referralHistoryTableHead={referralHistoryTh}
        rebatesTableData={rebatesTableData}
        referralCodeTableHead={referralCodeTh}
        codesTableData={codesTableData}
        referralCodeTableEmpty={referralCodeTableEmpty}
        referralHistoryTableEmpty={referralHistoryTableEmpty}
        // referralHistoryTableLoading={true}
        // referralCodeTableLoading={true}
        // totalReferralRebatesLabel={"Total Referral Rebates"}
        referralHistoryPaginationCurrent={rebatesCurrentPage}
        referralHistoryPaginationTotal={rebatesPaginationTotal}
        referralHistoryPaginationEvent={(page) => {
          setRebatesCurrentPage(page);
          generateTableData("rebates", page);
        }}
        referralCodePaginationCurrent={codesCurrentPage}
        referralCodePaginationTotal={codesPaginationTotal}
        referralCodePaginationEvent={(page) => {
          setCodesCurrentPage(page);
          generateTableData("codes", page);
        }}
        referralRebatesTotal={referralRebatesTotal}
        referralCodesCardData={referralCodesCardData}
        handleLevelSystem={handleLevelSystem}
        referralBinaryTableEmpty={referralBinaryTableEmpty}
        referralHistoryButtonsRight={tableType}
        totalBinaryMembers={5}
        referralHistoryTableType={"referral-history"}
      />
      {createCodePopupActive && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={createCodeObject}
              setCurrentObject={setCreateCodeObject}
              handleSubmit={handleCreateCodeSubmit}
              submitButtonLabel={"Enter a Code"}
              customStyles={{ gridTemplateColumns: "100%" }}
              // popUpElementError={"there is some error"}
            />
          }
          label={"Create Referral Code"}
          handlePopUpClose={() => setCreateCodePopupActive(false)}
          customStyles={{ width: "423px" }}
          headerCustomStyles={{ background: "#272C57" }}
        />
      )}
      {levelSystemPopupActive && (
        <Popup
          popUpElement={
            <LevelSystem tableHead={popUpTh} tableData={popUpTd} mobile={width <= 1300} />
          }
          label={"Referrer Level System"}
          handlePopUpClose={() => setLevelSystemPopupActive(false)}
          description={
            "Everyone starts with the Casual tier, and you can level up the tier by increasing your Comland holding"
          }
          headerCustomStyles={{ background: "#272C57" }}
        />
      )}
    </BrowserRouter>
  );
});
