import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const services = [
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
  ];

  const portfolio = [
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
  ];

  const testimonials = [
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
  ];

  const blogPosts = [
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
  ];

  const timeSlots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

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
            15 лет в ресторанном бизнесе
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Увеличьте прибыль
            </span>
            <br />
            вашего бара или ресторана
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Наставник с 15-летним опытом в ресторанном бизнесе. Помогаю создать уникальные впечатления и увеличить прибыль вашего бара или ресторана.
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
                Руслан Фатуллаев
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                За 15 лет в индустрии я открыл 12 успешных баров и ресторанов, обучил более 500 специалистов и помог десяткам заведений выйти из кризиса.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Моя философия проста: каждое заведение должно создавать уникальный опыт для гостей и при этом быть прибыльным. Я не даю шаблонных решений — каждый проект индивидуален.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">специалистов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=80" 
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
            {services.map((service, index) => (
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
            {portfolio.map((project, index) => (
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
            {testimonials.map((testimonial, index) => (
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
            {blogPosts.map((post, index) => (
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
                    <p className="text-muted-foreground">ruslan@consulting.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Локация</h3>
                    <p className="text-muted-foreground">Москва, работаю по всей России</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="MessageCircle" size={20} />
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
