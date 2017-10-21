package cn.kyle.shoppingMall.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.kyle.shoppingMall.domain.Product;
import cn.kyle.shoppingMall.domain.User;
import cn.kyle.shoppingMall.mapper.ProductMapper;
import cn.kyle.shoppingMall.mapper.UserMapper;

/**
 * Created by Administrator on 2017/9/19.
 */
@Controller
public class LoginContoller extends BaseController{

    @Resource
    private UserMapper userMapper;
    
    @Resource
    private ProductMapper productMapper;

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
    @PostMapping("/loginValidate")
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
     * 用户登陆校验通过后post跳转到main页面
     * @param request
     * @return
     */
    @PostMapping("/main")
    public String postMain(HttpServletRequest request,ModelMap modelMap){
        request.getSession().setAttribute("USER_IN_SESSION",getUser(request));
        List<Product> productList = productMapper.findAllProduct();
		modelMap.addAttribute("productList", productList);
        return "main";
    }
    
    /**
     * 
     * @Title: getMain 
     * @param：@param modelMap
     * @param：@return
     * @return：String
     * @Description：浏览器刷新get请求到main页面 
     * @author huyf
     * @date 2017年10月21日 上午10:45:25
     * @throws
     */
    @GetMapping("/main")
    public String getMain(ModelMap modelMap){
    	List<Product> productList = productMapper.findAllProduct();
		modelMap.addAttribute("productList", productList);
		modelMap.addAttribute("http", "get");
        return "main";
    }
    
    
}
