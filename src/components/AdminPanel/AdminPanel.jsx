import { React } from "react";
import "./AdminPanel.css";
import { Table } from "../Table";
import { FilterBox } from "../FilterBox";
import { Visual } from "../Visual";
import { TableElement } from "../TableElement";
import { DashboardCard } from "../DashboardCard";
import { DeveloperApi } from "../DeveloperApi";

export const AdminPanel = (props) => {
  let filter;
  if (props.tableFilter === true) {
    filter = (
      <FilterBox
        tableFilterData={props.tableFilterData}
        setTableFilterOutcomingData={props.setTableFilterOutcomingData}
        tableSearchSelect={props.tableSearchSelect}
        tableHeader={props.tableHeader}
        customStyles={{ marginBottom: "20px" }}
      />
    );
  }

  return (
    <div
      className={`admin-content  animate-translateX ${
        props.animate ? "animate" : ""
      }`}
      style={{ transitionDelay: ".2s" }}
    >
      {props.adminPage === "dashboard" && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            paddingTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {props.balanceCards &&
            props.balanceCards.map((item, index) => {
              return (
                <div key={index}>
                  <DashboardCard
                    cardKey={item?.id}
                    type={item?.type}
                    account={item?.account}
                    coinIcon={item?.coinIcon}
                    balance={item?.totalbalance}
                    info={item?.info}
                    customStyles={{ width: "372px" }}
                  />
                </div>
              );
            })}
          {props.rewardsCard && (
            <DashboardCard
              type={"rewards-card"}
              account={props.rewardsCard.account}
              thisMonthSum={props.rewardsCard.thisMonthSum}
              todaySum={props.rewardsCard.todaySum}
              thisYearSum={props.rewardsCard.thisYearSum}
              totalStaked={props.rewardsCard.totalStaked}
              info={props.rewardsCard.info}
              customStyles={{ width: "372px" }}
            />
          )}
          {props.coinCards &&
            props.coinCards.map((item, index) => {
              return (
                <div key={index}>
                  <DashboardCard
                    coinKeyey={item?.id}
                    type={item?.type}
                    balance={item?.balance}
                    coin={item?.currency}
                    coinIcon={item?.icon}
                    incoming={item?.incoming}
                    outcoming={item?.outcoming}
                    customStyles={{ width: "372px" }}
                    pendingWithdrawals={item?.pendingWithdrawals}
                  />
                </div>
              );
            })}
        </div>
      )}
      {props.adminPage === "table" && (
        <>
          <Visual
            element={"table-header"}
            label={props.pageLabel}
            buttons={props.tableHeaderButtons}
            fontSize={"font-20"}
            customStyles={{ marginBottom: "20px" }}
          />
          {filter}
          <Table
            type={"table-version"}
            tableHead={props.tableHead}
            mobile={props.mobile}
            tableData={props.tableData}
            loading={props.dataLoading}
            handleViewAll={props.handleViewAll}
            tableEmulator={props.tableEmulator}
          />
          <TableElement
            customStyle={{ marginTop: "30px", paddingBottom: "100px" }}
            type={"pagination"}
            currentPage={props.paginationCurrent}
            totalCount={props.paginationTotal}
            onPageChange={props.paginationEvent}
          />
        </>
      )}
      {props.adminPage === "developerApi" && (
        <>
          <DeveloperApi
            array={props.developersApi}
            currentArray={props.developersApiValues}
            setCurrentArray={props.setDeveloperApiValues}
            handleSubmit={props.handleDeveloperApiTryOut}
            successResponse={props.developerApiSuccessResponse}
            setSuccessResponse={props.setDeveloperApiSuccessResponse}
            failResponse={props.developerApiFailResponse}
            responseActive={props.developerApiResponseActive}
            setResponseActive={props.setDeveloperApiResponseActive}
            developerApiActive={props.developerApiActive}
            setDeveloperApiActive={props.setDeveloperApiActive}
            connectButton={props.developersApiConnectButton}
            walletConnect={props.walletConnect}
            loading={props.developerApiLoading}
          />
        </>
      )}
    </div>
  );
};
