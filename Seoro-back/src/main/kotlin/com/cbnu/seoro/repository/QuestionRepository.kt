package com.cbnu.seoro.repository

import com.cbnu.seoro.entity.Question
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.entity.embeddedid.QuestionId
import org.springframework.data.jpa.repository.JpaRepository

interface QuestionRepository : JpaRepository<Question, QuestionId> {
    fun findAllByQuiz(quiz: Quiz): List<Question>
}