import React, { useEffect, useState } from "react";
import axios from "axios";

export default (props) => {
  const [urls, setUrls] = useState([]);
  const host = "http://localhost:8000";

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        await axios
          .get(`${host}/image/`, {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MDA0MjUyNTN9.0geYSFYfcXMqyzTEo4KmBJFG_WFno2Azsui9_9azScI",
            },
          })
          .then((result) => {
            setUrls([
              ...result.data.map((image) => `${host}/image/file/${image.name}`),
            ]);
          });
      } catch (error) {
        setUrls([]);
      }
    };
    fetchUrls();
  }, []);

  const images = urls.map((url, index) => (
    <img key={index} src={url} className="App-logo" alt="logo" />
  ));

  return <div className="App">{images}</div>;
};
