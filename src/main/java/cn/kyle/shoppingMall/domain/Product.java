/**   
* @Title: Product.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月18日 下午8:10:40 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

/**
 * @ClassName：Product
 * @Description：产品
 * @company:zhph
 * @author sunkai
 * @date 2017年10月18日 下午8:10:40
 */

public class Product {
	private String id;
	private String name;//产品名称
	private String intro;//产品介绍
	private Integer time;//操作时间(分钟)
	private String opeType;//操作方式(卧姿，站姿，坐姿...)
	private Integer paiedCount;//(已付款人数)
	private Integer price;//价格
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
	public Integer getTime() {
		return time;
	}
	public void setTime(Integer time) {
		this.time = time;
	}
	public String getOpeType() {
		return opeType;
	}
	public void setOpeType(String opeType) {
		this.opeType = opeType;
	}
	public Integer getPaiedCount() {
		return paiedCount;
	}
	public void setPaiedCount(Integer paiedCount) {
		this.paiedCount = paiedCount;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", intro=" + intro + ", time=" + time + ", opeType=" + opeType
				+ ", paiedCount=" + paiedCount + ", price=" + price + "]";
	}
}
