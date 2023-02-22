import "./Table.css";
import { useMobileWidth } from '../../hooks/useMobileWidth';
import { NoApplicationsIcon } from "../../assets/svgs";

export const Table = ({
    type,
    tableHead,
    tableData,
    handleViewAll,
}) => {
    const { mobile } = useMobileWidth();
    return (
        <>
            <div className={`${type}`}>
                {tableData ? (
                    <>
                        <div className="table-head">
                            {tableHead.map((item, index) => {
                                return (
                                    <div key={index} className={`th ${item.mobileWidth ? true : false } ${item?.className}`} style={{width: `${mobile ? item.mobileWidth : item.width}%`}}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="table-more"></div>
                        <div className="icon-place"></div>
                        {tableData}
                    </>
                ) : (
                    <div className="table-empty">
                        <div>
                            <NoApplicationsIcon />
                            <p className="font-14">You have no pending KYC applications</p>
                        </div>
                        {handleViewAll && (
                            <p className="table-empty__view-all font-14" onClick={handleViewAll}>
                                View All Transactions
                            </p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
