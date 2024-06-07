package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.MakeQuestionsRequest
import com.cbnu.seoro.service.QuestionService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class QuestionApi(
    private val questionService: QuestionService
) {

    @PostMapping("/{quizId}/questions")
    fun makeQuestions(@PathVariable quizId: Long, @RequestBody makeQuestionsRequest: MakeQuestionsRequest) : ResponseEntity<Void> {
        questionService.makeQuestion(quizId, makeQuestionsRequest)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/{quizId}/questions")
    fun getQuestions(@PathVariable quizId: Long) = ResponseEntity.ok(questionService.getQuestions(quizId))

    @DeleteMapping("/{quizId}/questions/{questionSequence}")
    fun deleteQuestion(@PathVariable quizId: Long, @PathVariable questionSequence: Int) : ResponseEntity<Void> {
        questionService.deleteQuestion(quizId, questionSequence)
        return ResponseEntity.ok().build()
    }

}