enum difficulty{
    Easy = 1,
    Medium = 2,
    Hard = 3
}

enum activityType {
    Swimming = 1,
}

export interface SwimmingType {
    "_id": string,
    "type":activityType,
    "user_id": string;
    "createdAt": Date;
    "updatedAt": Date;
    "timeTaken": number;
    "numberOfLaps": number;
    "difficulty"?: difficulty;
    "distance"?: number;
    "heartRate"?: number;
    "calories"?: number;
}

export interface GoalsType {
    _id: string;
    user_id: string;
    createdAt: Date;
    updatedAt: Date;
    timeTaken: number;
    numberOfLaps: number;
}

export interface CurrentUser {
    id: string;
    email: string;
    username: string;
    profileId: string;
    profileCompleted: string;
}