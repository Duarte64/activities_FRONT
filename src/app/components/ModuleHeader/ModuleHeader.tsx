import Modal from "../Modal";
import UserForm from "../Forms/UserForm";
import useModal from "../../hooks/useModal";
import ActivityForm from "../Forms/ActivityForm";
import { HiOutlinePlus } from "react-icons/hi";
import { useState, useEffect } from 'preact/hooks';
import { Container, Input, Button } from "./style";

type Props = {
    context: 'User' | 'Activity';
    onInputChange: (event: any) => void;
}

const ModuleHeader = ({context, onInputChange}: Props) => {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <Container>
                <Button onClick={toggle}><HiOutlinePlus size={22}/><span>Add {context}</span></Button>
                <Input type="text" placeholder={`Find ${context}`} onChange={(event: any) => onInputChange(event)}/>
            </Container>
            <Modal isShowing={isShowing} hide={toggle} > 
                {context === 'User' ? <UserForm /> : <ActivityForm />}
            </Modal>
        </>
    );
}

export default ModuleHeader;