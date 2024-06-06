package com.cbnu.seoro.api.request

data class WriteArticleRequest(
    val userId: Long,
    val title: String,
    val content: String
)
