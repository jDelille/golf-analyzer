"use client";

import React, { useState } from "react";
import Papa from "papaparse";

type CsvUploaderProps = {};

const CsvUploader: React.FC<CsvUploaderProps> = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const lines = chunk.split(/\r\n|\n|\r/);
        const actualDataLines = lines.slice(2); // Skip the first 2 lines
        return actualDataLines.join("\n");
      },
      complete: (results) => {
        console.log("Parsed JSON:", results.data);
        setJsonData(results.data);
      },
      error: (err) => {
        console.error("Parsing error:", err);
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".csv" />
    </div>
  );
};

export default CsvUploader;
