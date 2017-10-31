package cn.kyle.shoppingMall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cn.kyle.shoppingMall.domain.ProductDetailInfoMsg;

@Repository
@Mapper
public interface ProductDetailInfoMsgMapper {
	
	public List<ProductDetailInfoMsg> findDetailInfoMsgListByDetailInfoId(@Param(value="detialInfoId")String detialInfoId);
}
