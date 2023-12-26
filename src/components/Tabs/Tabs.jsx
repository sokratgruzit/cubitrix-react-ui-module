import "./Tabs.css";
import {useState} from "react";

export const Tabs = (props) => {
  const [toggle, setToggle] = useState(1);
  const [select, setSelect] = useState(false);

  let tabsHandler = (num) => {
    setToggle(num);
  };

  const handleTabClick = (index) => {
    props.setActiveTab(index);
    if (props.onTabClick) {
      props.onTabClick(index);
    }
  };
  let tabs = null;

  if (props.type === "tabs") {
    tabs = (
      <div className={`${"tabs"}`} onClick={props.onClick}>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"tab"}
              ${toggle === 1 ? "active-tab" : ""}`}
        >
          Position
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"tab"}
              ${toggle === 2 ? "active-tab" : ""}`}
        >
          Orders <span>0</span>
        </div>
        <div
          onClick={() => {
            tabsHandler(3);
          }}
          className={`${"tab"}
              ${toggle === 3 ? "active-tab" : ""}`}
        >
          Fills <span>0</span>
        </div>
        <div
          onClick={() => {
            tabsHandler(4);
          }}
          className={`${"tab"}
              ${toggle === 4 ? "active-tab" : ""}`}
        >
          Payments <span>0</span>
        </div>
        <div className="expend-svg">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 17.3333H15.5"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.5 0.666626H15.5"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 4V14"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3583 5.43328L7.99993 3.07495L5.6416 5.43328"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3583 12.2416L7.99993 14.5999L5.6416 12.2416"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }
  if (props.type === "two-component-tabs") {
    tabs = (
      <div className={`${"two-component-tabs"}`} onClick={props.onClick}>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"two-component-tab"}
              ${toggle === 2 ? "active" : ""}`}
        >
          <span>0.93801</span>
          <span>Buy</span>
        </div>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"two-component-tab"}
              ${toggle === 1 ? "active" : ""}`}
        >
          <span>0.93801</span>
          <span>Sell</span>
        </div>
      </div>
    );
  }
  if (props.type === "text-tabs") {
    tabs = (
      <div style={props.customStyles} className="text-tabs">
        {props.tabsData.map((item, index) => (
          <div
            key={index + item}
            onClick={() => {
              item.onClick && item.onClick(item.name);
            }}
            onMouseEnter={() => {
              !item.onClick && setSelect(item + index);
            }}
            onMouseLeave={() => {
              !item.onClick && setSelect(false);
            }}
            className={`text-tab ${
              (item.name === props.activeTab && !item.tabSelect) ||
              (item?.tabSelect &&
                item.tabSelect.some((obj) => obj.name === props.activeTab))
                ? "active-text-tab"
                : ""
            } ${item + index == select ? "active-select" : ""}`}
          >
            {item.tabSelect
              ? item.tabSelect.some((obj) => obj.name === props.activeTab)
                ? item.tabSelect.find((tab) => tab.name === props.activeTab)
                    .title
                : item.tabSelect[0].title
              : item.title}
            {item.tabSelect && (
              <>
                <svg
                  className={`${"expend-i"} ${toggle === 3 ? "expend" : ""}`}
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.299 1.33337L6.47141 5.16101C6.01937 5.61305 5.27968 5.61305 4.82764 5.16101L1 1.33337"
                    stroke="#9C9DA3"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-tab__tooltip">
                  {item.tabSelect.map((option, index) => {
                    return (
                      <div
                        className={`text-tab__tooltip-option ${
                          option.name == props.activeTab ? "active" : ""
                        }`}
                        key={index + option}
                        onClick={() => {
                          option.onClick(item.option);
                        }}
                      >
                        {option.title}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
  if (props.type === "button-variant") {
    tabs = (
      <div className={`${"button-variant"}`} onClick={props.onClick}>
        <p className="variant-title">Account</p>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"variants-btn"}
              ${toggle === 1 ? "active-variant-btn" : ""}`}
        >
          Withdraw
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"variants-btn"}
              ${toggle === 2 ? "active-variant-btn" : ""}`}
        >
          Deposit
        </div>
      </div>
    );
  }
  if (props.type === "simple") {
    tabs = (
      <div style={props.customStyles} className="tabs">
        {props.tabsData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleTabClick(index);
              if (item.onClick) {
                item.onClick();
              }
            }}
            className={`tab ${index === props.activeTab ? "active-tab" : ""}`}
          >
            {item.title}
          </div>
        ))}
      </div>
    );
  }

  if (props.type === "trade") {
    tabs = (
      <div style={props.customStyles} className="tabsTrade">
        {props.tabsData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleTabClick(index);
              if (item.onClick) {
                item.onClick();
              }
            }}
            className={`tabTrade ${
              index === props.activeTab ? "active-tabTrade" : ""
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>
    );
  }

  return tabs;
};
