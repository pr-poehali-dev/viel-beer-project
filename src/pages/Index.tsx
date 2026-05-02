import { useState } from "react";
import Icon from "@/components/ui/icon";

const BOTTLE_IMG = "https://cdn.poehali.dev/projects/30f656f9-1309-47a8-9fc9-23ebcc046d71/bucket/c35caf61-6c1b-49aa-ad7c-63f34dc42289.jpg";
const BREWERY_IMG = "https://cdn.poehali.dev/projects/30f656f9-1309-47a8-9fc9-23ebcc046d71/files/4a0e36d5-b045-416b-a882-1e6b4ab9fd9f.jpg";

const NAV_LINKS = [
  { label: "О бренде", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Ассортимент", href: "#range" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const ADVANTAGES = [
  { icon: "Leaf", title: "Натуральный состав", desc: "Только ячмень, хмель и вода. Никаких добавок и консервантов — только живой вкус." },
  { icon: "Award", title: "Китайские традиции", desc: "Рецептура с 500-летней историей, адаптированная для современного потребителя." },
  { icon: "Thermometer", title: "Холодное брожение", desc: "Технология длительного брожения при низких температурах для мягкого вкуса." },
  { icon: "Globe", title: "Международное качество", desc: "Сертификаты ISO 22000 и соответствие стандартам ЕС для экспортных рынков." },
  { icon: "Zap", title: "Яркий характер", desc: "Насыщенный янтарный цвет, плотная пена и послевкусие с нотами карамели." },
  { icon: "TrendingUp", title: "Быстрый оборот", desc: "Высокий спрос среди 18–35 лет обеспечивает быстрые продажи для партнёров." },
];

const RANGE = [
  {
    name: "VIEL GOLD",
    type: "Светлый лагер",
    abv: "4.8%",
    ibu: "18 IBU",
    desc: "Классический светлый лагер с мягким хмелевым ароматом и освежающим послевкусием. Идеален для жаркого лета.",
    color: "#D4A017",
    badge: "хит продаж",
  },
  {
    name: "VIEL DARK",
    type: "Тёмный портер",
    abv: "6.2%",
    ibu: "32 IBU",
    desc: "Насыщенный тёмный портер с нотами жареного солода, шоколада и кофе. Для ценителей глубокого вкуса.",
    color: "#7B4F2E",
    badge: "новинка",
  },
  {
    name: "VIEL WHEAT",
    type: "Пшеничное нефильтрованное",
    abv: "5.1%",
    ibu: "14 IBU",
    desc: "Нефильтрованное пшеничное пиво с лёгким цитрусовым ароматом и мягкой пряностью кориандра.",
    color: "#C8A84B",
    badge: null,
  },
  {
    name: "VIEL RED",
    type: "Красный эль",
    abv: "5.5%",
    ibu: "24 IBU",
    desc: "Красный эль с карамельным солодом, хрустящей горечью и долгим фруктово-ореховым послевкусием.",
    color: "#C0392B",
    badge: null,
  },
];

const REVIEWS = [
  {
    name: "METRO CASH & CARRY",
    type: "Торговая сеть",
    text: "Подключили VIEL GOLD в июне — за первый месяц продали весь склад. Оборачиваемость выше, чем у европейских аналогов в той же ценовой нише.",
    author: "Алексей Морозов",
    role: "Категорийный менеджер",
    stars: 5,
  },
  {
    name: "CRAFT BAR №1",
    type: "Крафтовый бар, Москва",
    text: "Гости спрашивают VIEL DARK специально. История китайского пивоварения работает как дополнительная точка интереса — повышает средний чек.",
    author: "Дарья Ковалёва",
    role: "Совладелец",
    stars: 5,
  },
  {
    name: "SAKURA RESTAURANT",
    type: "Азиатский ресторан",
    text: "VIEL органично вписался в азиатскую концепцию. Паттернинг с блюдами паназиатской кухни работает великолепно. Маржа достойная.",
    author: "Олег Ким",
    role: "Управляющий",
    stars: 5,
  },
  {
    name: "ПРОДУКТЫ 24",
    type: "Сеть магазинов у дома",
    text: "Поставили во всех точках — клиенты возвращаются за VIEL повторно. Молодёжь особенно активна. Стабильные продажи без остатков.",
    author: "Ирина Степанова",
    role: "Директор по закупкам",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "Как стать партнёром-дистрибьютором?",
    a: "Заполните форму обратной связи или позвоните нам. Менеджер свяжется в течение 2 часов, проведёт презентацию условий и организует дегустацию.",
  },
  {
    q: "Какова минимальная партия заказа?",
    a: "Минимальный заказ для розничных точек — 1 паллет (504 бутылки). Для HoReCa доступны заказы от 5 ящиков. Для дистрибьюторов — от 5 паллет.",
  },
  {
    q: "Есть ли необходимые сертификаты для продажи в России?",
    a: "Да, вся продукция имеет декларацию соответствия ЕАЭС, сертификат ISO 22000, лицензию на ввоз алкогольной продукции и полный пакет документов для розничной торговли.",
  },
  {
    q: "Какие сроки и условия хранения?",
    a: "Срок годности — 12 месяцев при хранении 2–8°C. Рекомендуем хранить в тёмном помещении, избегая прямого солнечного света. Перед подачей охладить до 4–6°C.",
  },
  {
    q: "Предоставляете ли маркетинговую поддержку?",
    a: "Да. Для партнёров доступны: POS-материалы, брендированное оборудование, совместные акции, поддержка в соцсетях и участие в промо-событиях.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--viel-dark)", color: "var(--viel-text)" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,160,23,0.15)" }}
      >
        <div className="flex items-center gap-2">
          <span className="font-bebas text-3xl tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span style={{ color: "#F5C842" }}>VI</span><span style={{ color: "#FFFFFF" }}>EL</span>
          </span>
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif", marginTop: "2px" }}>Beer</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase transition-colors duration-200"
              style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-muted)", fontWeight: 400 }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--viel-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--viel-muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm rounded viel-btn"
        >
          Наши контакты
        </a>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--viel-gold)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6" style={{ background: "rgba(10,10,10,0.97)" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-text)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden noise-bg"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111108 40%, #0d0b04 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, var(--viel-gold) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-block text-xs tracking-[0.4em] uppercase px-3 py-1 rounded-full mb-6"
                style={{ border: "1px solid rgba(212,160,23,0.4)", color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>
                Китайское пиво для Дальнего Востока
              </span>
            </div>
            <h1 className="text-8xl md:text-[10rem] leading-none mb-4 animate-fade-in-up opacity-0 delay-200"
              style={{ fontFamily: "'Bebas Neue', sans-serif", animationFillMode: "forwards" }}>
              <span style={{ color: "#F5C842" }}>VI</span><span style={{ color: "#FFFFFF" }}>EL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-in-up opacity-0 delay-300"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, letterSpacing: "0.1em", animationFillMode: "forwards", color: "rgba(240,234,214,0.85)" }}>
              Там, где традиция встречает дерзость
            </p>
            <p className="text-base mb-10 animate-fade-in-up opacity-0 delay-400 leading-relaxed"
              style={{ color: "var(--viel-muted)", animationFillMode: "forwards" }}>
              Лёгкость и азиатский характер — это китайское пиво для тех, кто ищет новый вкус без лишней сложности. Мы работаем с Дальним Востоком и предлагаем продукт, который легко встроить в продажи, меню и витрину.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-500" style={{ animationFillMode: "forwards" }}>
              <a href="#contacts" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded viel-btn text-base">
                Наши контакты
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#range" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base transition-all"
                style={{ border: "1px solid rgba(212,160,23,0.4)", color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--viel-gold)"; e.currentTarget.style.background = "rgba(212,160,23,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(212,160,23,0.4)"; e.currentTarget.style.background = "transparent"; }}
              >
                Ассортимент
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-scale-in opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
            <div className="relative animate-float w-full max-w-xl">
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30" style={{ background: "radial-gradient(circle, var(--viel-gold) 0%, transparent 70%)" }} />
              <div className="relative z-10 w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", border: "1px solid rgba(212,160,23,0.2)" }}>
                <img
                  src={BOTTLE_IMG}
                  alt="VIEL пиво"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-muted)" }}>Scroll</span>
          <Icon name="ChevronDown" size={16} color="var(--viel-gold)" />
        </div>
      </section>

      {/* TICKER */}
      <div className="py-4 overflow-hidden" style={{ background: "var(--viel-gold)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill("VIEL BEER  ✦  ПАРТНЁРСТВО  ✦  КАЧЕСТВО  ✦  ТРАДИЦИИ  ✦  НОВЫЙ ВКУС  ✦  КИТАЙ  ✦  ").map((t, i) => (
            <span key={i} className="text-sm font-semibold tracking-[0.3em] uppercase mx-4" style={{ fontFamily: "'Oswald', sans-serif", color: "#0a0a0a" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line mb-6" />
              <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>О бренде</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                ИСТОРИЯ <br />
                <span className="gold-shimmer">В КАЖДОМ</span> <br />
                ГЛОТКЕ
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(240,234,214,0.75)" }}>
                VIEL рождён в провинции Циндао — родине великого китайского пивоварения. Мы взяли лучшее из 500-летних традиций и переработали для современного потребителя, который ценит вкус, историю и смелый характер.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(240,234,214,0.75)" }}>
                Название VIEL в переводе с немецкого означает «много» — много вкуса, много характера, много эмоций. Мы экспортируем продукт в 18 стран, и теперь VIEL доступен для российского рынка.
              </p>
              <div className="flex gap-12">
                {[["18", "стран экспорта"], ["500", "лет традиций"], ["4", "сорта"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--viel-gold)" }}>{num}</div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl" style={{ background: "var(--viel-gold)" }} />
              <img
                src={BREWERY_IMG}
                alt="Пивоварня VIEL"
                className="relative z-10 w-full h-[460px] object-cover rounded-2xl"
                style={{ border: "1px solid rgba(212,160,23,0.2)" }}
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl" style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(212,160,23,0.3)" }}>
                <div className="text-sm" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-gold)", letterSpacing: "0.1em" }}>🏭 ПИВОВАРНЯ В ЦИНДАО, КИТАЙ</div>
                <div className="text-xs mt-1" style={{ color: "var(--viel-muted)" }}>Производственная мощность — 50 000 л / месяц</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(212,160,23,0.8) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6" style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, transparent, var(--viel-gold), transparent)" }} />
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>Почему VIEL</span>
            <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>ПРЕИМУЩЕСТВА</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,160,23,0.15)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,160,23,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.15)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)" }}>
                  <Icon name={adv.icon} size={22} color="var(--viel-gold)" fallback="Star" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}>{adv.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--viel-muted)" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section id="range" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="section-line mb-6" />
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>Линейка</span>
            <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>АССОРТИМЕНТ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {RANGE.map((beer, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,160,23,0.15)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.15)"; }}
              >
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: beer.color }} />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10" style={{ background: beer.color, transform: "translate(30%,-30%)" }} />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", color: beer.color }}>{beer.name}</h3>
                    <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-muted)" }}>{beer.type}</p>
                  </div>
                  {beer.badge && (
                    <span className="text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold" style={{ background: `${beer.color}22`, color: beer.color, border: `1px solid ${beer.color}55`, fontFamily: "'Oswald', sans-serif" }}>
                      {beer.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,234,214,0.7)" }}>{beer.desc}</p>
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: beer.color }}>{beer.abv}</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>Крепость</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: beer.color }}>{beer.ibu}</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>Горечь</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(212,160,23,0.03) 50%, transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6" style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, transparent, var(--viel-gold), transparent)" }} />
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>Доверяют профессионалы</span>
            <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>ОТЗЫВЫ ПАРТНЁРОВ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,160,23,0.15)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,160,23,0.04)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.15)"; }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--viel-gold)", letterSpacing: "0.05em" }}>{r.name}</div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>{r.type}</div>
                  </div>
                  <div className="flex gap-1">
                    {Array(r.stars).fill(0).map((_, j) => (
                      <span key={j} style={{ color: "var(--viel-gold)", fontSize: "14px" }}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,234,214,0.8)", fontStyle: "italic" }}>«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(212,160,23,0.15)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(212,160,23,0.2)", color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>
                    {r.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>{r.author}</div>
                    <div className="text-xs" style={{ color: "var(--viel-muted)" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="section-line mb-6" />
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>Вопросы и ответы</span>
            <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>FAQ</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ border: openFaq === i ? "1px solid rgba(212,160,23,0.5)" : "1px solid rgba(212,160,23,0.15)", background: openFaq === i ? "rgba(212,160,23,0.05)" : "rgba(255,255,255,0.02)" }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold pr-4" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em", fontSize: "17px" }}>{faq.q}</span>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={18} color="var(--viel-gold)" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "rgba(240,234,214,0.75)" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(212,160,23,0.06) 0%, transparent 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--viel-gold), transparent)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="mx-auto mb-6" style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, transparent, var(--viel-gold), transparent)" }} />
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: "var(--viel-gold)", fontFamily: "'Oswald', sans-serif" }}>Сотрудничество</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
            <span style={{ color: "#F5C842" }}>VI</span><span style={{ color: "#FFFFFF" }}>EL</span> —{" "}
            <span style={{ display: "inline-block" }}>партнер, которого</span><br />
            <span style={{ display: "inline-block" }}>легко запомнить.</span>
          </h2>
          <p className="text-base mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(240,234,214,0.7)" }}>
            Мы ищем дистрибьюторов, рестораны, бары и розничные сети по всей России. Свяжитесь с нами — ответим в течение 2 часов.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "Mail", label: "Email", value: "partner@viel-beer.ru" },
              { icon: "MapPin", label: "Офис", value: "Москва, Красная Пресня" },
            ].map((c) => (
              <div
                key={c.label}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,160,23,0.2)" }}
              >
                <div className="flex justify-center mb-3">
                  <Icon name={c.icon} size={24} color="var(--viel-gold)" fallback="Info" />
                </div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>{c.label}</div>
                <div className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.value}</div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl text-left max-w-xl mx-auto" style={{ background: "rgba(212,160,23,0.06)", border: "1px solid rgba(212,160,23,0.3)" }}>
            <h3 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}>Оставить заявку</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,160,23,0.25)", color: "var(--viel-text)", fontFamily: "'IBM Plex Sans', sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "var(--viel-gold)")}
                onBlur={e => (e.target.style.borderColor = "rgba(212,160,23,0.25)")}
              />
              <input
                type="text"
                placeholder="Компания / заведение"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,160,23,0.25)", color: "var(--viel-text)", fontFamily: "'IBM Plex Sans', sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "var(--viel-gold)")}
                onBlur={e => (e.target.style.borderColor = "rgba(212,160,23,0.25)")}
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,160,23,0.25)", color: "var(--viel-text)", fontFamily: "'IBM Plex Sans', sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "var(--viel-gold)")}
                onBlur={e => (e.target.style.borderColor = "rgba(212,160,23,0.25)")}
              />
              <button className="w-full py-4 rounded-lg viel-btn text-base">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12" style={{ borderTop: "1px solid rgba(212,160,23,0.15)", background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span style={{ color: "#F5C842" }}>VI</span><span style={{ color: "#FFFFFF" }}>EL</span>
          </span>
            <span className="text-xs" style={{ color: "var(--viel-muted)", fontFamily: "'Oswald', sans-serif" }}>BEER</span>
          </div>
          <p className="text-xs text-center" style={{ color: "var(--viel-muted)" }}>
            © 2024 VIEL Beer. Все права защищены. Продукция содержит алкоголь. Не для лиц до 18 лет.
          </p>
          <p className="text-xs font-bold" style={{ color: "var(--viel-gold)" }}>18+</p>
        </div>
      </footer>
    </div>
  );
}