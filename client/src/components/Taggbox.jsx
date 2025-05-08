import { useEffect } from "react";

export default function Taggbox() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.taggbox.com/embed-lite.min.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="taggbox"
      style={{ width: "100%", height: "100%" }}
      data-widget-id="2168610"
      data-tags="false"
    ></div>
  );
}
