import { IUser } from '../../types';
import { getUsers } from '../../services/users/userRequests';
import { Container } from './style';
import { useEffect, useState } from 'preact/hooks';
import UserCard from '../../components/Cards/UserCard';

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const asyncSetUsers = async () => {
            const users = await getUsers();
            setUsers(users.data);
        };
        asyncSetUsers();
    }, []);

    return (
        <Container>
            {users.map(user => (
                <UserCard key={user._id} {...user} />
            ))}
        </Container>
    );

};

export default Users;