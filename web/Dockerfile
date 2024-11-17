FROM node:18.17.0
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm ci

# アプリケーションのソースコードをコピー
COPY . .

# .nextディレクトリの権限を設定
RUN chown -R node:node /usr/src/app/.next

USER node

CMD ["npm", "run", "dev"]