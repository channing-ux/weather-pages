import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // 允許前端存取
const PORT = 3000;

// API 金鑰（不要放到前端）
const API_KEY = "eee92af78eb3bc83e5c1cd39e2942893";

// 範例：取得城市天氣
app.get("/api/weather/:city", async (req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "無法取得天氣資料" });
  }
});

app.listen(PORT, () => {
  console.log(`後端伺服器運行在 http://localhost:${PORT}`);
});
