package com.cbnu.seoro

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class SeoroApplication

fun main(args: Array<String>) {
	runApplication<SeoroApplication>(*args)
}
