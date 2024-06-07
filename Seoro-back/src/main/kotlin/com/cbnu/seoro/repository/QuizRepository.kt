package com.cbnu.seoro.repository

import com.cbnu.seoro.entity.Quiz
import org.springframework.data.jpa.repository.JpaRepository

interface QuizRepository : JpaRepository<Quiz, Long>{
}