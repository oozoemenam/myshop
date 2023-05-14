package com.myshop.security.dto;

import com.myshop.security.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.HashSet;
import java.util.Set;

@Data
public class UserDto {
    private String id;

    private String username;

    private String email;

    private String password;

    private Set<Role> roles = new HashSet<>();
}
