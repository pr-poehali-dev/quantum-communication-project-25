import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алина Соколова",
    role: "Студентка, МГУ, факультет права",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Раньше тратила весь вечер на переписывание лекций. Теперь MyNotes делает конспект за меня — я просто слушаю и задаю вопросы преподавателю.",
  },
  {
    name: "Дмитрий Орлов",
    role: "Руководитель проекта, IT-компания",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "После каждого совещания получаю готовый структурированный протокол. Команда перестала переспрашивать «а что решили» — всё в конспекте.",
  },
  {
    name: "Марина Белова",
    role: "Преподаватель, онлайн-школа",
    avatar: "/professional-woman-scientist.png",
    content:
      "Использую MyNotes для подготовки материалов к урокам. Шаблоны — просто находка: оформляю один раз и раздаю ученикам. Экономит часы.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Студенты, профессионалы и преподаватели уже экономят часы каждую неделю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
