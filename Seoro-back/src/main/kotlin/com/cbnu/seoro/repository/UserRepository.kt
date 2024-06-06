package com.cbnu.seoro.repository

import com.cbnu.seoro.entity.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long>{

    fun findByNickName(nickName: String): User?
    fun existsByNickName(nickName: String): Boolean
}