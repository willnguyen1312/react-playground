import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function calNumberOfFolders(files: (File & { path: string })[]) {
  const result: string[] = [];

  for (const file of files) {
    const { path } = file;
    if (!path.includes("/")) {
      continue;
    }

    const paths = path.split("/");
    const pathName = paths.slice(1, paths.length - 1).join("/");
    result.push(pathName);
  }

  return new Set(result);
}

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const numberOfFolders = calNumberOfFolders(acceptedFiles as any);

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section>
      <div
        {...getRootProps()}
        style={{ border: "1px solid orange", paddingLeft: 20 }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h3>Number of folders: {numberOfFolders.size}</h3>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

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
    <main style={{ padding: 20 }}>
      <Basic />
    </main>
  );
}
