import { Visual } from '../Visual'
// styles
import './LevelSystem.css'

export const LevelSystem = ({ tableHead, tableData, bv, typeBns, type }) => {
  return (
    <>
        <div className='level-system-container'>
            {typeBns}
            {type == 'binary' && (
                <div className="level-system-bv">
                    Bv: {bv}
                </div>
            )}

            <div className={'level-system-wrapper'}>
                {tableData ? (
                    <>
                        <div className={'level-system-head'}>
                            {tableHead.map((item, index) => {
                                return (
                                    <div key={item} className={`level-system-th`}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        {type == 'binary' && (
                            <div className={'level-system-body'}>
                                {tableData.map((item, index) => (
                                    <div className='level-system-table' key={index}>
                                        <div className={`level-system-td`}>
                                            <span>{item?.from || '-'}</span>
                                        </div>
                                        <div key={index} className={`level-system-td`}>
                                            <span>{item?.to || '-'}</span>
                                        </div>
                                        <div key={index} className={`level-system-td`}>
                                            <span>{item?.price || '-'}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {type == 'uni' && (
                            <div className={'level-system-body'}>
                                {tableData.map((item, index) => (
                                    <div className='level-system-table' key={index}>
                                        <div className={`level-system-td`}>
                                            <span>Lvl: {index + 1}</span>
                                        </div>
                                        <div key={index} className={`level-system-td`}>
                                            <span>{item}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className='table-empty'>
                        <p>No data found</p>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}
