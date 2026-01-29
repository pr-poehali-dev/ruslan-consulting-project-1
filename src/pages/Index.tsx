import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
    badge: '16 лет в ресторанном бизнесе',
    title: 'Увеличьте прибыль вашего бара или ресторана',
    subtitle: 'Наставник с 16-летним опытом в ресторанном бизнесе. Помогаю создать уникальные впечатления и увеличить прибыль вашего бара или ресторана.'
  },
  about: {
    name: 'Руслан Фатуллаев',
    description1: 'Более 16-ти лет работаю в индустрии ресторанного гостеприимства и барной индустрии. Открыл и вывел на лидирующие позиции 50+ заведений. Эксперт по развитию бизнеса: свыше 600 часов профильной консультационной поддержки. Бизнес‑тренер: подготовил и сертифицировал команду из 150+ специалистов и управленцев. Провёл 100+ аудитов в сегментах общепита: рестораны, кофейни, бары. Провёл 70+ вебинаров онлайн‑сессий и 100 офлайн‑материалов (с выступлениями в Саратове, Оренбурге, Мытищах, Москве, Астрахани, Владимире, Тюменской области и др.). Помогал выводить на стабильную позицию более 25 стабильно убыточных объектов. Спикер школы Upskill. С радостью помогу открыть, развить и вывести в ТОП ваше заведение!',
    description2: 'Моя философия проста: каждое заведение должно создавать уникальный опыт для гостей и при этом быть прибыльным. Я не даю шаблонных решений — каждый проект индивидуален.',
    stats: [
      { value: '16+', label: 'лет опыта' },
      { value: '50+', label: 'заведений' },
      { value: '150+', label: 'специалистов' }
    ]
  },
  services: [
    {
      title: 'Аудит бара или ресторана',
      description: 'Проведение детального аудита бизнес-процессов и оценка текущих показателей для выявления точек роста и повышения прибыльности. Выявление слабых мест в работе заведения. Оптимизация затрат и увеличение доходов. Рекомендации по улучшению гостевого сервиса.',
      icon: 'Search',
      price: 'индивидуально'
    },
    {
      title: 'Разработка концепции',
      description: 'Создание уникальной концепции заведения с учётом целевой аудитории и рынка. План повышения лояльности гостей. Повышение эффективности маркетинга. Увеличение среднего чека и потока гостей.',
      icon: 'Lightbulb',
      price: 'индивидуально'
    },
    {
      title: 'Обучение персонала',
      description: 'Проведение тренингов и мастер-классов для официантов, барменов и управляющих, направленных на повышение квалификации. Улучшение сервиса и коммуникации с гостями. Рост мотивации и профессионализма команды. Снижение ошибок в работе и повышение эффективности. Тренинг по коммуникационной, межличностной, социальной и 12 когнитивных искажений психологии.',
      icon: 'Users',
      price: 'индивидуально'
    },
    {
      title: 'Меню-инжиниринг',
      description: 'Оптимизация меню для увеличения среднего чека и прибыльности. Анализ и оптимизация меню и барной карты для повышения привлекательности и увеличения среднего чека и рентабельности. Увеличение прибыльности блюд и напитков. Актуальные тренды и сезонные предложения. Повышение удовлетворенности гостей.',
      icon: 'FileText',
      price: 'индивидуально'
    },
    {
      title: 'Антикризисное управление',
      description: 'Разработка и внедрение мер по выходу из кризисных ситуаций с целью стабилизации и восстановления бизнеса. Падение выручки, текучка кадров, конфликты. Минимизация финансовых потерь. Быстрая адаптация к изменяющимся условиям рынка. Сохранение репутации и лояльности гостей.',
      icon: 'Shield',
      price: 'индивидуально'
    },
    {
      title: 'Операционное сопровождение / Наставничество',
      description: 'Регулярная поддержка и консультации на всех этапах работы заведения',
      icon: 'HeartHandshake',
      price: 'индивидуально'
    }
  ],
  portfolio: [
    {
      name: 'Гарда Бар',
      location: 'Москва',
      result: 'Концепция и запуск заведения',
      image: 'https://avatars.mds.yandex.net/get-altay/13052575/2a000001926f1659819c9e69ba53fe825b42/XXL_height'
    },
    {
      name: 'Ресторан Панчетта',
      location: 'Москва',
      result: 'Разработка концепции и обучение персонала',
      image: 'https://avatars.mds.yandex.net/get-altay/492154/2a0000016286dde0cbb9cbf79fe70acc6df4/XXXL'
    },
    {
      name: 'Кофейня Алхимия кофе',
      location: 'Москва',
      result: 'Полный аудит и оптимизация процессов',
      image: 'https://avatars.mds.yandex.net/get-altay/15291179/2a00000199cdd2cd227d9764b83573ec2901/XXXL'
    }
  ],
  testimonials: [
    {
      name: 'Аркадий',
      position: 'Владелец Гарда Бара',
      text: 'Руслан помог нам выстроить систему управления, которая работает как часы. Прибыль выросла, персонал стал стабильнее.',
      avatar: 'А'
    },
    {
      name: 'Мария Александрова',
      position: 'Управляющая ресторана "Жара"',
      text: 'После аудита и внедрения рекомендаций мы увидели результат уже через месяц. Рекомендую!',
      avatar: 'МА'
    },
    {
      name: 'Виктория Сергеевна',
      position: 'Основатель Алхимии практики и Алхимии кофе',
      text: 'Профессионал своего дела. Руслан не просто даёт советы, а реально погружается в бизнес.',
      avatar: 'ВС'
    }
  ],
  blog: [
    {
      title: '5 ошибок при запуске бара',
      date: '1 марта 2026',
      excerpt: 'Разбираем самые частые ошибки начинающих рестораторов и как их избежать...',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80'
    },
    {
      title: 'Как увеличить средний чек на 25%',
      date: '22 февраля 2026',
      excerpt: 'Простые техники меню-инжиниринга, которые работают в любом заведении...',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80'
    },
    {
      title: 'Тренды ресторанного бизнеса 2026',
      date: '12 февраля 2026',
      excerpt: 'Что будет актуально в этом году: от концепций до технологий обслуживания...',
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80'
    }
  ],
  contacts: {
    email: 'fatullayev_1991@mail.ru',
    phone: '+7 977 390-87-20',
    location: 'Москва, работаю по всей России и СНГ'
  }
};

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [projectType, setProjectType] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('');
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const timeSlots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const servicePrices: { [key: string]: number } = {
    'Аудит бара или ресторана': 150000,
    'Разработка концепции': 300000,
    'Обучение персонала': 80000,
    'Меню-инжиниринг': 120000,
    'Антикризисное управление': 250000,
    'Операционное сопровождение / Наставничество': 200000
  };

  const projectTypeMultiplier: { [key: string]: number } = {
    'Новое заведение': 1.3,
    'Действующий бизнес': 1.0,
    'Франшиза': 1.2
  };

  const teamSizeMultiplier: { [key: string]: number } = {
    'До 10 человек': 1.0,
    '10-30 человек': 1.3,
    '30+ человек': 1.6
  };

  const toggleService = (index: number) => {
    setSelectedServices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const calculateTotal = () => {
    let baseTotal = selectedServices.reduce((sum, index) => {
      const serviceTitle = content.services[index].title;
      return sum + (servicePrices[serviceTitle] || 0);
    }, 0);

    if (projectType && projectTypeMultiplier[projectType]) {
      baseTotal *= projectTypeMultiplier[projectType];
    }

    if (teamSize && teamSizeMultiplier[teamSize]) {
      baseTotal *= teamSizeMultiplier[teamSize];
    }

    return Math.round(baseTotal);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            RUSLAN FATULLAEV
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Запись на консультацию</DialogTitle>
                <DialogDescription>
                  Выберите удобную дату и время для встречи
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 py-4">
                <div>
                  <h3 className="font-semibold mb-4">Выберите дату</h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Выберите время</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time ? 'bg-primary' : ''}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {date && selectedTime && (
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-2">Выбранное время:</p>
                      <p className="text-lg">
                        {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} в {selectedTime}
                      </p>
                      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent">
                        Подтвердить запись
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
            {content.hero.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {content.hero.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Выберите удобную дату и время для встречи
                  </DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div>
                    <h3 className="font-semibold mb-4">Выберите дату</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Выберите время</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? 'default' : 'outline'}
                          onClick={() => setSelectedTime(time)}
                          className={selectedTime === time ? 'bg-primary' : ''}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    {date && selectedTime && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="text-sm font-semibold mb-2">Выбранное время:</p>
                        <p className="text-lg">
                          {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} в {selectedTime}
                        </p>
                        <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent">
                          Подтвердить запись
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Обо мне</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {content.about.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {content.about.description1}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {content.about.description2}
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {content.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6b1776a5-5ad4-4d59-939e-e956f4115038/bucket/bf4526f3-7352-4a21-b1d9-f0be865f0623.jpg" 
                alt="Руслан Фатуллаев" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Чем я могу помочь</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для ресторанного бизнеса на любом этапе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" className="group-hover:text-primary">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты моей работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Icon name="TrendingUp" size={20} />
                    <span>{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Полезные материалы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делюсь опытом и знаниями о ресторанном бизнесе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.blog.map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardDescription className="text-sm mb-2">{post.date}</CardDescription>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Калькулятор</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Рассчитайте стоимость</h2>
            <p className="text-xl text-muted-foreground">
              Выберите нужные услуги и получите предварительную оценку
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="CheckSquare" size={24} className="text-primary" />
                  Выберите услуги
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {content.services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => toggleService(index)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedServices.includes(index)
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">от {formatPrice(servicePrices[service.title] || 0)} ₽</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedServices.includes(index)
                            ? 'border-primary bg-primary'
                            : 'border-border'
                        }`}>
                          {selectedServices.includes(index) && (
                            <Icon name="Check" size={16} className="text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Building2" size={24} className="text-primary" />
                  Тип проекта
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.keys(projectTypeMultiplier).map((type) => (
                    <div
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all text-center ${
                        projectType === type
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h4 className="font-semibold">{type}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  Размер команды
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.keys(teamSizeMultiplier).map((size) => (
                    <div
                      key={size}
                      onClick={() => setTeamSize(size)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all text-center ${
                        teamSize === size
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h4 className="font-semibold">{size}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Примерная стоимость проекта</p>
                      <p className="text-4xl font-bold text-primary">{formatPrice(calculateTotal())} ₽</p>
                    </div>
                    <Dialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog}>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                          <Icon name="Send" className="mr-2" size={20} />
                          Получить точный расчёт
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Запрос на точный расчёт</DialogTitle>
                          <DialogDescription>
                            Оставьте контакты, и я свяжусь с вами для обсуждения деталей
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm font-semibold mb-2">Выбранные услуги:</p>
                            <ul className="text-sm space-y-1">
                              {selectedServices.map(index => (
                                <li key={index}>• {content.services[index].title}</li>
                              ))}
                            </ul>
                            {projectType && <p className="text-sm mt-2">Тип: {projectType}</p>}
                            {teamSize && <p className="text-sm">Команда: {teamSize}</p>}
                            <p className="text-lg font-bold text-primary mt-3">≈ {formatPrice(calculateTotal())} ₽</p>
                          </div>
                          <input 
                            type="text" 
                            placeholder="Ваше имя" 
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <input 
                            type="tel" 
                            placeholder="Телефон" 
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <Button className="w-full bg-gradient-to-r from-primary to-accent">
                            <Icon name="Send" className="mr-2" size={20} />
                            Отправить заявку
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Итоговая стоимость рассчитывается индивидуально после детального обсуждения задач
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground">
              Обсудим ваш проект и найдём решение
            </p>
          </div>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">{content.contacts.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">{content.contacts.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Локация</h3>
                    <p className="text-muted-foreground">{content.contacts.location}</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full hover:bg-green-500 hover:text-white transition-colors"
                    onClick={() => window.open('https://wa.me/79773908720', '_blank')}
                  >
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => window.open('https://t.me/Roko_Tiis', '_blank')}
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full"
                    onClick={() => window.location.href = `mailto:${content.contacts.email}`}
                  >
                    <Icon name="Mail" size={20} />
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Расскажите о вашем проекте" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4">
            RUSLAN FATULLAEV CONSULTING
          </div>
          <p className="text-muted-foreground mb-6">
            Помогаю создавать успешные бары и рестораны
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Ruslan Fatullaev. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;