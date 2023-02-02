import { useState, useRef } from "react";
import { Dropdown } from "../Dropdown";
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputTest.css";

export const InputTest = ({
    label,
    type,
    parent,
    subLabel,
    placeholder,
    statusCard,
    customStyles,
    password,
    frameLabel,
    labelR,
    onChange,
    required,
    emptyFieldErr,
    dropdownData,
    selectType,
}) => {
    const [hidden, setHidden] = useState(false);
    const [selected, setSelected] = useState('select');
    const [selectClose, setSelectClose] = useState(false);
    const [file, setFile] = useState();
    const [data, setData] = useState({
        name: '',
        img: ''
    });
    const [countryData, setCountryData] = useState({
        code: "+1",
        flag: "🇺🇸",
        coutnry: "United States",
        number: "",
    });   
    function handleCountrySelect(data) {
        setCountryData((prev) => ({ ...prev, ...data }));
        setSelectClose(false)
        console.log(data)
    }

    const deleteHandler = () => {
        setFile(null);
        // onChange("");
    };
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        onChange(e.target.files[0]);
    }

   
    

    const passHandler = () => {
        if (!hidden) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    };

    const selectCloseHandler = () => {
        if (!selectClose) {
        setSelectClose(true);
        } else {
            setSelectClose(false);
        };
    };
    
    const handlerClick = (i) => {
        setData(i);
        setSelected(i);
        setSelectClose(false);
    };

    const ref = useRef();

    useOnOutsideClick(ref, () => setSelectClose(false));

    let input = '';

    {type === 'default' && (
        input = (
            <div className="form-control-outer">
                <input required={required} onChange={onChange} style={{paddingRight: password ? '43px' : ''}} className={`${"form-control"} ${emptyFieldErr ? 'error-border' : ''}`} type={password ? ( hidden ? 'text' : 'password') : 'text' } placeholder={placeholder} />
                {password ? (
                    <div onClick={passHandler} className="password-icon">
                        {
                            hidden ? (
                                <svg className="pass-icon-f" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11.6083C7.00833 11.6083 5.39166 9.99167 5.39166 8C5.39166 6.00833 7.00833 4.39167 9 4.39167C10.9917 4.39167 12.6083 6.00833 12.6083 8C12.6083 9.99167 10.9917 11.6083 9 11.6083ZM9 5.64167C7.7 5.64167 6.64166 6.7 6.64166 8C6.64166 9.3 7.7 10.3583 9 10.3583C10.3 10.3583 11.3583 9.3 11.3583 8C11.3583 6.7 10.3 5.64167 9 5.64167Z" fill="#6A6D76"/>
                                    <path d="M8.99999 15.5167C5.86666 15.5167 2.90833 13.6833 0.874994 10.5C-0.00833942 9.125 -0.00833942 6.88333 0.874994 5.5C2.91666 2.31667 5.87499 0.483334 8.99999 0.483334C12.125 0.483334 15.0833 2.31667 17.1167 5.5C18 6.875 18 9.11667 17.1167 10.5C15.0833 13.6833 12.125 15.5167 8.99999 15.5167ZM8.99999 1.73333C6.30833 1.73333 3.73333 3.35 1.93333 6.175C1.30833 7.15 1.30833 8.85 1.93333 9.825C3.73333 12.65 6.30833 14.2667 8.99999 14.2667C11.6917 14.2667 14.2667 12.65 16.0667 9.825C16.6917 8.85 16.6917 7.15 16.0667 6.175C14.2667 3.35 11.6917 1.73333 8.99999 1.73333Z" fill="#6A6D76"/>
                                </svg>
                            ) : (
                                <svg className="pass-icon" width="18" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_329_8673)">
                                        <path d="M12.1087 7.8915L7.89199 12.1082M12.1087 7.8915C11.5495 7.33234 10.7911 7.0182 10.0003 7.0182C9.60877 7.0182 9.22105 7.09533 8.8593 7.24517C8.49755 7.39501 8.16886 7.61463 7.89199 7.8915C7.61512 8.16837 7.3955 8.49707 7.24566 8.85882C7.09581 9.22056 7.01869 9.60828 7.01869 9.99984C7.01869 10.7906 7.33283 11.549 7.89199 12.1082M12.1087 7.8915L18.3337 1.6665M7.89199 12.1082L1.66699 18.3332M14.8503 4.80817C13.392 3.70817 11.7253 3.10817 10.0003 3.10817C7.05866 3.10817 4.31699 4.8415 2.40866 7.8415C1.65866 9.0165 1.65866 10.9915 2.40866 12.1665C3.06699 13.1998 3.83366 14.0915 4.66699 14.8082M7.01699 16.2748C7.96699 16.6748 8.97533 16.8915 10.0003 16.8915C12.942 16.8915 15.6837 15.1582 17.592 12.1582C18.342 10.9832 18.342 9.00817 17.592 7.83317C17.317 7.39984 17.017 6.9915 16.7087 6.60817M12.9253 10.5832C12.8124 11.1645 12.5284 11.6988 12.1097 12.1175C11.6909 12.5362 11.1566 12.8203 10.5753 12.9332" stroke="#6A6D76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_329_8673">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            )
                        }
                    </div>
                ) : ''}
            </div>
        )
    )}
    {type === 'upload' && (
        input = (
            <div className="upload-group-inner">
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
                    <label className="upload-btn" htmlFor={"upload_img"}>Broswe</label>
                    <input
                    id="upload_img"
                    className={`${"upload-control"} ${emptyFieldErr ? 'error-border' : ''}`}
                    type="file"
                    onChange={handleChange}
                    />
                </div>
            </div>
        )
    )} 
    {type === 'date-picker' && (
        input = (
            <div>
                <DatePicker
                    className="form-control"
                    // selected={value}
                    // onChange={(date) => onChange(date)}
                />
            </div>
        )
    )}

    if(type === 'select' && selectType === 'default') {
        input = (
            <div ref={ref} className="select-group">
                <div onClick={selectCloseHandler} className="form-control select-panel">
                    <div><span>{data.img ? data.img : ''}</span>{data.name ? data.name : selected }</div>
                    <svg
                        className={`${selectClose ? "rotate" : ""} ${"arrow"}`}
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
                <Dropdown
                    type={'simple-drowpdown'}
                    data={dropdownData}
                    handlerClick={handlerClick}
                    customStyles={{
                        display: selectClose ? 'block' : 'none'
                    }}
                />
            </div>
        );
    }
    if(type === 'select' && selectType === 'nationality') {
        input = (
            <div className="select-group">
                <div ref={ref} onClick={selectCloseHandler} className="form-control select-panel">
                    <p>{selected.country ? selected.country : 'Select'}</p>
                    <svg
                        className={`${selectClose ? "rotate" : ""} ${"arrow"}`}
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
                <Dropdown
                    type={"country"}
                    handlerClick={handlerClick}
                    countryData={dropdownData}
                    dropdownCountry={"dropdown-country"}
                    customStyles={{  display: selectClose ? 'block' : 'none' }}
                />
            </div>
        );
    }
    if(type === 'select' && selectType === 'phoneNumber') {
        input = (
            <div className="select-group">
                <div ref={ref} className="form-control select-panel">
                    <div onClick={selectCloseHandler} className='form-control-inner'>
                        <div>{countryData.flag ? countryData.flag : ''}</div>
                        <svg
                            className={`${selectClose ? "rotate" : ""} ${"arrow"}`}
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
                        <div>{countryData.code ? countryData.code : ''}</div>
                    </div>
                    <input className={'number-control'} type={'number'}  />
                </div>
                <Dropdown
                    type={"country"}
                    handlerClick={handleCountrySelect}
                    countryData={dropdownData}
                    dropdownCountry={"dropdown-country"}
                    customStyles={{  display: selectClose ? 'block' : 'none' }}
                />
            </div>
        )
    }
  
    let wrapper = (
        <div style={customStyles} className={`${"input-group"} ${parent}`}>
            <div className="mb-3">
                <div className="input-group-text-outer">
                    <div className="input-group-labels">
                        <p className="font-12">{label}</p>
                        <p className={`{"font-12" ${frameLabel ? 'bordered' : 'frame-label'}`}>{subLabel}</p>
                    </div>
                    <div>
                        {type === 'upload' ? (
                            <p onClick={deleteHandler} className="font-12 delete-btn">Delete Avatar</p>
                        ):(
                            <p>{labelR}</p>
                        )}
                    </div>
                </div>
                {input}
            </div>
            {statusCard}
        </div>
    );

  return (
    <div>
        {wrapper}
    </div>
  );
};
