import { useEffect } from "react";

export default function WooboxEmbed() {
  useEffect(() => {
    if (!document.getElementById("woobox-sdk")) {
      const script = document.createElement("script");
      script.id = "woobox-sdk";
      script.src = "https://woobox.com/js/plugins/woo.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="woobox-offer"
      data-offer="dwu957"
      style={{ margin: "auto" }}
    ></div>
  );
}
