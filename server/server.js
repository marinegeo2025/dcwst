const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();

// === 1) Path constants ===
const distPath = path.join(__dirname, "dist");
const SURFERS_JSON_PATH = path.join(__dirname, ".data", "surfers.json");
const LISTINGS_JSON_PATH = path.join(__dirname, ".data", "listings.json");

// === 2) Middleware ===
app.use(cors());
app.use(express.json());

// === 3) Helper functions ===
function getSurfers() {
  if (!fs.existsSync(SURFERS_JSON_PATH)) return [];
  const data = fs.readFileSync(SURFERS_JSON_PATH, "utf8");
  return JSON.parse(data);
}
function saveSurfers(surfers) {
  fs.writeFileSync(SURFERS_JSON_PATH, JSON.stringify(surfers, null, 2), "utf8");
}

function getListings() {
  if (!fs.existsSync(LISTINGS_JSON_PATH)) return [];
  const data = fs.readFileSync(LISTINGS_JSON_PATH, "utf8");
  return JSON.parse(data);
}
function saveListings(listings) {
  fs.writeFileSync(LISTINGS_JSON_PATH, JSON.stringify(listings, null, 2), "utf8");
}

// === 4) Surfer Routes ===
app.get("/api/surfers", (req, res) => {
  const surfers = getSurfers();
  res.json(surfers);
});

app.post("/api/surfers", (req, res) => {
  const surfers = getSurfers();
  const newSurfer = req.body;
  newSurfer.id = Date.now();
  surfers.push(newSurfer);
  saveSurfers(surfers);
  res.json({ success: true, surfers });
});

app.put("/api/surfers/:id/points", (req, res) => {
  const surfers = getSurfers();
  const surferId = parseInt(req.params.id, 10);
  const { points } = req.body;
  const updated = surfers.map((s) => s.id === surferId ? { ...s, points } : s);
  saveSurfers(updated);
  res.json({ success: true, surfers: updated });
});

app.delete("/api/surfers/:id", (req, res) => {
  const surfers = getSurfers();
  const surferId = String(req.params.id);
  const remaining = surfers.filter((s) => String(s.id) !== surferId);
  saveSurfers(remaining);
  res.json({ success: true, surfers: remaining });
});

// === 5) Listings Routes ===

// GET all listings (non-expired)
app.get("/api/listings", (req, res) => {
  let listings = getListings();
  const now = Date.now();
  listings = listings.filter((listing) => now < listing.expiry);
  saveListings(listings); // refresh cleaned list
  res.json(listings);
});

// POST a new listing
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

// DELETE a listing
app.delete("/api/listings/:id", (req, res) => {
  const listingId = parseInt(req.params.id, 10);
  let listings = getListings();
  listings = listings.filter((l) => l.id !== listingId);
  saveListings(listings);
  res.json({ success: true, listings });
});

// === 6) Serve frontend ===
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

// === 7) Start the server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
