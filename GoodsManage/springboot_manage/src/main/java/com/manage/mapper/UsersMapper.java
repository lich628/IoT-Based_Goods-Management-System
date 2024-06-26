package com.manage.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.manage.entity.Users;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UsersMapper extends BaseMapper<Users> {
    @Select("select user_name, user_account from users where user_id = #{userId}")
    Users selectNameAndAccountById(int userId);

    @Select("SELECT role, COUNT(*) as total FROM users GROUP BY role")
    List<Map<String, Object>> getUserCountsByRole();
}

