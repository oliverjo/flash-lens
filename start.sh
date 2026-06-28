#!/bin/bash
cd "$(dirname "$0")"
PORT=8083
echo "フラッシュレンズ起動中 → http://localhost:$PORT"
python3 -m http.server $PORT
