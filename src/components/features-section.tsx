import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Запись голоса в фоне",
    description: "Запускай запись и убирай телефон — приложение продолжает работать в фоне, фиксируя каждое слово лекции или совещания.",
    icon: "Mic",
    badge: "Фоновый режим",
  },
  {
    title: "Конспект из видео",
    description: "Вставь ссылку на любое видео с YouTube или загрузи файл — AI извлечёт суть и оформит в понятный конспект.",
    icon: "Video",
    badge: "Видео",
  },
  {
    title: "AI-обработка текста",
    description: "Искусственный интеллект анализирует информацию, выделяет главное и создаёт структурированный конспект по твоему шаблону.",
    icon: "Sparkles",
    badge: "AI",
  },
  {
    title: "Гибкие шаблоны",
    description: "Создавай шаблоны с нуля или изменяй готовые — под лекции, встречи, вебинары. Делись с аудиторией одной ссылкой.",
    icon: "LayoutTemplate",
    badge: "Шаблоны",
  },
  {
    title: "Синхронизация и совместная работа",
    description: "Доступ к конспектам с любого устройства. Создавай общие пространства для групп и команд.",
    icon: "Users",
    badge: "Командная работа",
  },
  {
    title: "Работа без интернета",
    description: "Сохраняй записи и конспекты даже без сети. AI-анализ запустится автоматически при подключении.",
    icon: "WifiOff",
    badge: "Офлайн",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё что нужно — в одном приложении</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Забудь про рукописные конспекты и пропущенные моменты. MyNotes делает всё за тебя — бесплатно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" fallback="Star" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
