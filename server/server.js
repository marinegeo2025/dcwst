const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Load .env variables

const app = express();

// === 1) Paths ===
const distPath = path.join(__dirname, "dist");
const LISTINGS_JSON_PATH = path.join(__dirname, ".data", "listings.json");

// === 2) Middleware ===
app.use(cors());
app.use(express.json());

// === 3) PostgreSQL DB setup (Supabase) ===
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
});

// === 4) Surfer Routes (Now from Supabase DB) ===

// GET all surfers
app.get("/api/surfers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM surfers ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching surfers:", err);
    res.status(500).json({ error: "Database fetch error" });
  }
});

// ADD new surfer
app.post("/api/surfers", async (req, res) => {
  const { name, country, points, image } = req.body;
  try {
    await pool.query(
  "INSERT INTO surfers (name, country, points, image) VALUES ($1, $2, $3, $4)",
  [name, country, points || 0, image || ""]
    );
    const updated = await pool.query("SELECT * FROM surfers ORDER BY id");
    res.json({ success: true, surfers: updated.rows });
  } catch (err) {
    console.error("Error adding surfer:", err);
    res.status(500).json({ error: "Database insert error" });
  }
});

// UPDATE surfer points
app.put("/api/surfers/:id/points", async (req, res) => {
  const surferId = parseInt(req.params.id, 10);
  const { points } = req.body;
  try {
    await pool.query("UPDATE surfers SET points = $1 WHERE id = $2", [points, surferId]);
    const updated = await pool.query("SELECT * FROM surfers ORDER BY id");
    res.json({ success: true, surfers: updated.rows });
  } catch (err) {
    console.error("Error updating points:", err);
    res.status(500).json({ error: "Database update error" });
  }
});

// DELETE a surfer
app.delete("/api/surfers/:id", async (req, res) => {
  const surferId = parseInt(req.params.id, 10);
  try {
    await pool.query("DELETE FROM surfers WHERE id = $1", [surferId]);
    const updated = await pool.query("SELECT * FROM surfers ORDER BY id");
    res.json({ success: true, surfers: updated.rows });
  } catch (err) {
    console.error("Error deleting surfer:", err);
    res.status(500).json({ error: "Database delete error" });
  }
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

// GET non-expired listings
app.get("/api/listings", (req, res) => {
  let listings = getListings();
  const now = Date.now();
  listings = listings.filter((listing) => now < listing.expiry);
  saveListings(listings);
  res.json(listings);
});

// ADD new listing
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

// DELETE listing
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

// SPA fallback
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