package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.ModifyArticleRequest
import com.cbnu.seoro.api.request.WriteArticleRequest
import com.cbnu.seoro.api.request.WriteCommentRequest
import com.cbnu.seoro.entity.Article
import com.cbnu.seoro.entity.Comment
import com.cbnu.seoro.external.gcs.GcsFileUploader
import com.cbnu.seoro.repository.ArticleRepository
import com.cbnu.seoro.repository.UserRepository
import jakarta.persistence.EntityNotFoundException
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.multipart.MultipartFile

@Service
@Transactional
class ArticleService(
    private val articleRepository: ArticleRepository,
    private val userRepository: UserRepository,
    private val gcsFileUploader: GcsFileUploader
) {
    fun writeArticle(writeArticleRequest: WriteArticleRequest, imageFile: MultipartFile) : Long {

        val imageUrl = gcsFileUploader.uploadFileInStorage(imageFile)

        val user = userRepository.findById(writeArticleRequest.userId)
            .orElseThrow { EntityNotFoundException("Invalid user id") }

        return articleRepository.save(
            Article(
                title = writeArticleRequest.title,
                content = writeArticleRequest.content,
                user = user,
                imageUrl = imageUrl
                )
        ).articleId!!
    }


    fun getArticle(articleId: Long) : Article =
        articleRepository.findById(articleId).orElseThrow { EntityNotFoundException("Invalid article id") }.viewArticle()



    fun getArticles() : List<Article> = articleRepository.findAll()

    fun deleteArticle(articleId: Long) {
        articleRepository.deleteById(articleId)
    }

    fun updateArticle(articleId: Long, modifyArticleRequest: ModifyArticleRequest): Long{
        val article = getArticle(articleId)

        article.modifyArticle(
            modifyArticleRequest.title,
            modifyArticleRequest.content
        )

        return article.articleId!!
    }

    fun writeComment(articleId: Long, writeCommentRequest: WriteCommentRequest) {
        val article = getArticle(articleId)
        val user = userRepository.findById(writeCommentRequest.userId)
            .orElseThrow { EntityNotFoundException("Invalid user id") }

        article.addComment(
            Comment(
                user = user,
                content = writeCommentRequest.content,
                article = article
            )
        )
    }

    fun deleteComment(articleId: Long, commentId: Long) {
        val article = getArticle(articleId)
        article.deleteComment(commentId)
    }

    fun likeArticle(articleId: Long): Long {
        val article = getArticle(articleId)
        article.likeCount++
        return article.likeCount
    }
}