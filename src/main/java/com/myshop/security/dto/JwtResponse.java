package com.myshop.security.dto;

import java.util.List;

public record JwtResponse (
    String token,
    String type,
    String id,
    String username,
    String email,
    List<String> roles
) {}
