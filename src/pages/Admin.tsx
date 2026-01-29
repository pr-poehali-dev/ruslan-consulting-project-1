import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface SiteContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  about: {
    name: string;
    description1: string;
    description2: string;
    stats: { value: string; label: string }[];
  };
  services: {
    title: string;
    description: string;
    icon: string;
    price: string;
  }[];
  portfolio: {
    name: string;
    location: string;
    result: string;
    image: string;
  }[];
  testimonials: {
    name: string;
    position: string;
    text: string;
    avatar: string;
  }[];
  blog: {
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }[];
  contacts: {
    email: string;
    phone: string;
    location: string;
  };
}

const defaultContent: SiteContent = {
  hero: {
    badge: '15 лет в ресторанном бизнесе',
    title: 'Увеличьте прибыль вашего бара или ресторана',
    subtitle: 'Наставник с 15-летним опытом в ресторанном бизнесе. Помогаю создать уникальные впечатления и увеличить прибыль вашего бара или ресторана.'
  },
  about: {
    name: 'Руслан Фатуллаев',
    description1: 'За 15 лет в индустрии я открыл 12 успешных баров и ресторанов, обучил более 500 специалистов и помог десяткам заведений выйти из кризиса.',
    description2: 'Моя философия проста: каждое заведение должно создавать уникальный опыт для гостей и при этом быть прибыльным. Я не даю шаблонных решений — каждый проект индивидуален.',
    stats: [
      { value: '15+', label: 'лет опыта' },
      { value: '50+', label: 'проектов' },
      { value: '500+', label: 'специалистов' }
    ]
  },
  services: [
    {
      title: 'Аудит бара или ресторана',
      description: 'Полный анализ текущих процессов, выявление точек роста и зон оптимизации',
      icon: 'Search',
      price: 'от 50 000 ₽'
    },
    {
      title: 'Разработка концепции',
      description: 'Создание уникальной концепции заведения с учётом целевой аудитории и рынка',
      icon: 'Lightbulb',
      price: 'от 80 000 ₽'
    },
    {
      title: 'Обучение персонала',
      description: 'Тренинги для официантов, барменов и управляющих по стандартам сервиса',
      icon: 'Users',
      price: 'от 30 000 ₽'
    },
    {
      title: 'Меню-инжиниринг',
      description: 'Оптимизация меню для увеличения среднего чека и прибыльности',
      icon: 'FileText',
      price: 'от 40 000 ₽'
    },
    {
      title: 'Антикризисное управление',
      description: 'Помощь в сложных ситуациях: падение выручки, текучка кадров, конфликты',
      icon: 'Shield',
      price: 'индивидуально'
    },
    {
      title: 'Операционное сопровождение',
      description: 'Регулярная поддержка и консультации на всех этапах работы заведения',
      icon: 'HeartHandshake',
      price: 'от 100 000 ₽/мес'
    }
  ],
  portfolio: [
    {
      name: 'Bar 812',
      location: 'Москва',
      result: '+45% выручки за 6 месяцев',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80'
    },
    {
      name: 'Ресторан "Seasons"',
      location: 'Санкт-Петербург',
      result: 'Открытие с нуля, окупаемость за 8 месяцев',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
    },
    {
      name: 'Craft Beer House',
      location: 'Казань',
      result: 'Рост среднего чека на 30%',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80'
    }
  ],
  testimonials: [
    {
      name: 'Алексей Иванов',
      position: 'Владелец сети баров "Urban"',
      text: 'Руслан помог нам выстроить систему управления, которая работает как часы. Прибыль выросла, персонал стал стабильнее.',
      avatar: 'AI'
    },
    {
      name: 'Мария Петрова',
      position: 'Управляющая ресторана "Прованс"',
      text: 'После аудита и внедрения рекомендаций мы увидели результат уже через месяц. Рекомендую!',
      avatar: 'МП'
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Сооснователь Craft Beer House',
      text: 'Профессионал своего дела. Руслан не просто даёт советы, а реально погружается в бизнес.',
      avatar: 'ДС'
    }
  ],
  blog: [
    {
      title: '5 ошибок при запуске бара',
      date: '15 января 2026',
      excerpt: 'Разбираем самые частые ошибки начинающих рестораторов и как их избежать...',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80'
    },
    {
      title: 'Как увеличить средний чек на 25%',
      date: '10 января 2026',
      excerpt: 'Простые техники меню-инжиниринга, которые работают в любом заведении...',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80'
    },
    {
      title: 'Тренды ресторанного бизнеса 2026',
      date: '5 января 2026',
      excerpt: 'Что будет актуально в этом году: от концепций до технологий обслуживания...',
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80'
    }
  ],
  contacts: {
    email: 'ruslan@consulting.ru',
    phone: '+7 (999) 123-45-67',
    location: 'Москва, работаю по всей России'
  }
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const { toast } = useToast();

  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      toast({
        title: 'Успешный вход',
        description: 'Добро пожаловать в панель управления!'
      });
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный пароль',
        variant: 'destructive'
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setPassword('');
  };

  const saveContent = () => {
    localStorage.setItem('siteContent', JSON.stringify(content));
    toast({
      title: 'Сохранено!',
      description: 'Изменения успешно сохранены'
    });
  };

  const updateHero = (field: keyof SiteContent['hero'], value: string) => {
    setContent({ ...content, hero: { ...content.hero, [field]: value } });
  };

  const updateAbout = (field: string, value: string) => {
    setContent({ ...content, about: { ...content.about, [field]: value } });
  };

  const updateService = (index: number, field: string, value: string) => {
    const newServices = [...content.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setContent({ ...content, services: newServices });
  };

  const updatePortfolio = (index: number, field: string, value: string) => {
    const newPortfolio = [...content.portfolio];
    newPortfolio[index] = { ...newPortfolio[index], [field]: value };
    setContent({ ...content, portfolio: newPortfolio });
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    const newTestimonials = [...content.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setContent({ ...content, testimonials: newTestimonials });
  };

  const updateBlog = (index: number, field: string, value: string) => {
    const newBlog = [...content.blog];
    newBlog[index] = { ...newBlog[index], [field]: value };
    setContent({ ...content, blog: newBlog });
  };

  const updateContacts = (field: keyof SiteContent['contacts'], value: string) => {
    setContent({ ...content, contacts: { ...content.contacts, [field]: value } });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lock" size={40} className="text-white" />
            </div>
            <CardTitle className="text-3xl">Панель управления</CardTitle>
            <CardDescription>Введите пароль для доступа</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Введите пароль"
                className="mt-2"
              />
            </div>
            <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-primary to-accent">
              <Icon name="LogIn" className="mr-2" size={20} />
              Войти
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Пароль по умолчанию: admin123
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Settings" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Панель управления</h1>
              <p className="text-sm text-muted-foreground">Редактирование контента сайта</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={saveContent} className="bg-gradient-to-r from-primary to-accent">
              <Icon name="Save" className="mr-2" size={20} />
              Сохранить изменения
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <Icon name="LogOut" className="mr-2" size={20} />
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:inline-grid">
            <TabsTrigger value="hero">Главная</TabsTrigger>
            <TabsTrigger value="about">Обо мне</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
            <TabsTrigger value="testimonials">Отзывы</TabsTrigger>
            <TabsTrigger value="blog">Блог</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Главный экран (Hero)</CardTitle>
                <CardDescription>Первое, что видят посетители сайта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="badge">Бейдж (над заголовком)</Label>
                  <Input
                    id="badge"
                    value={content.hero.badge}
                    onChange={(e) => updateHero('badge', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="title">Заголовок</Label>
                  <Input
                    id="title"
                    value={content.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subtitle">Подзаголовок</Label>
                  <Textarea
                    id="subtitle"
                    value={content.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Обо мне</CardTitle>
                <CardDescription>Информация о вас и вашем опыте</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={content.about.name}
                    onChange={(e) => updateAbout('name', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="desc1">Описание (абзац 1)</Label>
                  <Textarea
                    id="desc1"
                    value={content.about.description1}
                    onChange={(e) => updateAbout('description1', e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="desc2">Описание (абзац 2)</Label>
                  <Textarea
                    id="desc2"
                    value={content.about.description2}
                    onChange={(e) => updateAbout('description2', e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <div className="grid gap-6">
              {content.services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Услуга {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Название</Label>
                      <Input
                        value={service.title}
                        onChange={(e) => updateService(index, 'title', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Описание</Label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => updateService(index, 'description', e.target.value)}
                        rows={2}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Цена</Label>
                      <Input
                        value={service.price}
                        onChange={(e) => updateService(index, 'price', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <div className="grid gap-6">
              {content.portfolio.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Проект {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Название</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updatePortfolio(index, 'name', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Локация</Label>
                      <Input
                        value={project.location}
                        onChange={(e) => updatePortfolio(index, 'location', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Результат</Label>
                      <Input
                        value={project.result}
                        onChange={(e) => updatePortfolio(index, 'result', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>URL изображения</Label>
                      <Input
                        value={project.image}
                        onChange={(e) => updatePortfolio(index, 'image', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="grid gap-6">
              {content.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Отзыв {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Имя</Label>
                      <Input
                        value={testimonial.name}
                        onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Должность</Label>
                      <Input
                        value={testimonial.position}
                        onChange={(e) => updateTestimonial(index, 'position', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Текст отзыва</Label>
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Аватар (инициалы)</Label>
                      <Input
                        value={testimonial.avatar}
                        onChange={(e) => updateTestimonial(index, 'avatar', e.target.value)}
                        className="mt-2"
                        maxLength={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="grid gap-6">
              {content.blog.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Статья {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Заголовок</Label>
                      <Input
                        value={post.title}
                        onChange={(e) => updateBlog(index, 'title', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Дата</Label>
                      <Input
                        value={post.date}
                        onChange={(e) => updateBlog(index, 'date', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Краткое описание</Label>
                      <Textarea
                        value={post.excerpt}
                        onChange={(e) => updateBlog(index, 'excerpt', e.target.value)}
                        rows={2}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>URL изображения</Label>
                      <Input
                        value={post.image}
                        onChange={(e) => updateBlog(index, 'image', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
                <CardDescription>Как с вами связаться</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={content.contacts.email}
                    onChange={(e) => updateContacts('email', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    value={content.contacts.phone}
                    onChange={(e) => updateContacts('phone', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Локация</Label>
                  <Input
                    id="location"
                    value={content.contacts.location}
                    onChange={(e) => updateContacts('location', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Как это работает?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Измените нужные поля в любом разделе</li>
                  <li>• Нажмите "Сохранить изменения" для сохранения</li>
                  <li>• Перейдите на главную страницу — изменения будут видны сразу</li>
                  <li>• Данные хранятся в браузере (localStorage)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
