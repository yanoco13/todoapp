FROM openjdk:11

RUN apt-get update
WORKDIR /usr/src/app

# エントリーポイントスクリプトをコピー
COPY entrypoint.sh /usr/src/app/
RUN sed -i 's/\r$//' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# エントリーポイントを設定
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]