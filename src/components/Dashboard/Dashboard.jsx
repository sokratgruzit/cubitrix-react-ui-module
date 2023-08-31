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
  referralHistoryButtonsRight,
  referralHistoryTableType,
  tier,
  extensions,
  stakedTotal,
  handleStake,
  referralTotal,
}) => {
  let referralItem = {};

  const tables = [
    {
      type: "transactions",
      header: "Transactions",
      description: (
        <>
          Total number of operations:{" "}
          <span className="dashboard-transactions-span">
            {totalTransactions?.total_transaction}
          </span>
        </>
      ),
      rightPanelData: [
        {
          title: "Incoming",
          value: totalTransactions?.received,
        },
        {
          title: "Outgoing",
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
  ];

  if (tier && tier !== "Novice Navigator") {
    referralItem = {
      type: referralHistoryTableType,
      header: "Referral History",
      description: `The airdrop history of your weekly referral rebates.`,
      footer: {
        link: "/referral",
        label: "All History",
      },
      tableHeader: referralHistoryHeader,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
      tableButtons: referralHistoryButtonsRight,
    };

    tables.push(referralItem);
  }

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
        tier={tier}
        extensions={extensions}
        stakedTotal={stakedTotal}
        handleStake={handleStake}
      />
      <div className="dashboard-total-referral-row">
        <div className="dashboard-total-referral-item">
          <p>New Volume</p>
          <p>
            {referralTotal?.all_amount_sum?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) ?? 0}
          </p>
        </div>
        <div className="dashboard-total-referral-item">
          <p>Total Left</p>
          <p>
            {referralTotal?.left_total?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) ?? 0}
          </p>
        </div>
        <div className="dashboard-total-referral-item">
          <p>Total Right</p>
          <p>
            {referralTotal?.total_right?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) ?? 0}
          </p>
        </div>
        <div className="dashboard-total-referral-item">
          <p>Uni</p>
          <p>
            {referralTotal?.uni?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) ?? 0}
          </p>
        </div>
      </div>
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
          tableButtons={item?.tableButtons}
        />
      ))}
    </>
  );
};
