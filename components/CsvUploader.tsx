"use client";

import React, { useState } from "react";
import Papa from "papaparse";
import { uploadRangeSession, ShotData } from "@/firebase/uploadRangeSessionData";

type CsvUploaderProps = {};

const CsvUploader: React.FC<CsvUploaderProps> = () => {
  const [jsonData, setJsonData] = useState<ShotData[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const lines = chunk.split(/\r\n|\n|\r/);
        const actualDataLines = lines.slice(2); // Skip first 2 lines if your CSV has a header/header notes
        return actualDataLines.join("\n");
      },
      complete: (results) => {
        console.log("Parsed JSON:", results.data);
        setJsonData(results.data as ShotData[]);
      },
      error: (err) => {
        console.error("Parsing error:", err);
      },
    });
  };

  const handleUpload = async () => {
    if (jsonData.length === 0) {
      alert("No data to upload. Please upload a CSV first.");
      return;
    }

    setUploading(true);
    try {
      const sessionId = await uploadRangeSession(jsonData);
      alert(`Range session uploaded! Session ID: ${sessionId}`);
      setJsonData([]); // Optionally clear the parsed data after upload
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload range session.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      {jsonData.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Session"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CsvUploader;