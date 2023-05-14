package com.myshop.security.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    @Id
    private String id;

    @NotBlank
    @NonNull
    @Size(max = 50)
    private String username;

    @NotBlank
    @NonNull
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @NonNull
    @Size(max = 150)
    private String password;

    @DBRef
    private Set<Role> roles = new HashSet<>();
}
