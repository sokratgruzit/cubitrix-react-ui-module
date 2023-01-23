const DragIcon = ({ active, customStyle }) => {
    return (
        <svg style={customStyle} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.12229 12.122C7.28503 11.9593 7.54887 11.9593 7.7116 12.122L9.83825 14.2487C9.92668 14.3371 10.0738 14.3371 10.1622 14.2487L12.2889 12.122C12.4516 11.9593 12.7155 11.9593 12.8782 12.122C13.0409 12.2848 13.0409 12.5486 12.8782 12.7114L10.7515 14.838C10.3377 15.2519 9.66283 15.2519 9.24895 14.838L7.12229 12.7114C6.95956 12.5486 6.95956 12.2848 7.12229 12.122Z" fill={active ? '#3D5AFE' : '#9C9DA3'}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.12229 8.02639C7.28503 8.18912 7.54887 8.18912 7.7116 8.02639L9.83825 5.89973C9.92668 5.81131 10.0738 5.81131 10.1622 5.89973L12.2889 8.02639C12.4516 8.18912 12.7155 8.18912 12.8782 8.02639C13.0409 7.86366 13.0409 7.59981 12.8782 7.43708L10.7515 5.31043C10.3377 4.89654 9.66283 4.89654 9.24895 5.31043L7.12229 7.43708C6.95956 7.59981 6.95956 7.86366 7.12229 8.02639Z" fill={active ? '#3D5AFE' : '#9C9DA3'}/>
        </svg>
    )
}

export default DragIcon
