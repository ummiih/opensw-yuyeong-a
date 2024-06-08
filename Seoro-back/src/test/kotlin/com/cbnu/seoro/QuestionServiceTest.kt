package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.MakeQuestionsRequest
import com.cbnu.seoro.entity.Question
import com.cbnu.seoro.entity.Quiz
import com.cbnu.seoro.entity.embeddedid.QuestionId
import com.cbnu.seoro.repository.QuestionRepository
import com.cbnu.seoro.repository.QuizRepository
import jakarta.persistence.EntityNotFoundException
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class QuestionServiceTest {

    @Mock
    private lateinit var quizRepository: QuizRepository

    @Mock
    private lateinit var questionRepository: QuestionRepository

    @InjectMocks
    private lateinit var questionService: QuestionService

    private lateinit var quiz: Quiz
    private lateinit var question: Question

    @BeforeEach
    fun setUp() {
        quiz = Quiz(1L, "Quiz Title", "Quiz Description", mutableListOf())
        question = Question(QuestionId(1L, 1), "Question Content", quiz)
    }

    @Test
    fun `makeQuestion should save questions to the quiz`() {
        val makeQuestionsRequest = MakeQuestionsRequest(listOf(question))

        `when`(quizRepository.findById(1L)).thenReturn(java.util.Optional.of(quiz))

        questionService.makeQuestion(1L, makeQuestionsRequest)

        verify(questionRepository, times(makeQuestionsRequest.questions.size)).save(any(Question::class.java))
    }

    @Test
    fun `deleteQuestion should remove question from the repository`() {
        val questionId = QuestionId(1L, 1)
        doNothing().`when`(questionRepository).deleteById(questionId)

        questionService.deleteQuestion(1L, 1)

        verify(questionRepository).deleteById(questionId)
    }

    @Test
    fun `getQuestions should return list of questions for the quiz`() {
        `when`(quizRepository.findById(1L)).thenReturn(java.util.Optional.of(quiz))
        `when`(questionRepository.findAllByQuiz(quiz)).thenReturn(listOf(question))

        val result = questionService.getQuestions(1L)

        assertEquals(1, result.size)
        assertEquals(question, result[0])
    }

    @Test
    fun `makeQuestion should throw EntityNotFoundException if quiz does not exist`() {
        val makeQuestionsRequest = MakeQuestionsRequest(listOf(question))

        `when`(quizRepository.findById(1L)).thenReturn(java.util.Optional.empty())

        assertThrows(EntityNotFoundException::class.java) {
            questionService.makeQuestion(1L, makeQuestionsRequest)
        }
    }

    @Test
    fun `getQuestions should throw EntityNotFoundException if quiz does not exist`() {
        `when`(quizRepository.findById(1L)).thenReturn(java.util.Optional.empty())

        assertThrows(EntityNotFoundException::class.java) {
            questionService.getQuestions(1L)
        }
    }
}
