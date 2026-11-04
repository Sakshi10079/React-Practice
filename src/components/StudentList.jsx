import StudentCard from "./StudentCard";

export default function StudentList({
  students,
  deleteStudent,
  increaseMarks,
}) {
  return (
    <div>
      <h4 className="bg-red">All students ({students.length})</h4>
      {students.length === 0 ? (
        <p>No student</p>
      ) : (
        students.map((student) => (
          <StudentCard
            student={student}
            deleteStudent={deleteStudent}
            increaseMarks={increaseMarks}
          />
        ))
      )}
    </div>
  );
}
