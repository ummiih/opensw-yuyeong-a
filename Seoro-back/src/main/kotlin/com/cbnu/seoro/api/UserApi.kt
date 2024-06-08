package com.cbnu.seoro.api

import com.cbnu.seoro.api.request.SignInRequest
import com.cbnu.seoro.api.request.SignUpRequest
import com.cbnu.seoro.entity.User
import com.cbnu.seoro.service.UserService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:3000"])

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