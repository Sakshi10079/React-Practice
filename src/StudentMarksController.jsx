import { useState } from "react";

export default function StudentMarksController() {
  const [marks, setMarks] = useState(50);
  function increaseMarks() {
    setMarks((previous) => previous + 5);
  }
  function resetMarks() {
    setMarks(50);
  }
  return (
    <>
      <p>Marks: {marks}</p>
      <button onClick={increaseMarks}>Increase</button>
      <button onClick={() => setMarks(marks - 5)}>Decrease</button>
      <button onClick={resetMarks}>reset</button>
      <p>{marks>=40?"passed":"failed"}</p>
    </>
  );
}
