import React, { useState } from 'react';
import './addGoal.css';

interface Goal {
    currentLaps: string;
    currentTimePerLap: string;
    goalName: string;
    goalDate: string;
    lapsGoal: string;
    goalTimePerLap: string;
    description: string;
}

const AddGoal: React.FC = () => {
    const [goal, setGoal] = useState<Goal>({
        currentLaps: '',
        currentTimePerLap: '',
        goalName: '',
        goalDate: '',
        lapsGoal: '',
        goalTimePerLap: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setGoal(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(goal);  // Placeholder for submitting the data
        alert('Goal Added!');  // Placeholder for success action
    };

    return (
        <div className="goal-form-container">
            <form onSubmit={handleSubmit} className="goal-form">
                <div className="form-column">
                    <input
                        type="text"
                        name="currentDate"
                        placeholder="Current Date"
                        value={new Date().toLocaleDateString()}
                        readOnly
                    />
                    <input
                        type="text"
                        name="currentLaps"
                        placeholder="Current Laps (Per Week)"
                        value={goal.currentLaps}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="currentTimePerLap"
                        placeholder="Current Time Per Lap"
                        value={goal.currentTimePerLap}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-column">
                    <input
                        type="text"
                        name="goalName"
                        placeholder="Goal Name"
                        value={goal.goalName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="goalDate"
                        placeholder="Goal Date"
                        value={goal.goalDate}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lapsGoal"
                        placeholder="Laps Goal (Per Week)"
                        value={goal.lapsGoal}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="goalTimePerLap"
                        placeholder="Goal Time Per Lap"
                        value={goal.goalTimePerLap}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={goal.description}
                    onChange={handleChange}
                    className="description"
                />
                <div className="form-buttons">
                    <button type="submit" className="submit-btn">Add Goal</button>
                    <button type="button" className="cancel-btn" onClick={() => alert('Cancelled')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddGoal;