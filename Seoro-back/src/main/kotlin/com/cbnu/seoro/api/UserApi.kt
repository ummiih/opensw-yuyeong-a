package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.SignInRequest
import com.cbnu.seoro.api.request.SignUpRequest
import com.cbnu.seoro.entity.User
import com.cbnu.seoro.service.UserService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api")
class UserApi(
    private val userService: UserService
) {

    @PostMapping("/sign-up", consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun signUp(@RequestPart signUpRequest: SignUpRequest,
               @RequestPart imageFile: MultipartFile) :ResponseEntity<Void> {
        userService.createUser(signUpRequest, imageFile)
        return ResponseEntity.ok().build()
    }


    @GetMapping("/sign-in")
    fun signIn(signInRequest: SignInRequest) = ResponseEntity.ok(userService.signIn(signInRequest))


    @GetMapping("/users/nicknames")
    fun existNickname(nickname: String) = ResponseEntity.ok(userService.existNickname(nickname))

}