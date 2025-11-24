import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "CreditCard",
      title: "Премиальные карты",
      description: "Cashback до 10%, бесплатное обслуживание и доступ к бизнес-залам"
    },
    {
      icon: "PiggyBank",
      title: "Вклады и накопления",
      description: "До 12% годовых с возможностью пополнения и частичного снятия"
    },
    {
      icon: "Building2",
      title: "Ипотека",
      description: "От 5.9% годовых с решением за 1 день и онлайн-оформлением"
    },
    {
      icon: "TrendingUp",
      title: "Инвестиции",
      description: "Доступ к российским и зарубежным рынкам без комиссий"
    },
    {
      icon: "Shield",
      title: "Страхование",
      description: "Комплексная защита для вас и вашей семьи"
    },
    {
      icon: "Smartphone",
      title: "Мобильный банк",
      description: "Все операции в одном приложении с биометрией"
    }
  ];

  const stats = [
    { value: "2М+", label: "Клиентов" },
    { value: "15 лет", label: "На рынке" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Gem" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-primary">Crystal Bank</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">О банке</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Открыть счёт
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="py-20 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
                Банк нового
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  поколения
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
                Управляйте финансами легко и безопасно. Все банковские услуги в одном приложении
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 h-14">
                  Стать клиентом
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-white/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                Наши услуги
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Полный спектр финансовых решений для комфортной жизни
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-slate-200/50 hover:shadow-xl hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 group bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Откройте счёт за 5 минут
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Без посещения отделения. Нужен только паспорт и смартфон
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all text-lg px-8 h-14">
                Открыть счёт онлайн
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all text-lg px-8 h-14">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Gem" size={24} className="text-white" />
                </div>
                <span className="text-xl font-display font-bold text-primary">Crystal Bank</span>
              </div>
              <p className="text-sm text-slate-600">
                Современный банк для современных людей
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-primary mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Инвестиции</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-primary mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-primary mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">8 800 555-35-35</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
            <p>© 2025 Crystal Bank. Все права защищены. Лицензия ЦБ РФ № 1234</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
