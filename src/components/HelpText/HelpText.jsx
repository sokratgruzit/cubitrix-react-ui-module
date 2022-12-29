import './HelpText.css';

export const HelpText = props => {
    return (
        <div>
            <div className='help-text'>
                <div className='item'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4314 7.29412C18.0392 6.90196 17.451 6.90196 17.0588 7.29412L9.70588 14.6471L6.66667 11.6078C6.27451 11.2157 5.68627 11.2157 5.29412 11.6078C4.90196 12 4.90196 12.5882 5.29412 12.9804L9.01961 16.7059C9.21569 16.902 9.41176 17 9.70588 17C10 17 10.1961 16.902 10.3922 16.7059L18.4314 8.66667C18.8235 8.27451 18.8235 7.68627 18.4314 7.29412Z" fill="#9CCC65"/>
                    </svg>
                    <p>Help Text</p>
                </div>
            </div>
        </div>       
    )
}