import api from "../services/api";
import StatusTimeline from "./StatusTimeline";
import MapPreview from "./MapPreview";

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-green-100 text-green-800",
};

const IssueCard = ({ issue, isAdmin = false, onUpdate }) => {
  const updateStatus = async (status) => {
    try {
      await api.put(`/admin/issues/${issue._id}/status`, { status });
      onUpdate?.();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const deleteIssue = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this issue?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/admin/issues/${issue._id}`);
      onUpdate?.();
    } catch (error) {
      alert("Failed to delete issue");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">
          {issue.title}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            statusStyles[issue.status]
          }`}
        >
          {issue.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        {issue.description}
      </p>

      {/* Meta Info */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>Category: {issue.category}</span>
        <span>Reported by: {issue.createdBy?.name}</span>
      </div>

      {/* Status Timeline */}
      <StatusTimeline currentStatus={issue.status} />

      {/* ✅ Location / Map Preview (FIXED CONDITION) */}
      {typeof issue.location?.lat === "number" &&
        typeof issue.location?.lng === "number" && (
          <MapPreview
            lat={issue.location.lat}
            lng={issue.location.lng}
          />
        )}

      {/* Admin Controls */}
      {isAdmin && (
        <div className="flex flex-wrap gap-2 pt-3 border-t">
          {["Pending", "In Progress", "Resolved"].map((status) => (
            <button
              key={status}
              onClick={() => updateStatus(status)}
              className="px-3 py-1 text-xs rounded bg-gray-800 text-white hover:bg-black transition"
            >
              Mark as {status}
            </button>
          ))}

          {/* Delete Issue */}
          <button
            onClick={deleteIssue}
            className="px-3 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete Issue
          </button>
        </div>
      )}
    </div>
  );
};

export default IssueCard;
