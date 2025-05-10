FROM node:lts
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm ci
RUN npm install framer-motion
RUN npm install react-intersection-observer
RUN npm install react-hook-form yup @hookform/resolvers
RUN npm i @mui/x-date-pickers
RUN npm i dayjs
RUN npm install --unsafe-perm=true
RUN npm install react-icons --save
RUN npm install react-dnd react-dnd-html5-backend
RUN npm install @dnd-kit/core @dnd-kit/sortable
RUN rm -rf node_modules package-lock.json
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# OSに応じて権限設定コマンドを変更
ARG TARGETOS

RUN apt-get update && apt-get install -y curl bash build-essential

# nvmをインストールし、Node.jsをインストール
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && \
  export NVM_DIR="$HOME/.nvm" && \
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
  nvm install --lts && \
  nvm use --lts && \
  node -v && npm -v

RUN if [ "$TARGETOS" = "windows" ]; then \
  echo "Running on Windows"; \
  echo "Please run icacls manually on the host."; \
  else \
  echo "Running on Mac"; \
  chown -R node:node /usr/src/app/.next; \
  fi

USER node

CMD ["npm", "run", "dev"]
