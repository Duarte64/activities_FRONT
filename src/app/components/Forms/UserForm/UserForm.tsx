import { IUser } from "../../../types";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { createNewUser, updateUserData } from "../../../services/users/userRequests";
import { Container, Form, Input, Button, FormTitle, Textarea } from "../style";
import 'react-toastify/dist/ReactToastify.css';


type Props = {
    initialValues?: IUser;
}

const UserForm = ({initialValues}: Props) => {

    const { register, handleSubmit } = useForm({defaultValues: initialValues});

    const onSubmit = async (data: any) => {
        let response;
        let message;
        if (initialValues?._id === undefined) {
            response = await createNewUser(data);
            message = 'User created successfully!';
        } else {
            response = await updateUserData(data);
            message = 'User updated successfully!';
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
                <FormTitle>New User</FormTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Name*" {...register("name", {required: true})} />
                    <Input type="email" placeholder="Email*" {...register("email", {required: true})} />
                    <Input type="date" {...register("birthdate", {required: true})} />
                    <Textarea rows={3} placeholder="Observations" {...register("observations")} />
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default UserForm;