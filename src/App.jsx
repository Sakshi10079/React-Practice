// import { useState } from "react";
import { useState } from "react";
import Header from "./Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
// import StudentInfo from "./StudentInfo";
// import Child from "./child";
// import StudentMarksController from "./StudentMarksController";
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "sakshi", course: "react", marks: 45 },
    { id: 2, name: "shubu", course: "spring", marks: 80 },
  ]);
  // const [students] = useState([
  //   { id: 1, name: "Aman", marks: 85 },
  //   { id: 2, name: "Priya", marks: 42 },
  //   { id: 3, name: "Rahul", marks: 68 },
  //   { id: 4, name: "Neha", marks: 91 },
  // ]);

  // const priya = students.find((student) => student.name === "Priya");
  // const below40 = students.some((student) => student.marks < 40);
  // const atleast40 = students.every((student) => student.marks >= 40);

  function addStudent(newData) {
    const newStudent = {
      id: Date.now(),
      ...newData,
      marks: 0,
    };
    setStudents((previous) => [...previous, newStudent]);
  }
  function deleteStudent(id) {
    setStudents((previous) => previous.filter((student) => student.id !== id));
  }
  function increaseMarks(id) {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id ? { ...student, marks: student.marks + 5 } : student,
      ),
    );
  }

  return (
    <>
      {/* <h1>Student Results</h1>
      {students.map((student) => (
        <p key={student.id}>
          {student.name} &nbsp;
          {student.marks}
        </p>
      ))}

      <h1>Student scoring more than 60</h1>
      {students
        .filter((student) => student.marks >= 60)
        .map((student) => (
          <p key={student.id}>{student.name}</p>
        ))}

      <h1>Total Marks</h1>
      {students.reduce((total, student) => total + student.marks, 0)}

      <h1>Find priya</h1>
      <p>{priya?.name ?? "not found"}</p>

      <h1>Did anyone scored below 40?</h1>
      {below40 ? <p>Yes</p> : <p>No</p>}

      <h1>Did everyone scored atleast 40?</h1>
      {atleast40 ? <p>yes</p> : <p>no</p>} */}

      <Header />
      {/* {students.map((student) => (
        <StudentInfo
          key={student.id}
          name={student.name}
          course={student.course}
        />
      ))} */}
      {/* <StudentInfo name="sakshi" course="React" />
      <StudentInfo name="Shubu" course="Spring" />
      <StudentInfo /> */}
      {/* <Child>
        <h5>this is child</h5>
      </Child>
      <StudentMarksController /> */}
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        increaseMarks={increaseMarks}
      />
    </>
  );
}

export default App;
