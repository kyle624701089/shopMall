package cn.kyle.shoppingMall.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import cn.kyle.shoppingMall.interceptor.LoginInterceptor;

/**
 * Created by Administrator on 2017/9/21.
 */
@Configuration
public class MyWebInterceptorConfig extends WebMvcConfigurerAdapter{

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/**") //添加拦截规则
                .excludePathPatterns("/login", "/loginValidate");//不进行拦截
        super.addInterceptors(registry);
    }
}
