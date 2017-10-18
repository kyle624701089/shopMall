package cn.kyle.shoppingMall.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.kyle.shoppingMall.domain.User;

/**
 * Created by Administrator on 2017/9/21.
 */
//@WebFilter(filterName = "loginFilter",urlPatterns = "/**")
public class MyFilter implements Filter {

    private String encoding;

    public String getEncoding() {
        return encoding;
    }

    public void setEncoding(String encoding) {
        this.encoding = encoding;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("过滤器初始化......");
        encoding = "utf-8";
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("过滤器执行中......");
        HttpServletRequest request=(HttpServletRequest)servletRequest;
        HttpServletResponse response = (HttpServletResponse)servletResponse;
        request.setCharacterEncoding(encoding);
        response.setCharacterEncoding(encoding);
        HttpSession session = request.getSession();
        String requestURI = request.getRequestURI();
        System.out.println(requestURI);
        User user_in_session = (User)session.getAttribute("USER_IN_SESSION");
        System.out.println("user:"+user_in_session.toString());
        //如果session中包含了user或者请求路径是登录、验证等，直接放过
		filterChain.doFilter(servletRequest,servletResponse);
    }

    @Override
    public void destroy() {
        System.out.println("过滤器被摧毁.........");
    }
}
