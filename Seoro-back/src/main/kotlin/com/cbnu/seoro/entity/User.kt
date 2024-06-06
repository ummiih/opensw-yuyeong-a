package com.cbnu.seoro.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    val userId : Long? = null,
    val username: String = "",
    val nickName: String = "",
    val password: String = "",
    val profileImageUrl : String = ""
) : BaseTimeEntity() {

    fun passwordMatch(password: String): Boolean {
        return this.password == password
    }
}