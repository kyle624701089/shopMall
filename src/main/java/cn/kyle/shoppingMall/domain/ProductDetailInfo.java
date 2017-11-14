/**   
* @Title: ProductDetailInfo.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月23日 上午10:06:48 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

import java.io.Serializable;
import java.util.List;

/**
 * @ClassName：ProductDetailInfo
 * @Description：保存详细信息和标题(如：适用于+对应信息)
 * @company:zhph
 * @author sunkai
 * @date 2017年10月23日 上午10:06:48
 */

public class ProductDetailInfo implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private String productDetailId;//与产品详情为多对一的关系
	private String detailRange;//类：适用于、功效、理疗流程等
	private String detailIntro;//类下对应的简介
	private List<ProductDetailInfoMsg> productDetailInfoMsgs;   
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProductDetailId() {
		return productDetailId;
	}
	public void setProductDetailId(String productDetailId) {
		this.productDetailId = productDetailId;
	}
	public String getDetailRange() {
		return detailRange;
	}
	public void setDetailRange(String detailRange) {
		this.detailRange = detailRange;
	}
	public String getDetailIntro() {
		return detailIntro;
	}
	public void setDetailIntro(String detailIntro) {
		this.detailIntro = detailIntro;
	}
	public List<ProductDetailInfoMsg> getProductDetailInfoMsgs() {
		return productDetailInfoMsgs;
	}
	public void setProductDetailInfoMsgs(List<ProductDetailInfoMsg> productDetailInfoMsgs) {
		this.productDetailInfoMsgs = productDetailInfoMsgs;
	}
}
