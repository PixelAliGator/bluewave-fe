import axios from 'axios';
import { getPayload, getToken } from '../lib/auth';
import { UserProfile } from '../dashboard/UserDashboard';
import { Activity } from '../dashboard/AddActivity';



export const getUserProfileData = async (): Promise<UserProfile | undefined> => {
    const token = getToken();
    if (!token) {
        console.log('Token is empty');
        return undefined; // Or throw new Error("Authorization token is not available.");
    }

    const payload = getPayload();
    //@ts-expect-error user payload is there 
    if (!payload || !payload.user || !payload.user.profileId) {
        console.log('Invalid payload data');
        console.log(payload)
        return undefined; // Or throw new Error("Invalid user data in payload.");
    }

    try {
        //@ts-ignore
        const res = await axios.get(`http://127.0.0.1:8080/api/user/?id=${payload.user.profileId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.status !== 200) {
            throw new Error('Failed to fetch user profile:' + res.status + res.statusText); // Or handle differently depending on your application's error handling strategy
        }

        const data: UserProfile = res.data;
        console.log(data);
        return data;
    } catch (error: unknown) {
        if (err) {
            throw new Error('Error fetching user profile:' + error.message); // Or throw error if you want to escalate this error to be handled by the caller

        }
    }
};

export const getCurrentPathname = (): string => {
    return window.location.pathname;
};


export const addActivity = async (activity: Activity) => {
    const token = getToken();
    if (!token) {
        throw Error('Invalid Token')
    }
    const payload = getPayload();
    console.log(payload.user, !!payload)
    console.log(payload.user.profileId, !!payload)
    //@ts-ignore
    if (!payload || !payload.user || !payload.user.profileId) {
        console.log('Invalid payload data');
        console.log(payload)
        return null; // Or throw new Error("Invalid user data in payload.");
    }
    console.log(payload.user.id)
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };
    const res = await axios.post('http://127.0.0.1:8080/api/activity', { user_id: payload.user.id, ...activity }, headers);

    return res.data;
}