import { Link } from "react-router-dom";
import { Container, List, ListItem } from "./style";

const Navbar = () => {
    return (
        <Container>
            <List>
                <Link to="/users">
                    {/* 
// @ts-ignore */}
                    <ListItem>Users</ListItem>
                </Link>
                <Link to="/activities">{/* 
  // @ts-ignore */}
                    <ListItem>Activities</ListItem>
                </Link>
            </List>
        </Container>
    );
}

export default Navbar;