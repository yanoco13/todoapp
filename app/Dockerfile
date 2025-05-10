# ビルドステージ
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# 依存関係の解決
COPY pom.xml .
RUN mvn dependency:go-offline

# ソースコードのコピー
COPY src ./src

# クリーン＆ビルド
RUN mvn clean package -DskipTests

# 実行ステージ
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# エントリーポイントを設定
ENTRYPOINT ["java", "-Djava.util.logging.ConsoleHandler.level=ALL", "-jar", "app.jar"]

# 必要に応じてポートを公開
EXPOSE 8080
