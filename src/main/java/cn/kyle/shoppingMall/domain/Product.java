/**   
* @Title: Product.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月18日 下午8:10:40 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

import java.io.Serializable;

/**
 * @ClassName：Product
 * @Description：产品
 * @company:zhph
 * @author sunkai
 * @date 2017年10月18日 下午8:10:40
 */

public class Product implements Serializable{
	/** 
	* @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
	*/ 
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;//产品名称
	private String intro;//产品介绍
	private String duration;//操作时长(分钟)
	private String opeType;//操作方式(卧姿，站姿，坐姿...)
	private String paiedCount;//(已付款人数)
	private String price;//价格
	private String productType;//产品分类：1:中医推拿;2:足疗SPA;3:女性·小儿
	private String imgPath;//图片地址
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getOpeType() {
		return opeType;
	}
	public void setOpeType(String opeType) {
		this.opeType = opeType;
	}
	public String getPaiedCount() {
		return paiedCount;
	}
	public void setPaiedCount(String paiedCount) {
		this.paiedCount = paiedCount;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", intro=" + intro + ", duration=" + duration + ", opeType="
				+ opeType + ", paiedCount=" + paiedCount + ", price=" + price + ", productType=" + productType + "]";
	}
}
