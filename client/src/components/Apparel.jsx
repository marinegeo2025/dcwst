import React, { useEffect } from \"react\";

export default function Apparel() {
  useEffect(() => {
    const scriptId = \"shopify-web-components-js\";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement(\"script\");
      script.src =
        \"https://cdn.shopify.com/storefront/web-components.js\";
      script.type = \"module\";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className=\"py-16 px-6 max-w-6xl mx-auto text-center\">
      <h2 className=\"text-5xl font-extrabold mb-4 tracking-widest text-white drop-shadow-lg animate-fade-in-up\">
        APPAREL
      </h2>
      <p className=\"mb-10 text-lg text-slate-200\">
        Built for cold water warriors. Heavyweight. Minimalist. Rad.
      </p>

      <shopify-store store-domain=\"dzkc5u-y0.myshopify.com\" country=\"GB\" language=\"en\"></shopify-store>

      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center\">
        {[
          \"greg-owen-10x-champion-no-limit-legendary-hoodie\",
          \"greg-owen-10x-champion-no-limit-legendary-tee\",
          \"diamond-hands-hoodie-never-back-down-never-give-up\",
          \"diamond-hands-tee-never-back-down-never-give-up\",
          \"surf-team-champions-tee\",
          \"dcwst-froth-unit-recon-zip-hoodie\",
          \"surf-team-champions-tee-copy\",
        ].map((handle) => (
          <div key={handle} className=\"product-card bg-white rounded-lg shadow-lg overflow-hidden\">
            <shopify-context type=\"product\" handle={handle}>
              <template>
                <div className=\"product-card__container p-4\">
                  <div className=\"product-card__media\">
                    <shopify-media width=\"280\" height=\"280\" query=\"product.selectedOrFirstAvailableVariant.image\"></shopify-media>
                  </div>
                  <div className=\"product-card__details mt-4\">
                    <h2 className=\"text-lg font-bold\">
                      <shopify-data query=\"product.title\"></shopify-data>
                    </h2>
                    <div className=\"text-base font-medium\">
                      <shopify-money query=\"product.selectedOrFirstAvailableVariant.price\"></shopify-money>
                    </div>
                    <button
                      className=\"mt-4 py-2 px-4 bg-black text-white rounded-lg font-semibold uppercase hover:bg-white hover:text-black border-2 border-black transition-colors\"
                      onClick={() => {
                        document.getElementById(\"product-modal\").showModal();
                        document.getElementById(\"product-modal-context\").setAttribute('handle', handle);
                        document.getElementById(\"product-modal-context\").update();
                      }}
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

      <shopify-cart id=\"cart\"></shopify-cart>

      <dialog id=\"product-modal\" className=\"product-modal\">
        <shopify-context id=\"product-modal-context\" type=\"product\" wait-for-update>
          <template>
            <div className=\"p-4\">
              <button className=\"absolute top-2 right-2\" onClick={() => document.getElementById(\"product-modal\").close()}>&#10005;</button>
              <shopify-media width=\"416\" height=\"416\" query=\"product.selectedOrFirstAvailableVariant.image\"></shopify-media>
              <h1 className=\"text-2xl font-bold\"><shopify-data query=\"product.title\"></shopify-data></h1>
              <shopify-money query=\"product.selectedOrFirstAvailableVariant.price\"></shopify-money>
              <shopify-variant-selector></shopify-variant-selector>
              <button className=\"mt-4 py-2 px-4 bg-black text-white rounded-lg\" onClick={(e) => document.getElementById(\"cart\").addLine(e).showModal()}>
                Add to Cart
              </button>
              <div className=\"mt-4 text-sm\">
                <shopify-data query=\"product.descriptionHtml\"></shopify-data>
              </div>
            </div>
          </template>
        </shopify-context>
      </dialog>
    </section>
  );
}
