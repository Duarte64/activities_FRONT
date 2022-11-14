type Props = {
    onClick: () => void;
    icon: any;
}

const IconButton = ({icon, onClick}: Props) => {
    return(
        <button onClick={onClick}>
            {icon}
        </button>
    )
}

export default IconButton;