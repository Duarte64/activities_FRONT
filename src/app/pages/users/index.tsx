import { IUser } from '../../types';
import { getUsers } from '../../services/users/userRequests';
import { Container } from './style';
import { useEffect, useState } from 'preact/hooks';
import UserCard from '../../components/UserCard';
import ModuleHeader from '../../components/ModuleHeader';

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const asyncSetUsers = async () => {
            const users = await getUsers();
            setUsers(users.data);
            setFilteredUsers(users.data);
        };
        asyncSetUsers();
    }, []);

    const handleChangeFilter = (event: any) => {
        setNameFilter(event.target.value);
    };

    useEffect(() => {
        const filtered = users.filter((user) => user.name.toLowerCase().includes(nameFilter.toLowerCase()));
        setFilteredUsers(filtered);
    }, [nameFilter]);

    return (
        <Container>
            <ModuleHeader context='User' onInputChange={handleChangeFilter} />
            {filteredUsers.map(user => (
                <UserCard key={user._id} {...user} />
            ))}
        </Container>
    );

};

export default Users;