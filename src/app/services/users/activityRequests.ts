import { IActivity, Meta } from "../../types";
import request from "../requestInstance";

type GetActivitiesType = {
    data: IActivity[];
    meta: Meta;
}

export const getActivities = async () => {
  const data = await request({
    url: '/activities',
    method: 'GET',
  })

  return data;
};
