import { useState } from "react";

export default function FormTable() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, form]);
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Student Detail Form</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 mb-8">
        <input
          className="border border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none bg-white placeholder-purple-400"
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <input
          className="border border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none bg-white placeholder-purple-400"
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <input
          className="border border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none bg-white placeholder-purple-400"
          type="text"
          name="course"
          value={form.course}
          placeholder="Enter Course"
          onChange={handleChange}
          required
        />
        <button className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition shadow-md">
          Add Record
        </button>
      </form>

      {records.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-purple-300 rounded-lg">
            <thead>
              <tr className="bg-purple-500 text-white">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Course</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-purple-50" : "bg-purple-100"}
                >
                  <td className="py-2 px-4 border">{rec.name}</td>
                  <td className="py-2 px-4 border">{rec.email}</td>
                  <td className="py-2 px-4 border">{rec.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}