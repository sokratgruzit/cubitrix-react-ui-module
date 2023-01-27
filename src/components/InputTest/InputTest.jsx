import { useState } from "react";
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
}) => {
    const [hidden, setHidden] = useState(false);

    const passHandler = () => {
        if (!hidden) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    };

    let input = '';

    if(type === 'default') {
        input = (
            <div className="form-control-outer">
                <input style={{paddingRight: password ? '43px' : ''}} className="form-control" type={password ? ( hidden ? 'text' : 'password') : 'text' } placeholder={placeholder} />
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
                        {type === 'input-upload' ? (
                            <p className="font-12">Delete Avatar</p>
                        ):(
                            <p>{labelR}</p>
                        )}
                    </div>
                </div>
              
                {input}
            </div>
            {statusCard}
        </div>
    )

  return (
    <div>
        {wrapper}
    </div>
  );
};
