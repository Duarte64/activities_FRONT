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
