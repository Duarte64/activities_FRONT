import UserForm from "../Forms/UserForm";
import { HiOutlinePlus } from "react-icons/hi";
import { useState, useEffect } from 'preact/hooks';
import { Container, Input, Button } from "./style";

type Props = {
    context: 'User' | 'Activity';
    onInputChange: (event: any) => void;
}

const ModuleHeader = ({context, onInputChange}: Props) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Container>
                <Button onClick={() => setShowForm(true)}><HiOutlinePlus size={22}/><span>Add {context}</span></Button>
                <Input type="text" placeholder={`Find ${context}`} onChange={(event) => onInputChange(event)}/>
            </Container>
            {showForm && (context === 'User' ? <UserForm /> : <UserForm />)}
        </>
    );
}

export default ModuleHeader;