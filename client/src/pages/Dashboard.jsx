import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import IssueCard from "../components/IssueCard";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get("/issues").then(res => setIssues(res.data));
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {user.role === "admin" ? "All Reported Issues" : "My Issues"}
        </h2>

        {/* ✅ SHOW ONLY FOR USERS */}
        {user.role === "user" && (
          <Link
            to="/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Report Issue
          </Link>
        )}
      </div>

      {issues.length === 0 ? (
        <div className="bg-white p-10 rounded-xl text-center text-gray-500">
          No issues found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map(issue => (
            <IssueCard
              key={issue._id}
              issue={issue}
              isAdmin={user.role === "admin"}
              onUpdate={() =>
                api.get("/issues").then(res => setIssues(res.data))
              }
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
