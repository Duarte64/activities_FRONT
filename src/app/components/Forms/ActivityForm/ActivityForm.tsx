import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { IActivity } from '../../../types';
import { createNewActivity, updateActivityData } from '../../../services/activities/activityRequests';
import { Container, Form, Input, Button, FormTitle } from "./style";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    initialValues?: IActivity;
}

const ActivityForm = ({initialValues}: Props) => {

    const { register, handleSubmit } = useForm({defaultValues: {...initialValues, user: initialValues?.user._id}});

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Title*" {...register("title", {required: true})} />
                    <Input type="text" placeholder="User*" {...register("user", {required: true})} />
                    <Input type="number" placeholder="Duration*" {...register("duration", {required: true})} />
                    <Input type="date" {...register("date", {required: true})} />
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default ActivityForm;