import {storiesOf} from "@storybook/react";

import {BrowserRouter} from "react-router-dom";
import {Header} from "../components/Header";

import "../assets/css/main-theme.css";
import {useEffect, useState} from "react";
import {useMobileWidth} from "../hooks/useMobileWidth";
import {DashboardSharedLayout} from "../components/DashboardSharedLayout/DashboardSharedLayout";
import {Transactions} from "../components/Transactions";
import {NoHistoryIcon} from "../assets/svgs";
import translates from "../translates.json";
import LogoSvg from "../assets/svgs/LogoSvg";

const stories = storiesOf("Transactions", module);

stories.add("Transactions", () => {
  const [transactionsData, setTransactionsData] = useState({});
  const [totalTransactions, setTotalTransactions] = useState({});
  const [filterObject, setFilterObject] = useState({
    type: "all",
    account: "all",
    date: "all",
  });
  const [loading, setLoading] = useState(false);

  const [transactionsPaginationTotal, setTransactionsPaginationTotal] =
    useState(1);
  const [transactionsCurrentPage, setTransactionsCurrentPage] = useState(1);

  const {width} = useMobileWidth();

  const location = {
    pathname: "/",
  };

  const data = [
    {
      A1_price: 1,
      amount: 0.1,
      createdAt: "2023-12-22T10:04:28.867Z",
      from: "0xb01238ced1ffd3c92ea13e6c41ed2ed0a0b1c4df",
      to: "0xb01238ced1ffd3c92ea13e6c41ed2ed0a0b1c4df",
      tx_currency: "currency",
      tx_fee: 0,
      tx_fee_currency: "a1",
      tx_hash:
        "0xqsnk5ec9zyqrqjvhptt4egygjuowaq6l0yzeepikyyanhiiuzk5mxuvnfngatye0l3",
      tx_options: {
        amount: 0.1,
        toAccType: "eth",
        percentage: 1,
        unstake_time: 1734343468861,
      },
      tx_status: "approved",
      tx_type: "currency stake",
      updatedAt: "2023-12-22T10:04:28.867Z",
      __v: 0,
      _id: "65855f2c52403094f73cd9c0",
    },
    {
      A1_price: 1,
      amount: 1000,
      createdAt: "2023-12-22T10:03:43.262Z",
      from: "0xb01238ced1ffd3c92ea13e6c41ed2ed0a0b1c4df",
      to: "0xb01238ced1ffd3c92ea13e6c41ed2ed0a0b1c4df",
      tx_currency: "ether",
      tx_hash:
        "0xvdnhjk1wb5x1kefafpru1lstvr9t1kq4ytnyawj2uzk1emfipwiuzfdhjqtr7ppgxj",
      tx_options: {
        method: "exchange",
        fromAccType: "a1",
        toAccType: "ETH",
        fromAmount: 1000,
        toAmount: 0.431695,
      },
      tx_status: "approved",
      tx_type: "exchange",
      updatedAt: "2023-12-22T10:03:43.262Z",
      __v: 0,
      _id: "65855eff52403094f73cd984",
    },
  ];

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

  const generateTransactionsData = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:4000/api/transactions/get_transactions_of_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "0x43f59f41518903a274c7897dffb24db86a0dd23a",
          limit: 5,
          page: transactionsCurrentPage,
          ...filterObject,
        }),
      }
    );

    const data = await response.json();

    setTransactionsPaginationTotal(data.total_pages);
    setTransactionsData(data);
    setTotalTransactions({
      total_transaction: data.total_transaction,
      received: data.amounts_to_from[0].toCount,
      spent: data.amounts_to_from[0].fromSum,
    });
    setLoading(false);
  };

  useEffect(() => {
    generateTransactionsData();
  }, [
    filterObject?.type,
    filterObject?.date,
    filterObject?.account,
    transactionsCurrentPage,
  ]);

  const transactionHeader = [
    {
      name: "Hash",
      width: 35,
      id: 0,
      height: "40px",
    },
    {
      name: "From",
      width: 35,
      id: 1,
      height: "40px",
    },
    {
      name: "Type",
      width: 15,
      mobileWidth: 50,
      id: 2,
      height: "40px",
    },
    {
      name: "Amount",
      width: 15,
      mobileWidth: 50,
      id: 3,
      height: "40px",
    },
    {
      name: "Time",
      width: 20,
      id: 4,
      height: "40px",
    },
    {
      name: "Status",
      width: 15,
      id: 5,
      height: "40px",
    },
  ];

  // console.log(filterObject);

  const footer = {
    link: "/referral",
    label: "All Code",
  };

  const rightPanelData = [
    {
      title: "Recieved",
      value: totalTransactions?.received,
    },
    {
      title: "Spent",
      value: totalTransactions?.spent,
    },
  ];

  const inputs = [
    {
      title: "Choose Account",
      name: "account",
      type: "lable-input-select",
      options: [
        {name: "All", value: "all"},
        {name: "Main", value: "main"},
        {name: "Trade", value: "trade"},
        {name: "Loan", value: "loan"},
      ],
      defaultAny: "Any Account",
      onChange: (e) =>
        setFilterObject((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
    {
      title: "Choose Type",
      name: "type",
      type: "lable-input-select",
      options: [
        {name: "All", value: "all"},
        {name: "Deposit", value: "deposit"},
        {name: "Transfer", value: "transfer"},
        {name: "Internal Transaction", value: "internal_transaction"},
        {name: "Withdraw", value: "withdraw"},
        {name: "Referral Bonus", value: "referral_bonus"},
      ],
      defaultAny: "Any Type",
      onChange: (e) =>
        setFilterObject((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
    {
      title: "Choose Time",
      name: "time",
      type: "date-picker-input",
      defaultAny: "Any Time",
      onChange: (e) =>
        setFilterObject((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
  ];

  const transactionsTableEmpty = {
    label: "No Referral Rebates History",
    icon: <NoHistoryIcon />,
  };

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x0000000"}
        location={{pathName: ""}}
        title={"A1"}
        amount={10}
        logoSvg={<LogoSvg />}
        verified={false}
      />
      <DashboardSharedLayout links={links}>
        <Transactions
          header={"Transactions"}
          description={
            <p className="font-14">
              Total number of operations:{" "}
              <span className="dashboard-transactions-span">
                {totalTransactions?.total_transaction}
              </span>
            </p>
          }
          translates={translates}
          accountAddres={"address...."}
          rightPanelData={rightPanelData}
          footer={footer}
          tableHead={transactionHeader}
          data={data}
          paginationCurrent={transactionsCurrentPage}
          paginationTotal={transactionsPaginationTotal}
          paginationEvent={(page) => setTransactionsCurrentPage(page)}
          inputs={inputs}
          currentObject={filterObject}
          loading={loading}
          tableEmpty={transactionsTableEmpty}
        />
      </DashboardSharedLayout>
    </BrowserRouter>
  );
});
