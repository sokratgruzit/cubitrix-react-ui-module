import './Input.css';

export const Input = props => {

    let element = null;

    let infoBox = (
        <div className='status-group'>
            {props.status === 'success' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4314 7.29412C18.0392 6.90196 17.451 6.90196 17.0588 7.29412L9.70588 14.6471L6.66667 11.6078C6.27451 11.2157 5.68627 11.2157 5.29412 11.6078C4.90196 12 4.90196 12.5882 5.29412 12.9804L9.01961 16.7059C9.21569 16.902 9.41176 17 9.70588 17C10 17 10.1961 16.902 10.3922 16.7059L18.4314 8.66667C18.8235 8.27451 18.8235 7.68627 18.4314 7.29412V7.29412Z" fill="#9CCC65"/>
              </svg>
            ) : ''}
            {props.status === 'warning' ? (
                <svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.15219 16.4286L10.8225 5.70913C10.9358 5.49506 11.1053 5.31592 11.3127 5.19097C11.5202 5.06602 11.7578 5 12 5C12.2422 5 12.4798 5.06602 12.6873 5.19097C12.8947 5.31592 13.0642 5.49506 13.1775 5.70913L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0877 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z" stroke="#FFA726" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="square"/>
                    <path d="M11.9987 9.45734V13.2762" stroke="#FFA726" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="square"/>
                    <path d="M11.9987 16.4585C12.526 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.526 14.5491 11.9987 14.5491C11.4714 14.5491 11.044 14.9765 11.044 15.5038C11.044 16.0311 11.4714 16.4585 11.9987 16.4585Z" fill="#FFA726"/>
                    <path d="M29.5352 16.5H28.6387V8.09766H29.5352V11.8945H34.0938V8.09766H34.9961V16.5H34.0938V12.6855H29.5352V16.5ZM36.0391 13.4883C36.0391 12.9219 36.1719 12.4004 36.4375 11.9238C36.707 11.4473 37.0762 11.0684 37.5449 10.7871C38.0137 10.5059 38.5312 10.3652 39.0977 10.3652C39.5117 10.3652 39.9004 10.4453 40.2637 10.6055C40.6309 10.7617 40.9453 10.9766 41.207 11.25C41.4688 11.5195 41.6738 11.8438 41.8223 12.2227C41.9746 12.5977 42.0508 12.9961 42.0508 13.418V13.752H36.9004C36.9668 14.3496 37.2148 14.8496 37.6445 15.252C38.0781 15.6504 38.5898 15.8496 39.1797 15.8496C39.5664 15.8496 39.9238 15.7637 40.252 15.5918C40.5801 15.4199 40.8594 15.1777 41.0898 14.8652L41.7344 15.3223C41.4414 15.7246 41.0742 16.0391 40.6328 16.2656C40.1914 16.4922 39.7109 16.6055 39.1914 16.6055C38.3047 16.6055 37.5566 16.3047 36.9473 15.7031C36.3418 15.1016 36.0391 14.3633 36.0391 13.4883ZM39.0977 11.1211C38.5586 11.1211 38.0859 11.3008 37.6797 11.6602C37.2734 12.0156 37.0215 12.4727 36.9238 13.0312H41.1836C41.1055 12.4766 40.8691 12.0195 40.4746 11.6602C40.0801 11.3008 39.6211 11.1211 39.0977 11.1211ZM43.9375 16.5H43.0703V8.09766H43.9375V16.5ZM45.1914 10.4766H46.0586V11.4727C46.3398 11.1211 46.6816 10.8477 47.084 10.6523C47.4902 10.4531 47.9316 10.3535 48.4082 10.3535C49.2832 10.3535 50.0234 10.6582 50.6289 11.2676C51.2383 11.873 51.543 12.6133 51.543 13.4883C51.543 14.0586 51.4023 14.584 51.1211 15.0645C50.8438 15.541 50.4648 15.918 49.9844 16.1953C49.5039 16.4688 48.9785 16.6055 48.4082 16.6055C47.9355 16.6055 47.4961 16.5078 47.0898 16.3125C46.6836 16.1133 46.3398 15.8359 46.0586 15.4805V18.8145H45.1914V10.4766ZM46.7207 11.8184C46.2715 12.2793 46.0469 12.8359 46.0469 13.4883C46.0469 14.1406 46.2734 14.6953 46.7266 15.1523C47.1797 15.6094 47.7246 15.8379 48.3613 15.8379C49.002 15.8379 49.5469 15.6094 49.9961 15.1523C50.4492 14.6953 50.6758 14.1406 50.6758 13.4883C50.6758 12.8359 50.4492 12.2793 49.9961 11.8184C49.5469 11.3535 49.002 11.1211 48.3613 11.1211C47.7207 11.1211 47.1738 11.3535 46.7207 11.8184ZM56.9336 16.5C56.5312 16.5 56.2148 16.3926 55.9844 16.1777C55.7539 15.959 55.6387 15.6699 55.6387 15.3105V11.2441H54.5137V10.4766H55.6387V8.66602H56.5059V10.4766H57.9297V11.2441H56.5059V15.1816C56.5059 15.3535 56.5586 15.4883 56.6641 15.5859C56.7734 15.6836 56.9277 15.7324 57.127 15.7324H57.9297V16.5H56.9336ZM58.3281 13.4883C58.3281 12.9219 58.4609 12.4004 58.7266 11.9238C58.9961 11.4473 59.3652 11.0684 59.834 10.7871C60.3027 10.5059 60.8203 10.3652 61.3867 10.3652C61.8008 10.3652 62.1895 10.4453 62.5527 10.6055C62.9199 10.7617 63.2344 10.9766 63.4961 11.25C63.7578 11.5195 63.9629 11.8438 64.1113 12.2227C64.2637 12.5977 64.3398 12.9961 64.3398 13.418V13.752H59.1895C59.2559 14.3496 59.5039 14.8496 59.9336 15.252C60.3672 15.6504 60.8789 15.8496 61.4688 15.8496C61.8555 15.8496 62.2129 15.7637 62.541 15.5918C62.8691 15.4199 63.1484 15.1777 63.3789 14.8652L64.0234 15.3223C63.7305 15.7246 63.3633 16.0391 62.9219 16.2656C62.4805 16.4922 62 16.6055 61.4805 16.6055C60.5938 16.6055 59.8457 16.3047 59.2363 15.7031C58.6309 15.1016 58.3281 14.3633 58.3281 13.4883ZM61.3867 11.1211C60.8477 11.1211 60.375 11.3008 59.9688 11.6602C59.5625 12.0156 59.3105 12.4727 59.2129 13.0312H63.4727C63.3945 12.4766 63.1582 12.0195 62.7637 11.6602C62.3691 11.3008 61.9102 11.1211 61.3867 11.1211ZM64.3281 16.5L66.6426 13.3945L64.4688 10.4766H65.4648L67.123 12.7324L68.7812 10.4766H69.7363L67.6035 13.3652L69.9062 16.5H68.9102L67.0996 14.0273L65.2891 16.5H64.3281ZM72.4023 16.5C72 16.5 71.6836 16.3926 71.4531 16.1777C71.2227 15.959 71.1074 15.6699 71.1074 15.3105V11.2441H69.9824V10.4766H71.1074V8.66602H71.9746V10.4766H73.3984V11.2441H71.9746V15.1816C71.9746 15.3535 72.0273 15.4883 72.1328 15.5859C72.2422 15.6836 72.3965 15.7324 72.5957 15.7324H73.3984V16.5H72.4023Z" fill="#FFA726"/>
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
            <p style={{color: props.statusColor}} className='font-12'>{props.statusTitle}</p>
        </div>
    )

    if(props.type === 'default') {
        element = (
            <div className='input-group'>
                <input className='form-control' type='text' placeholder={props.placeholder} />
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

    if(props.type === 'lable-input') {
        element = (
            <div className='input-group-lable'>
                <div className='input-group-item'>
                    <p className='input-group-title font-12'>Amount <span className='font-12'>Set order size</span></p>
                    <div className='input-form'>
                        <div className='input-form-inner'>
                            <input className='form-control secondary' type='text' placeholder={'0.000'} />
                            <p className='input-group-frame'>eth</p>
                        </div>
                        <p style={{width: '41px', height: '41px'}} className='input-form-frame'>
                            usd
                        </p> 
                    </div>
                </div>
                <div className='input-group-item'>
                    <p className='font-12 input-group-text'>Limit Price <span className='input-group-frame-secondary'>Usd</span></p>
                    <input className='form-control' type='text' placeholder='0.000' />
                </div>
                <div className='select-group'>
                    <p className='input-group-title font-12'>Time In Force</p>
                    <div className='form-select'>
                        <div className='selected option'>
                            <div>rcheuli yle</div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 10L10.5303 12.4697C10.2386 12.7614 9.76136 12.7614 9.4697 12.4697L7 10" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        {/* <div className='form-select-options'>
                            <div className='option'>patara yle</div>
                            <div className='option'>sashualo yle</div>
                            <div className='option'>didi yle</div>
                            <div className='option'>ushvelebeli yle</div>
                        </div> */}
                    </div>
                    {infoBox}
                </div>
                <div className='select-group'>
                        
                </div>
            </div>
        )
    }

    return element;
};
