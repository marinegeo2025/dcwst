// ColdWaterCrewLog.jsx
import { useState, useEffect } from "react";

export default function ColdWaterCrewLog() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState("");

  // Load logs from localStorage
  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("crewLogs")) || [];
    setLogs(storedLogs);
  }, []);

  // Save logs to localStorage
  useEffect(() => {
    localStorage.setItem("crewLogs", JSON.stringify(logs));
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newLog = {
      id: Date.now(),
      text: input,
      date: new Date().toLocaleDateString(),
    };
    setLogs([newLog, ...logs]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto mt-10 bg-black/70 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-4 text-center uppercase tracking-widest">
        Cold Water Crew Log 🧊
      </h2>
      <p className="mb-6 text-center text-sm text-gray-300">
        Log your latest cold-water session, recovery win, or warrior ritual.
        This is our digital corkboard.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Froze my feet, found my soul."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
        >
          Log It
        </button>
      </form>

      <ul className="space-y-3 max-h-[300px] overflow-y-auto">
        {logs.map((log) => (
          <li
            key={log.id}
            className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-sm"
          >
            <span className="block mb-1 text-gray-400">{log.date}</span>
            {log.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
