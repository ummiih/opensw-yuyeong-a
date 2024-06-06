package com.cbnu.seoro.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import lombok.ToString
import org.apache.commons.lang3.builder.ToStringExclude

@Entity
class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    val commentId: Long? = null,

    val content: String,

    @ManyToOne
    @JoinColumn(name = "article_id")
    @JsonIgnore
    val article: Article,

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

) : BaseTimeEntity()