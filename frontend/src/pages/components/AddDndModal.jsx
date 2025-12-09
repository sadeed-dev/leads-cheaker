import React, { useState, useEffect } from "react";

export default function AddDndModal({ open, onClose, onSubmit, mobile }) {
  const [note, setNote] = useState("");
  const [mobileNumber, setMobileNumber] = useState(mobile || "");

  // update mobileNumber when modal opens with new number
  useEffect(() => {
    setMobileNumber(mobile);
  }, [mobile]);

  if (!open) return null;

  const handleSubmit = () => {
    if (!mobileNumber.trim()) return alert("Please enter mobile number");

    onSubmit({ mobile: mobileNumber, note });
    setNote("");
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center px-4 z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">

        <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Add Number to DND</h2>
          <button onClick={onClose} className="text-white text-xl">✖</button>
        </div>

        <div className="p-6 space-y-4">
          <label className="block text-gray-700 font-medium">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-200 outline-none"
          />

          <label className="block text-gray-700 font-medium">Note</label>
          <textarea
            placeholder="Enter note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-28 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-200 outline-none"
          />

          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Cancel</button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Add to DND</button>
          </div>
        </div>

      </div>
    </div>
  );
}
