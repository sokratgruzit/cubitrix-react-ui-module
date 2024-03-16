import React from "react";

import { CardSlider } from "./components/CardSlider/CardSlider";
import { DashboardTable } from "./components/DashboardTable/DashboardTable";
import translates from "../../translates.json";
import "./Dashboard.css";
import { Loader } from "../Loader/Loader";
// import { Account, AccountType } from '../../assets/svgs'

export const Dashboard = ({
  accountAddress,
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
  transactionLink,
}) => {
  let referralItem = {};

  const tables = [
    {
      type: "transactions",
      header: translates?.transactions.en,
      description: (
        <>
          {translates?.total_number_of_operations.en}{" "}
          <span className="dashboard-transactions-span">
            {totalTransactions?.total_transaction}
          </span>
        </>
      ),
      rightPanelData: [
        {
          title: translates?.incoming.en,
          value: totalTransactions?.received,
        },
        {
          title: translates?.outgoing.en,
          value: totalTransactions?.spent,
        },
      ],
      footer: {
        link: "/transactions",
        label: translates?.all_transactions.en,
      },
      tableHeader: transactionHeader,
      data: transactionsData?.transactions,
      tableEmpty: transactionsTableEmpty,
      loading: transactionsTableLoading,
    },
  ];

  if (tier && tier !== "Novice Navigator" && rebatesTableData.length > 0) {
    referralItem = {
      type: referralHistoryTableType,
      header: translates?.referral_history.en,
      description: translates?.history_of.en,
      footer: {
        link: "/referral",
        label: translates?.all_records.en,
      },
      tableHeader: referralHistoryHeader,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
      tableButtons: referralHistoryButtonsRight,
    };

    tables.push(referralItem);
  }

  const renderValue = (value) => {
    if (value === null || value === undefined) {
      return <Loader loading="Loading..." />;
    } else {
      return (
        <p>
          {value?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) ?? 0}{" "}
          AONE
        </p>
      );
    }
  };

  return (
    <>
      <CardSlider
        translates={translates}
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
      {extensions?.referral === "true" && (
        <div className="dashboard-total-referral-row">
          <div className="dashboard-total-referral-item">
            <p>{translates?.expected_binary.en}</p>
            {renderValue(referralTotal?.all_amount_sum)}
          </div>
          <div className="dashboard-total-referral-item">
            <p>{translates?.total_left.en}</p>
            {renderValue(referralTotal?.left_total)}
          </div>
          <div className="dashboard-total-referral-item">
            <p>{translates?.total_right.en}</p>
            {renderValue(referralTotal?.total_right)}
          </div>
          <div className="dashboard-total-referral-item">
            <p>{translates?.expected_uni.en}</p>
            {renderValue(referralTotal?.uni)}
          </div>
        </div>
      )}
      {tables?.map((item, index) => (
        <DashboardTable
          accountAddress={accountAddress}
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
          transactionLink={transactionLink}
        />
      ))}
    </>
  );
};
