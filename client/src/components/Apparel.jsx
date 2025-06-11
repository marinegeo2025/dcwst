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
                  textAlign: "center",
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "30px",
                  justifyContent: "center",
                  maxWidth: "1000px",
                  margin: "0 auto",
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
              text: {
                button: "Add to cart",
              },
            },
            cart: {
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
            toggle: {},
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

      {/* 🔵 FORCE BLUE BUTTONS + CLEAN SIZING */}
      <style>{`
        .shopify-buy__btn {
          background-color: #287aff !important;
          border-radius: 15px !important;
          color: white !important;
          padding: 12px 24px !important;
          font-weight: bold;
        }
        .shopify-buy__product {
          max-width: 100%;
        }
        .shopify-buy__product__image-wrapper {
          height: 300px;
          overflow: hidden;
        }
        .shopify-buy__product__image {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </section>
  );
}
