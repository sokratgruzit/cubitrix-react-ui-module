import "./Table.css";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { NoApplicationsIcon } from "../../assets/svgs";

export const Table = ({
  type,
  tableHead,
  tableData,
  handleViewAll,
  tableEmpty,
  tableEmptyData,
  loading,
  customStyles,
}) => {
  const { mobile } = useMobileWidth();
  return (
    <div className={`${type}`} style={customStyles}>
      {loading ? (
        <div className='table-loading-container'>
          <div className='table-loading' />
        </div>
      ) : tableData ? (
        <>
          <div className='table-head'>
            {tableHead.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`th ${item.mobileWidth ? true : false} ${
                    item?.className
                  }`}
                  style={{
                    width: `${mobile ? item.mobileWidth : item.width}%`,
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className='table-more'></div>
          <div className='icon-place'></div>
          {tableData}
        </>
      ) : (
        <div className='table-empty'>
          {tableEmpty ? (
            <div>
              <p className='font-14'>{tableEmptyData?.label}</p>
              {tableEmptyData?.button}
            </div>
          ) : (
            <div>
              {tableEmptyData?.icon ? (
                tableEmptyData?.icon
              ) : (
                <NoApplicationsIcon />
              )}
              <p className='font-14'>
                {tableEmptyData?.label ||
                  "You have no pending KYC applications"}
              </p>
              {handleViewAll && (
                <p
                  className='table-empty__view-all font-14'
                  onClick={handleViewAll}
                >
                  View All Transactions
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
