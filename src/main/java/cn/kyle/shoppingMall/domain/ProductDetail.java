/**   
* @Title: ProductDetailInfo.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月21日 下午3:11:46 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

import java.util.List;

/**
 * @ClassName：ProductDetailInfo
 * @Description：产品详情页展示
 * @company:zhph
 * @author sunkai
 * @date 2017年10月21日 下午3:11:46
 */

public class ProductDetail {
	private String id;
	private String productId;//对应产品id
	private String detailName;//对应于：项目介绍、注意事项、下单须知等标签页名称
	private Integer showOrder;//展示顺序
	private List<ProductDetailInfo> productDetailInfos;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getDetailName() {
		return detailName;
	}
	public void setDetailName(String detailName) {
		this.detailName = detailName;
	}
	public Integer getShowOrder() {
		return showOrder;
	}
	public void setShowOrder(Integer showOrder) {
		this.showOrder = showOrder;
	}
	public List<ProductDetailInfo> getProductDetailInfos() {
		return productDetailInfos;
	}
	public void setProductDetailInfos(List<ProductDetailInfo> productDetailInfos) {
		this.productDetailInfos = productDetailInfos;
	}
}
