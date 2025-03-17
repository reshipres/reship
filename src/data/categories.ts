export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: 'mice',
    name: 'Мыши',
    slug: 'mice',
    image: 'https://maxgaming.com/img/cms/Categories/Mice.jpg',
    description: 'Игровые мыши с высокой точностью и эргономичным дизайном',
    featured: true
  },
  {
    id: 'keyboards',
    name: 'Клавиатуры',
    slug: 'keyboards',
    image: 'https://maxgaming.com/img/cms/Categories/Keyboards.jpg',
    description: 'Механические и мембранные клавиатуры для игр и работы',
    featured: true
  },
  {
    id: 'mousepads',
    name: 'Коврики',
    slug: 'mousepads',
    image: 'https://maxgaming.com/img/cms/Categories/Mousepads.jpg',
    description: 'Игровые поверхности разных размеров и текстур',
    featured: true
  },
  {
    id: 'headsets',
    name: 'Наушники',
    slug: 'headsets',
    image: 'https://maxgaming.com/img/cms/Categories/Headsets.jpg',
    description: 'Игровые гарнитуры с качественным звуком и микрофоном',
    featured: true
  },
  {
    id: 'controllers',
    name: 'Контроллеры',
    slug: 'controllers',
    image: 'https://maxgaming.com/img/cms/Categories/Controllers.jpg',
    description: 'Игровые геймпады и контроллеры для ПК и консолей',
    featured: true
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    slug: 'accessories',
    image: 'https://maxgaming.com/img/cms/Categories/Accessories.jpg',
    description: 'Дополнительные аксессуары для улучшения игрового сетапа',
    featured: true
  },
  {
    id: 'monitors',
    name: 'Мониторы',
    slug: 'monitors',
    image: 'https://maxgaming.com/img/cms/Categories/Monitors.jpg',
    description: 'Игровые мониторы с высокой частотой обновления',
    featured: false
  },
  {
    id: 'switches',
    name: 'Переключатели',
    slug: 'switches',
    image: 'https://maxgaming.com/img/cms/Categories/Switches.jpg',
    description: 'Механические переключатели для клавиатур различных типов',
    featured: false
  }
];