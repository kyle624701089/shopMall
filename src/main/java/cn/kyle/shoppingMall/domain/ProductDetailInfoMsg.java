/**   
* @Title: ProductDetailInfoMsg.java 
* @Package cn.kyle.shoppingMall.domain 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月24日 下午8:08:37 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.domain;

/**
 * @ClassName：ProductDetailInfoMsg
 * @Description：简介下对应的多个说明
 * @company:zhph
 * @author sunkai
 * @date 2017年10月24日 下午8:08:37
 */

public class ProductDetailInfoMsg extends BaseEntity{
	private static final long serialVersionUID = 1L;
	private String id;
	private Integer order;//展示顺序
	private String detailInfoId;//对应的简介id
	private String detialMsg;//说明信息
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Integer getOrder() {
		return order;
	}
	public void setOrder(Integer order) {
		this.order = order;
	}
	public String getDetailInfoId() {
		return detailInfoId;
	}
	public void setDetailInfoId(String detailInfoId) {
		this.detailInfoId = detailInfoId;
	}
	public String getDetialMsg() {
		return detialMsg;
	}
	public void setDetialMsg(String detialMsg) {
		this.detialMsg = detialMsg;
	}
}
