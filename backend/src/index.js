const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// JSONボディパーサーの追加
app.use(express.json());

// CORSの設定（開発環境用）
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "APIサーバーへようこそ！" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "ユーザー1" },
    { id: 2, name: "ユーザー2" },
  ]);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`バックエンドサーバーが起動しました。ポート: ${port}`);
});
