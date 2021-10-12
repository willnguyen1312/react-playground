import React, { useState } from "react";

export default function App() {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (event) => {
    let files = event.target.files;

    if (files) {
      const newFiles: any = Array.from(files);
      setFiles(newFiles);
    }
  };

  return (
    <main>
      <input
        aria-label="Hello Files"
        type="file"
        name="fileList"
        // @ts-ignore
        webkitdirectory="true"
        onChange={handleChange}
        multiple
      />
      <h3>Files</h3>

      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.webkitRelativePath}>{file.webkitRelativePath}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
