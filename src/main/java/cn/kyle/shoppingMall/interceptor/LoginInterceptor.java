package cn.kyle.shoppingMall.interceptor;


import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import cn.kyle.shoppingMall.domain.User;
import cn.kyle.shoppingMall.utils.CommonUtil;

/**
 * Created by Administrator on 2017/9/21.
 * 登录拦截
 */
public class LoginInterceptor implements HandlerInterceptor {

    private static final Logger LOG = Logger.getLogger("登录拦截");

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        User user_in_session = (User) httpServletRequest.getSession().getAttribute("USER_IN_SESSION");
        String requestURI = httpServletRequest.getRequestURI();
        if (user_in_session!=null){
            LOG.info(user_in_session.getUsername()+":通过校验---"+requestURI);
            return true;
        }else{
            LOG.info("**未通过校验**---"+requestURI);
            httpServletResponse.sendRedirect(httpServletRequest.getContextPath()+ CommonUtil.loginURI);
            return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
