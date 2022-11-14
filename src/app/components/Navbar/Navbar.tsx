import { Link } from "react-router-dom";
import { Container, List, ListItem } from "./style";

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
        </Container>
    );
}

export default Navbar;