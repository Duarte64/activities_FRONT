import { Container } from './style';
import { IActivity } from '../../types';
import { deleteActivity, getActivities } from '../../services/activities/activityRequests';
import { useState, useEffect } from 'preact/hooks';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const Activities = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        const asyncSetActivities = async () => {
            const activities = await getActivities();
            setActivities(activities.data);
        };

        asyncSetActivities();
    }, []);

    const handleDelete = async (_id: string) => {
        const data = await deleteActivity(_id);
        if (data.status === 200) {
            window.location.reload();
        }
    };

    return (
        <Container>
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
                    {activities.map((activity) => (
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
                                    <FaRegTrashAlt onClick={() => handleDelete(activity._id)} size={19} fill="#b81117" />
                                    <HiOutlinePencilAlt size={25} color="#4d8ee3" />
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