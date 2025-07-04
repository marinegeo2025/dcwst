import React, { useEffect, useRef } from "react";

export default function Apparel() {
  const modalRef = useRef(null);
  const modalContextRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const scriptId = "shopify-web-components-js";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://cdn.shopify.com/storefront/web-components.js";
      script.type = "module";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  const openModal = (handle) => {
    if (modalRef.current && modalContextRef.current) {
      modalContextRef.current.setAttribute("handle", handle);
      modalContextRef.current.update();
      modalRef.current.showModal();
    }
  };

  const addToCart = (event) => {
    if (cartRef.current) {
      cartRef.current.addLine(event).showModal();
    }
  };

  const products = [
    "greg-owen-10x-champion-no-limit-legendary-hoodie",
    "greg-owen-10x-champion-no-limit-legendary-tee",
    "diamond-hands-hoodie-never-back-down-never-give-up",
    "diamond-hands-tee-never-back-down-never-give-up",
    "surf-team-champions-tee",
    "dcwst-froth-unit-recon-zip-hoodie",
    "surf-team-champions-tee-copy",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-4 tracking-widest text-white drop-shadow-lg animate-fade-in-up">
        APPAREL
      </h2>
      <p className="mb-10 text-lg text-slate-200">
        Built for cold water warriors. Heavyweight. Minimalist. Rad.
      </p>

      <shopify-store store-domain="dzkc5u-y0.myshopify.com" country="GB" language="en"></shopify-store>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((handle) => (
          <div key={handle} className="product-card bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <shopify-context type="product" handle={handle}>
              <template>
                <div className="p-4 flex flex-col items-center">
                  <div className="w-full flex justify-center">
                    <shopify-media width="280" height="280" query="product.selectedOrFirstAvailableVariant.image"></shopify-media>
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold">
                      <shopify-data query="product.title"></shopify-data>
                    </h2>
                    <div className="text-lg font-medium mt-1">
                      <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </div>
                    <button
                      className="mt-4 py-2 px-6 bg-black text-white rounded-lg font-semibold uppercase border-2 border-black transition-colors hover:bg-white hover:text-black"
                      onClick={() => openModal(handle)}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </template>
            </shopify-context>
          </div>
        ))}
      </div>

      <shopify-cart id="cart" ref={cartRef}></shopify-cart>

      <dialog id="product-modal" className="product-modal rounded-xl shadow-lg overflow-hidden" ref={modalRef}>
        <shopify-context id="product-modal-context" type="product" wait-for-update ref={modalContextRef}>
          <template>
            <div className="p-6 relative">
              <button className="absolute top-2 right-2" onClick={() => modalRef.current.close()}>&#10005;</button>
              <shopify-media width="416" height="416" query="product.selectedOrFirstAvailableVariant.image"></shopify-media>
              <h1 className="text-2xl font-bold mt-4"><shopify-data query="product.title"></shopify-data></h1>
              <div className="text-lg font-medium my-2"><shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money></div>
              <shopify-variant-selector></shopify-variant-selector>
              <button className="mt-4 py-2 px-4 bg-black text-white rounded-lg" onClick={addToCart}>
                Add to Cart
              </button>
              <div className="mt-4 text-sm text-gray-700">
                <shopify-data query="product.descriptionHtml"></shopify-data>
              </div>
            </div>
          </template>
        </shopify-context>
      </dialog>
    </section>
  );
}