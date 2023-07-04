import './Table.css'
import { useMobileWidth } from '../../hooks/useMobileWidth'
import { NoApplicationsIcon } from '../../assets/svgs'

export const Table = ({
  type,
  tableHead,
  tableData,
  handleViewAll,
  tableEmpty,
  tableEmptyData,
  loading,
  customStyles,
  tableHeadMore,
  customHeadStyles,
  customTableMoreStyles,
  customThStyles,
  tableFooter,
}) => {
  const { mobile } = useMobileWidth()
  return (
    <div className={`${type}`} style={customStyles} id={'table-version'}>
      {tableHeadMore}
      {tableData ? (
        <>
          {tableHead && (
            <div className='table-head' style={customHeadStyles}>
              {tableHead?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`th ${item.mobileWidth ? true : false} ${item?.className}`}
                    style={{
                      width: `${mobile ? item.mobileWidth : item.width}%`,
                      height: `${item.height}`,
                      ...customThStyles,
                    }}
                  >
                    {item.name}
                    {item?.icon}
                  </div>
                )
              })}
            </div>
          )}
          <div className='table-more' style={customTableMoreStyles}></div>
          <div className='icon-place' style={customTableMoreStyles}></div>
          {loading ? (
            <div className='table-loading-container'>
              <div className='table-loading' />
            </div>
          ) : (
            tableData
          )}
          {tableFooter}
        </>
      ) : (
        <div className='table-empty'>
          {tableEmpty ? (
            <>
              <p className='font-14' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {tableEmptyData?.label}
              </p>
              {tableEmptyData?.button}
            </>
          ) : (
            <>
              {tableEmptyData?.icon ? tableEmptyData?.icon : <NoApplicationsIcon />}
              <p className='font-14' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {tableEmptyData?.label || 'You have no pending KYC applications'}
              </p>
              {handleViewAll && (
                <p className='table-empty__view-all font-14' onClick={handleViewAll}>
                  View All Transactions
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
