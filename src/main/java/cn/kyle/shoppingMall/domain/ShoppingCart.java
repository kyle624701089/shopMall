package cn.kyle.shoppingMall.domain;

import java.util.HashMap;

/**
 * Created by Administrator on 2017/11/20.
 * 购物车，包括总金额，物品总数，商品(按照商品分类和数量)Map
 */
public class ShoppingCart extends BaseEntity{
    /**
     * userId：对应用户id，一个用户拥有对应的唯一的购物车
     * cartId:购物车id
     * totalPrice:购物车所有商品的总金额
     * goodCount:购物车商品总数
     *
     */

    private String userId;
    private String cartId;
    private Double totalPrice;
    private Long goodCount;
    private HashMap<Product,Integer> productMap;

    public ShoppingCart(){
        this.totalPrice = 0.0;
        this.goodCount = 0L;
        this.productMap = new HashMap<>();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCartId() {
        return cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Long getGoodCount() {
        return goodCount;
    }

    public void setGoodCount(Long goodCount) {
        this.goodCount = goodCount;
    }

    public HashMap<Product, Integer> getProductMap() {
        return productMap;
    }

    public void setProductMap(HashMap<Product, Integer> productMap) {
        this.productMap = productMap;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "userId='" + userId + '\'' +
                ", cartId='" + cartId + '\'' +
                ", totalPrice=" + totalPrice +
                ", goodCount=" + goodCount +
                ", productMap=" + productMap +
                '}';
    }

    /**
     * 添加商品到购物车
     * @param product
     */
    public void addItem(Product product){
        if (productMap.containsKey(product)){
            //购物车已经存在该商品
//            productMap.
        }
    }
}
