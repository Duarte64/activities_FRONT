import Modal from "../Modal";
import UserForm from "../Forms/UserForm";
import useModal from "../../hooks/useModal";
import { memo } from 'preact/compat';
import { IUser } from "../../types";
import { deleteUser } from "../../services/users/userRequests";
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { 
    Card, 
    Title, 
    Legend, 
    Information, 
    CardDivisory, 
    Footer, 
    Divisory, 
    Header,
    Banner, 
    ProfileImage ,
    ActionsIcons
} from "./style";
import IconButton from "../IconButton";


const UserCard = ({ _id, name, email, age, observations, birthdate}: IUser) => {

    const number = Math.floor(Math.random() * 99);
    const {isShowing, toggle} = useModal();
    
    const handleDelete = async () => {
        const data = await deleteUser(_id);
        if (data.status === 200) {
            window.location.reload();
        }
    };

    return (
        <>
        <Card>
            <Header>
                <Banner loremIpsumNumber={number} />
                <ProfileImage loremIpsumNumber={number} />
            </Header>
            <ActionsIcons className="teste">
                <IconButton onClick={handleDelete} icon={<FaRegTrashAlt size={18} />}/>
                <IconButton onClick={toggle} icon={<HiOutlinePencilAlt size={21} />}/>
            </ActionsIcons>
            <Title>
                {name}
            </Title>
            <CardDivisory>
                <Legend>
                    Age
                </Legend>
                <Information>
                    {age}
                </Information>
            </CardDivisory>
            <CardDivisory>
                <Legend>
                    Observations
                </Legend>
                <Information>
                    {observations}
                </Information>
            </CardDivisory>
            <Footer>
                <Divisory />
                {email}
            </Footer>
        </Card>
        <Modal isShowing={isShowing} hide={toggle} > 
            <UserForm initialValues={{ _id, name, email, birthdate, age, observations}} />
        </Modal>
        </>
    )
}

export default memo(UserCard);