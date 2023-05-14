package com.myshop.security.repository;

import com.myshop.security.enums.RoleEnum;
import com.myshop.security.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {

    Optional<Role> findByName(RoleEnum name);
}
