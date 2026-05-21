import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import { db } from "../../firebase";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

function InquiryTable() {
  const [inquiries, setInquiries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const inquiryData = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setInquiries(inquiryData);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?",
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "inquiries", id));
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Loading...";

    const date = timestamp.toDate();

    return date.toLocaleDateString("en-GB");
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center text-gray-500">
        Loading inquiries...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          {/* TABLE HEAD */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Name
              </th>

              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Phone
              </th>

              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Email
              </th>

              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Reason
              </th>

              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Date
              </th>

              <th className="text-center px-6 py-4 text-gray-700 font-semibold">
                Action
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-16 text-gray-500">
                  No inquiries found
                </td>
              </tr>
            ) : (
              inquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  {/* NAME */}
                  <td className="px-6 py-5 text-gray-800 font-medium">
                    {item.name}
                  </td>

                  {/* PHONE */}
                  <td className="px-6 py-5 text-gray-600">{item.phone}</td>

                  {/* EMAIL */}
                  <td className="px-6 py-5 text-gray-600">
                    {item.email || "-"}
                  </td>

                  {/* REASON */}
                  <td className="px-6 py-5">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {item.reason}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5 text-gray-500">
                    {formatDate(item.createdAt)}
                  </td>

                  {/* DELETE */}
                  <td className="px-6 py-5 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InquiryTable;
