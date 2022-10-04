import { IActivity } from "../../types";
import request from "../requestInstance";

type GetActivitiesType = {
    data: IActivity[];
}

export const getActivities = async (): Promise<GetActivitiesType> => {
  const data = await request({
    url: '/activities',
    method: 'GET',
  })

  return data;
};

type GetActivityType = {
    data: IActivity;
}

export const getActivity = async (id: string): Promise<GetActivityType> => {
  const data = await request({
    url: `/activities/${id}`,
    method: 'GET',
  })

  return data;
};

export const createNewActivity = async (activity: IActivity) => {
    const data = await request({
        url: '/activities',
        method: 'POST',
        data: activity,
    })
    
    return data;
};

export const deleteActivity = async (id: string) => {
    const data = await request({
        url: `/activities/${id}`,
        method: 'DELETE',
    })
    
    return data;
};

export const updateActivityData = async (activity: IActivity) => {
    const data = await request({
        url: `/activities/${activity?._id}`,
        method: 'PATCH',
        data: activity,
    })
    
    return data;
}
