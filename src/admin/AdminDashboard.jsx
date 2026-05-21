import AdminNavbar from "./components/AdminNavbar";
import InquiryTable from "./components/InquiryTable";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inquiries</h1>

            <p className="text-gray-500 mt-2">
              Manage all consultation form submissions
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold">
            Export
          </button>
        </div>

        {/* TABLE */}
        <InquiryTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
