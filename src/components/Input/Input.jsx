import { useState } from 'react';
import { HelpText } from '../HelpText';
import { Dropdown } from '../Dropdown';
import { Switches } from '../Switches';
import './Input.css';

export const Input = props => {
    const [file, setFile] = useState();
    const [update, setUpdate] = useState(false);

    console.log(props.btns)
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    let element = null;

    if(props.type === 'default') {
        element = (
            <div onChange={props.onChange} style={props.customStyles} className='input-group'>
                {props.label ? ( <p className='input-group-title font-12'>{props.label}<span className='font-12'>{props.subLabel}</span></p> ) : ''}
                <input value={props.value} className='form-control' type='text' placeholder={props.placeholder} />
                <span className=''>
                    {props.icon ? (
                        <svg className='input-group-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16.33C9.61004 16.33 7.67004 14.39 7.67004 12C7.67004 9.61 9.61004 7.67 12 7.67C14.39 7.67 16.33 9.61 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.17C10.44 9.17 9.17004 10.44 9.17004 12C9.17004 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.17 12 9.17Z" fill="#CDCED1"/>
                            <path d="M12 21.02C8.24002 21.02 4.69002 18.82 2.25002 15C1.19002 13.35 1.19002 10.66 2.25002 9C4.70002 5.18 8.25002 2.98 12 2.98C15.75 2.98 19.3 5.18 21.74 9C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.48C8.77002 4.48 5.68002 6.42 3.52002 9.81C2.77002 10.98 2.77002 13.02 3.52002 14.19C5.68002 17.58 8.77002 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.81C18.32 6.42 15.23 4.48 12 4.48Z" fill="#CDCED1"/>
                        </svg>
                    ) : ''}
                </span>
            </div>
        )
    }

    if(props.type === 'lable-input-type1') {
        element = (
            <div onChange={props.onChange} style={props.customStyles} className='input-group-item'>
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
                        <input  className='form-control' type='text' placeholder={props.placeholder} />
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
            <div onChange={props.onChange} style={props.customStyles} className='input-group-item'>
                <p className='font-12 input-group-text'>{props.subLabel}<span className='input-group-frame-secondary'>{props.subLabel}</span></p>
                <input className='form-control' type='text' placeholder={props.placeholder} />
            </div>
        );
    }
    if(props.type === 'lable-input-select') {
        element = (
            <div style={props.customStyles} className='select-group'>
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
                    <div className='option'>option 1</div>
                    <div className='option'>option 1</div>
                    <div className='option'>option 1</div>
                </div>
                <HelpText
                    icon={true}
                    status={'error'}
                    title={'error'}
                    color={'#EF5350'}
                />
            </div>
        )
    }
    if(props.type === 'label-input-phone-number') {
        element = (
            <div style={props.customStyles} className='input-group-item'>
                <p className='font-12'>Mobile Number</p>
                <div className='input-group-flag'>
                </div>
                    {/* <img src='../italy.png' alt='flag' /> 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 9.5L10.5303 11.9697C10.2386 12.2614 9.76136 12.2614 9.4697 11.9697L7 9.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p><span>+42</span>933 093 093</p>
                <input className='form-control' type='text' placeholder='000000000' /> */}
                {/* <input className='form-control' type='tel' />
                 */}
                {/* <input className='form-control' type="text" name="country code"  value="+91" size="2"/>   
                <input className='form-control' type="text" name="phone" size="10"/>
                <input className='form-control' type='country' /> */}
                <form>
                <label>   
                    Phone :  
                </label> 
                <input type="text" name="country code"  value="+91" size="2"/>   
                {/* <input type="text" name="phone" size="10"/>  */}
                </form>
                

            </div>
        )
    }
    if(props.type === 'label-input-upload') {
        element = (
            <div style={props.customStyles} className='upload-group'>
                    <div className='upload-group-title'>
                        <p className='font-12'>Upload Image</p>
                        <p  className='font-12'>Delete avatar</p>
                    </div>
                    <div className='upload-group-inner'>
                        <div className='upload-group-placeholder'>
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
                        </div>
                        <div className='upload-group-text'>
                            <p>Upload a profile picture</p>
                            <p className='upload-btn'>Browse</p>
                            <input className='upload-control' type="file" onChange={handleChange} onClick={() => setUpdate(true)} />
                            <img className='avatar-sm' src={file} />
                        </div>
                    </div>
                </div>
        )
    }
    
    return element;
};