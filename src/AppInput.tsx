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

  const encodedFiles = acceptedFiles.map((file: any) => {
    const { path } = file;
    const paths = path
      .split("/")
      .map((item: string) => encodeURIComponent(item.replace(/:/g, "/")));

    const folderPath = paths.slice(1, paths.length - 1);
    return {
      folderPath,
      fileName: paths[paths.length - 1],
    };
  });

  const decodedFiles = encodedFiles.map((file) => ({
    folderPath: file.folderPath.map(decodeURIComponent),
    fileName: file.fileName,
  }));

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
        <h4>Raw Files</h4>
        <ul>{files}</ul>

        <h4>Encoded Files</h4>
        <pre>{JSON.stringify(encodedFiles)}</pre>

        <h4>Decoded Files</h4>
        <pre>{JSON.stringify(decodedFiles)}</pre>
      </aside>
    </section>
  );
}

export default function App() {
  return (
    <main style={{ padding: 20 }}>
      <Basic />
    </main>
  );
}
