import React, { useState } from "react";

import "./Transactions.css";
import { Table } from "../Table";
import { Visual } from "../Visual";
import { TableElement } from "../TableElement";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Link } from "react-router-dom";
import { FilterBox } from "../FilterBox";
import { Input } from "../Input";

export const Transactions = ({
  tableHead,
  data,
  paginationCurrent,
  paginationTotal,
  paginationEvent,
  header,
  description,
  rightPanelData,
  accountAddress,
  footer,
  inputs,
  currentObject,
  loading,
  tableEmpty,
  translates,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width } = useMobileWidth();

  let mobileExpandFunc = (id) => {
    if (width <= 1300) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  let mobile = width <= 1300;

  const tableVisualMore = (
    <div className={"dashboard-table-head-wrap"}>
      {rightPanelData?.map((item, index) => (
        <div key={index} className={"dashboard-table-head"}>
          <h3 className={`font-20`}>
            {item?.value?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            A1
          </h3>
          <p className={`font-16`}>{item?.title}</p>
        </div>
      ))}
    </div>
  );

  const tableFooter = (
    <div
      className={"dashboard-table-footer"}
      style={{
        display: `${data?.length ? "flex" : "none"}`,
        padding: `${data?.length ? "20px" : "0px"}`,
      }}
    >
      <TableElement
        color={"#C38C5C"}
        type={"pagination"}
        currentPage={paginationCurrent}
        totalCount={paginationTotal}
        onPageChange={paginationEvent}
      />
    </div>
  );

  let tableData;
  tableData = data?.map((item, index) => {
    const createdAt = new Date(item?.createdAt);
    const createdTime = createdAt.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    return (
      <div
        className={`table-parent ${
          mobileExpand == item._id ? "active" : ""
        } dashboard-table-parent`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id);
        }}
      >
        <div className="table">
          <div
            className={`td col ${
              tableHead[0].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? tableHead[0].mobileWidth : tableHead[0].width
              }%`,
            }}
          >
            {/* <Account type={'spl'} /> */}
            <span>{item?.from}</span>
          </div>
          <div
            className={`td ${
              tableHead[1].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? tableHead[1].mobileWidth : tableHead[1].width
              }%`,
            }}
          >
            {/* <AccountType type={'top-up'} /> */}

            {/* Render based on tx_type being "bonus" */}
            {item?.tx_type === "bonus" ? (
              <span>
                {item?.tx_type} - {item?.tx_options?.type}
              </span>
            ) : (
              <span>{item?.tx_type}</span>
            )}

            {/* Render based on tx_type being "transfer" and accountAddress comparison */}
            <span>
              {item?.tx_type === "transfer" &&
                (accountAddress === item?.from ? (
                  <span>-from</span>
                ) : (
                  <span>-to</span>
                ))}
            </span>
          </div>
          <div
            className={`td ${
              tableHead[2].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? tableHead[2].mobileWidth : tableHead[2].width
              }%`,
            }}
          >
            <span>
              {item?.tx_options?.tokenCount
                ? item?.tx_options?.tokenCount +
                  " " +
                  (item?.tx_options?.toAccType?.toUpperCase() || " A1")
                : item?.amount?.toFixed(2) +
                  " " +
                  (item?.tx_options?.fromAccType == "ATAR"
                    ? "A1"
                    : item?.tx_options?.fromAccType?.toUpperCase())}
            </span>
          </div>
          <div
            className={`td ${
              tableHead[3].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? tableHead[3].mobileWidth : tableHead[3].width
              }%`,
            }}
          >
            <span>{createdTime}</span>
          </div>

          <div
            className={`td ${
              tableHead[4].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? tableHead[4].mobileWidth : tableHead[4].width
              }%`,
            }}
          >
            <span>{item?.tx_status}</span>
          </div>
        </div>
        <div className="table-more" />
        <div className="icon-place" style={{ height: "40px" }}>
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
            <div className="td">
              <div className="mobile-ttl">{tableHead[0].name}</div>
              <span>{item?.from}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">
                {tableHead[4].name} {tableHead[4]?.icon}
              </div>
              <span>{item?.tx_status}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">
                {tableHead[3].name} {tableHead[3]?.icon}
              </div>
              <span>{createdTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleInputChange = (e, params) => {
    const { name, onChange } = params;
    let data = {
      target: {
        value: e,
        name,
      },
    };

    onChange(data);
  };

  return (
    <div className="transactions-page-container">
      <h1>{translates?.transactions_history.en}</h1>
      <div className="transaction-selects-container">
        {inputs?.map((params, index) => {
          let selectedOption;
          if (params.type === "lable-input-select") {
            selectedOption = params?.options.find(
              (option) => option.value === currentObject[params?.name]
            );
          }
          return (
            <Input
              key={index}
              type={params?.type}
              label={params.title}
              name={params.name}
              value={
                params?.type === "lable-input-select"
                  ? selectedOption?.name ||
                    params?.defaultAny ||
                    params?.options[0]?.value
                  : currentObject[params?.name] || params?.defaultAny
              }
              customStyles={{ width: "100%" }}
              selectHandler={(opt) => {
                handleInputChange(opt, params);
              }}
              onChange={(e) => handleInputChange(e, params)}
              defaultData={params?.options}
              customInputStyles={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              svg={
                params?.type === "lable-input-select"
                  ? selectedOption?.svg
                  : params?.svg
              }
            />
          );
        })}
      </div>
      <Table
        tableHeadMore={
          <div className="dashboard-table-header-container">
            <Visual
              element={"table-header"}
              label={header}
              description={description}
              fontSize={"font-20"}
              customStyles={{ border: "none", padding: "0", width: "100%" }}
              buttons={tableVisualMore}
              labelCustomStyles={{ color: "#C38C5C" }}
            />
          </div>
        }
        tableData={data?.length ? tableData : false}
        tableFooter={tableFooter}
        tableHead={tableHead}
        customStyles={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.01)",
          backdropFilter: "blur(5px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
        customHeadStyles={{
          height: "81px",
          alignItems: "center",
        }}
        tableEmptyData={tableEmpty}
        loading={loading}
      />
    </div>
  );
};
