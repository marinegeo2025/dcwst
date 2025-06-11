import { useEffect } from "react";

export default function ApparelCarousel() {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'dzkc5u-y0.myshopify.com',
        storefrontAccessToken: '42db3ccf256eb2251e6cab35869b8762',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('collection', {
          id: '674511323523',
          node: document.getElementById('collection-component-1749638086992'),
          moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
          options: {
            product: {
              contents: {
                img: true,
                title: true,
                price: true,
                options: true,
                button: true,
              },
              styles: {
                product: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "500px",
                  margin: "15px",
                  width: "100%",
                  maxWidth: "300px",
                  boxSizing: "border-box",
                },
                button: {
                  backgroundColor: "#287aff !important",
                  borderRadius: "15px !important",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                  color: "#fff",
                },
                img: {
                  objectFit: "cover",
                  height: "auto",
                  maxHeight: "300px",
                },
                imgWrapper: {
                  height: "300px",
                  overflow: "hidden",
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            productSet: {
              styles: {
                products: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "20px",
                  justifyContent: "center",
                },
              },
            },
            modalProduct: {
              contents: {
                img: true,
                imgWithCarousel: true,
                button: true,
                buttonWithQuantity: true,
              },
              styles: {
                button: {
                  backgroundColor: "#287aff !important",
                  borderRadius: "15px !important",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                  color: "#fff",
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            cart: {
              styles: {
                button: {
                  backgroundColor: "#287aff !important",
                  borderRadius: "15px !important",
                  color: "#fff",
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
                  backgroundColor: "#287aff !important",
                },
              },
            },
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        script.onload = ShopifyBuyInit;
        document.head.appendChild(script);
      }
    } else {
      const script = document.createElement("script");
      script.src = scriptURL;
      script.async = true;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-[#0d1a26] py-16 px-6 max-w-7xl mx-auto text-center text-white">
      <h2 className="text-5xl font-extrabold mb-10 tracking-widest drop-shadow-lg">
        APPAREL
      </h2>
      <div id="collection-component-1749638086992" />
    </section>
  );
}
