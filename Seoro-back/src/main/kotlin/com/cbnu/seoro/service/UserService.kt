package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.SignInRequest
import com.cbnu.seoro.api.request.SignUpRequest
import com.cbnu.seoro.entity.User
import com.cbnu.seoro.external.gcs.GcsFileUploader
import com.cbnu.seoro.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class UserService(
    private val userRepository: UserRepository,
    private val gcsFileUploader: GcsFileUploader
) {
    fun createUser(signUpRequest: SignUpRequest, imageFile: MultipartFile) {

        val imageUrl = gcsFileUploader.uploadFileInStorage(imageFile)

        userRepository.save(
            User(
                username = signUpRequest.username,
                nickName = signUpRequest.nickname,
                password = signUpRequest.password,
                profileImageUrl = imageUrl
            )
        )
    }

    fun signIn(signInRequest: SignInRequest): User {
        val user = (userRepository.findByNickName(signInRequest.nickname)
            ?: throw IllegalArgumentException("User not found"))

        if (user.passwordMatch(signInRequest.password)) {
            return user
        } else {
            throw IllegalArgumentException("Password not match")
        }
    }

    fun existNickname(nickname: String): Boolean {
        return userRepository.existsByNickName(nickname)
    }
}