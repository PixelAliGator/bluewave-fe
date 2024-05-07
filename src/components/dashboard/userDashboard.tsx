import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../lib/auth';
import { getUserProfileData } from '../lib/api';

export interface UserProfile {
    _id: string;
    age: number;
    height: number;
    weight: number;
    gender: string;
    bmi: number;
}
const UserDashboard: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | undefined>();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserProfile | undefined>();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const profile = await getUserProfileData();
                if (profile) {
                    setUserProfile(profile);
                    setFormData(profile);
                } else {
                    console.error('Profile cannot be loaded');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [refresh]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setFormData({
            ...formData,
            [e.target.name]: Number(e.target.value) || e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData) return;
        
        const token = getToken();
        if (!token) {
            console.error('Token does not exist');
            return;
        }

        try {
            const response = await axios.put(http://127.0.0.1:8080/api/user, formData, {
                headers: { 'Authorization': Bearer ${token} }
            });
            console.log(response.data);
            setIsEditing(false);
            setRefresh(!refresh);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    if (!userProfile) return <p>Loading profile...</p>;

    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <label>Age: <input type="number" name="age" value={formData?.age} onChange={handleInputChange} /></label>
                        <label>Height: <input type="number" name="height" value={formData?.height} onChange={handleInputChange} /></label>
                        <label>Weight: <input type="number" name="weight" value={formData?.weight} onChange={handleInputChange} /></label>
                        <label>Gender: <input type="text" name="gender" value={formData?.gender} onChange={handleInputChange} /></label>
                        <label>BMI: <input type="number" name="bmi" value={formData?.bmi} onChange={handleInputChange} /></label>
                        <div>
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </form>
            ) : (

                    <div>
                        <p>Age: {userProfile.age}</p>
                        <p>Height: {userProfile.height}</p>
                        <p>Weight: {userProfile.weight}</p>
                        <p>Gender: {userProfile.gender}</p>
                        <p>BMI: {userProfile.bmi}</p>
                        <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                    </div>
            )}
        </div>
    );
};

export default UserDashboard;