const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>フロントエンドサーバーへようこそ！</h1>
    <p>テスト用ページです</p>
    <button onclick="fetchUsers()">ユーザー一覧を取得</button>
    <div id="result"></div>

    <script>
      async function fetchUsers() {
        try {
          const response = await fetch('http://localhost:3001/api/users');
          const data = await response.json();
          document.getElementById('result').innerHTML = 
            '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
        } catch (error) {
          document.getElementById('result').innerHTML = 
            'エラー: ' + error.message;
        }
      }
    </script>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "frontend" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`フロントエンドサーバーが起動しました。ポート: ${port}`);
});
