export type Meta = {
    total_pages: number;
    total_count: number;
    current_page: number;
    per_page: number;
}

export type IUser = {
    _id: string;
    name: string;
    email: string;
    observations: string;
    birthdate: string;
    age: number;
}

export type IActivity = {
    _id: string;
    title: string;
    date: Date;
    duration: number;
    user: IUser;
}