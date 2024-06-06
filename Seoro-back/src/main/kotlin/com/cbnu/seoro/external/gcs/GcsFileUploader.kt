package com.cbnu.seoro.external.gcs

import com.google.api.client.util.ByteStreams
import com.google.cloud.storage.BlobInfo
import com.google.cloud.storage.Storage
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import org.springframework.web.multipart.MultipartFile
import java.awt.Image
import java.io.IOException
import java.nio.channels.Channels
import java.util.*

@Component
class GcsFileUploader(
    private val storage: Storage
) {

    @Value("\${spring.cloud.gcp.storage.bucket}")
    lateinit var bucketName: String

    @Value("\${spring.cloud.gcp.storage.url}")
    lateinit var storagePath: String

    fun uploadFileInStorage(file: MultipartFile): String {

        val imageUrl: String

        val ext = file.contentType
        val uuid = UUID.randomUUID().toString()

        val blobInfo = BlobInfo.newBuilder(bucketName, uuid)
            .setContentType(ext)
            .build()

        try {
            storage.writer(blobInfo).use { writer ->
                file.inputStream.use { input ->
                    ByteStreams.copy(
                        input,
                        Channels.newOutputStream(writer)
                    )
                }
                imageUrl = storagePath + uuid
            }
        } catch (e: IOException) {
            throw IllegalArgumentException()
        }
        return imageUrl
    }
}