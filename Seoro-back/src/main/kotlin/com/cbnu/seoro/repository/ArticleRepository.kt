package com.cbnu.seoro.repository

import com.cbnu.seoro.entity.Article
import org.springframework.data.jpa.repository.JpaRepository

interface ArticleRepository : JpaRepository<Article, Long>{
}