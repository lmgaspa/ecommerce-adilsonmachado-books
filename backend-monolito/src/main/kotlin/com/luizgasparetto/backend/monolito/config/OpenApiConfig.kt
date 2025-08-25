package com.luizgasparetto.backend.monolito.config

import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.servers.Server
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class OpenApiConfig {
    @Bean
    fun customOpenAPI(): OpenAPI =
        OpenAPI().info(
            Info()
                .title("Adilson Machado – Ecommerce API")
                .version("v1")
                .description("Endpoints do checkout Pix, webhook e catálogo")
        )
            .servers(listOf(Server().url("https://ecommerce-adilson-f543f4ef7a51.herokuapp.com/swagger-ui/index.html")))
}
