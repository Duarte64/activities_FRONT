import ActivityCard from '../../components/Cards/ActivityCard';
import { Container } from './style';
import { IActivity } from '../../types';
import { getActivities } from '../../services/users/activityRequests';
import { useState, useEffect } from 'preact/hooks';

const Activities = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        const asyncSetActivities = async () => {
            const activities = await getActivities();
            setActivities(activities.data);
        };

        asyncSetActivities();
    }, []);

    return (
        <Container>
            {activities.map(activity => (
                <ActivityCard key={activity._id} {...activity} />
            ))}
        </Container>
    );
};

export default Activities;