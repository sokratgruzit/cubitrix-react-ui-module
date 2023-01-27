import { useState } from "react";
import { Switches } from "../Switches";
import "./Dropdown.css";

export const Dropdown = (props) => {
  let element = "";
  if (props.type === "country") {
    element = (
      <div style={props.customStyles} className="dropdown-country">
        <h1 className="dropdown-toggle">Select Country</h1>
        {props.countryData?.map((item, index) => {
          return (
            <div key={index} className="dropdown-menu-country">
              <div
                onClick={() =>
                  props.handlerClick({
                    flag: item.flag,
                    country: item.country,
                    code: item.code,
                  })
                }
                className="dropdown-item-country"
              >
                <p>{item.flag}</p>
                <p>{item.country}</p>
                {props.coutnryCode && <p>{item.code}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (props.type === "dropdown") {
    element = (
      <div style={props.customStyles} className={`active ${props.dropdown}`}>
        {props.data?.map((item, index) => {
          return (
            <div key={index}>
              <h1
                onClick={() => props.handlerClick(item.title)}
                className="dropdown-toggle"
              >
                {item.title}
              </h1>
              {item.list?.map((item, index) => {
                return (
                  <div key={index} className="dropdown-item" onClick={() => item.onClick(item.title)}>
                    {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                    <span>{item.svg}</span>
                    <div>
                      <p
                        id={item.id}
                        className={`${props.active === `${item.id}` ? "left-line" : ""}`}
                      >
                        {item.title}
                      </p>
                      {item.togle === "true" && <Switches />}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
  if (props.type === "default-dropdown") {
    element = (
      <div style={props.customStyles} className={`${"active"} ${"dropdown"}`}>
        <div
          className="dropdown-item"
          onClick={() => {
<<<<<<< HEAD
            props.handlerClick(props.defaultOption);
            props.selectHandler(props.defaultOption.toLowerCase());
          }}
=======
            props.handlerClick(props.defaultOption)
            props.selectHandler('all')
          }} 
>>>>>>> 60435be48e5c857542519c83d75dcf1ddf5f6c8e
          key={props.defaultOption}
        >
          {props.defaultOption}
        </div>
        {props.data?.map((item, index) => {
          return (
            <div className="dropdown-item" onClick={() => {
              props.handlerClick(item.name)
              props.selectHandler(item.value)
            }}
             key={index}>
              {item.name} 
            </div>
          );
        })}
      </div>
    );
  }
  if (props.type === "simple-drowpdown") {
    element = (
      <div className="dropdown" style={props.customStyles}>
        <div className="default-option">test</div>
        <div className="options">
          {props.data?.option.map((item, index) => {
            return <div></div>;
          })}
        </div>
      </div>
    );
  }
  return element;
};
