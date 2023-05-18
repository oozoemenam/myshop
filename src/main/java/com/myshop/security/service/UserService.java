package com.myshop.security.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.myshop.security.dto.UserDto;
import com.myshop.security.exception.NotFoundException;
import com.myshop.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ModelMapper mapper;
    
    public UserDto findByUsername(String username) {
        var user = userRepository.findByUsername(username)
          .orElseThrow(
            () -> new NotFoundException("User not found with username: " + username)
          );
    
        return mapper.map(user, UserDto.class);
    }
}
