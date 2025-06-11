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
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    maxWidth: "calc(25% - 20px)",
                    marginLeft: "20px",
                    marginBottom: "50px",
                    width: "calc(25% - 20px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    paddingTop: "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                button: {
                  backgroundColor: "#287aff",
                  ":hover": { backgroundColor: "#246ee6" },
                  ":focus": { backgroundColor: "#246ee6" },
                  borderRadius: "11px",
                  paddingLeft: "45px",
                  paddingRight: "45px",
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
                    marginLeft: "-20px",
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
                    maxWidth: "100%",
                    marginLeft: "0px",
                    marginBottom: "0px",
                  },
                },
                button: {
                  backgroundColor: "#287aff",
                  ":hover": { backgroundColor: "#246ee6" },
                  ":focus": { backgroundColor: "#246ee6" },
                  borderRadius: "11px",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            cart: {
              styles: {
                button: {
                  backgroundColor: "#287aff",
                  ":hover": { backgroundColor: "#246ee6" },
                  ":focus": { backgroundColor: "#246ee6" },
                  borderRadius: "11px",
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
                  backgroundColor: "#287aff",
                  ":hover": { backgroundColor: "#246ee6" },
                  ":focus": { backgroundColor: "#246ee6" },
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
    <section className="py-16 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-10 tracking-widest text-white drop-shadow-lg">
        APPAREL
      </h2>
      <div id="collection-component-1749638086992" />
    </section>
  );
}
