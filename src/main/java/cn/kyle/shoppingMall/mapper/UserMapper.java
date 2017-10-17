package cn.kyle.shoppingMall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.github.pagehelper.Page;

import cn.kyle.shoppingMall.domain.User;

/**
 * Created by Administrator on 2017/9/14.
 */
@Repository
@Mapper
public interface UserMapper {

    /**
     * 新增user
     * @param user
     */
    public void addUser(User user);

    /**
     * 根据id查找user
     * @param id
     * @return
     */
    public User findUserById(String id);

    /**
     * 删除user
     * @param id
     */
    public void deleteUserById(String id);

    /**
     * 修改user
     * @param user
     */
    public void updateUser(User user);

    /**
     * 查找所有user并分页
     * @return
     */
    @Select("select * from user")
    public Page<User> findAllUserPage();

    /**
     * 查询所有user
     * @return
     */
    public List<User> findAll();

    /**
     * 查询User是否存在
     * @param user
     * @return
     */
    public Integer isUserExits(User user);
}
