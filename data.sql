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
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Guayaba Feijoa', '7029 A42 23', 500, 300, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654793/products/guayaba-min_ili80d.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Mango', '0316 R56 01', 2100, 250, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790573/products/mango-min_rqxwb8.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Manzana', '7923 T23 19', 700, 130, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790574/products/manzana-min_rmvinj.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Aguacate', '9322 Q33 02', 2500, 98, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654790/products/aguacate-min_a7awyi.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Lechuga', '9742 S22 21', 4000, 86, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/lechuga-min_ymyv0s.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Tomate', '0483 R00 97', 430, 290, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790577/products/tomate-min_upubd6.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Pera', '9999 X10 01', 750, 210, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790574/products/pera-min_ypms27.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Apio', '3390 F29 45', 150, 115, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654792/products/apio-min_w51eob.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Papaya', '5291 J34 32', 4500, 73, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790574/products/papaya-min_a6w8eu.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Limón', '7886 N18 32', 350, 425, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790572/products/limon-min_psap5t.jpg', 1);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Brownie', '6683 H15 20', 2500, 80, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654791/products/brownie-min_trkp11.jpg', 2);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Pan tajado', '5745 F05 47', 4500, 120, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668791091/products/pantajado-min_aylhsm.jpg', 2);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Tortilla', '4335 Z33 84', 6400, 87, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790577/products/tortilla-min_wdty4s.jpg', 2);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Tostadas', '6584 M19 25', 4000, 45, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790577/products/tostadas-min_lmh5zh.jpg', 2);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Chocorramo', '4487 S00 97', 2000, 105, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654790/products/chocoramo-min_yuy31h.jpg', 2);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Carne de res', '8893 O01 03', 13000, 40, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790571/products/carneres-min_k6ajyt.jpg', 3);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Pollo', '9912 W01 12', 7500, 25, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790574/products/pollo-min_mms1vp.jpg', 3);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Costilla de cerdo', '4534 Q12 88', 8600, 70, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654791/products/cerdo-min_cnph4m.jpg', 3);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Leche de vaca', '2323 T56 33', 2500, 500, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654793/products/leche-min_ko5gdm.jpg', 4);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Queso', '7786 K19 56', 4000, 300, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790575/products/queso-min_ht2rp8.jpg', 4);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Huevos de gallina', '3478 M74 01', 500, 500, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/huevo-min_cfnbmx.jpg', 4);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Agua', '8965 I32 11', 2000, 600, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790569/products/agua-min_flbooz.jpg', 5);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Jugo de naranja', '7445 T87 44', 7400, 200, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/jugo-min_p4pp97.jpg', 5);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Gaseosa Colombiana', '3434 R34 63', 3100, 175, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654791/products/colombiana-min_uwahz2.jpg', 5);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Jugo de Lulo', '9753 W33 19', 8250, 630, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790571/products/jugolulo-min_a9n0sb.jpg', 5);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('SunTea', '9836 F35 69', 1200, 200, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790577/products/suntea-min_vucw0o.jpg', 5);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Aguardiente Taparoja', '3160 A54 94', 20000, 75, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790570/products/aguardiente-min_vkycg5.jpg', 6);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Aguardiente Nectar', '5823 B14 00', 25000, 80, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790570/products/aguardientenectar-min_rpnqiq.jpg', 6);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Crema dental', '6310 C99 73', 7500, 200, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654792/products/cremadientes-min_gtrnhr.jpg', 7);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Jabón de manos', '9371 J14 75', 4900, 90, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/jabon-min_djrvec.jpg', 7);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Enjuague bucal', '1942 T68 01', 12000, 105, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654792/products/enjuaguebucal-min_frz1ev.jpg', 7);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Shampoo', '6789 W01 23', 9300, 200, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790576/products/shampoo-min_bx16pe.jpg', 7);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Desodorante', '7333 S21 36', 6900, 85, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654792/products/desodorante-min_fm8c3s.jpg', 7);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Arroz', '4676 I83 00', 3500, 600, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654791/products/arroz-min_fu0qxf.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Lentejas', '7333 S21 36', 3000, 560, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/lenteja-min_zjmrak.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Harina', '7333 S21 36', 1800, 300, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654794/products/harina-min_gemscy.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Sal', '7333 S21 36', 1400, 500, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790575/products/sal-min_an20ql.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Aceite', '7333 S21 36', 6500, 135, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790569/products/aceitevegetal-min_jddxnm.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Cereal', '4673 K53 98', 7000, 75, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790571/products/cereal-min_d70heh.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Frijol', '2745 F40 45', 8200, 270, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668654792/products/frijol-min_pbqb4c.jpg', 8);
INSERT INTO public.product(product_name, bar_code, product_price, stock_quantity, status, image_url, "categoryCategoryId") VALUES ('Café', '6351 R33 92', 7200, 400, true, 'https://res.cloudinary.com/dmwa2i3mk/image/upload/v1668790570/products/cafe-min_syvlt8.jpg', 8);


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