import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  const [userQuery, setUserQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = "https://api.futbolrules.hec.to/api/ask";

  const backgroundImage = "/soccer-pitch.jpg";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userQuery }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the backend");
      }

      const data = await response.json();
      setAiResponse(data.answer);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    setUserQuery("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            GenAI Soccer Assistant
          </h1>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Ask something about soccer..."
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition ease-in-out duration-500"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-pulseText">Loading...</span>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          {/* AI Response Section */}
          <div className="mt-6">
            {aiResponse && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">
                  AI Response:
                </h2>
                <p className="text-gray-600 mt-2">{aiResponse}</p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mt-4">
                <h2 className="text-lg font-semibold text-red-700">Error:</h2>
                <p className="text-red-600 mt-2">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
