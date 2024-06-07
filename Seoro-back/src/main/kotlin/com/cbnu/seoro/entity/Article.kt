package com.cbnu.seoro.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
class Article(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    val articleId: Long? = null,

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    @OneToMany(mappedBy = "article", fetch = FetchType.EAGER, cascade = [CascadeType.ALL])
    val comments: MutableList<Comment> = mutableListOf(),

    val imageUrl: String,

    var title: String,
    var content: String,
    var likeCount: Long = 0,
    var viewCount: Long = 0
) : BaseTimeEntity() {

    fun modifyArticle(title: String, content: String) {
        this.title = title
        this.content = content
    }

    fun addComment(comment: Comment) {
        this.comments.add(comment)
    }

    fun deleteComment(commentId: Long) {
        this.comments.removeIf { it.commentId == commentId }
    }

    fun viewArticle(): Article {
        this.viewCount++
        return this;
    }
}