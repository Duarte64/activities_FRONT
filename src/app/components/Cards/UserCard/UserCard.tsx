import { IUser } from "../../../types";
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
    ProfileImage 
} from "./style";

const UserCard = ({ name, email, age, observations}: IUser) => {

    const number = Math.floor(Math.random() * 9);

    return (
        <Card>
            <Header>
                <Banner loremIpsumNumber={number} />
                <ProfileImage loremIpsumNumber={number} />
            </Header>
            <CardDivisory>
                <Title>
                    {name}
                </Title>
            </CardDivisory>
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