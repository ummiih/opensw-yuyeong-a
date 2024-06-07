package com.cbnu.seoro.api.request

import com.cbnu.seoro.entity.Question
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.entity.embeddedid.QuestionId

data class QuestionRequest(
    val sequence: Int,
    val content: String,
    val answer: Boolean
) {
    fun toEntity(quiz: Quiz): Question {
        return Question(
            sequence = sequence,
            content = content,
            answer = answer,
            quiz = quiz
        )
    }
}
