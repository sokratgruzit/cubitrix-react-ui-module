import './Input.css';

export const Input = props => {
    console.log(props.type)

    return (
        <div className='input-outer'>
            {/* <input type='text' placeholder='default input' /> */}
            <div className='input-inner'>
                <input className='input' type='text' placeholder='default input' />
                {props.type === 'icon' ? 
                    <svg className='icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.33C9.61004 16.33 7.67004 14.39 7.67004 12C7.67004 9.61 9.61004 7.67 12 7.67C14.39 7.67 16.33 9.61 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.17C10.44 9.17 9.17004 10.44 9.17004 12C9.17004 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.17 12 9.17Z" fill="#CDCED1"/>
                        <path d="M12 21.02C8.24002 21.02 4.69002 18.82 2.25002 15C1.19002 13.35 1.19002 10.66 2.25002 9C4.70002 5.18 8.25002 2.98 12 2.98C15.75 2.98 19.3 5.18 21.74 9C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.48C8.77002 4.48 5.68002 6.42 3.52002 9.81C2.77002 10.98 2.77002 13.02 3.52002 14.19C5.68002 17.58 8.77002 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.81C18.32 6.42 15.23 4.48 12 4.48Z" fill="#CDCED1"/>
                    </svg> : ''
                }
            </div>
            

        </div>
    )
};
