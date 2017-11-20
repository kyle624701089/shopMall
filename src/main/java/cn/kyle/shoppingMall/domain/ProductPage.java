/**   
* @Title: ProductPage.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月19日 下午2:00:31 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName：ProductPage
 * @Description：用于main页面产品类别的分页展示
 * @company:zhph
 * @author sunkai
 * @date 2017年10月19日 下午2:00:31
 */

public class ProductPage extends BaseEntity{
	
	/** 
	* @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
	*/ 
	private static final long serialVersionUID = 1L;
	private String id;
	private String pageName;//分页名称
	List<Product> products = new ArrayList<>();
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPageName() {
		return pageName;
	}
	public void setPageName(String pageName) {
		this.pageName = pageName;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
}
