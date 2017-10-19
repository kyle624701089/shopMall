/**   
* @Title: ProductAndPageRelation.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月19日 下午2:18:32 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

import java.io.Serializable;

/**
 * @ClassName：ProductAndPageRelation
 * @Description：产品和产品分页的关系维护类
 * @company:zhph
 * @author sunkai
 * @date 2017年10月19日 下午2:18:32
 */

public class ProductAndPageRelation implements Serializable{
	
	/** 
	* @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
	*/ 
	private static final long serialVersionUID = 1L;
	private String productId;
	private String productPageId;
	
	private Product product;
	private ProductPage productPage;
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductPageId() {
		return productPageId;
	}
	public void setProductPageId(String productPageId) {
		this.productPageId = productPageId;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public ProductPage getProductPage() {
		return productPage;
	}
	public void setProductPage(ProductPage productPage) {
		this.productPage = productPage;
	}
	
}
