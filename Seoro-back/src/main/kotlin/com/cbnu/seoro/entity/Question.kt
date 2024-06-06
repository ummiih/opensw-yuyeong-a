package com.cbnu.seoro.entity

import com.cbnu.seoro.entity.embeddedid.QuestionId
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId

@Entity
class Question(
    sequence: Int,
    @EmbeddedId
    val questionId: QuestionId = QuestionId(sequence = sequence),

    @MapsId("quizId")
    @ManyToOne
    @JoinColumn(name = "quiz_id")
    val quiz: Quiz,

    val answer: Boolean,

    val content: String
) {
}