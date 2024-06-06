package com.cbnu.seoro.entity

import jakarta.persistence.*

@Entity
class Quiz(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    val quizId : Long? = null,
    val title: String

) {
}