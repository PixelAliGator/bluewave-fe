import React from "react";
import "./careers.css"; // Import the specific stylesheet

const Careers: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      description:
        "Develop cutting-edge software solutions for tracking fitness activities.",
      qualifications:
        "Strong skills in JavaScript and experience with React and Node.js.",
    },
    {
      id: 2,
      title: "Product Manager",
      description:
        "Oversee the development and management of our next-generation fitness products.",
      qualifications:
        "Proven experience in product management and a keen sense for market trends.",
    },
    {
      id: 3,
      title: "Marketing Specialist",
      description:
        "Lead our efforts to market our products and build brand awareness.",
      qualifications:
        "Experience in digital marketing and strong communication skills.",
    },
  ];

  return (
    <div className="careers-container">
      <h1>Careers at BlueWave</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job-listing">
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <h3>Qualifications:</h3>
          <p>{job.qualifications}</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;
