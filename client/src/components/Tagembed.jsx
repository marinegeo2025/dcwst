import React, { useEffect } from "react";

export default function Tagembed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tagembed-widget"
      style={{ width: "100%", height: "100%" }}
      data-widget-id="2172397"
      data-tags="false"
      view-url="https://widget.tagembed.com/2172397"
    ></div>
  );
}
