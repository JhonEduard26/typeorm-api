-- ALTER SEQUENCE category_category_id_seq RESTART WITH 1;

-- * Category
-- INSERT INTO public.category(category_name, image_url) VALUES ('Frutas y verduras', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482005/categories/fruits_fwjl4x.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Pastelería', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482018/categories/bakery_czpoga.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Carnes y pescados', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482028/categories/chicken_zcwj5g.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Lácteos y huevos', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482028/categories/eggs_dnf0as.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Bebidas', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482017/categories/softdrinks_orouom.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Licores', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482018/categories/alcohol_rg1lgq.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Cuidado personal', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482024/categories/personal-care_gzn8kc.jpg');
-- INSERT INTO public.category(category_name, image_url) VALUES ('Despensa', 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1666482022/categories/despensa_caaaxc.jpg');

-- * Product
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Guayaba Feijoa', '7029 A42 23', 500, 300, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Mango', '0316 R56 01', 2100, 250, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Manzana', '7923 T23 19', 700, 130, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Aguacate', '9322 Q33 02', 2500, 98, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Lechuga', '9742 S22 21', 4000, 86, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tomate', '0483 R00 97', 430, 290, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Pera', '9999 X10 01', 750, 210, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Apio', '3390 F29 45', 150, 115, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Papaya', '5291 J34 32', 4500, 73, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Limón', '7886 N18 32', 350, 425, true, 1);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Brownie', '6683 H15 20', 2500, 80, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Pan tajado', '5745 F05 47', 4500, 120, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Torta', '3831 D97 99', 10000, 35, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tortilla', '4335 Z33 84', 6400, 87, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tostadas', '6584 M19 25', 4000, 45, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Chocorramo', '4487 S00 97', 2000, 105, true, 2);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Salmón', '4546 A00 01', 28000, 55, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Punta de anca', '3678 E57 22', 12000, 32, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Posta', '8893 O01 03', 7800, 40, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Costilla de cerdo', '4534 Q12 88', 8600, 70, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tilapia', '5684 R53 02', 17000, 60, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Merluza', '3523 R04 00', 23000, 45, true, 3);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Leche de vaca', '2323 T56 33', 2500, 500, true, 4);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Queso', '7786 K19 56', 4000, 300, true, 4);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Huevos de gallina feliz', '3478 M74 01', 500, 500, true, 4);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Clara de huevo', '7932 R31 46', 3200, 200, true, 4);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Suero costeño', '5463 W23 33', 9000, 110, true, 4);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Agua', '8965 I32 11', 2000, 600, true, 5);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Jugo de naranja', '7445 T87 44', 7400, 200, true, 5);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Gaseosa Colombiana', '3434 R34 63', 3100, 175, true, 5);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Jugo de Lulo', '9753 W33 19', 8250, 630, true, 5);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tea', '9836 F35 69', 1900, 450, true, 5);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Cerveza', '3432 G67 21', 2500, 800, true, 6);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Tequila', '9529 E45 98', 65000, 764, true, 6);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Ron', '1947 R07 53', 55000, 240, true, 6);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Aguardiente Antioqueño', '3160 A54 94', 40000, 480, true, 6);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Vino', '7891 W46 95', 82000, 560, true, 6);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Crema dental', '6310 C99 73', 7500, 200, true, 7);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Jabón de manos', '9371 J14 75', 4900, 90, true, 7);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Enjuague bucal', '1942 T68 01', 12000, 105, true, 7);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Shampoo', '6789 W01 23', 9300, 200, true, 7);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Desodorante', '7333 S21 36', 6900, 85, true, 7);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Arroz', '4676 I83 00', 3500, 600, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Lentejas', '7333 S21 36', 3000, 560, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Harina', '7333 S21 36', 1800, 300, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Sal', '7333 S21 36', 1400, 500, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Aceite', '7333 S21 36', 6500, 135, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Cereal', '4673 K53 98', 7000, 75, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Frijol', '2745 F40 45', 8200, 270, true, 8);
-- INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, "categoryCategoryId") VALUES ('Café', '6351 R33 92', 7200, 400, true, 8);


-- * Customer
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('Nicolás García', 'Cl 3 # 33 - 33', '3104583224');
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('Andrés Lozano', 'Cl 1 # 11 - 11', '3462257293');
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('Raúl Altamirano', 'Cl 2 # 22 - 22', '3019392466');
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('Karen Melo', 'Cl 4 # 44 - 44', '3132423230');
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('David Mendoza', 'Cl 5 # 55 - 55', '3230320891');
-- INSERT INTO public.customer(full_name, address, phone) VALUES ('Alisson Miranda', 'Cl 6 # 66 - 66', '3026655743');

-- * Order
-- INSERT INTO public.order("customerCustomerId") VALUES (1);

-- * Order_detail
-- INSERT INTO public.order_detail(quantity, total, "productProductId", "orderOrderId") VALUES (10, 3000, 1, 1);
-- INSERT INTO public.order_detail(quantity, total, "productProductId", "orderOrderId") VALUES (1, 40000,36, 1);
-- INSERT INTO public.order_detail(quantity, total, "productProductId", "orderOrderId") VALUES (1, 9000, 27, 1);
-- INSERT INTO public.order_detail(quantity, total, "productProductId", "orderOrderId") VALUES (2, 16400, 49, 1);
-- INSERT INTO public.order_detail(quantity, total, "productProductId", "orderOrderId") VALUES (1, 4000, 24, 1);