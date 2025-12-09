import React from "react";

export default function DNDListModal({ open, onClose, list }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-xl overflow-hidden">

        <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-between">
          <h2 className="text-white font-semibold">📋 DND Numbers List</h2>
          <button onClick={onClose} className="text-white text-xl">✖</button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <input placeholder="Search mobile or note..." className="w-full px-3 py-2 border border-gray-200 rounded" />
          </div>

          <div className="max-h-[420px] overflow-y-auto border rounded-lg shadow-sm">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Mobile</th>
                  <th className="px-4 py-3 text-left">Note</th>
                  <th className="px-4 py-3 text-left">Created At</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3">{item.mobile}</td>
                    <td className="px-4 py-3">{item.note}</td>
                    <td className="px-4 py-3">{item.created_at}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
