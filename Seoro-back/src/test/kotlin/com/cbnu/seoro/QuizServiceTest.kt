package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.MakeQuizRequest
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.repository.QuizRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class QuizServiceTest {

    @Mock
    private lateinit var quizRepository: QuizRepository

    @InjectMocks
    private lateinit var quizService: QuizService

    @Test
    fun `makeQuiz should save and return quiz`() {
        val makeQuizRequest = MakeQuizRequest("Quiz Title")
        val quiz = Quiz(1L, "Quiz Title", "Quiz Description", mutableListOf())
        `when`(quizRepository.save(any(Quiz::class.java))).thenReturn(quiz)

        val savedQuiz = quizService.makeQuiz(makeQuizRequest)

        assertEquals(quiz, savedQuiz)
        verify(quizRepository).save(any(Quiz::class.java))
    }

    @Test
    fun `getQuizzes should return list of quizzes`() {
        val quizzes = listOf(Quiz(1L, "Quiz Title", "Quiz Description", mutableListOf()))
        `when`(quizRepository.findAll()).thenReturn(quizzes)

        val result = quizService.getQuizzes()

        assertEquals(quizzes, result)
    }

    @Test
    fun `deleteQuiz should remove quiz by id`() {
        doNothing().`when`(quizRepository).deleteById(1L)

        quizService.deleteQuiz(1L)

        verify(quizRepository).deleteById(1L)
    }
}
