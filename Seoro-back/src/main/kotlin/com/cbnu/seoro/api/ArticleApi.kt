package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.ModifyArticleRequest
import com.cbnu.seoro.api.request.WriteArticleRequest
import com.cbnu.seoro.api.request.WriteCommentRequest
import com.cbnu.seoro.entity.Article
import com.cbnu.seoro.service.ArticleService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:3000"])
class ArticleApi(
    private val articleService: ArticleService
) {

    @PostMapping("/articles", consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun writeArticle(@RequestPart writeArticleRequest: WriteArticleRequest,
                     @RequestPart imageFile: MultipartFile) : ResponseEntity<Long>{
        val articleId = articleService.writeArticle(writeArticleRequest,imageFile)
        return ResponseEntity.ok(articleId)
    }

    @GetMapping("/articles")
    fun getArticles() : ResponseEntity<List<Article>> {
        val articles = articleService.getArticles()
        return ResponseEntity.ok(articles)
    }

    @GetMapping("/articles/{articleId}")
    fun getArticle(@PathVariable articleId: Long) : ResponseEntity<Article> {
        val article = articleService.getArticle(articleId)
        return ResponseEntity.ok(article)
    }

    @DeleteMapping("/articles/{articleId}")
    fun deleteArticle(@PathVariable articleId: Long) : ResponseEntity<Void> {

        articleService.deleteArticle(articleId)
        return ResponseEntity.ok().build()
    }

    @PutMapping("/articles/{articleId}")
    fun updateArticle(@PathVariable articleId: Long, @RequestBody modifyArticleRequest: ModifyArticleRequest) : ResponseEntity<Long> {
        val updateArticleId = articleService.updateArticle(articleId, modifyArticleRequest)
        return ResponseEntity.ok(updateArticleId)
    }

    @PostMapping("/articles/{articleId}/comments")
    fun writeComment(@PathVariable articleId: Long, @RequestBody writeCommentRequest: WriteCommentRequest) : ResponseEntity<Void> {
        articleService.writeComment(articleId, writeCommentRequest)
        return ResponseEntity.ok().build()
    }

    @DeleteMapping("/articles/{articleId}/comments/{commentId}")
    fun deleteComment(@PathVariable articleId: Long, @PathVariable commentId: Long) : ResponseEntity<Void> {
        articleService.deleteComment(articleId, commentId)
        return ResponseEntity.ok().build()
    }

    @PutMapping("/articles/{articleId}/like")
    fun likeArticle(@PathVariable articleId: Long) : ResponseEntity<Long> {
        val likeCount = articleService.likeArticle(articleId)
        return ResponseEntity.ok(likeCount)
    }

}