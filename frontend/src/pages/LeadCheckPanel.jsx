// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Loader from "./components/Loader";

// export default function LeadCheckPanel() {
//   const [mobile, setMobile] = useState("");
//   const [dbData, setDbData] = useState({});
//   const [record, setRecord] = useState([]); // <-- Fake history record
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openListModal, setOpenListModal] = useState(false);
//   const [dndList, setDndList] = useState([]);
//   const [loading, setLoading] = useState(false);
// const [hasSearched, sethasSearched] = useState(false); // Track
//   // =====================================================
//   // SEARCH FUNCTION
//   // =====================================================
//   const searchNumber = async () => {
//     if (!mobile.trim()) {
//       toast.error("Please enter a mobile number!");
//          setRecord(null);
//         setHasSearched(false);   // no search yet
//         return;
    
//     }

//     setLoading(true);
//     sethasSearched(true); 

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/dnd/lead/search?mobile=${mobile}`
//       );

//       setDbData(res.data || {});

//       setRecord(res.data.record || []);

//       console.log("Search Result:", res.data.record);
//       if (
//         Object.keys(res.data).length === 0 &&
//         (!res.data.record || res.data.record.length === 0)
//       ) {
//         toast("No record found.", { icon: "ℹ️" });
//       } else {
//         toast.success("Data loaded successfully!");
//       }
//     } catch (err) {
//       toast.error("Error searching number. Try again.");
//     }

//     setLoading(false);
//   };

//   // =====================================================
//   // LOAD DND LIST
//   // =====================================================
//   const openDndList = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("http://localhost:5000/api/dnd/get-dnd-list");
//       setDndList(res.data.data);
//       setOpenListModal(true);
//     } catch {
//       toast.error("Unable to fetch DND list.");
//     }
//     setLoading(false);
//   };

//   // =====================================================
//   // ADD TO DND
//   // =====================================================
// const handleAddToDnd = async ({ mobile, note }) => {
//   setLoading(true);

//   try {
//     const res = await axios.post("http://localhost:5000/api/dnd/add-dnd", {
//       mobile,
//       note,
//     });

//     // if backend includes smartflo API response
//     const smartflo = res.data.smartflo;

//     // Success message
//     toast.success("Number Added to DND & Synced with Tata Smartflo!");

//     if (smartflo) {
//       console.log("Smartflo Response:", smartflo);
//     }

//     setOpenAddModal(false);
//     searchNumber(); // refresh UI
//   } catch (err) {
//     console.error("DND Error:", err.response?.data || err.message);

//     // Smartflo specific error UI
//     if (err.response?.data?.smartflo_error) {
//       toast.error("Smartflo Error: " + err.response.data.smartflo_error);
//     } else {
//       toast.error("Failed to add number to DND.");
//     }
//   }

//   setLoading(false);
// };

//   return (
//     <div className="p-6 w-full">

//       {/* TITLE */}
//       <h1 className="text-3xl font-bold text-green-600 mb-6 text-center flex items-center justify-center gap-2">
//         🔍 Lead Source Checker Panel
//       </h1>

//       {/* SEARCH BAR */}
//       <div className="bg-white p-6 rounded-lg shadow-md w-full flex justify-center mb-8">
//         <div className="flex items-center gap-3">

//           {/* INPUT */}
//           <input
//             type="text"
//             placeholder="Enter mobile number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && searchNumber()}
//             className="px-4 py-3 w-72 border border-gray-300 rounded-lg 
//                        focus:ring-2 focus:ring-green-500 outline-none"
//           />

//           {/* SEARCH BUTTON */}
//           <button
//             onClick={searchNumber}
//             className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow cursor-pointer"
//           >
//             Search
//           </button>


//         </div>
//       </div>

//       {loading && <Loader />}

//       {/* EMPTY STATE */}
//       {!loading && record?.length >= 0 && Object?.keys(dbData)?.length === 0 && (
//         <div className="text-center text-gray-600 mt-8 text-lg">
//           🔎 Enter a mobile number to search record.
//         </div>
//       )}

//       {/* ===================================================== */}
//       {/* MODERN WORDPRESS STYLE LEAD CARD */}
//       {/* ===================================================== */}
// {/* ===================================================== */}
// {console.log("Record Data:", record)}


// {/* Show card only after search AND only if record exists */}
// {!loading && hasSearched && record && (
//   <div className="mt-8 w-full max-w-3xl mx-auto">

//     <h2 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
//       📁 Retrieved Lead Information
//     </h2>

//     <div
//       className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border 
//                  border-gray-200 p-6 mb-6 transition transform hover:-translate-y-1 hover:shadow-2xl"
//     >
//       <div className="flex items-center gap-3 mb-5">
//         <div className="p-3 bg-green-600 text-white rounded-full shadow">
//           🧾
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800">Lead Overview</h3>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">

//         <div><p className="text-sm text-gray-500">Name</p><p className="font-medium">{record.name || "N/A"}</p></div>

//         <div><p className="text-sm text-gray-500">Company</p><p className="font-medium">{record.company_name || "N/A"}</p></div>

//         <div><p className="text-sm text-gray-500">Email</p><p className="font-medium">{record.email || "N/A"}</p></div>

//         <div><p className="text-sm text-gray-500">Phone</p><p className="font-medium">{record.phone_number}</p></div>

//         <div><p className="text-sm text-gray-500">State</p><p className="font-medium">{record.state || "N/A"}</p></div>

//         <div><p className="text-sm text-gray-500">Subject</p><p className="font-medium capitalize">{record.subject}</p></div>

//         <div className="md:col-span-2">
//           <p className="text-sm text-gray-500">Page Visited</p>
//           <p className="font-medium break-all">{record.endpoint}</p>
//         </div>

//         <div className="md:col-span-2">
//           <p className="text-sm text-gray-500">Date</p>
//           <p className="font-medium">{new Date(record.created_at).toLocaleString()}</p>
//         </div>

//       </div>
//     </div>
//   </div>
// )}

// {/* No data found */}
// {!loading && hasSearched && !record && (
//   <div className="mt-6 text-center text-gray-500">
//     No data found for this number.
//   </div>
// )}





//     </div>
//   );
// }
















"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./components/Loader";
import {
  Search,
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  FileText,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export default function LeadCheckPanel() {
  const [mobile, setMobile] = useState("");
  const [dbData, setDbData] = useState({});
  const [record, setRecord] = useState(undefined); // IMPORTANT
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openListModal, setOpenListModal] = useState(false);
  const [dndList, setDndList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // =====================================================
  // SEARCH FUNCTION
  // =====================================================
  const searchNumber = async () => {
    if (!mobile.trim()) {
      toast.error("Please enter a mobile number!");
      setRecord(undefined);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/dnd/lead/search?mobile=${mobile}`
      );

      const result = res.data.record;

      setDbData(res.data || {});

      if (!result) {
        setRecord(null);
        toast("No record found.", { icon: "ℹ️" });
      } else {
        setRecord(result);
        toast.success("Data loaded successfully!");
      }
    } catch (err) {
      toast.error("Error searching number. Try again.");
      setRecord(null);
    }

    setLoading(false);
  };

  // =====================================================
  // FETCH DND LIST
  // =====================================================
  const openDndList = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/dnd/get-dnd-list");
      setDndList(res.data.data);
      setOpenListModal(true);
    } catch {
      toast.error("Unable to fetch DND list.");
    }
    setLoading(false);
  };

  // =====================================================
  // ADD TO DND
  // =====================================================
  const handleAddToDnd = async ({ mobile, note }) => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/dnd/add-dnd", {
        mobile,
        note,
      });

      const smartflo = res.data.smartflo;

      toast.success("Number Added to DND & Synced with Tata Smartflo!");

      if (smartflo) console.log("Smartflo:", smartflo);

      setOpenAddModal(false);
      searchNumber();
    } catch (err) {
      console.error("DND Error:", err.response?.data || err.message);

      if (err.response?.data?.smartflo_error) {
        toast.error("Smartflo Error: " + err.response.data.smartflo_error);
      } else {
        toast.error("Failed to add number to DND.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl  px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Lead Management System
            </h1>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Search and manage lead information
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="max-w-[30rem] mx-auto sm:px-6 lg:px-6 py-2">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex-1 min-w-0">
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && searchNumber()}
                  className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-md
                             text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 
                             focus:ring-slate-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button
              onClick={searchNumber}
              className="w-full sm:w-auto px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white 
                         text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* BEFORE SEARCH MESSAGE */}
      {!loading && !hasSearched && (
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-12 text-center">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-sm text-slate-600">
              Enter a mobile number to search records
            </p>
          </div>
        </div>
      )}

      {/* NO RECORD FOUND */}
      {!loading && hasSearched && record === null && (
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
            <p className="text-red-600 font-medium">
              No data found for this mobile number
            </p>
          </div>
        </div>
      )}

      {/* RECORD FOUND */}
      {!loading && hasSearched && record && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
              <h2 className="text-lg font-semibold text-slate-900">
                {record.name || "Lead Information"}
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Contact details and information
              </p>
            </div>

            <div className="px-6 py-4 space-y-4">
              {/* 2 column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Name
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1">
                    {record.name || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Company
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1">
                    {record.company_name || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Email
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1 truncate">
                    {record.email || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Phone
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1">
                    {record.phone_number || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    State
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1">
                    {record.state || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Subject
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1 capitalize">
                    {record.subject || "N/A"}
                  </p>
                </div>
              </div>

              {/* Extra Fields */}
              <div className="border-t border-slate-200 pt-4 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Page Visited
                  </label>
                  <p className="text-xs bg-slate-50 rounded px-3 py-2 font-mono border border-slate-200 mt-1 break-all">
                    {record.endpoint || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase">
                    Created Date
                  </label>
                  <p className="text-sm font-medium text-slate-900 mt-1">
                    {record.created_at
                      ? new Date(record.created_at).toLocaleString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
