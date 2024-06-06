package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.MakeQuestionsRequest
import com.cbnu.seoro.entity.Question
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.entity.embeddedid.QuestionId
import com.cbnu.seoro.repository.QuestionRepository
import com.cbnu.seoro.repository.QuizRepository
import jakarta.persistence.EntityNotFoundException
import org.springframework.stereotype.Service

@Service
class QuestionService(
    private val quizRepository: QuizRepository,
    private val questionRepository: QuestionRepository
) {
    fun makeQuestion(quizId: Long, makeQuestionsRequest: MakeQuestionsRequest) {
        val quiz = quizRepository.findById(quizId)
            .orElseThrow { EntityNotFoundException("Invalid quiz id") }

        makeQuestionsRequest.questions.forEach {
            questionRepository.save(
                it.toEntity(quiz)
            )
        }

    }

    fun deleteQuestion(quizId: Long, questionSequence: Int) =
        QuestionId(quizId, questionSequence).let {
            questionRepository.deleteById(it)
        }

    fun getQuestions(quizId: Long): List<Question> {
        val quiz = quizRepository.findById(quizId)
            .orElseThrow { EntityNotFoundException("Invalid quiz id") }

        return questionRepository.findAllByQuiz(quiz)

    }

}