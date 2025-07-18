import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-blue">
      {/* Header */}
      <header className="border-b border-cyber-blue/30 bg-cyber-dark/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-cyber-blue animate-pulse-glow" size={32} />
              <h1 className="text-2xl font-bold cyber-font text-cyber-blue">VR AGENCY</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-cyber-magenta transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-cyber-magenta transition-colors">Портфолио</a>
              <a href="#team" className="hover:text-cyber-magenta transition-colors">Команда</a>
              <a href="#contact" className="hover:text-cyber-magenta transition-colors">Контакты</a>
            </nav>
            <Button className="bg-cyber-magenta hover:bg-cyber-magenta/80 text-white cyber-font">
              Связаться
            </Button>
          </div>
        </div>
      </header>

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
            <h2 className="text-6xl md:text-8xl font-bold cyber-font mb-6 animate-glitch">
              <span className="text-cyber-blue">VR</span>{" "}
              <span className="text-cyber-magenta">РЕАЛЬНОСТЬ</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-cyber-blue/80 max-w-3xl mx-auto">
              Создаем интерактивные VR-инсталляции для выставок и мероприятий. 
              Погрузите аудиторию в мир будущего с нашими цифровыми решениями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark cyber-font animate-pulse-glow">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/20 cyber-font">
                <Icon name="Headphones" className="mr-2" size={20} />
                Попробовать VR
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cyber-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold cyber-font mb-4 text-cyber-blue">Наши Услуги</h3>
            <p className="text-xl text-cyber-blue/70 max-w-2xl mx-auto">
              Полный спектр VR-решений для бизнеса и развлечений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Globe",
                title: "VR-Инсталляции",
                description: "Интерактивные виртуальные миры для выставок и мероприятий",
                color: "cyber-blue"
              },
              {
                icon: "Gamepad2",
                title: "Игровые Решения",
                description: "Создание VR-игр и интерактивных развлечений",
                color: "cyber-magenta"
              },
              {
                icon: "Building",
                title: "Архитектурная Визуализация",
                description: "VR-туры по зданиям и комплексам",
                color: "cyber-yellow"
              },
              {
                icon: "Presentation",
                title: "Корпоративные Презентации",
                description: "Иммерсивные презентации продуктов и услуг",
                color: "cyber-green"
              },
              {
                icon: "Users",
                title: "Обучающие Симуляции",
                description: "VR-тренинги и образовательные программы",
                color: "cyber-purple"
              },
              {
                icon: "Sparkles",
                title: "Консалтинг",
                description: "Стратегия внедрения VR-технологий в бизнес",
                color: "cyber-blue"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-cyber-dark/80 border-cyber-blue/30 hover:border-cyber-magenta/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${service.color}/20 flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} className={`text-${service.color}`} size={24} />
                  </div>
                  <CardTitle className="text-cyber-blue cyber-font">{service.title}</CardTitle>
                  <CardDescription className="text-cyber-blue/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold cyber-font mb-4 text-cyber-blue">Портфолио</h3>
            <p className="text-xl text-cyber-blue/70 max-w-2xl mx-auto">
              Наши лучшие VR-проекты и инсталляции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "img/bcacee68-ce85-4a07-8f39-b231cdbea05e.jpg",
                title: "Выставка будущего",
                description: "Интерактивная VR-инсталляция для tech-выставки"
              },
              {
                image: "img/e607e605-e59b-475d-94c5-e22fbe134def.jpg", 
                title: "Музей науки",
                description: "Образовательная VR-среда для школьников"
              },
              {
                image: "img/9756924d-1b19-451c-b4a1-dc87e272c55d.jpg",
                title: "Корпоративный офис",
                description: "VR-тур по новому офисному комплексу"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-cyber-dark/80 border-cyber-blue/30 hover:border-cyber-magenta/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-cyber-blue cyber-font">{project.title}</CardTitle>
                  <CardDescription className="text-cyber-blue/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-cyber-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold cyber-font mb-4 text-cyber-blue">Команда</h3>
            <p className="text-xl text-cyber-blue/70 max-w-2xl mx-auto">
              Эксперты VR-технологий и цифровых решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Киберов",
                role: "CEO & VR Developer",
                description: "10+ лет в разработке VR-решений"
              },
              {
                name: "Мария Техно",
                role: "3D Artist & Designer",
                description: "Создатель иммерсивных виртуальных миров"
              },
              {
                name: "Дмитрий Код",
                role: "Technical Lead",
                description: "Архитектор VR-платформ и интеграций"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-cyber-dark/80 border-cyber-blue/30 hover:border-cyber-magenta/50 transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-magenta mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-cyber-blue cyber-font">{member.name}</CardTitle>
                  <CardDescription className="text-cyber-magenta font-medium mb-2">
                    {member.role}
                  </CardDescription>
                  <CardDescription className="text-cyber-blue/70">
                    {member.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold cyber-font mb-4 text-cyber-blue">Контакты</h3>
            <p className="text-xl text-cyber-blue/70 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего VR-проекта
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-cyber-dark/80 border-cyber-blue/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold cyber-font text-cyber-blue mb-6">Начните проект</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Icon name="Mail" className="text-cyber-magenta" size={20} />
                        <span className="text-cyber-blue/80">hello@vragency.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Icon name="Phone" className="text-cyber-magenta" size={20} />
                        <span className="text-cyber-blue/80">+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Icon name="MapPin" className="text-cyber-magenta" size={20} />
                        <span className="text-cyber-blue/80">Москва, Технопарк VR</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold cyber-font text-cyber-blue mb-6">Социальные сети</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20">
                        <Icon name="Github" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/20">
                        <Icon name="Twitter" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/20">
                        <Icon name="Linkedin" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyber-blue/30 bg-cyber-dark/90 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" className="text-cyber-blue" size={24} />
              <span className="cyber-font text-cyber-blue font-bold">VR AGENCY</span>
            </div>
            <div className="text-cyber-blue/60">
              © 2024 VR Agency. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;