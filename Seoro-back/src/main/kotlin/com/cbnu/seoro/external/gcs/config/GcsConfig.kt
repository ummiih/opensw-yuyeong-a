package com.cbnu.seoro.external.gcs.config

import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.storage.Storage
import com.google.cloud.storage.StorageOptions
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.io.ByteArrayInputStream
import java.io.IOException
import java.util.*

@Configuration
class GcsConfig(

) {
    @Value("\${spring.cloud.gcp.storage.credentials.encoded-key}")
    lateinit var gcpKey: String
    @Value("\${spring.cloud.gcp.storage.project-id}")
    lateinit var projectId: String

    @Bean
    fun storage(): Storage {
        val credentials = getDecodedCredentials(gcpKey)
        return StorageOptions.newBuilder()
            .setProjectId(projectId)
            .setCredentials(credentials)
            .build()
            .service
    }

    private fun getDecodedCredentials(encodedKey: String): GoogleCredentials {
        val decodedKey = Base64.getDecoder().decode(encodedKey)
        return GoogleCredentials.fromStream(ByteArrayInputStream(decodedKey))
    }

}