package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.MakeQuestionsRequest
import com.cbnu.seoro.service.QuestionService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:3000"])

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