import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "MyNotes бесплатное приложение?",
      answer:
        "Да, MyNotes полностью бесплатно. Приложение существует за счёт сообщества: пользователи делятся шаблонами, дополняют базу данных и вносят свой вклад в развитие платформы.",
    },
    {
      question: "Как приложение записывает в фоновом режиме?",
      answer:
        "MyNotes использует системные возможности устройства для фоновой записи. Ты можешь заблокировать экран или переключиться на другое приложение — запись продолжится автоматически.",
    },
    {
      question: "Можно ли работать без интернета?",
      answer:
        "Да. Запись и сохранение конспектов работают офлайн. AI-анализ и синхронизация запустятся автоматически при следующем подключении к сети.",
    },
    {
      question: "Как поделиться конспектом с тем, у кого нет приложения?",
      answer:
        "Любой конспект можно открыть по ссылке с ограниченным доступом — собеседнику не нужна регистрация. Ты сам выбираешь, что именно будет видно.",
    },
    {
      question: "Можно ли создать шаблон под себя?",
      answer:
        "Конечно. В MyNotes можно редактировать готовые шаблоны или создавать с нуля: задавать структуру, разделы, стиль оформления. Готовый шаблон можно опубликовать для сообщества.",
    },
    {
      question: "MyNotes работает с видеороликами?",
      answer:
        "Да — вставь ссылку на YouTube или загрузи видеофайл. AI извлечёт речь, проанализирует содержание и создаст конспект по выбранному шаблону.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о MyNotes перед стартом
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
