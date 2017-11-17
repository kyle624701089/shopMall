package cn.kyle.shoppingMall.controller;

import cn.kyle.shoppingMall.domain.Product;
import cn.kyle.shoppingMall.mapper.ProductMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2017/11/17.
 * 购物车controller
 */
@Controller
@RequestMapping("/cartContr")
public class CartController {

    @Resource
    private ProductMapper productMapper;

    @PostMapping("/odderPage")
    public String odderPage(HttpServletRequest request,ModelMap modelMap){
        String productId = request.getParameter("productId");
        Product product = productMapper.finaProductByProductId(productId);
        modelMap.addAttribute("product",product);
        return "odderPage";
    }
}
