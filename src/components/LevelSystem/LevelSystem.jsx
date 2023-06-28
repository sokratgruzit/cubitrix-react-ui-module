import { Visual } from '../Visual'
// styles
import './LevelSystem.css'

export const LevelSystem = ({ tableHead, tableData, sideBarClose, label, description }) => {
  return (
    <>
      <Visual
        label={label}
        element={'popup-header'}
        customStyles={{ width: '100%', maxWidth: '100%' }}
        onClick={sideBarClose}
      />
      <div className='sidebar-body'>
        <div className='level-system-container'>
          <p className='font-14'>{description}</p>
          <div className={'level-system-wrapper'}>
            {tableData ? (
              <>
                <div className={'level-system-head'}>
                  {tableHead.map((item, index) => {
                    return (
                      <div key={index} className={`level-system-th`} style={{ width: `${item.width}%` }}>
                        {item.name}
                      </div>
                    )
                  })}
                </div>
                <div className={'level-system-body'}>
                  {tableData.map((item, index) => (
                    <div className='level-system-table' key={index}>
                      {tableHead?.slice(0, 4).map((i, index) => (
                        <div key={index} className={`level-system-td`} style={{ width: `${i.width}%` }}>
                          <span>{[item.level, item.complandHolding, item.rebaseRate][index]}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className='table-empty'>
                <p>No data found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
