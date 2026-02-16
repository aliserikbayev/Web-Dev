import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  price: number;
  rating: number;
  link: string;
  image: string;
  category: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedCategory: string = 'All';

  products: Product[] = [
    {
      name: 'Смартфон Apple iPhone 15 256Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 449945,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      category: 'Smartphones',
      likes: 0
    },
    {
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. В нем гармонично сочетаются стильный дизайн, материалы премиум-класса, топовая «начинка», камера профессионального уровня. Встроенный стилус S-Pen сделает новинку желанной покупкой для дизайнеров, художников и всех, кто любит использовать возможности смартфона на полную.',
      price: 495000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      category: 'Smartphones',
      likes: 0
    },
    {
      name: 'Смартфон Xiaomi Redmi Note 13 Pro+ 5G NFC 16 ГБ/512 ГБ черный',
      description: 'Xiaomi Redmi Note 13 Pro+ 5G NFC — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и безупречное качество.',
      price: 129990,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
      category: 'Smartphones',
      likes: 0
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4RU/A',
      description: 'Представляем Apple MacBook Air 13 2022 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M2 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений.',
      price: 799990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-2022-8gb-256gb-107334834/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
      category: 'Laptops',
      likes: 0
    },
    {
      name: 'Ноутбук ASUS ROG Strix G16 16" / 16 Гб / SSD 1000 Гб / DOS / G614JV-N4071 / 90NR0C61-M005R0',
      description: 'Получите больше кадров в секунду и добейтесь больше побед в играх – с ноутбуком ROG Strix G16. Он готов доминировать на полях виртуальных сражений за счет мощной конфигурации, скоростной накопитель и передовая оперативная память. Дисплейный мультиплексор в сочетании с технологией NVIDIA Advanced Optimus обеспечивает автоматическое переключение между режимами повышенной графической производительности и экономии заряда аккумулятора.',
      price: 999990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium',
      category: 'Laptops',
      likes: 0
    },
    {
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Иммерсивный игровой опыт в тонком форм-фактореПриготовьтесь встречать новую PlayStation 5 Slim. Она станет улучшенной во многих отношениях версией классической модели PS5, которая сможет предложить высокую скорость работы, более емкий накопитель для хранения игр и иных данных, а также ряд других фишек. Ее главные особенности - новый форм-фактор, который обеспечивает больший выбор и гибкость, а также подключаемый привод Blu-ray Ultra HD и твердотельный накопитель емкостью 1 ТБ.',
      price: 302500,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      category: 'Gaming',
      likes: 0
    },
    {
      name: 'Телевизор LG 55UA73006LA 140 см черный',
      description: 'LED-телевизор LG 55UA73006LA — погружение в мир ярких красок и безупречного качества изображения с диагональю 140 см.',
      price: 279990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lg-55ua73006la-140-sm-chernyi-147936570/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/p50/72356962.jpg?format=gallery-medium',
      category: 'Appliances',
      likes: 0
    },
    {
      name: 'Пылесос Dyson V15 Detect Absolute SV47 серебристый',
      description: 'благодаря цифровому двигателю Dyson Hyperdymium™, вращающемуся со скоростью до 125 000 об/мин.',
      price: 349990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
      category: 'Appliances',
      likes: 0
    },
    {
      name: 'МФУ HP LaserJet 137fnw',
      description: 'HP LaserJet 137fnw - эффективное и производительное МФУ по доступной цене. Печатайте, сканируйте, копируйте, работайте с факсом и получайте результаты высокого качества, а также используйте возможности печати и сканирования прямо с телефона. Идеальный выбор для рабочих групп из 1–5 пользователей, печатающих не более 1500 страниц в месяц.',
      price: 125990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/mfu-hp-laserjet-137fnw-1600614/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h56/63801690718238.jpg?format=gallery-medium',
      category: 'Appliances',
      likes: 0
    },
    {
      name: 'Наушники Air pro 2 белый',
      description: 'в использовании. Эти беспроводные наушники обеспечивают',
      price: 149990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      category: 'Accessories',
      likes: 0
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  likeProduct(product: Product) {
    product.likes++;
  }

  shareOnWhatsApp(product: Product) {
    const message = `Check out this product on Kaspi: ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}
