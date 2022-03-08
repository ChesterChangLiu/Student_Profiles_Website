import React from "react";
import EachStudent from "./EachStudent";

const Students = ({ students, handleAverage, createTagForStudent }) => {
  return (
    <div>
      {students.map((student) => {
        return (
          <EachStudent
            key={"student" + student.id.toString()}
            img={student.pic}
            firstName={student.firstName.toUpperCase()}
            lastName={student.lastName.toUpperCase()}
            email={student.email}
            company={student.company}
            skill={student.skill}
            average={handleAverage(student.grades)}
            grades={student.grades}
            student={student}
            createTagForStudent={createTagForStudent}
          />
        );
      })}
    </div>
  );
};

export default Students;
