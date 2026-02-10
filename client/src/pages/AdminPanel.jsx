import { useEffect, useState } from "react";
import api from "../services/api";
import IssueCard from "../components/IssueCard";

const AdminPanel = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const { data } = await api.get("/admin/issues");
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {issues.length === 0 && <p>No issues found.</p>}

      {issues.map((issue) => (
        <IssueCard
          key={issue._id}
          issue={issue}
          isAdmin={true}
          onUpdate={fetchIssues}
        />
      ))}
    </div>
  );
};

export default AdminPanel;
