package cn.kyle.shoppingMall.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.kyle.shoppingMall.mapper.UserMapper;

/**
 * Created by Administrator on 2017/9/15.
 */
@Controller("/user")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    @ResponseBody
    public String delete(@PathParam("userId") String userId) throws Exception{
        userMapper.deleteUserById(userId);
        return "success";
    }
}
