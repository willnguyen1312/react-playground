// Ref: https://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c
import React from "react";

export default function App() {
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    document.onpaste = function (event) {
      let items = event.clipboardData?.items;
      if (!items) {
        return;
      }

      for (let index in items) {
        let item = items[index];
        if (item.kind === "file") {
          let blob = item.getAsFile();
          if (blob) {
            let reader = new FileReader();
            reader.onload = function (event) {
              const dataURl = event.target?.result;
              if (typeof dataURl === "string") {
                setImageUrl(dataURl);
              }
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    };
  }, []);

  return (
    <div
      style={{
        padding: 41,
      }}
    >
      <h1>Wait for image</h1>
      <img width={810} height={450} src={imageUrl} alt="Nothing yet" />
    </div>
  );
}
