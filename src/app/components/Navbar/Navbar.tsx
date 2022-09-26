import { Link } from "react-router-dom";
import { Container, List, ListItem } from "./style";
import { VscGear } from 'react-icons/vsc'

const Navbar = () => {
    return (
        <Container>
            <List>
                <Link to="/users">
                    <ListItem>Users</ListItem>
                </Link>
                <Link to="/activities">
                    <ListItem>Activities</ListItem>
                </Link>
            </List>
            <VscGear size={26} fill={'#FFFFFF'} />
        </Container>
    );
}

export default Navbar;