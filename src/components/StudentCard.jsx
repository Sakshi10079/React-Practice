export default function StudentCard({ student, increaseMarks, deleteStudent }) {
  return (
    <div className="bg-pink-100">
      <h3 className="text-2xl">{student.name}</h3>
      <div className="flex flex-row justify-center gap-2 text-black-700 my-2">
        <p>Course: {student.course}</p>
        <p>Marks: {student.marks}</p>
        <p>Status: {student.marks < 40 ? "fail" : "pass"}</p>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <button type="button" onClick={() => increaseMarks(student.id)} className="bg-green-400 p-2 text-black-900 rounded-2xl">
          Increase marks
        </button>
        <button type="button" onClick={() => deleteStudent(student.id)} className="bg-red-400 p-3 text-black-900 rounded-2xl">
          delete student
        </button>
      </div>
    </div>
  );
}
