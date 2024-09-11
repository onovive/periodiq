"use client";
import React, { useState } from "react";
import Papa from "papaparse";

const UploadCsv: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async ({ target }) => {
      if (target?.result) {
        const csv = Papa.parse(target.result as string, { header: true });
        console.log("parsed CSV data", csv.data);

        try {
          setLoading(true);
          const response = await fetch("/api/upload-csv", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(csv.data), // Send the parsed CSV data as JSON
          });

          const result = await response.json();
          setLoading(false);
          alert(result.message);
        } catch (error) {
          setLoading(false);
          console.error("Error uploading file:", error);
          alert("Failed to upload CSV");
        }
      }
    };

    reader.readAsText(file); // Read the file content as text
  };

  return (
    <form onSubmit={handleSubmit} className="text-black">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {loading && <p>Uploading...</p>}
      <button type="submit">Upload CSV</button>
    </form>
  );
};

export default UploadCsv;
