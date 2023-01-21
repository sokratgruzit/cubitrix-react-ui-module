import { useState } from 'react';
import { HelpText } from '../HelpText';
import { Dropdown } from '../Dropdown';
import { Switches } from '../Switches';
// import testImg from '../../assets/img/country/australia.png';
import './Input.css';

let countryData = [
    {
        id: 1,
        title: "The United Kingdom ",
        image: "static/media/src/assets/img/country/kingdom.png",
        numbering: "(+78)",
    },
    {
        id: 2,
        title: "Brazil",
        image: "static/media/src/assets/img/country/brazil.png",
        numbering: "(+76)",
    },
    {
        id: 3,
        title: "Australia",
        image: "static/media/src/assets/img/country/australia.png",
        numbering: "(+46)",
    },
    {
        id: 4,
        title: "Canada",
        image: "static/media/src/assets/img/country/canada.png",
        numbering: "(+918)",
    },
    {
        id: 5,
        title: "Italy",
        image: "static/media/src/assets/img/country/italy.png",
        numbering: "(+178)",
    },
    {
        id: 6,
        title: "Mexico",
        image: "static/media/src/assets/img/country/kingdom.png",
        numbering: "(+78)",
    },
    {
        id: 7,
        title: "The United Kingdom ",
        image: "static/media/src/assets/img/country/germany.png",
        numbering: "(+78)",
    },
    {
        id: 8,
        title: "The United Kingdom ",
        image: "static/media/src/assets/img/country/brazil.png",
        numbering: "(+78)",
    },
    {
        id: 9,
        title: "The United Kingdom ",
        image: "static/media/src/assets/img/country/canada.png",
        numbering: "(+78)",
    },
];

