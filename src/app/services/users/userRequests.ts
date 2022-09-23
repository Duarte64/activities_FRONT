import { IUser, Meta } from "../../types/index";
import request from "../requestInstance";

type GetUsersType = {
    data: IUser[];
    meta: Meta;
}

export const getUsers = async () => {
  const data = await request({
    url: '/users',
    method: 'GET',
  })

  return data;
};

type GetUserType = {
    data: IUser;
    meta: Meta;
}

export const getUser = async (id: string) => {
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

