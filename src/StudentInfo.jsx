export default function StudentInfo({name="default name",course="default course"}) {
  // const topics = ["JSX", "Components", "JavaScript expressions"];
  const marks = 90;
  return (
    <>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      {/* <ul>
        {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
      </ul>
      <p>{marks>30?"passed":"failed"}</p> */}
      {marks>=90 && <p>Excellent!</p>}
    </>
  );
}
