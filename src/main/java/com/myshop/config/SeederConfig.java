//package com.myshop.config;
//
//import java.util.HashSet;
//import java.util.List;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.myshop.model.Category;
//import com.myshop.model.Product;
//import com.myshop.service.CategoryService;
//import com.myshop.service.ProductService;
//
//@Configuration
//public class SeederConfig {
//
//    @Bean
//    CommandLineRunner runner(CategoryService categoryService, ProductService productService) {
//        return args -> {
//            Category category1 = new Category(1L, "men's clothing", "", "", new HashSet<>());
//            Category category2 = new Category(2L, "women's clothing", "", "", new HashSet<>());
//            categoryService.createAllCategories(List.of(category1, category2));
//
//            Product product1 = new Product(
//                    1L,
//                    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//                    109.95,
//                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//                    category1,
//                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//            );
//            Product product2 = new Product(
//                    2L,
//                    "Mens Casual Premium Slim Fit T-Shirts ",
//                    22.3,
//                    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//                    category1,
//                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//            );
//            Product product3 = new Product(
//                    3L,
//                    "Mens Cotton Jacket",
//                    55.99,
//                    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//                    category1,
//                    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
//            );
//            Product product4 = new Product(
//                    4L,
//                    "Mens Casual Slim Fit",
//                    15.99,
//                    "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//                    category1,
//                    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
//            );
//            Product product5 = new Product(
//                    5L,
//                    "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//                    56.99,
//                    "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//                    category2,
//                    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
//            );
//            Product product6 = new Product(
//                    6L,
//                    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//                    29.95,
//                    "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//                    category2,
//                    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
//            );
//            Product product7 = new Product(
//                    7L,
//                    "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//                    39.99,
//                    "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//                    category2,
//                    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
//            );
//            Product product8 = new Product(
//                    8L,
//                    "MBJ Women's Solid Short Sleeve Boat Neck V ",
//                    9.85,
//                    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//                    category2,
//                    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
//            );
//            Product product9 = new Product(
//                    9L,
//                    "Opna Women's Short Sleeve Moisture",
//                    7.95,
//                    "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//                    category2,
//                    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
//            );
//            Product product10 = new Product(
//                    10L,
//                    "DANVOUY Womens T Shirt Casual Cotton Short",
//                    12.99,
//                    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//                    category2,
//                    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
//            );
//            productService.createAllProducts(List.of(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10));
//        };
//    }
//}