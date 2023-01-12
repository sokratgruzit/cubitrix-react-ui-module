import './ToolTip.css';


export const ToolTip = (props) => {
    return (
        <div className='toolTip'>
            <p>{props.head ? props.title : ''}</p>
            <p className='font-12'>{props.content}</p>
        </div>
    );
};