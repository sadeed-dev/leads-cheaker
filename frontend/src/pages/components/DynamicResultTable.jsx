import React from "react";

export default function DynamicResultTable({ tableName, rows }) {
  if (!rows || rows.length === 0) return null;

  const columns = Object.keys(rows[0]);

  return (
    <div className="mt-10 w-full">

      {/* SECTION WRAPPER */}
      <div className="bg-[#f8fafc] p-6 rounded-xl shadow-md border border-gray-200">

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          📂 {tableName.replace(/_/g, " ").toUpperCase()}
        </h3>

        {/* TABLE */}
        <div className="w-full overflow-x-auto rounded-lg shadow-sm border border-gray-300 bg-white">
          <table className="w-full min-w-full border-collapse text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-xs font-semibold text-gray-600 text-left"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {columns.map((col, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-gray-700 align-top"
                    >
                      {typeof row[col] === "object"
                        ? JSON.stringify(row[col])
                        : row[col] ?? ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
