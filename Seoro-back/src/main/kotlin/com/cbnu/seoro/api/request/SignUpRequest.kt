package com.cbnu.seoro.api.request

data class SignUpRequest(
    val username: String,
    val nickname: String,
    val password: String,
)
