import { Container } from './style';
import { IActivity } from '../../types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useState, useEffect } from 'preact/hooks';
import { deleteActivity, getActivities } from '../../services/activities/activityRequests';
import ModuleHeader from '../../components/ModuleHeader';

const Activities = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');
    const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        const asyncSetActivities = async () => {
            const activities = await getActivities();
            setActivities(activities.data);
            setFilteredActivities(activities.data);
        };

        asyncSetActivities();
    }, []);

    const handleDelete = async (_id: string) => {
        const data = await deleteActivity(_id);
        if (data.status === 200) {
            window.location.reload();
        }
    };

    const handleChangeFilter = (event: any) => {
        setNameFilter(event.target.value);
    };

    useEffect(() => {
        const filtered = activities.filter((activity) => activity.title.toLowerCase().includes(nameFilter.toLowerCase()));
        setFilteredActivities(filtered);
    }, [nameFilter]);

    return (
        <Container>
            <ModuleHeader context='Activity' onInputChange={handleChangeFilter} />
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>User</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredActivities.map((activity) => (
                        <tr key={activity._id}>
                            <td>{activity.title}</td>
                            <td>
                                <div>
                                    <img src={`https://picsum.photos/${activity.user.age}/${activity.user.age}`} alt="profile"/>
                                    {activity.user.name}
                                </div>
                            </td>
                            <td>{activity.duration} min.</td>
                            <td>{new Date(activity.date).toLocaleDateString()}</td>
                            <td>
                                <div>
                                    <FaRegTrashAlt onClick={() => handleDelete(activity._id)} size={22} fill="#b81117" />
                                    <HiOutlinePencilAlt size={28} color="#4d8ee3" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Activities;