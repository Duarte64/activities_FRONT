import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { getUsers } from '../../../services/users/userRequests';
import { IActivity, IUser } from '../../../types';
import { useState, useEffect } from 'preact/hooks';
import { createNewActivity, updateActivityData } from '../../../services/activities/activityRequests';
import { Container, Form, Input, Button, FormTitle, Textarea, Select } from "../style";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    initialValues?: IActivity;
}

const ActivityForm = ({initialValues}: Props) => {

    const { register, handleSubmit } = useForm({defaultValues: {...initialValues, user: initialValues?.user._id}});
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response.data);
        }
        fetchUsers();
    }, [])

    console.log(users);

    const onSubmit = async (data: any) => {
        let response;
        let message;
        if (initialValues?._id === undefined) {
            response = await createNewActivity(data);
            message = 'Activity created successfully!';
        } else {
            response = await updateActivityData(data);
            message = 'Activity updated successfully!';
        }
        if (response.status === 201 || response.status === 200) {
            toast.success(message, {
                autoClose: 1500,
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            toast.error("Error creating user!");
        }
    }

    return (
        <>
            <Container>
                <FormTitle>New Activity</FormTitle>
                {/* 
  // @ts-ignore */}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea placeholder="Description*" rows={3} {...register("title", {required: true})} />
                    <Select defaultValue={initialValues?.user?._id} {...register("user", {required: true})}>
                        {users.map(user => (
                            <option value={user._id}>{user.name}</option>
                        ))}
                    </Select>
                    <Input type="number" placeholder="Duration*" {...register("duration", {required: true})} />
                    <Input type="date" {...register("date", {required: true})} />
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default ActivityForm;