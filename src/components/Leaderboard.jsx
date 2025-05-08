import React, { useState } from "react";

export default function Leaderboard({
  isAdmin,
  surfers,
  newSurfer,
  setNewSurfer,
  addSurfer,
  removeSurfer,
  updateSurferPoints,
}) {
  // Track which surfer is being edited + the new points input
  const [editingId, setEditingId] = useState(null);
  const [editPoints, setEditPoints] = useState("");

  // 1) Sort surfers by descending points
  const sortedSurfers = [...surfers].sort((a, b) => b.points - a.points);

  // 2) Assign Dense Ranks (ties share rank, next distinct score => rank+1)
  let prevPoints = null;
  let currentRank = 0;
  let distinctCount = 0;
  const rankedSurfers = sortedSurfers.map((surfer) => {
    distinctCount++;
    if (surfer.points !== prevPoints) {
      currentRank = distinctCount;
      prevPoints = surfer.points;
    }
    return { ...surfer, rank: currentRank };
  });

  // Start editing a surfer’s score
  const handleEditClick = (surfer) => {
    setEditingId(surfer.id);
    setEditPoints(surfer.points.toString());
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditPoints("");
  };

  // Save updated points
  const handleSaveEdit = (surferId) => {
    const newVal = parseInt(editPoints, 10);
    if (!isNaN(newVal)) {
      updateSurferPoints(surferId, newVal);
    }
    setEditingId(null);
    setEditPoints("");
  };

  return (
    <section className="p-4">
      {/* --- Admin-Only: Add Surfer Form --- */}
      {isAdmin && (
        <div className="bg-white text-black p-6 rounded mb-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Add Team Member</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newSurfer.name}
              onChange={(e) =>
                setNewSurfer({ ...newSurfer, name: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              value={newSurfer.country}
              onChange={(e) =>
                setNewSurfer({ ...newSurfer, country: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Points"
              value={newSurfer.points}
              onChange={(e) =>
                setNewSurfer({ ...newSurfer, points: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="url"
              placeholder="Image URL"
              value={newSurfer.image}
              onChange={(e) =>
                setNewSurfer({ ...newSurfer, image: e.target.value })
              }
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={addSurfer}
            className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Add Surfer
          </button>
        </div>
      )}

      {/* --- Display Ranks & Surfers --- */}
      <div className="grid grid-cols-1 gap-4">
        {rankedSurfers.map((surfer) => (
          <div
            key={surfer.id}
            className={`flex items-center p-4 rounded shadow-md ${
              surfer.rank === 1 ? "bg-yellow-400 text-black" : "bg-gray-800"
            }`}
          >
            {/* Dense Rank */}
            <div
              className={`text-2xl font-bold w-12 text-center ${
                surfer.rank === 1 ? "text-black" : "text-yellow-400"
              }`}
            >
              {surfer.rank}
            </div>

            {/* Image */}
            <img
              src={surfer.image || "https://i.imgur.com/41uV8LV.png"}
              alt={surfer.name}
              className="w-14 h-14 rounded-full object-cover mx-4 border-2 border-sky-400"
            />

            {/* Name & Country */}
            <div className="flex-1">
              <div className="text-lg font-semibold">{surfer.name}</div>
              <div
                className={`text-sm ${
                  surfer.rank === 1 ? "text-black" : "text-gray-300"
                }`}
              >
                {surfer.country || "—"}
              </div>
            </div>

            {/* Points: editable if admin & editing this surfer */}
            {editingId === surfer.id ? (
              <input
                type="number"
                value={editPoints}
                onChange={(e) => setEditPoints(e.target.value)}
                className="w-20 text-black p-1 rounded"
              />
            ) : (
              <div className="text-xl font-mono">{surfer.points}</div>
            )}

            {/* Admin Controls */}
            {isAdmin && (
              <div className="ml-4 flex items-center gap-2">
                {editingId === surfer.id ? (
                  <>
                    <button
                      onClick={() => handleSaveEdit(surfer.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-600 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(surfer)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeSurfer(surfer.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
