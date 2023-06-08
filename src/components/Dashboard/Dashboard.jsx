import React from 'react'

import { CardSlider } from './components/CardSlider/CardSlider'
import { DashboardTable } from './components/DashboardTable/DashboardTable'
import './Dashboard.css'
// import { Account, AccountType } from '../../assets/svgs'

export const Dashboard = ({
  transactionsData,
  transactionHeader,
  referralCodeHeader,
  referralHistoryHeader,
  referralCardsData,
  codesTableData,
  rebatesTableData,
  totalTransactions,
  referralCodeTableEmpty,
  referralHistoryTableEmpty,
  transactionsTableEmpty,
  referralCodeTableLoading,
  referralHistoryTableLoading,
  transactionsTableLoading,
  accountsData,
  handleDeposit,
  handleExchange,
  handleWithdraw,
  handleTransfer,
  cardImgs,
}) => {
  const tables = [
    {
      type: 'transactions',
      header: 'Transactions',
      description: `Total number of operations: ${totalTransactions?.total_transaction}`,
      rightPanelData: [
        {
          title: 'Recieved',
          value: totalTransactions?.received,
        },
        {
          title: 'Spent',
          value: totalTransactions?.spent,
        },
      ],
      footer: {
        link: '/transactions',
        label: 'All Transactions',
      },
      tableHeader: transactionHeader,
      data: transactionsData?.transactions,
      tableEmpty: transactionsTableEmpty,
      loading: transactionsTableLoading,
    },
    {
      type: 'referral-code',
      header: 'Referral Code',
      description: `You can create multiple referral codes to attract traders`,
      footer: {
        link: '/referral',
        label: 'All Code',
      },
      tableHeader: referralCodeHeader,
      referralCardsData: referralCardsData,
      data: codesTableData,
      tableEmpty: referralCodeTableEmpty,
      loading: referralCodeTableLoading,
    },
    {
      type: 'referral-history',
      header: 'Referral Revates History',
      description: `The airdrop history of your weekly referral rebates.`,
      footer: {
        link: '/referral',
        label: 'All History',
      },
      tableHeader: referralHistoryHeader,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
    },
  ]

  return (
    <>
      <CardSlider
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
          referralCardsData={item?.referralCardsData}
          data={item?.data}
          tableEmpty={item?.tableEmpty}
          loading={item?.loading}
        />
      ))}
    </>
  )
}
