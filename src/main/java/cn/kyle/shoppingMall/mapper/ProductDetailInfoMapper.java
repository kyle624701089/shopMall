/**   
* @Title: ProductDetailInfoMapper.java 
* @Package cn.kyle.shoppingMall.mapper 
* @Description: TODO(用一句话描述该文件做什么) 
* @author sunkai   
* @date 2017年10月25日 下午1:37:52 
* @version V1.0   
*/ 
package cn.kyle.shoppingMall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cn.kyle.shoppingMall.domain.ProductDetailInfo;

/**
 * @ClassName：ProductDetailInfoMapper
 * @Description：
 * @company:zhph
 * @author sunkai
 * @date 2017年10月25日 下午1:37:52
 */
@Repository
@Mapper
public interface ProductDetailInfoMapper {
	
	/**
	 * 
	     * @Title: findProductDetailInfoListByDetailId 
	     * @param productDetailId
	     * @return
	     * @return：List<ProductDetailInfo>
	     * @Description：通过detialId查找对应的所有detailInfo
	     * @author kyle
	     * @date 2017年10月31日 下午10:48:12
	     * @throws
	 */
	public List<ProductDetailInfo> findProductDetailInfoListByDetailId(@Param(value="productDetailId")String productDetailId);
}
