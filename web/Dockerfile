FROM node:18.17.0
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm ci
RUN npm install react-hook-form

# アプリケーションのソースコードをコピー
COPY . .

# OSに応じて権限設定コマンドを変更
ARG TARGETOS

RUN if [ "$TARGETOS" = "windows" ]; then \
  echo "Running on Windows"; \
  echo "Please run icacls manually on the host."; \
  else \
  echo "Running on Mac"; \
  chown -R node:node /usr/src/app/.next; \
  fi

USER node

CMD ["npm", "run", "dev"]