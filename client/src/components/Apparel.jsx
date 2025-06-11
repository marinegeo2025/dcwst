// ApparelSection.jsx
import React, { useEffect, useState } from "react";

const SHOPIFY_DOMAIN = "dzkc5u-y0.myshopify.com";
const ACCESS_TOKEN = "42db3ccf256eb2251e6cab35869b8762";
const COLLECTION_ID = "674511323523"; // numeric ID of your collection

const query = `
  query {
    collection(id: "gid://shopify/Collection/${COLLECTION_ID}") {
      title
      description
      products(first: 12) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                  }
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function ApparelSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://${SHOPIFY_DOMAIN}/api/2023-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(res => {
        setProducts(
          res.data.collection.products.edges.map(edge => edge.node)
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-16 text-center text-xl text-slate-400">Loading Apparel...</div>;
  }

  return (
    <section className="py-16 bg-black text-white" id="apparel">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 tracking-tight animate-fade-in-up">
          Apparel
        </h2>
        <p className="mb-12 text-xl text-slate-300 animate-fade-in-up delay-100">
          Built for cold water warriors. Heavyweight. Minimalist. Rad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${0.15 * idx}s` }}
            >
              <img
                src={product.images.edges[0]?.node.url}
                alt={product.images.edges[0]?.node.altText || product.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold mb-1">{product.title}</h3>
                <p className="mb-2 text-slate-400">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    £{product.variants.edges[0]?.node.price.amount}
                  </span>
                  <a
                    href={`https://${SHOPIFY_DOMAIN}/products/${product.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-6 py-2 text-white font-semibold shadow"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
