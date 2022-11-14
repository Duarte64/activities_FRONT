import { CustomButton } from "./style";

type Props = {
    onClick: () => void;
    icon: any;
}

const IconButton = ({icon, onClick}: Props) => {
    return(
        <CustomButton onClick={onClick}>
            {icon}
        </CustomButton>
    )
}

export default IconButton;