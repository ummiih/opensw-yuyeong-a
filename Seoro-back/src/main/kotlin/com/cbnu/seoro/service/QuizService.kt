package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.MakeQuizRequest
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.repository.QuizRepository
import org.springframework.stereotype.Service

@Service
class QuizService(
    private val quizRepository: QuizRepository
) {
    fun makeQuiz(makeQuizRequest: MakeQuizRequest) = quizRepository.save(Quiz(title = makeQuizRequest.title))

    fun getQuizzes(): List<Quiz> = quizRepository.findAll()

    fun deleteQuiz(quizId: Long) = quizRepository.deleteById(quizId)
}