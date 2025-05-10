const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config(); // Load .env variables

const { createClient } = require('@supabase/supabase-js');

const app = express();

// === 1) Paths ===
const distPath = path.join(__dirname, "dist");
const LISTINGS_JSON_PATH = path.join(__dirname, ".data", "listings.json");

// === 2) Middleware ===
app.use(cors());
app.use(express.json());

// === 3) Supabase Client Setup ===
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// === 4) Surfer Routes (Supabase) ===

app.get("/api/surfers", async (req, res) => {
  const { data, error } = await supabase
    .from("surfers")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching surfers:", error);
    return res.status(500).json({ error: "Database fetch error" });
  }

  res.json(data);
});

app.post("/api/surfers", async (req, res) => {
  const { name, country, points, image } = req.body;

  const { error } = await supabase.from("surfers").insert([
    { name, country, points: points || 0, image: image || "" }
  ]);

  if (error) {
    console.error("Error adding surfer:", error);
    return res.status(500).json({ error: "Database insert error" });
  }

  const { data } = await supabase.from("surfers").select("*").order("id");
  res.json({ success: true, surfers: data });
});

app.put("/api/surfers/:id/points", async (req, res) => {
  const surferId = parseInt(req.params.id, 10);
  const { points } = req.body;

  const { error } = await supabase
    .from("surfers")
    .update({ points })
    .eq("id", surferId);

  if (error) {
    console.error("Error updating points:", error);
    return res.status(500).json({ error: "Database update error" });
  }

  const { data } = await supabase.from("surfers").select("*").order("id");
  res.json({ success: true, surfers: data });
});

app.delete("/api/surfers/:id", async (req, res) => {
  const surferId = parseInt(req.params.id, 10);

  const { error } = await supabase
    .from("surfers")
    .delete()
    .eq("id", surferId);

  if (error) {
    console.error("Error deleting surfer:", error);
    return res.status(500).json({ error: "Database delete error" });
  }

  const { data } = await supabase.from("surfers").select("*").order("id");
  res.json({ success: true, surfers: data });
});

// === 5) Listings Routes (Still using .json) ===

function getListings() {
  if (!fs.existsSync(LISTINGS_JSON_PATH)) return [];
  const data = fs.readFileSync(LISTINGS_JSON_PATH, "utf8");
  return JSON.parse(data);
}
function saveListings(listings) {
  fs.writeFileSync(LISTINGS_JSON_PATH, JSON.stringify(listings, null, 2), "utf8");
}

app.get("/api/listings", (req, res) => {
  let listings = getListings();
  const now = Date.now();
  listings = listings.filter((listing) => now < listing.expiry);
  saveListings(listings);
  res.json(listings);
});

app.post("/api/listings", (req, res) => {
  let listings = getListings();
  const newListing = req.body;
  newListing.id = Date.now();
  if (newListing.durationDays) {
    newListing.expiry = Date.now() + newListing.durationDays * 86400000;
  }
  listings.push(newListing);
  saveListings(listings);
  res.json({ success: true, listings });
});

app.delete("/api/listings/:id", (req, res) => {
  const listingId = parseInt(req.params.id, 10);
  let listings = getListings();
  listings = listings.filter((l) => l.id !== listingId);
  saveListings(listings);
  res.json({ success: true, listings });
});

// === 6) Serve Frontend ===
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.join(distPath, "index.html"));
  } else {
    next();
  }
});

// === 7) Start Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
