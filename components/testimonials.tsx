import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Arjun Mehta",
    username: "@arjdev",
    body: "v0 has completely changed the way I build UIs. Generate, copy-paste, done. No more design stress.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sara Lin",
    username: "@sara.codes",
    body: "Honestly shocked at how smooth the v0 generated components are out of the box. Just works perfectly.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Devon Carter",
    username: "@devninja",
    body: "Our team launched a client site in 2 days using v0 components. Saved so much development time.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Priya Shah",
    username: "@priyacodes",
    body: "Generated a few components in v0 and everything blended perfectly with our codebase. Massive W.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Leo Martin",
    username: "@leobuilds",
    body: "Found a beautiful hero section in v0, tweaked the prompt, and shipped in 15 minutes. Game changer.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Chloe Winters",
    username: "@chloewinters",
    body: "v0 helped us prototype multiple landing pages without writing CSS once. Pure magic.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ayaan Malik",
    username: "@ayaan_dev",
    body: "As a solo founder, v0 lets me move fast without sacrificing design quality. Essential tool.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Monica Reeves",
    username: "@monicareeves",
    body: "Can't believe how polished the v0 generated components look. Clients are impressed every time.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Roy",
    username: "@jamesrdev",
    body: "v0 is a lifesaver when deadlines are tight. Generate a component, tweak, and deploy instantly.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Roger Block",
    username: "Marketing Manager - Aunes Oversettelser",
    body: "Después de reelaborar las especificaciones, Stack House nos brindó retroalimentación valiosa que nos dio la oportunidad de mejorar nuestro proyecto. Su enfoque colaborativo y atención al detalle superaron nuestras expectativas.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Virginia Barceló",
    username: "Head of Operations - TechFlow Solutions",
    body: "Son solucionadores de problemas excepcionales que trabajan de manera eficiente y documentan sus hallazgos de forma exhaustiva. La calidad de su trabajo y comunicación es impecable.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rafael Núñez",
    username: "CEO & Fundador - Rayo Bebidas",
    body: "Stack House construye con intención: nada está sobre-complicado y todo está diseñado de manera inteligente. Transformaron nuestra idea en una aplicación que realmente impulsa nuestro negocio.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "María González",
    username: "Directora de Marketing - InnovateTech",
    body: "El equipo de Stack House entendió perfectamente nuestra visión y la convirtió en realidad. Su profesionalismo y dedicación son incomparables.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Carlos Mendoza",
    username: "CTO - Digital Solutions",
    body: "Trabajar con Stack House fue una experiencia excepcional. Su expertise técnico y capacidad de entrega son de primer nivel.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ana Rodríguez",
    username: "Fundadora - StartupHub",
    body: "Stack House nos ayudó a lanzar nuestro producto en tiempo récord. Su enfoque ágil y orientado a resultados es exactamente lo que necesitábamos.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Diego Herrera",
    username: "Director de Producto - TechCorp",
    body: "La calidad del código y la arquitectura que Stack House desarrolló para nosotros es excepcional. Definitivamente los recomendaría.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lucía Morales",
    username: "CEO - EcoTech",
    body: "Stack House no solo entregó un producto excelente, sino que también nos educó en el proceso. Su transparencia y comunicación son admirables.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Roberto Silva",
    username: "Gerente de TI - FinanceFlow",
    body: "La integración que Stack House desarrolló para nuestros sistemas existentes funcionó perfectamente desde el primer día. Trabajo impecable.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)
const fourthColumn = testimonials.slice(9, 12)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <img src={img || "/placeholder.svg"} alt={name} height="40" width="40" className="h-10 w-10 rounded-full" />
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
          <div className="leading-5 tracking-tight text-white/60">{username}</div>
        </div>
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
            Desde ideas innovadoras hasta soluciones empresariales, Stack House se ha convertido en el socio tecnológico
            de confianza para empresas de todo el mundo.
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

          <div className="hidden xl:block">
            <Marquee pauseOnHover vertical className="[--duration:35s]">
              {fourthColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  )
}
