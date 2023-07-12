import React from "react";

import { CardSlider } from "./components/CardSlider/CardSlider";
import { DashboardTable } from "./components/DashboardTable/DashboardTable";
import "./Dashboard.css";
// import { Account, AccountType } from '../../assets/svgs'

export const Dashboard = ({
  transactionsData,
  transactionHeader,
  referralHistoryHeader,
  rebatesTableData,
  totalTransactions,
  referralHistoryTableEmpty,
  transactionsTableEmpty,
  referralHistoryTableLoading,
  transactionsTableLoading,
  accountsData,
  handleDeposit,
  handleExchange,
  handleWithdraw,
  handleTransfer,
  cardImgs,
  accountType,
  setAccountType,
}) => {
  const tables = [
    {
      type: "transactions",
      header: "Transactions",
      description: (
        <p className="font-14">
          Total number of operations:{" "}
          <span className="dashboard-transactions-span">
            {totalTransactions?.total_transaction}
          </span>
        </p>
      ),
      rightPanelData: [
        {
          title: "Recieved",
          value: totalTransactions?.received,
        },
        {
          title: "Spent",
          value: totalTransactions?.spent,
        },
      ],
      footer: {
        link: "/transactions",
        label: "All Transactions",
      },
      tableHeader: transactionHeader,
      data: transactionsData?.transactions,
      tableEmpty: transactionsTableEmpty,
      loading: transactionsTableLoading,
    },
    {
      type: "referral-code",
      header: "Referral Code",
      description: `You can create multiple referral codes to attract traders`,
      footer: {
        link: "/referral",
        label: "All Code",
      },
    },
    {
      type: "referral-history",
      header: "Referral Revates History",
      description: `The airdrop history of your weekly referral rebates.`,
      footer: {
        link: "/referral",
        label: "All History",
      },
      tableHeader: referralHistoryHeader,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
    },
  ];

  return (
    <>
      <CardSlider
        accountType={accountType}
        setAccountType={setAccountType}
        accounts={accountsData}
        cardImgs={cardImgs}
        handleDeposit={handleDeposit}
        handleExchange={handleExchange}
        handleWithdraw={handleWithdraw}
        handleTransfer={handleTransfer}
      />
      {tables?.map((item, index) => (
        <DashboardTable
          key={index}
          type={item?.type}
          header={item?.header}
          description={item?.description}
          footer={item?.footer}
          rightPanelData={item?.rightPanelData}
          tableHeader={item?.tableHeader}
          data={item?.data}
          tableEmpty={item?.tableEmpty}
          loading={item?.loading}
        />
      ))}
    </>
  );
};
