import React from "react";
import "../../styles/DashboardUsuario/CoursesFreela.css";

const CourseCard = ({ name, progress, totalHours }) => {

  const getProgressColor = (progress) => {
    if (progress >= 0 && progress <= 20) return "red";
    if (progress > 20 && progress <= 40) return "yellow"; 
    if (progress > 40 && progress <= 60) return "orange"; 
    if (progress > 60 && progress < 100) return "blue";
    if (progress === 100) return "green";
  };

  return (
    <div className="course-card">
      <h2>{name}</h2>
      <div className="progress-container">
        <div
          className="progress-circle"
          style={{
            borderColor: getProgressColor(progress),
            color: getProgressColor(progress), 
          }}
        >
          {progress}%
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
              backgroundColor: getProgressColor(progress),
            }}
          ></div>
        </div>
        <span>{totalHours}h</span>
      </div>
    </div>
  );
};

function CoursesFreela() {
  const courses = [
    { name: "Java", progress: 15, totalHours: 60 },
    { name: "Python", progress: 35, totalHours: 60 },
    { name: "React", progress: 50, totalHours: 60 }, 
    { name: "Node.js", progress: 75, totalHours: 60 }, 
    { name: "JavaScript", progress: 100, totalHours: 60 }, 
  ];

  const group1 = courses.filter((_, index) => index % 2 === 0);
  const group2 = courses.filter((_, index) => index % 2 !== 0);

  return (
    <div className="course-container-freela">
      <div className="courses-header">
        <div className="courses-header-title">
          <h1>Cursos</h1>
          <span className="view-all">ver todos</span>
        </div>
        <p>Lista dos cursos mais recentes.</p>
      </div>
      <div className="course-container">
        <div className="course-group">
          {group1.map((course, idx) => (
            <CourseCard
              key={idx}
              name={course.name}
              progress={course.progress}
              totalHours={course.totalHours}
            />
          ))}
        </div>
        <div className="course-group">
          {group2.map((course, idx) => (
            <CourseCard
              key={idx}
              name={course.name}
              progress={course.progress}
              totalHours={course.totalHours}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesFreela;
