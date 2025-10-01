import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Jake Kelley",
    username: "Fundador de Check my Checker",
    body: "Ramon did a fantastic job of understanding the vision of the project and executing what needed to be done.",
  },
  {
    name: "Gandolf Finke",
    username: "Fundador de SolventIQ",
    body: "De principio a fin, demostraron habilidades excepcionales, profesionalismo y previsión.",
  },
  {
    name: "Patrick",
    username: "IWebSolutions",
    body: "After reworking the specification he gave us valuable feedback giving us opportunity to improve our specification.",
  },
  {
    name: "Roger Block",
    username: "Aunes Oversettelser AS",
    body: "Definitivamente lo contrataremos para proyectos futuros.",
  },
  {
    name: "Rafael Núñez",
    username: "CEO & Fundador - Rayo Bebidas",
    body: "Siento que hicieron un gran trabajo para automatizar mi contratación",
  },
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 5)

const TestimonialCard = ({
  name,
  username,
  body,
}: {
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex flex-col">
        <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
        {username && <div className="leading-5 tracking-tight text-white/60">{username}</div>}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Testimonios</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            Desde ideas innovadoras hasta soluciones empresariales, en Stack House apuntamos a convertirnos tu socio tecnológico.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  )
}
