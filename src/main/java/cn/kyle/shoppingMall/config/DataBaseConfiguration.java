package cn.kyle.shoppingMall.config;


import java.util.Arrays;
import java.util.Properties;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.ApplicationContextException;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.util.StringUtils;

import com.alibaba.druid.pool.DruidDataSource;
import com.github.pagehelper.PageHelper;

/**
 * Created by Administrator on 2017/9/14.
 */
@Configuration
@EnableTransactionManagement/*开启事物*/
@MapperScan(basePackages={"cn.kyle.shoppingMall.mapper.*"})
public class DataBaseConfiguration implements EnvironmentAware {

    /*用Environment类来读取配置文件*/
    private Environment environment;
    private RelaxedPropertyResolver resolver;


    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
        this.resolver = new RelaxedPropertyResolver(environment);
    }

    //注册DataSource
    @Bean(initMethod = "init", destroyMethod = "close")
    public DruidDataSource dataSource() throws Exception {
        /*url不能为空*/
        if (StringUtils.isEmpty(resolver.getProperty("spring.datasource.url"))) {
            System.out.println("Your database connection pool configuration is incorrect!" + " Please check your Spring profile, current profiles are:" + Arrays.toString(environment.getActiveProfiles()));
            throw new ApplicationContextException("Database connection pool is not configured correctly");
        }
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(resolver.getProperty("spring.datasource.driver-class-name"));//驱动名称
        dataSource.setUrl(resolver.getProperty("spring.datasource.url"));//数据库地址
        dataSource.setUsername(resolver.getProperty("spring.datasource.username"));//用户名
        dataSource.setPassword(resolver.getProperty("spring.datasource.password"));//密码
        dataSource.setInitialSize(Integer.parseInt(resolver.getProperty("spring.datasource.initialSize")));//资源池初始化大小
        dataSource.setMinIdle(Integer.parseInt(resolver.getProperty("spring.datasource.minIdle")));
        dataSource.setMaxActive(Integer.parseInt(resolver.getProperty("spring.datasource.maxActive")));
        dataSource.setMaxWait(Long.parseLong(resolver.getProperty("spring.datasource.maxWait")));
        dataSource.setTimeBetweenEvictionRunsMillis(Long.parseLong(resolver.getProperty("spring.datasource.timeBetweenEvictionRunsMillis")));
        dataSource.setMinEvictableIdleTimeMillis(Long.parseLong(resolver.getProperty("spring.datasource.minEvictableIdleTimeMillis")));
        dataSource.setValidationQuery(resolver.getProperty("spring.datasource.validationQuery"));
        dataSource.setTestWhileIdle(Boolean.parseBoolean(resolver.getProperty("spring.datasource.testWhileIdle")));
        dataSource.setTestOnBorrow(Boolean.parseBoolean(resolver.getProperty("spring.datasource.testOnBorrow")));
        dataSource.setTestOnReturn(Boolean.parseBoolean(resolver.getProperty("spring.datasource.testOnReturn")));
        dataSource.setPoolPreparedStatements(Boolean.parseBoolean(resolver.getProperty("spring.datasource.poolPreparedStatements")));
        dataSource.setMaxPoolPreparedStatementPerConnectionSize(Integer.parseInt(resolver.getProperty("spring.datasource.maxPoolPreparedStatementPerConnectionSize")));
        dataSource.setFilters(resolver.getProperty("filters"));
        return dataSource;
    }

    //获取sqlsessionfactory
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource());
        /*Mybatis分页插件*/
        PageHelper pageHelper = new PageHelper();
        Properties props = new Properties();
        props.setProperty("dialect", "mysql");
        props.setProperty("reasonable", "true");
        props.setProperty("supportMethodsArguments", "true");
        props.setProperty("returnPageInfo", "check");
        props.setProperty("params", "count=countSql");
        pageHelper.setProperties(props);
        //添加插件
        factoryBean.setPlugins(new Interceptor[]{pageHelper});
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        factoryBean.setMapperLocations(resolver.getResources("classpath:mapping/*.xml"));
        return factoryBean.getObject();
    }

    @Bean
    public DataSourceTransactionManager transactionManager() throws Exception{
        return new DataSourceTransactionManager(dataSource());
    }
}
