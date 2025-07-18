import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: "Zap",
      title: "VR Реклама",
      description: "Интерактивная реклама в виртуальном пространстве",
      features: ["360° презентации", "Интерактивные элементы", "Аналитика взаимодействий"]
    },
    {
      icon: "Globe",
      title: "VR Шоу-румы",
      description: "Виртуальные выставочные залы нового поколения",
      features: ["Фотореалистичные модели", "Виртуальные консультанты", "Онлайн-покупки"]
    },
    {
      icon: "Gamepad2",
      title: "VR Игры",
      description: "Брендированные VR-игры для маркетинга",
      features: ["Кастомные механики", "Брендинг продуктов", "Вирусный контент"]
    }
  ];

  const portfolio = [
    {
      title: "VR Автосалон Mercedes",
      description: "Виртуальный тест-драйв новых моделей",
      image: "🚗",
      category: "Автомобили"
    },
    {
      title: "VR Квартира для ЖК",
      description: "Интерактивная экскурсия по новостройке",
      image: "🏠",
      category: "Недвижимость"
    },
    {
      title: "VR Музей космоса",
      description: "Погружение в историю освоения космоса",
      image: "🚀",
      category: "Образование"
    }
  ];

  const team = [
    {
      name: "Алексей Новиков",
      role: "VR Директор",
      description: "15 лет в геймдеве, эксперт по VR-технологиям",
      avatar: "👨‍💻"
    },
    {
      name: "Мария Космос",
      role: "3D Художник",
      description: "Создаёт фотореалистичные виртуальные миры",
      avatar: "👩‍🎨"
    },
    {
      name: "Дмитрий Код",
      role: "VR Разработчик",
      description: "Программист с опытом в Unity и Unreal Engine",
      avatar: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-black text-white font-tech overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2300FFFF%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-cyber-blue/20 text-cyber-blue border-cyber-blue">
              🚀 Будущее уже здесь
            </Badge>
            <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-blue via-cyber-magenta to-cyber-yellow bg-clip-text text-transparent animate-pulse-glow">
              NEXUS VR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
              Создаём <span className="text-cyber-blue font-semibold">VR-миры будущего</span>
              <br />
              Реклама • Презентации • Шоу-румы в виртуальной реальности
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyber-blue to-cyber-magenta hover:from-cyber-magenta hover:to-cyber-blue text-white border-0 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/50"
              >
                <Icon name="Zap" className="mr-2" />
                Создать VR-проект
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Icon name="Play" className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float">🌌</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute top-1/3 right-20 text-5xl animate-float" style={{animationDelay: '2s'}}>🎮</div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyber-magenta/20 text-cyber-magenta border-cyber-magenta">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-cyber-blue">
              VR-Решения для бизнеса
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Превращаем ваши идеи в интерактивные VR-миры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-cyber-dark/50 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-magenta flex items-center justify-center transition-all duration-300 ${hoveredService === index ? 'animate-pulse-glow scale-110' : ''}`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-cyber-blue font-cyber text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Icon name="Check" size={16} className="text-cyber-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-dark/50 to-cyber-darker/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow">
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-cyber-magenta">
              Наши VR-проекты
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Погружения, которые меняют восприятие
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="bg-cyber-dark/60 border-cyber-magenta/30 hover:border-cyber-magenta transition-all duration-300 hover:shadow-lg hover:shadow-cyber-magenta/20 group cursor-pointer overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="text-6xl mb-4 text-center group-hover:animate-float">
                    {project.image}
                  </div>
                  <Badge className="absolute top-2 right-2 bg-cyber-blue/20 text-cyber-blue border-cyber-blue text-xs">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-cyber-magenta font-cyber text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all duration-300"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    Посмотреть проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyber-green/20 text-cyber-green border-cyber-green">
              Команда
            </Badge>
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-cyber-green">
              VR-Космонавты
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Эксперты, которые создают миры будущего
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="bg-cyber-dark/50 border-cyber-green/30 hover:border-cyber-green transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/20 text-center group"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:animate-pulse-glow">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-cyber-green font-cyber text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-cyber-blue font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue via-cyber-magenta to-cyber-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-white">
              Готовы к VR-революции?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Свяжитесь с нами и получите бесплатную консультацию по VR-проекту
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-cyber-dark hover:bg-gray-100 border-0 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Связаться с нами
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cyber-dark px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Icon name="Calendar" className="mr-2" />
                Заказать демо
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 text-4xl animate-float text-white/30">🌟</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-float text-white/30" style={{animationDelay: '1s'}}>🔮</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-float text-white/30" style={{animationDelay: '2s'}}>💫</div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-darker py-12 border-t border-cyber-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">NEXUS VR</h3>
              <p className="text-gray-400 text-sm">
                Агентство виртуальной реальности нового поколения
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyber-magenta mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>VR Реклама</li>
                <li>VR Шоу-румы</li>
                <li>VR Игры</li>
                <li>VR Обучение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyber-yellow mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 hello@nexusvr.space</li>
                <li>📱 +7 (495) 123-45-67</li>
                <li>📍 Москва, Технопарк VR</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyber-green mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black">
                  <Icon name="Share2" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black">
                  <Icon name="Video" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyber-blue/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 NEXUS VR. Все права защищены. Создано в виртуальной реальности 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;