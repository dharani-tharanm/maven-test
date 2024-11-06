package com.example.typinggame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TypingGameController {
    @GetMapping("/")
    public String showGame() {
        return "index"; // Maps to index.html in the static directory
    }
}
