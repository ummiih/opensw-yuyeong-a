package com.cbnu.seoro.api.request

data class WriteCommentRequest(
    val userId: Long,
    val content: String
)
