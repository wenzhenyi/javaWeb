package com.example.wenzy.wenzydemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/welcome")
public class FirstController {

    @RequestMapping("/index")
    public String toWelcome(HttpServletRequest request, HttpServletResponse response,Model model){
        model.addAttribute("hello","world");
        return "index";
    }


}
