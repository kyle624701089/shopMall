package cn.kyle.shoppingMall.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.kyle.shoppingMall.domain.User;
import cn.kyle.shoppingMall.mapper.UserMapper;

/**
 * Created by Administrator on 2017/9/19.
 */
@Controller
public class LoginContoller extends BaseController{

    @Resource
    private UserMapper userMapper;

    /**
     * 跳转到登录页面
     * @return
     */
    @RequestMapping("/login")
    public String index(){
        return "login";
    }

    /**
     *  @Valid 注解用来校验传入的User对象，Errors对象用来捕捉校验时产生的错误
     * @param request
     * @param user
     * @return
     */
    @RequestMapping(value = "/loginValidate",method = RequestMethod.POST)
    @ResponseBody
    public String loginValidate(HttpServletRequest request,User user){
        Integer isUserExits = userMapper.isUserExits(user);
        if (isUserExits == 1){
            request.getSession().setAttribute("USER_IN_SESSION",user);
            return "true";
        } else {
            return "false";
        }
    }

    /**
     * 跳转到main页面
     * @param request
     * @return
     */
    @RequestMapping(value = "/main",method = RequestMethod.POST)
    public String main(HttpServletRequest request){
        request.getSession().setAttribute("USER_IN_SESSION",getUser(request));
        return "main";
    }
}
