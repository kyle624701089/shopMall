package cn.kyle.shoppingMall.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.alibaba.druid.support.http.StatViewServlet;

import cn.kyle.shoppingMall.filter.MyFilter;

/**
 * Created by Administrator on 2017/9/15.
 * druid开启监控,通过ServletRegistrationBean对象来注册servlet容器
 * 相当于配置web.xml中servlet和filter内容
 */
@Configuration
public class DruidConfig {

    /**
     * 配置servlet
     * @return
     * @throws Exception
     */
    @Bean
    public ServletRegistrationBean druidServlet() throws Exception{
        ServletRegistrationBean registrationBean = new ServletRegistrationBean();
        registrationBean.setServlet(new StatViewServlet());
        registrationBean.addUrlMappings("/druid/*");
        registrationBean.addInitParameter("loginUserName", "admin");
        registrationBean.addInitParameter("loginPassword","admin");
        return registrationBean;
    }

    /**
     * 配置过滤器
     * @return
     * @throws Exception
     */
    @Bean
    public FilterRegistrationBean filterRegistrationBean() throws Exception{
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new MyFilter());
        registrationBean.addUrlPatterns("/**");
        registrationBean.addInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");
        return registrationBean;
    }
}
