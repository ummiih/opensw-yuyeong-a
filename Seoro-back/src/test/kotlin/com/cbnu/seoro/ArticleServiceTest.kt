package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.ModifyArticleRequest
import com.cbnu.seoro.api.request.WriteArticleRequest
import com.cbnu.seoro.api.request.WriteCommentRequest
import com.cbnu.seoro.entity.Article
import com.cbnu.seoro.entity.Comment
import com.cbnu.seoro.entity.User
import com.cbnu.seoro.external.gcs.GcsFileUploader
import com.cbnu.seoro.repository.ArticleRepository
import com.cbnu.seoro.repository.UserRepository
import jakarta.persistence.EntityNotFoundException
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.web.multipart.MultipartFile

@ExtendWith(MockitoExtension::class)
class ArticleServiceTest {

    @Mock
    private lateinit var articleRepository: ArticleRepository

    @Mock
    private lateinit var userRepository: UserRepository

    @Mock
    private lateinit var gcsFileUploader: GcsFileUploader

    @InjectMocks
    private lateinit var articleService: ArticleService

    private lateinit var article: Article
    private lateinit var user: User

    @BeforeEach
    fun setUp() {
        user = User(1L, "username", "password", "nickname", "email@example.com")
        article = Article(articleId = 1L, title = "title", content = "content", user = user, imageUrl = "imageUrl")
    }

    @Test
    fun `writeArticle should save article and return articleId`() {
        val writeArticleRequest = WriteArticleRequest(userId = 1L, title = "title", content = "content")
        val imageFile = mock(MultipartFile::class.java)
        `when`(gcsFileUploader.uploadFileInStorage(imageFile)).thenReturn("imageUrl")
        `when`(userRepository.findById(1L)).thenReturn(java.util.Optional.of(user))
        `when`(articleRepository.save(any(Article::class.java))).thenReturn(article)

        val articleId = articleService.writeArticle(writeArticleRequest, imageFile)

        assertEquals(1L, articleId)
        verify(articleRepository).save(any(Article::class.java))
    }

    @Test
    fun `getArticle should return article`() {
        `when`(articleRepository.findById(1L)).thenReturn(java.util.Optional.of(article))

        val foundArticle = articleService.getArticle(1L)

        assertEquals(article, foundArticle)
    }

    @Test
    fun `getArticles should return list of articles`() {
        val articles = listOf(article)
        `when`(articleRepository.findAll()).thenReturn(articles)

        val result = articleService.getArticles()

        assertEquals(articles, result)
    }

    @Test
    fun `deleteArticle should delete article by id`() {
        doNothing().`when`(articleRepository).deleteById(1L)

        articleService.deleteArticle(1L)

        verify(articleRepository).deleteById(1L)
    }

    @Test
    fun `updateArticle should modify and return articleId`() {
        val modifyArticleRequest = ModifyArticleRequest(title = "new title", content = "new content")
        `when`(articleRepository.findById(1L)).thenReturn(java.util.Optional.of(article))

        val articleId = articleService.updateArticle(1L, modifyArticleRequest)

        assertEquals(1L, articleId)
        assertEquals("new title", article.title)
        assertEquals("new content", article.content)
    }

    @Test
    fun `writeComment should add comment to article`() {
        val writeCommentRequest = WriteCommentRequest(userId = 1L, content = "comment content")
        `when`(articleRepository.findById(1L)).thenReturn(java.util.Optional.of(article))
        `when`(userRepository.findById(1L)).thenReturn(java.util.Optional.of(user))

        articleService.writeComment(1L, writeCommentRequest)

        assertFalse(article.comments.isEmpty())
        assertEquals("comment content", article.comments[0].content)
    }

    @Test
    fun `deleteComment should remove comment from article`() {
        val comment = Comment(content = "content", user = user, article = article)
        article.comments.add(comment)
        `when`(articleRepository.findById(1L)).thenReturn(java.util.Optional.of(article))

        articleService.deleteComment(1L, 1L)

        assertTrue(article.comments.isEmpty())
    }

    @Test
    fun `likeArticle should increment like count and return it`() {
        `when`(articleRepository.findById(1L)).thenReturn(java.util.Optional.of(article))

        val likeCount = articleService.likeArticle(1L)

        assertEquals(1L, likeCount)
        assertEquals(1L, article.likeCount)
    }
}
