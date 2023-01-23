import './HelpText.css';

export const HelpText = props => {
    return (
        <div>
            <div style={props.customStyles} className='status-group'>
                <div className={!props.icon ? 'hidden' : 'status-group-inner' }>
                    {props.status === 'success' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4314 7.29412C18.0392 6.90196 17.451 6.90196 17.0588 7.29412L9.70588 14.6471L6.66667 11.6078C6.27451 11.2157 5.68627 11.2157 5.29412 11.6078C4.90196 12 4.90196 12.5882 5.29412 12.9804L9.01961 16.7059C9.21569 16.902 9.41176 17 9.70588 17C10 17 10.1961 16.902 10.3922 16.7059L18.4314 8.66667C18.8235 8.27451 18.8235 7.68627 18.4314 7.29412V7.29412Z" fill="#9CCC65"/>
                        </svg>
                    ) : ''}
                    {props.status === 'warning' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.15219 16.4286L10.8225 5.70913C10.9358 5.49506 11.1053 5.31592 11.3127 5.19097C11.5202 5.06602 11.7578 5 12 5C12.2422 5 12.4798 5.06602 12.6873 5.19097C12.8947 5.31592 13.0642 5.49506 13.1775 5.70913L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0877 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z" stroke="#FFA726" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M11.9987 9.45734V13.2762" stroke="#FFA726" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M11.9987 16.4585C12.526 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.526 14.5491 11.9987 14.5491C11.4714 14.5491 11.044 14.9765 11.044 15.5038C11.044 16.0311 11.4714 16.4585 11.9987 16.4585Z" fill="#FFA726"/>
                        </svg>
                    ) : ''}
                    {props.status === 'error' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3211 13.3039C12.016 13.3039 11.7631 13.0509 11.7631 12.7459V8.83981C11.7631 8.53476 12.016 8.2818 12.3211 8.2818C12.6261 8.2818 12.8791 8.53476 12.8791 8.83981V12.7459C12.8791 13.0509 12.6261 13.3039 12.3211 13.3039Z" fill="#EF5350"/>
                            <path d="M12.3211 15.9079C12.2231 15.9089 12.1259 15.8903 12.0352 15.8533C11.9445 15.8162 11.8621 15.7615 11.7928 15.6922C11.7259 15.6178 11.6738 15.5359 11.6292 15.4466C11.5933 15.3568 11.5756 15.2607 11.5771 15.1639C11.5771 14.9705 11.6589 14.777 11.7928 14.6357C12.0681 14.3604 12.5741 14.3604 12.8493 14.6357C12.9833 14.777 13.0651 14.9705 13.0651 15.1639C13.0651 15.2606 13.0428 15.3574 13.0056 15.4466C12.9684 15.5359 12.9163 15.6178 12.8493 15.6922C12.7801 15.7615 12.6977 15.8162 12.607 15.8533C12.5163 15.8903 12.4191 15.9089 12.3211 15.9079Z" fill="#EF5350"/>
                            <path d="M12.3211 20C11.8226 20 11.3167 19.8735 10.8703 19.6131L6.45083 17.0611C5.55801 16.5403 5 15.5806 5 14.5464V9.45734C5 8.42316 5.55801 7.46338 6.45083 6.94257L10.8703 4.39061C11.7631 3.8698 12.8717 3.8698 13.7719 4.39061L18.1913 6.94257C19.0842 7.46338 19.6422 8.42316 19.6422 9.45734V14.5464C19.6422 15.5806 19.0842 16.5403 18.1913 17.0611L13.7719 19.6131C13.3255 19.8735 12.8196 20 12.3211 20ZM12.3211 5.11974C12.016 5.11974 11.7036 5.20158 11.4283 5.35782L7.00884 7.90979C6.45827 8.22971 6.11602 8.81748 6.11602 9.45734V14.5464C6.11602 15.1788 6.45827 15.774 7.00884 16.0939L11.4283 18.6459C11.9788 18.9658 12.6633 18.9658 13.2065 18.6459L17.6259 16.0939C18.1765 15.774 18.5187 15.1862 18.5187 14.5464V9.45734C18.5187 8.82492 18.1765 8.22971 17.6259 7.90979L13.2065 5.35782C12.9386 5.20158 12.6261 5.11974 12.3211 5.11974Z" fill="#EF5350"/>
                        </svg>
                    ) : ''}
                    {props.status === 'info' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 7.59872 7.59872 4 12 4C16.4013 4 20 7.59872 20 12C20 16.4013 16.4013 20 12 20C7.59872 20 4 16.4013 4 12ZM12 5.11628C8.21523 5.11628 5.11628 8.21523 5.11628 12C5.11628 15.7848 8.21523 18.8837 12 18.8837C15.7848 18.8837 18.8837 15.7848 18.8837 12C18.8837 8.21523 15.7848 5.11628 12 5.11628Z" fill="#6A6D76"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9993 15.7209C11.691 15.7209 11.4411 15.4711 11.4411 15.1628L11.4411 11.4419C11.4411 11.1336 11.691 10.8837 11.9993 10.8837C12.3075 10.8837 12.5574 11.1336 12.5574 11.4419L12.5574 15.1628C12.5574 15.4711 12.3075 15.7209 11.9993 15.7209Z" fill="#6A6D76"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7472 9.20931C12.7472 9.62031 12.414 9.95349 12.003 9.95349L11.9963 9.95349C11.5853 9.95349 11.2521 9.62031 11.2521 9.20931C11.2521 8.7983 11.5853 8.46512 11.9963 8.46512L12.003 8.46512C12.414 8.46512 12.7472 8.7983 12.7472 9.20931Z" fill="#6A6D76"/>
                        </svg>
                    ) : ''}
                </div>
                <p style={{color: props.color}} className={props.fontSize}>{props.title}</p>
            </div>
        </div>
    )
};
