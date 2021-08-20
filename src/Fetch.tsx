import React from "react";
import axios from "axios";

export default function App() {
  React.useEffect(() => {
    const postStuff = async () => {
      const data = {
        firstName: "Nam",
        lastName: "Nguyen",
      };

      try {
        const response = await axios.post(
          `https://60a3c3d27c6e8b0017e27d33.mockapi.io/api/v1/users`,
          data
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    postStuff();
  }, []);
  return <h1>Fetch stuff</h1>;
}
