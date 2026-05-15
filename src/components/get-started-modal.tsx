import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Download",
    title: "Скачай приложение",
    description: "Доступно на iOS и Android. Установка занимает меньше минуты.",
  },
  {
    icon: "UserPlus",
    title: "Создай аккаунт",
    description: "Только имя и email — никаких лишних данных. Полный доступ сразу.",
  },
  {
    icon: "Mic",
    title: "Запусти запись",
    description: "Нажми одну кнопку на лекции или встрече — остальное сделает AI.",
  },
  {
    icon: "FileText",
    title: "Получи конспект",
    description: "Готовый структурированный конспект по твоему шаблону — за секунды.",
  },
]

interface GetStartedModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GetStartedModal({ open, onOpenChange }: GetStartedModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-950 border border-red-500/20 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl text-white text-center">
            Начни с <span className="text-red-500">MyNotes</span>
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center text-base mt-1">
            Четыре шага — и ты больше не пишешь конспекты вручную
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name={step.icon} size={20} className="text-red-400" fallback="Star" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-0.5">
                  {index + 1}. {step.title}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white border-0 font-geist">
            Скачать для iOS
          </Button>
          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white border-0 font-geist">
            Скачать для Android
          </Button>
        </div>

        <p className="text-center text-gray-500 text-xs mt-2">
          Бесплатно · Без подписки · Без скрытых условий
        </p>
      </DialogContent>
    </Dialog>
  )
}

export function useGetStartedModal() {
  const [open, setOpen] = useState(false)
  return { open, setOpen }
}
