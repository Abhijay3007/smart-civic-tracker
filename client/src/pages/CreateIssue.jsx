import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const CreateIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Road");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      category,
    };

    // ✅ Validate and add location only if valid
    if (lat !== "" && lng !== "") {
      const latNum = Number(lat);
      const lngNum = Number(lng);

      if (
        !Number.isNaN(latNum) &&
        !Number.isNaN(lngNum) &&
        latNum >= -90 &&
        latNum <= 90 &&
        lngNum >= -180 &&
        lngNum <= 180
      ) {
        payload.location = {
          lat: latNum,
          lng: lngNum,
        };
      } else {
        alert("Please enter valid latitude and longitude values.");
        return;
      }
    }

    try {
      setLoading(true);
      await api.post("/issues", payload);
      navigate("/");
    } catch (error) {
      console.error(
        "CREATE ISSUE ERROR:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to create issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">
          Report an Issue
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Title */}
          <input
            className="w-full border p-2 rounded"
            placeholder="Issue title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Description */}
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Describe the issue"
            required
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Category */}
          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Road</option>
            <option>Garbage</option>
            <option>Water</option>
            <option>Electricity</option>
            <option>Other</option>
          </select>

          {/* Location (Optional) */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              step="any"
              className="w-full border p-2 rounded"
              placeholder="Latitude (optional)"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />

            <input
              type="number"
              step="any"
              className="w-full border p-2 rounded"
              placeholder="Longitude (optional)"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {loading ? "Submitting..." : "Submit Issue"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateIssue;
