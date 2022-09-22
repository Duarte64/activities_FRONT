import { IActivity, IUser } from "../../../types";
import { Card, Title, Legend, Information, CardDivisory, Footer, Divisory } from "./style";

const ActivityCard = ({title, duration, date, user}: IActivity) => {

    const number = Math.floor(Math.random() * 9);

    return (
        <Card>
            <CardDivisory>
                <Title>{title}</Title>
            </CardDivisory>
            <CardDivisory>
                <Legend>Age</Legend>
                <Information>{duration}</Information>
            </CardDivisory>
            <CardDivisory>
                <Legend>Observations</Legend>
                <Information>{date}</Information>
            </CardDivisory>
            <Footer>
                <Divisory />
                {user.name}
            </Footer>
        </Card>
    )
}

export default ActivityCard;