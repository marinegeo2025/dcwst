
import React, { useEffect } from "react";

export default function Apparel() {
  useEffect(() => {
    // Only add script if it doesn't already exist
    if (!document.getElementById("shopify-buy-button-js")) {
      const script = document.createElement("script");
      script.src =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      script.async = true;
      script.id = "shopify-buy-button-js";
      document.body.appendChild(script);

      script.onload = () => {
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          }
        }

        function ShopifyBuyInit() {
          const client = window.ShopifyBuy.buildClient({
            domain: "dzkc5u-y0.myshopify.com",
            storefrontAccessToken: "42db3ccf256eb2251e6cab35869b8762",
          });
          window.ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("collection", {
              id: "674511323523", // same as your export
              node: document.getElementById(
                "collection-component-1749640702150"
              ),
              moneyFormat: "%C2%A3%7B%7Bamount%7D%7D",
              options: {
                product: {
                  styles: {
                    product: {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(50% - 40px)",
                        "margin-left": "40px",
                        "margin-bottom": "50px",
                        width: "calc(50% - 40px)",
                      },
                      img: {
                        height: "calc(100% - 15px)",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: "0",
                      },
                      imgWrapper: {
                        "padding-top": "calc(75% + 15px)",
                        position: "relative",
                        height: "0",
                      },
                    },
                    title: {
                      color: "#ffffff",
                    },
                    button: {
                      ":hover": {
                        "background-color": "#246ee6",
                      },
                      "background-color": "#287aff",
                      ":focus": {
                        "background-color": "#246ee6",
                      },
                      "border-radius": "11px",
                      "padding-left": "45px",
                      "padding-right": "45px",
                    },
                    price: {
                      color: "#ffffff",
                    },
                    compareAt: {
                      color: "#ffffff",
                    },
                    unitPrice: {
                      color: "#ffffff",
                    },
                  },
                  text: {
                    button: "Add to cart",
                  },
                },
                productSet: {
                  styles: {
                    products: {
                      "@media (min-width: 601px)": {
                        "margin-left": "-40px",
                      },
                    },
                  },
                },
                modalProduct: {
                  contents: {
                    img: false,
                    imgWithCarousel: true,
                    button: false,
                    buttonWithQuantity: true,
                  },
                  styles: {
                    product: {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px",
                      },
                    },
                    button: {
                      ":hover": {
                        "background-color": "#246ee6",
                      },
                      "background-color": "#287aff",
                      ":focus": {
                        "background-color": "#246ee6",
                      },
                      "border-radius": "11px",
                      "padding-left": "45px",
                      "padding-right": "45px",
                    },
                    title: {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold",
                      "font-size": "26px",
                      color: "#4c4c4c",
                    },
                    price: {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "18px",
                      color: "#4c4c4c",
                    },
                    compareAt: {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.3px",
                      color: "#4c4c4c",
                    },
                    unitPrice: {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.3px",
                      color: "#4c4c4c",
                    },
                  },
                  text: {
                    button: "Add to cart",
                  },
                },
                option: {},
                cart: {
                  styles: {
                    button: {
                      ":hover": {
                        "background-color": "#246ee6",
                      },
                      "background-color": "#287aff",
                      ":focus": {
                        "background-color": "#246ee6",
                      },
                      "border-radius": "11px",
                    },
                  },
                  text: {
                    total: "Subtotal",
                    button: "Checkout",
                  },
                },
                toggle: {
                  styles: {
                    toggle: {
                      "background-color": "#287aff",
                      ":hover": {
                        "background-color": "#246ee6",
                      },
                      ":focus": {
                        "background-color": "#246ee6",
                      },
                    },
                  },
                },
              },
            });
          });
        }
        window.ShopifyBuyInit = ShopifyBuyInit;
      };
    } else {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        window.ShopifyBuyInit && window.ShopifyBuyInit();
      }
    }
    // Optional cleanup
    return () => {
      const el = document.getElementById(
        "collection-component-1749640702150"
      );
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Heading and subheading */}
      <h2 className="text-5xl font-extrabold mb-4 tracking-widest text-white drop-shadow-lg animate-fade-in-up">
        APPAREL
      </h2>
      <p className="mb-10 text-lg text-slate-200">
        Built for cold water warriors. Heavyweight. Minimalist. Rad.
      </p>
      {/* Shopify Collection Buy Button */}
      <div id="collection-component-1749640702150"></div>
    </section>
  );
}
