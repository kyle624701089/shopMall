package cn.kyle.shoppingMall.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.kyle.shoppingMall.mapper.UserMapper;

/**
 * Created by Administrator on 2017/9/15.
 */
@Controller("/user")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping(value = "/main" ,method = RequestMethod.GET)
    public ModelAndView userInfo() throws Exception{
//        List<User> userList = userMapper.findAll();
        ModelAndView modelAndView = new ModelAndView("/main");
//        modelAndView.addObject("userList",userList);
        return modelAndView;
    }

    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    @ResponseBody
    public String delete(@PathParam("userId") String userId) throws Exception{
        userMapper.deleteUserById(userId);
        return "success";
    }
}
