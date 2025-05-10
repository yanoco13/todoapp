package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.*;

import java.util.List;

/**
 * Spring Security のグローバル設定。 - CORS: http://localhost:3000 からのリクエストを許可 - CSRF: フロントが SPA の場合は無効化 -
 * 認可: 例として全て permitAll（必要に応じて書き換えてください）
 */
@Configuration
public class SecurityConfig {

    /**
     * FilterChain 本体。Spring Boot 3 以降は @EnableWebSecurity は不要。
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // ======== CORS ========
                .cors(Customizer.withDefaults()) // CorsConfigurationSource を参照

                // ======== CSRF (SPA/API の場合は通常無効) ========
                .csrf(csrf -> csrf.disable())

                // ======== ルートごとの認可設定 ========
                .authorizeHttpRequests(auth -> auth
                        // Preflight 用の OPTIONS は誰でも
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        // 今回の API は全部 OK（認証を入れるならここを書き換え）
                        .requestMatchers("/api/**").permitAll()
                        // 残りもとりあえず開けておく
                        .anyRequest().permitAll());

        return http.build();
    }

    /**
     * CORS 設定本体。FilterChain の .cors() がこれを自動で拾います。
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        // React dev サーバー
        config.setAllowedOrigins(List.of("http://localhost:3000"));

        // 必要な HTTP メソッド
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // 送信を許可するヘッダー（* で全部でも可）
        config.setAllowedHeaders(List.of("*"));

        // 認証 Cookie や Authorization ヘッダーを使うなら true
        config.setAllowCredentials(true);

        // Preflight のキャッシュ秒数（任意）
        config.setMaxAge(3600L);

        // URL パターンとひも付け
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }
}
