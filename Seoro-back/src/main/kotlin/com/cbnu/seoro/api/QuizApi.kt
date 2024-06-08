package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.MakeQuizRequest
import com.cbnu.seoro.service.QuizService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:3000"])

class QuizApi(
    private val quizService: QuizService
) {

    @PostMapping("/quizzes")
    fun makeQuiz(makeQuizRequest: MakeQuizRequest): ResponseEntity<Void> {
        quizService.makeQuiz(makeQuizRequest)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/quizzes")
    fun getQuizzes() = ResponseEntity.ok(quizService.getQuizzes())

    @DeleteMapping("/quizzes/{quizId}")
    fun deleteQuiz(@PathVariable quizId: Long): ResponseEntity<Void> {
        quizService.deleteQuiz(quizId)
        return ResponseEntity.ok().build()
    }

}