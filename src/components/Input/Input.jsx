import { useState, useRef, useEffect } from "react";
import { HelpText } from "../HelpText";
import { Dropdown } from "../Dropdown";
import { Switches } from "../Switches";
import { countriesData } from "./helper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Input.css";

// hooks
import { useOnOutsideClick } from "../../hooks/useOnOutsideClick";

export const Input = (props) => {
  const [file, setFile] = useState(props.value || "");
  const [active, setActive] = useState(false);
  const [cover, setCover] = useState(false);
  const [value, setValue] = useState(props.selectLabel || "");
  const [edit, setEdit] = useState(false);

  const [mobileData, setMobileData] = useState({
    code: "+1",
    flag: "🇺🇸",
    number: "",
  });

  const editHandler = () => {
    setEdit(true);
    // setValueHandler()
  };

  const activeHandler = () => {
    setActive((prev) => !prev);
  };

  const coverHandler = () => {
    setCover((prev) => !prev);
  };

  const deleteHandler = () => {
    setFile(null);
    props.onChange("");
  };
  function handlerClick(i) {
    setValue(i);
    setActive(false);
  }
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    props.onChange(e.target.files[0]);
  }
  // function handleCountrySelect(data) {
  //   setActive(false);
  //   props.onChange(data.code + countryData.number);
  //   setCountryData((prev) => ({ ...prev, ...data }));
  // }

  function handleMobileSelect(data) {
    setActive(false);
    props.onChange({ ...mobileData, flag: data.flag, code: data.code });
    setMobileData((prev) => ({ ...prev, flag: data.flag, code: data.code }));
  }

  useEffect(() => {
    if (props.type === "label-input-phone-number" && props.value) {
      setMobileData(props.value);
    }
    setValue(props.value);
  }, [props.value]);

  const ref = useRef();
  useOnOutsideClick(ref, () => setActive(false));

  let element = null;
  if (props.type === "default") {
    element = (
      <div
        style={props.customStyles}
        className={`${props.className} 
     
      input-group`}
      >
        {props.label || props.subLabel ? (
          <p className="input-group-title font-12">
            {props.label}
            <span className="font-12">{props.subLabel}</span>
          </p>
        ) : (
          ""
        )}
        <input
          onChange={(e) => {
            setEdit(true);
            props.onChange(e);
          }}
          value={props.value}
          name={props.name}
          style={
            props.icon
              ? { paddingRight: "43px", ...props?.customInputStyles }
              : { paddingRight: "16px", ...props?.customInputStyles }
          }
          className={`${"form-control"} ${props.emptyFieldErr ? "error-border" : ""}  ${
            !edit && props.editable && props?.value?.length > 0 ? "disabled-input" : ""
          } ${props?.inputClassName ? props.inputClassName : ""}`}
          type={!cover && props.inputType === "password" ? "password" : "text"}
          placeholder={props.placeholder}
        />
        <span>
          {props.inputType === "password" ? (
            <div onClick={coverHandler}>
              {cover ? (
                <svg
                  style={{
                    top: props.label || props.subLabel ? "30.5px" : "8px",
                  }}
                  className={"input-group-icon"}
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11.6083C7.00833 11.6083 5.39166 9.99167 5.39166 8C5.39166 6.00833 7.00833 4.39167 9 4.39167C10.9917 4.39167 12.6083 6.00833 12.6083 8C12.6083 9.99167 10.9917 11.6083 9 11.6083ZM9 5.64167C7.7 5.64167 6.64166 6.7 6.64166 8C6.64166 9.3 7.7 10.3583 9 10.3583C10.3 10.3583 11.3583 9.3 11.3583 8C11.3583 6.7 10.3 5.64167 9 5.64167Z"
                    fill="#CDCED1"
                  />
                  <path
                    d="M8.99999 15.5167C5.86666 15.5167 2.90833 13.6833 0.874994 10.5C-0.00833942 9.125 -0.00833942 6.88333 0.874994 5.5C2.91666 2.31667 5.87499 0.483334 8.99999 0.483334C12.125 0.483334 15.0833 2.31667 17.1167 5.5C18 6.875 18 9.11667 17.1167 10.5C15.0833 13.6833 12.125 15.5167 8.99999 15.5167ZM8.99999 1.73333C6.30833 1.73333 3.73333 3.35 1.93333 6.175C1.30833 7.15 1.30833 8.85 1.93333 9.825C3.73333 12.65 6.30833 14.2667 8.99999 14.2667C11.6917 14.2667 14.2667 12.65 16.0667 9.825C16.6917 8.85 16.6917 7.15 16.0667 6.175C14.2667 3.35 11.6917 1.73333 8.99999 1.73333Z"
                    fill="#CDCED1"
                  />
                </svg>
              ) : (
                <svg
                  style={{
                    top: props.label || props.subLabel ? "32.5px" : "8px",
                  }}
                  className={"input-group-icon"}
                  width="18"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1087 7.8915L7.89199 12.1082M12.1087 7.8915C11.5495 7.33234 10.7911 7.0182 10.0003 7.0182C9.60877 7.0182 9.22105 7.09533 8.8593 7.24517C8.49755 7.39501 8.16886 7.61463 7.89199 7.8915C7.61512 8.16837 7.3955 8.49707 7.24566 8.85882C7.09581 9.22056 7.01869 9.60828 7.01869 9.99984C7.01869 10.7906 7.33283 11.549 7.89199 12.1082M12.1087 7.8915L18.3337 1.6665M7.89199 12.1082L1.66699 18.3332M14.8503 4.80817C13.392 3.70817 11.7253 3.10817 10.0003 3.10817C7.05866 3.10817 4.31699 4.8415 2.40866 7.8415C1.65866 9.0165 1.65866 10.9915 2.40866 12.1665C3.06699 13.1998 3.83366 14.0915 4.66699 14.8082M7.01699 16.2748C7.96699 16.6748 8.97533 16.8915 10.0003 16.8915C12.942 16.8915 15.6837 15.1582 17.592 12.1582C18.342 10.9832 18.342 9.00817 17.592 7.83317C17.317 7.39984 17.017 6.9915 16.7087 6.60817M12.9253 10.5832C12.8124 11.1645 12.5284 11.6988 12.1097 12.1175C11.6909 12.5362 11.1566 12.8203 10.5753 12.9332"
                    stroke="#6A6D76"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ) : (
            ""
          )}
          {props.editable && !edit && props?.value?.length > 0 ? (
            <svg
              onClick={editHandler}
              style={{
                top: props.label || props.subLabel ? "34.5px" : "8px",
              }}
              className={`input-group-icon-sc ${edit ? "opacity-0" : "opacity-1"}`}
              width="18"
              height="16"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z" />
            </svg>
          ) : (
            ""
          )}
        </span>
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "lable-input-type1") {
    element = (
      <div style={props.customStyles} className="input-group-item">
        <div className="input-group-text-sc">
          <p className="font-12 input-group-title">
            {props.label}
            <span>{props.subLabel}</span>
          </p>
          {props.toggle ? (
            <div className="input-toggle">
              <p className="font-12">{props.toggleTitle}</p>
              <div>
                <Switches type={"sm-switches"} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="input-form">
          <div className="input-form-inner">
            <input
              onChange={(e) => {
                setEdit(true);
                props.onChange(e);
              }}
              style={props.icon ? { paddingRight: "55px" } : { paddingRight: "16px" }}
              className={`${"form-control"} ${props.emptyFieldErr ? "error-border" : ""}`}
              type="text"
              placeholder={props.placeholder}
            />
            <div className="input-group-frame">{props.inputFrame}</div>
          </div>
          {!props.btns ? (
            // <div className="input-form-frame">USD</div>
              <></>
          ) : (
            <div className="input-form-frame-outer">
              {props.btns &&
                props.btns.map((item) => {
                  return (
                    <div
                      onClick={props.onClick}
                      className="input-form-frame"
                      key={item.id}
                    >
                      {item.value}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "lable-input-type2") {
    element = (
      <div style={props.customStyles} className="input-group-item">
        <p className="font-12 input-group-text">
          {props.subLabel}
          <span className="input-group-frame-secondary">{props.subLabel}</span>
        </p>
        <input
          onChange={(e) => {
            setEdit(true);
            props.onChange(e);
          }}
          style={props.icon ? { paddingRight: "43px" } : { paddingRight: "16px" }}
          className={`${"form-control"} ${props.emptyFieldErr ? "error-border" : ""}`}
          type="text"
          placeholder={props.placeholder}
        />
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "lable-input-select") {
    element = (
      <div style={props.customStyles} className="select-group">
        <p className="input-group-title font-12">{props.label}</p>
        <div
          ref={ref}
          onChange={(e) => {
            setEdit(true);
            props.onChange(e);
          }}
          className="form-select-sc relative"
        >
          <div
            onClick={activeHandler}
            style={props.customInputStyles}
            className={`${"form-select-item"} ${"form-control"} ${
              props.emptyFieldErr ? "error-border" : ""
            } ${
              !edit && props.editable && props?.value?.length > 0 ? "disabled-input" : ""
            } ${props.disabled ? "disabled-input" : ""}`}
          >
            <div className="flag-wrapper">
              {value ? (
                <>
                  {props?.svg} {value}
                </>
              ) : (
                props.selectLabel
              )}
            </div>
            <svg
              className={`${active ? "rotate" : ""} ${"arrow"} ${
                props?.value?.length > 0 && !edit && props.editable
                  ? "arrow-none"
                  : "arrow-show"
              } `}
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10L10.5303 12.4697C10.2386 12.7614 9.76136 12.7614 9.4697 12.4697L7 10"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${"hidden"} ${active ? "select-modal-sc" : ""} ${
              props.selectPosition === "top" ? "select-position-top" : ""
            }`}
          >
            {props.selectType === "country" ? (
              <Dropdown
                type={"country"}
                handlerClick={(data) => {
                  setActive(false);
                  setValue(`${data.flag} ${data.country}`);
                  setEdit(true);
                  props.onClick(`${data.flag} ${data.country}`);
                }}
                countryData={countriesData}
                dropdownCountry={"dropdown-country"}
                active={props.active}
                customStyles={{ width: "inherit" }}
              />
            ) : (
              <Dropdown
                type={"default-dropdown"}
                data={props.defaultData}
                active={props.active}
                handlerClick={handlerClick}
                selectHandler={props.selectHandler}
                customStyles={{ width: "inherit" }}
                defaultOption={props.selectLabel}
              />
            )}
          </div>
          {props.editable && !edit && props?.value?.length > 0 ? (
            <svg
              onClick={editHandler}
              style={{ top: "10px" }}
              className={`input-group-icon-sc ${edit ? "opacity-0" : "opacity-1"}`}
              width="18"
              height="16"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z" />
            </svg>
          ) : (
            ""
          )}
        </div>
        {props.statusCard}
      </div>
    );
    // im waiting for guram here
  }
  if (props.type === "lable-input-multi-select") {
    element = (
      <div style={props.customStyles} className="select-group">
        <p className="input-group-title font-12">{props.label}</p>
        <div ref={ref} className="form-select-sc relative">
          <div
            className={`${"form-select-item"} ${"form-control"} ${"form-multiply"} ${
              props.emptyFieldErr ? "error-border" : ""
            } ${
              !edit && props.editable && props?.value?.length > 0 ? "disabled-input" : ""
            }`}
          >
            <div className="form-multiply-clicker" onClick={activeHandler}></div>
            <div className="flag-wrapper">
              {props.multiplyData.map((item, index) => {
                return (
                  <div className="multiply-select-item" key={index}>
                    {item}
                    <div
                      className="close-multiply-select-item"
                      onClick={() => {
                        props.handleItemRemove(item);
                      }}
                    >
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 9L9.5 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 9L1.5 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
            <svg
              className={`${active ? "rotate" : ""} ${"arrow"} ${
                props?.value?.length > 0 && !edit && props.editable
                  ? "arrow-none"
                  : "arrow-show"
              } `}
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setActive((prev) => !prev)}
            >
              <path
                d="M13 10L10.5303 12.4697C10.2386 12.7614 9.76136 12.7614 9.4697 12.4697L7 10"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${"hidden"} ${active ? "select-modal-sc" : ""} ${
              props.selectPosition === "top" ? "select-position-top" : ""
            }`}
          >
            <Dropdown
              type={"search-dropdown"}
              data={props.defaultData}
              active={props.active}
              handlerClick={handlerClick}
              selectHandler={props.selectHandler}
              customStyles={{ width: "inherit" }}
              defaultOption={props.selectLabel}
              onChangeDropdown={(e) => {
                props.onChangeDropdown(e.target.value);
              }}
            />
          </div>
        </div>
        {props.statusCard}
      </div>
    );
    // im waiting for guram here
  }
  if (props.type === "label-input-phone-number") {
    element = (
      <div style={props.customStyles} className="input-group-item phone-numbers relative">
        <p className="font-12">{props.label}</p>
        <div
          className={`${"form-control"} ${"select-control"} ${
            props.emptyFieldErr ? "error-border" : ""
          } ${
            !edit && props.editable && props.value?.number?.length > 0
              ? "disabled-input"
              : ""
          }`}
        >
          <div
            onClick={() => {
              activeHandler();
            }}
            className="select-prefix"
          >
            <div className="flag">{mobileData.flag}</div>
            <svg
              className={`${active ? "rotate" : ""} ${"arrow"}`}
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L4.5303 3.4697C4.23864 3.76136 3.76136 3.76136 3.4697 3.4697L1 1"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="select-body">{mobileData.code}</span>
          <div className="select-sufix">
            <input
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^\d\s]/g, "");
                props.onChange({ ...mobileData, number: onlyNumbers });
                setMobileData((prev) => ({ ...prev, number: onlyNumbers }));
              }}
              value={mobileData.number}
              className={`${"number-control"} ${
                props.emptyFieldErr ? "error-border" : ""
              }`}
              type="text"
            />
          </div>
        </div>
        {props.editable && !edit && props.value?.number?.length > 0 ? (
          <svg
            onClick={editHandler}
            style={{ top: "34px" }}
            className={`input-group-icon-sc ${edit ? "opacity-0" : "opacity-1"}`}
            width="18"
            height="16"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z" />
          </svg>
        ) : (
          ""
        )}
        <div className={`${"hidden"} ${active ? " phone-number-active" : ""}`}>
          <Dropdown
            type={"country"}
            handlerClick={handleMobileSelect}
            countryData={countriesData}
            dropdownCountry={"dropdown-country"}
            active={props.active}
            customStyles={{ width: "inherit" }}
            countryCode={true}
          />
        </div>
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "label-input-upload") {
    element = (
      <div style={props.customStyles} className="upload-group">
        <div className="upload-group-title">
          <p className="font-12">Upload Image</p>
          <p onClick={deleteHandler} className="delete-btn font-12">
            Delete avatar
          </p>
        </div>
        <div
          className={`${"upload-group-inner"} ${
            props.emptyFieldErr ? "error-border" : ""
          }`}
        >
          <div className="upload-group-placeholder">
            {!file ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_329_8860)">
                  <path
                    d="M18.148 7.18801C17.707 7.08901 17.341 6.80901 17.147 6.42101C15.533 3.19801 12.046 1.47301 8.472 2.14301C5.337 2.72401 2.803 5.22201 2.166 8.36001C1.976 9.29301 1.948 10.233 2.083 11.156C2.166 11.723 2.025 12.229 1.697 12.544C0.604 13.587 0.001 14.99 0 16.495C0 19.631 2.364 21.995 5.5 21.995H16.236C20.367 21.995 23.847 18.761 23.995 14.784C24.129 11.172 21.67 7.97701 18.148 7.18701V7.18801ZM16.236 20.996H5.5C2.893 20.996 1 19.103 1 16.497C1.001 15.268 1.494 14.121 2.389 13.267C2.954 12.726 3.204 11.905 3.074 11.012C2.956 10.204 2.981 9.37901 3.148 8.56001C3.704 5.81801 5.918 3.63401 8.656 3.12601C9.104 3.04301 9.551 3.00301 9.991 3.00301C12.628 3.00301 15.044 4.45301 16.254 6.86901C16.584 7.52701 17.194 7.99901 17.931 8.16501C20.983 8.84901 23.113 11.617 22.996 14.748C22.869 18.193 19.837 20.996 16.237 20.996H16.236ZM15.267 12.147C15.462 12.342 15.462 12.659 15.267 12.854C15.169 12.952 15.041 13 14.913 13C14.785 13 14.657 12.951 14.559 12.854L11.998 10.293V17.5C11.998 17.776 11.774 18 11.498 18C11.222 18 10.998 17.776 10.998 17.5V10.293L8.437 12.854C8.242 13.049 7.925 13.049 7.73 12.854C7.535 12.659 7.535 12.342 7.73 12.147L10.437 9.44001C10.68 9.19801 10.989 9.08101 11.305 9.03901C11.364 9.01401 11.429 9.00001 11.497 9.00001C11.565 9.00001 11.63 9.01401 11.689 9.03901C12.006 9.08001 12.315 9.19701 12.558 9.44001L15.265 12.147H15.267Z"
                    fill="#9C9DA3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_329_8860">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <img
                className={"avatar-sm"}
                src={file}
                onError={() => {
                  setFile(null);
                }}
              />
            )}
          </div>
          <div className="upload-group-text">
            <p>Upload a profile picture</p>
            <label className="upload-btn" htmlFor={"upload_img"}>
              Broswe
            </label>
            {/* <p className='upload-btn'>Browse</p> */}
            <input
              id="upload_img"
              className={`${"upload-control"} ${
                props.emptyFieldErr ? "error-border" : ""
              }`}
              type="file"
              onChange={handleChange}
            />
          </div>
        </div>
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "search-input") {
    element = (
      <div style={props.customStyles} className="input-group" ref={ref}>
        <p className="font-12">{props.label && props.label}</p>
        <div className="search-input form-control">
          <div className="search-input-item-fr">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65 14.3C8.52329 14.3 9.38803 14.128 10.1948 13.7938C11.0017 13.4596 11.7348 12.9698 12.3523 12.3523C12.9698 11.7348 13.4596 11.0017 13.7938 10.1948C14.128 9.38803 14.3 8.52329 14.3 7.65C14.3 6.77671 14.128 5.91197 13.7938 5.10515C13.4596 4.29834 12.9698 3.56525 12.3523 2.94774C11.7348 2.33023 11.0017 1.84039 10.1948 1.5062C9.38803 1.17201 8.52329 1 7.65 1C5.88631 1 4.19486 1.70062 2.94774 2.94774C1.70062 4.19486 1 5.88631 1 7.65C1 9.41369 1.70062 11.1051 2.94774 12.3523C4.19486 13.5994 5.88631 14.3 7.65 14.3V14.3Z"
                stroke="#6A6D76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15.0001L13.6 13.6001"
                stroke="#6A6D76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            onChange={(e) => {
              setEdit(true);
              props.onChange(e);
            }}
            className="search-control"
            type="search"
            placeholder={props.placeholder}
          />
          {props.select && (
            <div className="form-select search-input-item">
              <div onClick={activeHandler} className="select-form">
                <p className="font-10">{value ? value : props.selectLabel}</p>
                <svg
                  className={`${active ? "rotate" : ""} ${"arrow"}`}
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.5L4.5303 3.9697C4.23864 4.26136 3.76136 4.26136 3.4697 3.9697L1 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={`${"hidden"} ${active ? "select-modal" : ""}`}>
                <Dropdown
                  type={"default-dropdown"}
                  data={props.defaultData}
                  active={props.active}
                  handlerClick={handlerClick}
                  selectHandler={props.selectHandler}
                  customStyles={{}}
                  defaultOption={props.selectLabel}
                />
              </div>
            </div>
          )}
        </div>
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "date-picker-input") {
    element = (
      <div
        style={props.customStyles}
        onChange={props.changeHandler}
        className={`input-group ${props.emptyFieldErr ? "error-border" : ""} relative`}
      >
        <p className="font-12">{props.label}</p>

        <DatePicker
          className={`form-control ${!edit && props.editable ? "disabled-input" : ""}  `}
          selected={props.value instanceof Date ? props.value : null}
          onChange={(date) => props.onChange(date)}
          value={props.value}
          customInput={<input value={props.value} style={props?.customInputStyles} />}
        />
        {props.statusCard}
        {props.editable ? (
          <svg
            onClick={editHandler}
            style={{ top: "30px" }}
            className={`input-group-icon-sc ${edit ? "opacity-0" : "opacity-1"}`}
            width="18"
            height="16"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z" />
          </svg>
        ) : (
          ""
        )}
      </div>
    );
  }
  if (props.type === "textarea") {
    element = (
      <div className={"textarea-input-container"}>
        <div className={"textarea-input-header"}>
          {props.icon}
          <p className={`font-12`}>{props.label}</p>
        </div>
        <textarea
          name={props?.name}
          rows={props?.rows}
          cols={props?.cols}
          disabled={props?.disabled}
          readOnly={props?.readOnly}
          placeholder={props?.placeholder}
          value={props?.value}
          onChange={props?.onChange}
          autoFocus={props?.autoFocus}
          maxLength={props?.maxLength}
          wrap={props?.wrap}
          resize={props?.resize}
          className={`textarea-input ${props.emptyFieldErr ? "error-border" : ""}`}
        />
        {props.statusCard}
      </div>
    );
  }
  if (props.type === "range") {
    element = (
      <div
        style={props.customStyles}
        className={`${props.className} 
     
      input-group`}
      >
        <input
          onChange={(e) => {
            props.onChange(e);
          }}
          value={props.value}
          name={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          className={`input-range ${props.disabled ? "disabled-range" : ""}`}
          type="range"
          placeholder={props.placeholder}
        />
        <div className="range-ttls">
          <div>{props.min} A1</div>
          <div>{props.max} A1</div>
        </div>
      </div>
    );
  }

  if (props.type === "staking_amount") {
    element = (
      <div className={`input-group custom-arrow`}>
        <p className={`font-12`}>{props.label}</p>
        <input
          onChange={(e) => {
            props.onChange(e);
          }}
          value={props.value}
          name={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          style={props.customStyles}
          type="number"
          placeholder={props.placeholder}
        />
        <div onClick={props.decriment} className="custom-arrow-up opacity-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v12m0-12l-5 5m5-5l5 5"
            ></path>
          </svg>
        </div>
        <div onClick={props.incriment} className="custom-arrow-down opacity-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v12m0 0l-5-5m5 5l5-5"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  if (props.type === "checkbox") {
    element = (
      <div className={`checkbox-input-container ${props.className}`}>
        <label htmlFor={props.name} className={`checkbox-label`}>
          <input
            id={props.name}
            onChange={props.onChange}
            checked={props.value}
            name={props.name}
            className={`input-checkbox ${props.disabled ? "disabled-checkbox" : ""}`}
            type="checkbox"
          />
          <span className="custom-checkbox"></span>
          {props.label}
        </label>
      </div>
    );
  }

  return element;
};
