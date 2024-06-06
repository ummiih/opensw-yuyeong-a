package com.cbnu.seoro.entity.embeddedid

import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
data class QuestionId(
    val quizId: Long? = null,
    val sequence: Int
) : Serializable