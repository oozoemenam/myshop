//package com.myshop.controller;
//
//import com.myshop.dto.ProductDto;
//import com.myshop.model.Product;
//import com.myshop.service.ProductService;
//import jakarta.validation.Valid;
//import lombok.RequiredArgsConstructor;
//import org.modelmapper.ModelMapper;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//import java.util.stream.Collectors;
//import java.util.stream.StreamSupport;
//
//@RestController
//@RequestMapping("/api/v1/products")
//@RequiredArgsConstructor
//public class ProductController {
//    private final ProductService productService;
//    private final ModelMapper mapper;
//
//    private ProductDto convertToDto(Product product) {
//        return mapper.map(product, ProductDto.class);
//    }
//
//    private Product convertToEntity(@Valid ProductDto productDto) {
//        return mapper.map(productDto, Product.class);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<ProductDto>> getAllProducts() {
//        List<Product> products = StreamSupport
//                .stream(productService.getAllProducts().spliterator(), false)
//                .collect(Collectors.toList());
//        List<ProductDto> productDtos = products
//                .stream()
//                .map(this::convertToDto)
//                .collect(Collectors.toList());
//        return new ResponseEntity<>(productDtos, HttpStatus.OK);
//    }
//}