export const Input = props => {
    const [file, setFile] = useState(null);
    const [active, setActive] = useState(false);
    const [cover, setCover] = useState(false);
    const [close, setClose] = useState(true)

    const activeHandler = () => {
        if(!active) {
            setActive(true)
        } else {
            setActive(false)
        }
    };

    const coverHandler = () => {
        if(!cover) {
            setCover(true)
        } else {
            setCover(false)
        }
    };

    const deleteHandler = () => {
        setFile(null)
        setClose(true)

    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setClose(false)
    };

    let element = null;

    if(props.type === 'default') {
        element = (
            <div  style={props.customStyles} className={`${props.className} input-group`}>
                {props.label ? ( <p className='input-group-title font-12'>{props.label}<span className='font-12'>{props.subLabel}</span></p> ) : ''}
                <input onChange={props.onChange} value={props.value} style={props.icon ? {paddingRight: '43px'} : {paddingRight: '16px'}} className='form-control' type={cover ? 'text' : 'password'} placeholder={props.placeholder} />
                <span className=''>
                    {props.inputType === 'password' ? (
                        <div onClick={coverHandler}>
                            {cover ? (

                                <svg className={'input-group-icon'} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11.6083C7.00833 11.6083 5.39166 9.99167 5.39166 8C5.39166 6.00833 7.00833 4.39167 9 4.39167C10.9917 4.39167 12.6083 6.00833 12.6083 8C12.6083 9.99167 10.9917 11.6083 9 11.6083ZM9 5.64167C7.7 5.64167 6.64166 6.7 6.64166 8C6.64166 9.3 7.7 10.3583 9 10.3583C10.3 10.3583 11.3583 9.3 11.3583 8C11.3583 6.7 10.3 5.64167 9 5.64167Z" fill="#CDCED1"/>
                                    <path d="M8.99999 15.5167C5.86666 15.5167 2.90833 13.6833 0.874994 10.5C-0.00833942 9.125 -0.00833942 6.88333 0.874994 5.5C2.91666 2.31667 5.87499 0.483334 8.99999 0.483334C12.125 0.483334 15.0833 2.31667 17.1167 5.5C18 6.875 18 9.11667 17.1167 10.5C15.0833 13.6833 12.125 15.5167 8.99999 15.5167ZM8.99999 1.73333C6.30833 1.73333 3.73333 3.35 1.93333 6.175C1.30833 7.15 1.30833 8.85 1.93333 9.825C3.73333 12.65 6.30833 14.2667 8.99999 14.2667C11.6917 14.2667 14.2667 12.65 16.0667 9.825C16.6917 8.85 16.6917 7.15 16.0667 6.175C14.2667 3.35 11.6917 1.73333 8.99999 1.73333Z" fill="#CDCED1"/>
                                </svg>

                            ) : (
                                <svg  className={'input-group-icon'} width="18" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1087 7.8915L7.89199 12.1082M12.1087 7.8915C11.5495 7.33234 10.7911 7.0182 10.0003 7.0182C9.60877 7.0182 9.22105 7.09533 8.8593 7.24517C8.49755 7.39501 8.16886 7.61463 7.89199 7.8915C7.61512 8.16837 7.3955 8.49707 7.24566 8.85882C7.09581 9.22056 7.01869 9.60828 7.01869 9.99984C7.01869 10.7906 7.33283 11.549 7.89199 12.1082M12.1087 7.8915L18.3337 1.6665M7.89199 12.1082L1.66699 18.3332M14.8503 4.80817C13.392 3.70817 11.7253 3.10817 10.0003 3.10817C7.05866 3.10817 4.31699 4.8415 2.40866 7.8415C1.65866 9.0165 1.65866 10.9915 2.40866 12.1665C3.06699 13.1998 3.83366 14.0915 4.66699 14.8082M7.01699 16.2748C7.96699 16.6748 8.97533 16.8915 10.0003 16.8915C12.942 16.8915 15.6837 15.1582 17.592 12.1582C18.342 10.9832 18.342 9.00817 17.592 7.83317C17.317 7.39984 17.017 6.9915 16.7087 6.60817M12.9253 10.5832C12.8124 11.1645 12.5284 11.6988 12.1097 12.1175C11.6909 12.5362 11.1566 12.8203 10.5753 12.9332" stroke="#6A6D76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                    ) : ''}
                </span>
            </div>
        )
    }
    if(props.type === 'lable-input-type1') {
        element = (
            <div style={props.customStyles} className='input-group-item'>
                <div className='input-group-text-sc'>
                    <p className='font-12 input-group-title'>
                        {props.label}
                        <span>
                            {props.subLabel}
                        </span>
                    </p>
                    {props.toggle ? (
                        <div className='input-toggle'>
                            <p className='font-12'>{props.toggleTitle}</p>
                            <div>
                                <Switches type={"sm-switches"} />
                            </div>
                        </div>
                    ) : ''}
                </div>
                <div className='input-form'>
                    <div className='input-form-inner'>
                        <input onChange={props.onChange} style={props.icon ? {paddingRight: '55px'} : {paddingRight: '16px'}} className='form-control' type='text' placeholder={props.placeholder} />
                        <div className='input-group-frame'>{props.inputFrame}</div>
                    </div>
                    {!props.btns  ? (
                        <div className='input-form-frame'>USD</div>
                    ) : (
                        <div className='input-form-frame-outer'>
                            {props.btns && props.btns.map((item) => {
                                return (
                                    <div onClick={props.onClick} className='input-form-frame' key={item.id}>{item.value}</div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        )
    }
    if(props.type === 'lable-input-type2') {
        element = (
            <div style={props.customStyles} className='input-group-item'>
                <p className='font-12 input-group-text'>{props.subLabel}<span className='input-group-frame-secondary'>{props.subLabel}</span></p>
                <input onChange={props.onChange} style={props.icon ? {paddingRight: '43px'} : {paddingRight: '16px'}}  className='form-control' type='text' placeholder={props.placeholder} />
            </div>
        );
    }
    if(props.type === 'lable-input-select') {
        element = (
            <div onChange={props.onChange} style={props.customStyles} className='select-group'>
                <p className='input-group-title font-12'>Time In Force</p>
                <div className='form-select'>
                    <div className='selected option'>
                        <div>rcheuli yle</div>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 10L10.5303 12.4697C10.2386 12.7614 9.76136 12.7614 9.4697 12.4697L7 10" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div>
                    {/* <Dropdown
                        data={data}
                        type={"dropdown"}
                        dropdown={"dropdown"}
                        onClick={hendlerClick}
                        active={active}
                    /> */}
                </div>
                <HelpText
                    icon={true}
                    status={'error'}
                    title={'error'}
                    color={'#EF5350'}
                />
            </div>
        )
        // im waiting for guram here
    }
    if(props.type === 'label-input-phone-number') {
        element = (
            <div style={props.customStyles} className='input-group-item'>
                <p className='font-12'>{props.label}</p>
                <div className='form-control select-control'>
<<<<<<< HEAD
                    <div className='select-prefix'>
                        <div>  
                            {/* <img src={testImg} alt="country" />       */}
                            italyImg                
=======
                    <div onClick={() => {
                        activeHandler()
                    }} className='select-prefix'>
                        <div className='flag'>

>>>>>>> 0d3754ddae34c3aa15dd61a40f1d0875cf900be0
                        </div>
                        <svg className={`${active ? 'rotate' : ''} ${'arrow'}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L4.5303 3.4697C4.23864 3.76136 3.76136 3.76136 3.4697 3.4697L1 1" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className='select-body'>+88</span>
                    <div className='select-sufix'>
                        <input  onChange={props.onChange} className='number-control' type='number' />
                    </div>
                </div>
                <div className={`${'hidden'} ${active ? 'visible' : ''}`}>
                    <Dropdown
                        type={"country"}
                        countryData={countryData}
                        dropdownCountry={"dropdown-country"}
                        active={props.active}
                    />
                </div>
            </div>
        );
    }
    if(props.type === 'label-input-upload') {
        element = (
            <div style={props.customStyles} className='upload-group'>
                <div className='upload-group-title'>
                    <p className='font-12'>Upload Image</p>
                    <p onClick={deleteHandler} className='delete-btn font-12'>Delete avatar</p>
                </div>
                <div className='upload-group-inner'>
                    <div className='upload-group-placeholder'>
                        {console.log(file, close)}
                        {
                            close ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_329_8860)">
                                        <path d="M18.148 7.18801C17.707 7.08901 17.341 6.80901 17.147 6.42101C15.533 3.19801 12.046 1.47301 8.472 2.14301C5.337 2.72401 2.803 5.22201 2.166 8.36001C1.976 9.29301 1.948 10.233 2.083 11.156C2.166 11.723 2.025 12.229 1.697 12.544C0.604 13.587 0.001 14.99 0 16.495C0 19.631 2.364 21.995 5.5 21.995H16.236C20.367 21.995 23.847 18.761 23.995 14.784C24.129 11.172 21.67 7.97701 18.148 7.18701V7.18801ZM16.236 20.996H5.5C2.893 20.996 1 19.103 1 16.497C1.001 15.268 1.494 14.121 2.389 13.267C2.954 12.726 3.204 11.905 3.074 11.012C2.956 10.204 2.981 9.37901 3.148 8.56001C3.704 5.81801 5.918 3.63401 8.656 3.12601C9.104 3.04301 9.551 3.00301 9.991 3.00301C12.628 3.00301 15.044 4.45301 16.254 6.86901C16.584 7.52701 17.194 7.99901 17.931 8.16501C20.983 8.84901 23.113 11.617 22.996 14.748C22.869 18.193 19.837 20.996 16.237 20.996H16.236ZM15.267 12.147C15.462 12.342 15.462 12.659 15.267 12.854C15.169 12.952 15.041 13 14.913 13C14.785 13 14.657 12.951 14.559 12.854L11.998 10.293V17.5C11.998 17.776 11.774 18 11.498 18C11.222 18 10.998 17.776 10.998 17.5V10.293L8.437 12.854C8.242 13.049 7.925 13.049 7.73 12.854C7.535 12.659 7.535 12.342 7.73 12.147L10.437 9.44001C10.68 9.19801 10.989 9.08101 11.305 9.03901C11.364 9.01401 11.429 9.00001 11.497 9.00001C11.565 9.00001 11.63 9.01401 11.689 9.03901C12.006 9.08001 12.315 9.19701 12.558 9.44001L15.265 12.147H15.267Z" fill="#9C9DA3"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_329_8860">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (
                                <img  className={'avatar-sm'} src={file} />
                            )
                        }

                    </div>
                    <div  onChange={props.onChange} className='upload-group-text'>
                        <p>Upload a profile picture</p>
                        <p className='upload-btn'>Browse</p>
                        <input
                            className='upload-control'
                            type="file"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return element;
};
