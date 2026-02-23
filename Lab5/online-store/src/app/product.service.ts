import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 256Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 449945,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. В нем гармонично сочетаются стильный дизайн, материалы премиум-класса, топовая «начинка», камера профессионального уровня. Встроенный стилус S-Pen сделает новинку желанной покупкой для дизайнеров, художников и всех, кто любит использовать возможности смартфона на полную.',
      price: 495000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi Note 13 Pro+ 5G NFC 16 ГБ/512 ГБ черный',
      description: 'Xiaomi Redmi Note 13 Pro+ 5G NFC — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и безупречное качество.',
      price: 129990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
      categoryId: 1,
      likes: 0
    },
        {
      id: 4,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования.',
      price: 52900,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/256 ГБ серый',
      description: 'Samsung Galaxy A56 5G — мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником в повседневных задачах и развлечениях.',
      price: 208999,
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
      categoryId: 1,
      likes: 0
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4RU/A',
      description: 'Представляем Apple MacBook Air 13 2022 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M2 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений.',
      price: 799990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-2022-8gb-256gb-107334834/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ROG Strix G16 16" / 16 Гб / SSD 1000 Гб / DOS / G614JV-N4071 / 90NR0C61-M005R0',
      description: 'Получите больше кадров в секунду и добейтесь больше побед в играх – с ноутбуком ROG Strix G16. Он готов доминировать на полях виртуальных сражений за счет мощной конфигурации, скоростной накопитель и передовая оперативная память. Дисплейный мультиплексор в сочетании с технологией NVIDIA Advanced Optimus обеспечивает автоматическое переключение между режимами повышенной графической производительности и экономии заряда аккумулятора.',
      price: 999990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
      description: 'PRYME N5095 идеально подойдёт для студентов, офисных сотрудников и всех, кто ценит баланс между производительностью и мобильностью. Он легко справляется с повседневными задачами — будь то работа с документами, интернет-сёрфинг, онлайн-обучение или просмотр фильмов.',
      price: 189990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      categoryId: 2,
      likes: 0
    },
        {
      id: 9,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, однако это устройство достаточно мощное. Данная модель, оснащенная полноценным 4-х ядерным процессором Intel N4200, оперативной памятью объемом 12 ГБ и SSD накопителем емкостью 512 ГБ. Ноутбуки HYDRA оснащен множеством передовых технологий, но лучше всего работает самый простой подход. Именно поэтому наши ноутбуки снабжаются идеальным соотношением (Процессор – ОЗУ – SSD). Данный ноутбук идеально подойдет для учёбы\ работы\ для рядовых сотрудников малых предприятий\ бухгалтеров и ещё множество других задач.',
      price: 135000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 Pro / A325-45 / ZN.N01SI.03K.',
      description: 'Ноутбук Acer Aspire 3 A325-45 с экраном 15.6 дюймов – отличное решение для работы и учебы. Выпущен в 2025 году, оснащен 8 ГБ оперативной памяти и быстрым SSD NVME на 256 ГБ. На устройстве предустановлены Windows 11 Pro, что позволяет сразу приступить к продуктивной работе.',
      price: 167535,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      categoryId: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Наушники Apple EarPods Lightning белый',
      description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей. Динамики наушников EarPods специально спроектированы так, чтобы обеспечить минимальные потери звука и наилучшее звучание.',
      price: 9608,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Наушники GERLAX GH-34 черный',
      description: 'Наушники GERLAX GH-34 — это идеальный выбор для тех, кто ценит высокое качество звука и удобство использования . С беспроводным подключением и современным дизайном, они станут вашим незаменимым спутником в любых задачах.✨ Особенности:- ✅ Частотный диапазон 20 - 40000 Гц — наслаждайтесь чистым и насыщенным звуком.- 🔒 Bluetooth 5.3 — стабильное соединение на расстоянии до 10 метров.- 🌱 Емкость аккумулятора 350 мАч — до 7 часов прослушивания музыки без подзарядки.- 🎤 Фиксированный микрофон — идеален для звонков и общения.Эти наушники подойдут для студентов , офисных работников и любителей музыки',
      price: 349990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Наушники Razer Blackshark V2 X белый',
      description: 'Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением. Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками.',
      price: 15500,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-belyi-104669405/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Наушники HYDRA Home Minor бежевый',
      description: 'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука в любом месте и в любое время. Эти беспроводные наушники обеспечивают чистый звук и долгую работу без проводов.',
      price: 4990,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      categoryId: 3,
      likes: 0
    },
     {
      id: 15,
      name: 'Наушники Quezqa ZQ Air черный',
      description: '🎧 ZQ Air by QUEZQA — полноразмерные беспроводные наушники для любых устройств Подходят для ТВ, ноутбука, смартфона, планшета и консоли. ✅ Мягкие амбушюры + регулируемое оголовье — комфорт даже при длительном использовании ✅ Складная конструкция + поворотные 90° чаши — удобно брать с собой ✅ Высокая шумоизоляция — помогает отключиться от внешнего шума ✅ Боковое управление — громкость, треки, пауза, звонки прямо на наушниках ✅ Универсальное подключение — совместимы с любыми гаджетами ZQ Air — звук, который становится личным пространством.',
      price: 7499,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/naushniki-quezqa-zq-air-chernyi-113646355/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p50/p12/52840575.png?format=gallery-medium',
      categoryId: 3,
      likes: 0
    },
        {
      id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 204132,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
      description: 'Планшет Samsung Galaxy Tab A9+ 5G — мощное устройство для работы и развлечений, предлагающее высокую производительность и широкие возможности подключения.',
      price: 179997,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Планшет Samsung Galaxy Tab A9+ 11 дюйм 8 Гб/128 Гб серый',
      description: 'Надежный и стильный планшет! Samsung Galaxy Tab A9+ 5G - передовой планшет с роскошным 11-дюймовым дисплеем, который привносит новые горизонты в мир развлечений и производительности. Под крышкой этого устройства находятся два процессора - два высокопроизводительных ядра Cortex-A78 P с тактовой частотой 2,2 ГГц и шесть энергоэффективных ядер Cortex-A55 E, работающих на 1,8 ГГц. Эта мощная комбинация обеспечивает плавную и быструю работу, независимо от того, выполняете ли вы задачи повседневного использования или запускаете требовательные приложения.',
      price: 177265,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб серый',
      description: 'Samsung Galaxy Tab A9 LTE — универсальный планшет для работы, учебы и развлечений, сочетающий в себе производительность, портативность и стильный дизайн.',
      price: 119468,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
      categoryId: 4,
      likes: 0
    },
     {
      id: 20,
      name: 'Планшет Umiio S24 ULTRA 10.1 дюйм 16 Гб/512 Гб черный',
      description: 'Уважаемые покупатели, данный планшет подходит для повседневного использования, просмотра видео, загрузки "легких" игр, использование в режиме сотового телефона, рисования, для печатания, учебы, загрузки электронных книг, прослушивания музыки и прочее. Планшет является достаточно бюджетным, в хорошей комплектации. Цена соответствует общему качеству товара. Обращаем ваше внимание что планшет не поддерживает "тяжелые" игры типа РОБЛОКС, PUBG и другие мультисерверные игры.',
      price: 42399,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/umiio-s24-ultra-10-1-djuim-16-gb-512-gb-chernyi-119999371/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h0b/86180659036190.jpg?format=gallery-medium',
      categoryId: 4,
      likes: 0
    },
    
  ];

  constructor() {}
	
  getProducts(): Product[] {
  return this.products;
}
  
  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
