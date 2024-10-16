# FROM openjdk:11

# RUN apt-get update
# WORKDIR /usr/src/app

# # エントリーポイントスクリプトをコピー
# COPY entrypoint.sh /usr/src/app/
# RUN sed -i 's/\r$//' /usr/src/app/entrypoint.sh
# RUN chmod +x /usr/src/app/entrypoint.sh

# # エントリーポイントを設定
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# ビルドステージ
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# 依存関係の解決
COPY pom.xml .
RUN mvn dependency:go-offline

# ソースコードのコピーとビルド
COPY src ./src
RUN mvn package -DskipTests

# 実行ステージ
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]