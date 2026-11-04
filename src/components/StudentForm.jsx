import { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name.trim() || !formData.course.trim()) {
      alert("Please fill in all fields");
      return;
    }
    addStudent(formData);
    setFormData({
      name: " ",
      course: " ",
    });
  }
  return (
    <div >
      <div className="bg-blue-100 p-4 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="text-black mx-2 border border-gray-500 p-3 rounded-xl"
          />
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Course"
            className="text-black mx-2 border border-gray-500 p-3 rounded-xl"
          />
          <button type="submit" className="mx-2 border border-blue-700 p-3 rounded-xl text-blue-900">Add Student</button>
        </form>
      </div>
    </div>
  );
}
