package com.tender.tender_management.controller;

import com.tender.tender_management.entity.User;
import com.tender.tender_management.service.UserService;
import com.tender.tender_management.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser = userRepository
                .findByEmailAndPassword(user.getEmail(), user.getPassword());

        if(existingUser != null){
            return "Login Success";
        }else{
            throw new RuntimeException("Invalid Login");
        }
    }
}