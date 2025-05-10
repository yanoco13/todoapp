package com.example.todoapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // API 全般に適用
                .allowedOrigins("http://localhost:3000") // フロントのオリジン
                .allowedMethods("*") // GET, POST, PUT, DELETE, OPTIONS…全部 OK
                .allowedHeaders("*") // リクエストヘッダーも全部 OK
                .allowCredentials(true); // Cookie／認証情報を渡すなら true
    }
}
