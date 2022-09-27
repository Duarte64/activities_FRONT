import { useForm } from "react-hook-form";
import { createNewUser } from "../../../services/users/userRequests";
import { ToastContainer, toast } from 'react-toastify';
import { Container, Form, Input, Button } from "./style";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        const response = await createNewUser(data);
        if (response.status === 201) {
            toast.success("User created successfully!", {
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
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Name*" {...register("name", {required: true})} />
                <Input type="email" placeholder="Email*" {...register("email", {required: true})} />
                <Input type="date" {...register("birthdate", {required: true})} />
                <Input type="observations" placeholder="Observations" {...register("observations")} />
                <Button type="submit">Submit</Button>
            </Form>
            <ToastContainer />
        </Container>
    )
}

export default UserForm;