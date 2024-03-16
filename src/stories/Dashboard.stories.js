import {useEffect, useState} from "react";
import {storiesOf} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

import translates from "../translates.json";
import {useMobileWidth} from "../hooks/useMobileWidth";
import {DashboardSharedLayout} from "../components/DashboardSharedLayout";
import {NoHistoryIcon} from "../assets/svgs";

import {Dashboard} from "../components/Dashboard";
import {Header} from "../components/Header";

import "../assets/css/main-theme.css";
import LogoSvg from "../assets/svgs/LogoSvg";

const stories = storiesOf("Dashboard", module);

stories.add("Dashboard", () => {
  const [showBalance, setShowBalance] = useState(false);
  const [codesTableData, setCodesTableData] = useState([]);
  const [rebatesTableData, setRebatesTableData] = useState([]);
  const [transactionsData, setTransactionsData] = useState({});
  const [totalTransactions, setTotalTransactions] = useState({});
  const [totalReferralData, setTotalReferralData] = useState({
    uni: {
      levelUser: 0,
      totalComission: 0,
    },
    binary: {
      levelUser: 0,
      totalComission: 0,
    },
  });
  const [accountsData, setAccountsData] = useState([]);
  const [referralCodeTableLoading, setReferralCodeTableLoading] =
    useState(false);
  const [referralHistoryTableLoading, setReferralHistoryTableLoading] =
    useState(false);
  const [transactionsTableLoading, setTransactionsTableLoading] =
    useState(false);

  const {width} = useMobileWidth();

  const location = {
    pathname: "/",
  };

  const links = [
    {
      to: "/dashboard",
      label: "Overview",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg`}
        >
          <path
            d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
            stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.99V14.99"
            stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      to: "/transactions",
      label: "Transaction History",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg`}
        >
          <path
            d="M11.9995 22.75C11.2195 22.75 10.4595 22.35 9.93953 21.65L8.92953 20.3C8.71953 20.02 8.43953 19.86 8.13953 19.84C7.83953 19.83 7.53953 19.96 7.29953 20.21C5.85953 21.75 4.74953 21.63 4.21953 21.42C3.67953 21.21 2.76953 20.52 2.76953 18.3V7.04C2.76953 2.6 4.04953 1.25 8.23953 1.25H15.7995C19.9895 1.25 21.2695 2.6 21.2695 7.04V18.3C21.2695 20.51 20.3595 21.2 19.8195 21.42C19.2895 21.63 18.1895 21.75 16.7395 20.21C16.4995 19.95 16.1995 19.82 15.8895 19.84C15.5895 19.86 15.2995 20.02 15.0895 20.3L14.0795 21.65C13.5395 22.35 12.7795 22.75 11.9995 22.75ZM8.07953 18.33H8.20953C8.94953 18.37 9.64953 18.76 10.1195 19.39L11.1295 20.74C11.6195 21.39 12.3695 21.39 12.8595 20.74L13.8695 19.39C14.3495 18.76 15.0395 18.37 15.7895 18.33C16.5395 18.29 17.2695 18.6 17.8095 19.18C18.5695 19.99 19.0595 20.09 19.2395 20.02C19.4795 19.92 19.7395 19.34 19.7395 18.3V7.04C19.7395 3.43 19.1095 2.75 15.7695 2.75H8.20953C4.86953 2.75 4.23953 3.43 4.23953 7.04V18.3C4.23953 19.35 4.49953 19.93 4.73953 20.02C4.90953 20.09 5.40953 19.99 6.16953 19.18C6.71953 18.63 7.38953 18.33 8.07953 18.33Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          />
          <path
            d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          />
        </svg>
      ),
    },
  ];

  const generateTableData = async (table) => {
    if (table === "codes") {
      setReferralCodeTableLoading(true);
    } else {
      setReferralHistoryTableLoading(true);
    }

    if (table === "codes") {
      setCodesTableData(false);
      setReferralCodeTableLoading(false);
    } else {
      setRebatesTableData(false);
      setReferralHistoryTableLoading(false);
    }
  };

  const generateTransactionsData = async () => {
    setTransactionsTableLoading(true);

    const test = {
      transactions: [
        {
          _id: "655b63be6a1eb624d87b207c",
          from: "0xe86484f846880b7149eae4c789685f89898b0bb8",
          to: "0x428acf8e35d5afe5d8a8d027690f48e17057dfc5",
          amount: 50,
          tx_type: "bonus",
          tx_hash:
            "0xoyqp8sb9bvswfgzu7gbi4zsmnp3rb2usksj4092tlpv1efgvhgutzzqawsaohl2xnn",
          tx_status: "approved",
          tx_currency: "ether",
          tx_options: {
            method: "referral",
            type: "uni",
            lvl: 4,
            percent: "1",
          },
          __v: 0,
          createdAt: "2023-11-20T13:48:46.946Z",
          updatedAt: "2023-11-20T13:48:46.946Z",
        },
        {
          _id: "655b63be6a1eb624d87b207b",
          from: "0xe86484f846880b7149eae4c789685f89898b0bb8",
          to: "0x5df955ee1a7f0d8282f59bfdecd22f71598d9135",
          amount: 100,
          tx_type: "bonus",
          tx_hash:
            "0xkvm98dwtj3sypmnlomid8czydudpl1troylpexl1ktzfhwwtzlivdcjhqbdom7heum",
          tx_status: "approved",
          tx_currency: "ether",
          tx_options: {
            method: "referral",
            type: "uni",
            lvl: 3,
            percent: "2",
          },
          __v: 0,
          createdAt: "2023-11-20T13:48:46.946Z",
          updatedAt: "2023-11-20T13:48:46.946Z",
        },
        {
          _id: "655b63be6a1eb624d87b207a",
          from: "0xe86484f846880b7149eae4c789685f89898b0bb8",
          to: "0x9ce1fea42d6b13a4ac169e3337de9fd2db6d0298",
          amount: 250,
          tx_type: "bonus",
          tx_hash:
            "0xl33fet6zvq6jf0ewmbpdocjgf5dwat68fi1gbtptxidmp7nbsk1wmv2ivvqrsfgehe",
          tx_status: "approved",
          tx_currency: "ether",
          tx_options: {
            method: "referral",
            type: "uni",
            lvl: 2,
            percent: "5",
          },
          __v: 0,
          createdAt: "2023-11-20T13:48:46.946Z",
          updatedAt: "2023-11-20T13:48:46.946Z",
        },
      ],
      total_pages: 2,
      total_transaction: 5,
      amounts_to_from: [
        {
          toCount: 1,
          toSum: 5000,
        },
      ],
    };

    setTransactionsData(test);
    setTotalTransactions({
      total_transaction: 11,
      received: 11,
      spent: 11,
    });
    setTransactionsTableLoading(false);
  };

  useEffect(() => {
    generateTransactionsData();
    generateTableData("codes");
    generateTableData("rebates");
  }, []);

  const transactionHeader = [
    {
      name: "Hash",
      width: 20,
      id: 0,
      height: "40px",
    },
    {
      name: "From",
      width: 20,
      id: 1,
      height: "40px",
    },
    {
      name: "to",
      width: 20,
      id: 2,
      height: "40px",
    },
    {
      name: "Type",
      width: 10,
      mobileWidth: 50,
      id: 3,
      height: "40px",
    },
    {
      name: "Amount",
      width: 10,
      mobileWidth: 50,
      id: 4,
      height: "40px",
    },
    {
      name: "Time",
      width: 10,
      id: 5,
      height: "40px",
    },
    {
      name: "Status",
      width: 10,
      id: 6,
      height: "40px",
    },
  ];

  const referralCodeHeader = [
    {
      id: 0,
      name: "My Referral Code",
      width: 15,
      height: "40px",
    },
    {
      id: 1,
      name: "User Address",
      width: 15,
      mobileWidth: width >= 500 ? 45 : 100,
      height: "40px",
    },
    {
      id: 2,
      name: "User Level",
      width: 15,
      height: "40px",
    },
    {
      id: 3,
      name: "Rate",
      width: 15,
      height: "40px",
    },
    {
      id: 4,
      name: "Total Earned",
      width: 15,
      mobileWidth: width >= 500 ? 45 : false,
      height: "40px",
    },
  ];

  const referralHistoryHeader = [
    {
      id: 0,
      name: "From",
      width: 15,
      mobileWidth: width >= 500 ? 45 : 100,
      height: "40px",
    },
    {
      id: 1,
      name: "Referral Code",
      width: 15,
      height: "40px",
    },
    {
      id: 2,
      name: "Referral Level",
      width: 15,
      height: "40px",
    },
    {
      id: 3,
      name: "Amount",
      width: 15,
      mobileWidth: width >= 500 ? 45 : false,
      height: "40px",
    },
  ];

  const referralCardsData = [
    {
      title: "Uni",
      data: [
        {
          title: "Level User",
          value: totalReferralData?.uni?.levelUser,
        },
        {
          title: "Total Comission",
          value: totalReferralData?.uni?.totalComission,
        },
      ],
    },
    {
      title: "Binary",
      active: true,
      data: [
        {
          title: "Level User",
          value: totalReferralData?.binary?.levelUser,
        },
        {
          title: "Total Comission",
          value: totalReferralData?.binary?.totalComission,
        },
      ],
    },
  ];

  const referralCodeTableEmpty = {
    label: "No Referral Code History",
    icon: <NoHistoryIcon />,
  };

  const referralRebatesTableEmpty = {
    label: "No Referral Rebates History",
    icon: <NoHistoryIcon />,
  };

  const transactionsTableEmpty = {
    label: "No Referral Rebates History",
    icon: <NoHistoryIcon />,
  };

  const cardImgs = {
    cpl: "dadsadasdsa",
    btc: "dsadsadsa",
    eth: "dsadsadsa",
    usdt: "dsadsadsa",
    gold: "dsadsadsa",
    trx: "dsadsadsa",
  };

  const tradePriceData = {
    balance: {
      value: 10000,
      currency: "A1",
    },
    freeMargin: {
      value: 5000,
      currency: "A1",
    },
    usedMargin: {
      value: 471,
      currency: "A1",
    },
    profit: {
      value: 2300,
      currency: "A1",
    },
    equity: {
      value: 2300,
      currency: "A1",
    },
    marginLevel: {
      value: 100,
      dir: false,
      measure: "%",
    },
  };

  const handleShowBalance = () => {
    setShowBalance(true);
    console.log("gg");
  };

  return (
    <BrowserRouter>
      <Header
        modules={{
          staking: "true",
          referral: "true",
          trade: "true",
          loan: "true",
          extensions: "true",
          notify: "true",
        }}
        showBalance={showBalance}
        setShowBalance={setShowBalance}
        handleShowBalance={handleShowBalance}
        account={"0x0000000"}
        tradePriceData={tradePriceData}
        location={{pathname: "/trade"}}
        title={"A1"}
        amount={10}
        logoSvg={<LogoSvg />}
        verified={false}
      />
      <DashboardSharedLayout
        links={links}
        disabledAccount={false}
        eliteMemberBtnLabel={"Become Elite Member"}
      >
        <Dashboard
          accountAddress={"address...."}
          translates={translates}
          transactionsData={transactionsData}
          transactionHeader={transactionHeader}
          referralCodeHeader={referralCodeHeader}
          referralHistoryHeader={referralHistoryHeader}
          referralCardsData={referralCardsData}
          codesTableData={codesTableData}
          rebatesTableData={rebatesTableData}
          totalTransactions={totalTransactions}
          referralCodeTableEmpty={referralCodeTableEmpty}
          referralHistoryTableEmpty={referralRebatesTableEmpty}
          transactionsTableEmpty={transactionsTableEmpty}
          referralCodeTableLoading={referralCodeTableLoading}
          referralHistoryTableLoading={referralHistoryTableLoading}
          transactionsTableLoading={transactionsTableLoading}
          accountsData={accountsData}
          cardImgs={cardImgs}
          handleDeposit={() => console.log("hi")}
          handleExchange={() => console.log("hi")}
          handleWithdraw={() => console.log("hi")}
          handleTransfer={() => console.log("hi")}
          accountType={"main"}
          tier={"vip"}
          referralTotal={{all_amount_sum: 0, left_total: 0, total_right: 0}}
        />
      </DashboardSharedLayout>
    </BrowserRouter>
  );
});
