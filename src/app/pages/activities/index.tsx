import { Container } from './style';
import { IActivity } from '../../types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useState, useEffect } from 'preact/hooks';
import { deleteActivity, getActivities } from '../../services/activities/activityRequests';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import IconButton from '../../components/IconButton';
import ModuleHeader from '../../components/ModuleHeader';
import ActivityForm from '../../components/Forms/ActivityForm';

const Activities = () => {
    const {isShowing, toggle} = useModal();
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');
    const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
    const [initialValues, setInitialValues] = useState<IActivity | undefined>();

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
        <>
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
                                        <img src={`https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`} alt="profile"/>
                                        {activity.user.name}
                                    </div>
                                </td>
                                <td>{activity.duration} min.</td>
                                <td>{new Date(activity.date).toLocaleDateString()}</td>
                                <td>
                                    <div>
                                        <IconButton onClick={() => handleDelete(activity._id)} icon={<FaRegTrashAlt size={22} color="#b81117" />}/>
                                        <IconButton onClick={() => {setInitialValues(activity); toggle()}} icon={<HiOutlinePencilAlt size={28} color="#4d8ee3" />}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
            <Modal isShowing={isShowing} hide={toggle} > 
                <ActivityForm initialValues={initialValues} />
            </Modal>
        </>
    );
};

export default Activities;