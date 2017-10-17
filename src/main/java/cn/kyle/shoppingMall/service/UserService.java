package cn.kyle.shoppingMall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/9/14.
 */
@Service
public class UserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

}
