import { useState } from 'react';
import { Button } from "../Button";
import "./Table.css";
import { Arrow   } from "../../assets/svgs";

export const Table = (props) => {
  const [showMoreIndex, setShowMoreIndex] = useState(null);
  return (
    <>
      <table className={`${props.type}`}>
        <thead>
          {props.tableHead.map((item) => {
            return (
              <tr className="table-head">
                <tr className="th">{item.stakedAmountTitle}</tr>
                <tr className="th table-none">{item.stakedDateTitle}</tr>
                <tr className="th table-none">{item.unstakedDateTitle}</tr>
                <tr className="th table-none">{item.earnRewardTitle}</tr>
                <tr className="th">{item.harvestTitle}</tr>
              </tr>
            );
          })}

        </thead>
        <tbody>
          {
            props.tableData ? (
              props.tableData.map((item, index) => {
                return (
                  <>
                    <tr key={item.id} className="table">
                      <td className={showMoreIndex === index ? 'show-more-td td' : "td"}>{item.stakedAmount}</td>
                      <td className="td table-none">{item.stakedDate}</td>
                      <td className="td table-none">{item.unstakedDate}</td>
                      <td className="td table-none">{item.earnReward}</td>
                      <td className={showMoreIndex === index ? 'show-more-td td' : "td"}>{item.harvest}</td>
                      <div className="btn-adjust">
                        <Button
                          element="button"
                          label={"Unstake"}
                          size={"btn-lg"}
                          type={"btn-secondary"}
                          onClick={() => setToggle((prevState) => !prevState)}
                        />
                        <Button
                          element="button"
                          label={"Harvest"}
                          size={"btn-lg"}
                          type={"btn-primary"}
                          onClick={() => setToggle((prevState) => !prevState)}
                        />
                        <Arrow showMore={showMoreIndex === index} onClick={() => {
                          setShowMoreIndex(showMoreIndex => showMoreIndex === index ? null : index)
                        }} />
                      </div>
                    </tr>
                    {showMoreIndex === index && (
                      <tr className="show-more-table">
                        <colgroup className="show-more-table__item font-14">
                          <th className="font-14">Stake Date</th>
                          <td>{item.stakedDate}</td>
                        </colgroup>
                        <colgroup className="show-more-table__item font-14">
                          <th className="font-14">Unstake Date</th>
                          <td>{item.unstakedDate}</td>
                        </colgroup>
                        <colgroup className="show-more-table__item font-14">
                          <th>Earn Rewaard</th>
                          <td>{item.earnReward}</td>
                        </colgroup>
                        <div className="show-more-buttons">
                          <Button
                            element="button"
                            label={"Unstake"}
                            size={"btn-lg"}
                            type={"btn-secondary"}
                            onClick={() => setToggle((prevState) => !prevState)}
                          />
                          <Button
                            element="button"
                            label={"Harvest"}
                            size={"btn-sm"}
                            type={"btn-primary"}
                            onClick={() => setToggle((prevState) => !prevState)}
                          />
                      </div>
                      </tr>
                    )}
                  </>
                );  
              })
            ) : (
              <tr className="table">
                <td>
                  You have no stake record yet.
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
};
