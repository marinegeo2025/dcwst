require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");

// Path to surfers.json
const surfersPath = "./server/.data/surfers.json";

// Connect to Supabase
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
});

async function seedSurfers() {
  try {
    const raw = fs.readFileSync(surfersPath, "utf-8");
    const surfers = JSON.parse(raw);

    for (const { name, country, points, image } of surfers) {
      await pool.query(
        "INSERT INTO surfers (name, country, points, image) VALUES ($1, $2, $3, $4)",
        [name, country, points || 0, image || ""]
      );
      console.log(`✅ Inserted: ${name}`);
    }
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    await pool.end();
    console.log("✅ Done seeding and closed connection.");
  }
}

seedSurfers();
