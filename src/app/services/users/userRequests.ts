import { IUser } from "../../types/index";
import request from "../requestInstance";

type GetUsersType = {
    data: IUser[];
}

export const getUsers = async (): Promise<GetUsersType> => {
  const data = await request({
    url: '/users',
    method: 'GET',
  })

  return data;
};

type GetUserType = {
    data: IUser;
}

export const getUser = async (id: string): Promise<GetUserType> => {
  const data = await request({
    url: `/users/${id}`,
    method: 'GET',
  })

  return data;
};

export const deleteUser = async (id: string) => {
    const data = await request({
        url: `/users/${id}`,
        method: 'DELETE',
    })
    
    return data;
};


export const createNewUser = async (user: IUser) => {
    const data = await request({
        url: '/users',
        method: 'POST',
        data: user,
    })
    
    return data;
};

export const updateUserData = async (user: IUser) => {
    const data = await request({
        url: `/users/${user._id}`,
        method: 'PATCH',
        data: user,
    })
    
    return data;
}
