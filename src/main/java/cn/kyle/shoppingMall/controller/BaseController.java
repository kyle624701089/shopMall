package cn.kyle.shoppingMall.controller;

import javax.servlet.http.HttpServletRequest;

import cn.kyle.shoppingMall.domain.User;

/**
 * Created by Administrator on 2017/9/20.
 */
public class BaseController {

    /**
     * 获取web上下文中的user
     * @param request
     * @return
     */
    public User getUser(HttpServletRequest request){
        return (User)request.getSession().getAttribute("USER_IN_SESSION");
    }
}
