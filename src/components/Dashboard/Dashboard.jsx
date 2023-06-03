import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { CardSlider } from './components/CardSlider/CardSlider'
import { DashboardTable } from './components/DashboardTable/DashboardTable'
import './Dashboard.css'
import { useMobileWidth } from '../../hooks/useMobileWidth'
import { Account, AccountType } from '../../assets/svgs'

export const Dashboard = ({
  links,
  transactionsData,
  transactionHeader,
  referralCodeHeader,
  referralHistoryHeader,
  referralCardsData,
  codesTableData,
  rebatesTableData,
  totalTransactions,
}) => {
  const { width } = useMobileWidth()
  const location = useLocation()

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
        link: '/referral',
        label: 'All Code',
      },
      tableHeader: transactionHeader,
      data: transactionsData?.transactions,
    },
    {
      type: 'referral-code',
      header: 'Referral Code',
      description: `You can create multiple referral codes to attract traders`,
      footer: {
        link: '/referral#referral-tables',
        label: 'All Code',
      },
      tableHeader: referralCodeHeader,
      referralCardsData: referralCardsData,
      data: codesTableData,
    },
    {
      type: 'referral-history',
      header: 'Referral Revates History',
      description: `The airdrop history of your weekly referral rebates.`,
      footer: {
        link: '/referral#referral-tables',
        label: 'All History',
      },
      tableHeader: referralHistoryHeader,
      data: rebatesTableData,
    },
  ]

  return (
    <>
      <CardSlider />
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
        />
      ))}
    </>
  )
}
