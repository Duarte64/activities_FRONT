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

const UserCard = ({ _id, name, email, age, observations}: IUser) => {

    const number = Math.floor(Math.random() * 99);

    const handleDelete = async () => {
        const data = await deleteUser(_id);
        if (data.status === 200) {
            window.location.reload();
        }
    };

    return (
        <Card>
            <Header>
                <Banner loremIpsumNumber={number} />
                <ProfileImage loremIpsumNumber={number} />
            </Header>
            <ActionsIcons className="teste">
                <FaRegTrashAlt onClick={handleDelete} size={18} />
                <HiOutlinePencilAlt size={21} />
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
    )
}

export default UserCard;