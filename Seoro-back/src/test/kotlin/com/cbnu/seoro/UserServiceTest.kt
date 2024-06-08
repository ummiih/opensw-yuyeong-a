package com.cbnu.seoro.service

import com.cbnu.seoro.api.request.SignInRequest
import com.cbnu.seoro.api.request.SignUpRequest
import com.cbnu.seoro.entity.User
import com.cbnu.seoro.external.gcs.GcsFileUploader
import com.cbnu.seoro.repository.UserRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.web.multipart.MultipartFile

@ExtendWith(MockitoExtension::class)
class UserServiceTest {

    @Mock
    private lateinit var userRepository: UserRepository

    @Mock
    private lateinit var gcsFileUploader: GcsFileUploader

    @InjectMocks
    private lateinit var userService: UserService

    @Test
    fun `createUser should save user with uploaded image URL`() {
        val signUpRequest = SignUpRequest("username", "password", "nickname", "email@example.com")
        val imageFile = mock(MultipartFile::class.java)
        `when`(gcsFileUploader.uploadFileInStorage(imageFile)).thenReturn("imageUrl")
        `when`(userRepository.save(any(User::class.java))).thenReturn(User(1L, "username", "password", "nickname", "email@example.com", "imageUrl"))

        userService.createUser(signUpRequest, imageFile)

        verify(userRepository).save(any(User::class.java))
    }

    @Test
    fun `signIn should return user if password matches`() {
        val signInRequest = SignInRequest("nickname", "password")
        val user = User(1L, "username", "password", "nickname", "email@example.com", "imageUrl")
        `when`(userRepository.findByNickName("nickname")).thenReturn(user)

        val result = userService.signIn(signInRequest)

        assertEquals(user, result)
    }

    @Test
    fun `signIn should throw exception if password does not match`() {
        val signInRequest = SignInRequest("nickname", "wrongpassword")
        val user = User(1L, "username", "password", "nickname", "email@example.com", "imageUrl")
        `when`(userRepository.findByNickName("nickname")).thenReturn(user)

        val exception = assertThrows(IllegalArgumentException::class.java) {
            userService.signIn(signInRequest)
        }

        assertEquals("Password not match", exception.message)
    }

    @Test
    fun `signIn should throw exception if user not found`() {
        val signInRequest = SignInRequest("nickname", "password")
        `when`(userRepository.findByNickName("nickname")).thenReturn(null)

        val exception = assertThrows(IllegalArgumentException::class.java) {
            userService.signIn(signInRequest)
        }

        assertEquals("User not found", exception.message)
    }

    @Test
    fun `existNickname should return true if nickname exists`() {
        `when`(userRepository.existsByNickName("nickname")).thenReturn(true)

        val result = userService.existNickname("nickname")

        assertTrue(result)
    }

    @Test
    fun `existNickname should return false if nickname does not exist`() {
        `when`(userRepository.existsByNickName("nickname")).thenReturn(false)

        val result = userService.existNickname("nickname")

        assertFalse(result)
    }
}
