import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container max-w-6xl">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight max-w-4xl animate-fade-in">
                Em cada caixinha, um mundo de descobertas
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl animate-slide-in-up animate-delay-200">
                Mais do que brinquedos, são momentos que aproximam, ensinam e encantam — caixinhas cheias de magia para
                acompanhar cada fase do crescer.
              </p>
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <Image
                  src="/logo.png"
                  alt="Dengo na Caixinha"
                  fill
                  unoptimized
                  className="object-contain animate-sparkle"
                  priority
                />
              </div>

              {/* Botões principais */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-up animate-delay-400">
                {/* Botão Quero minha caixinha */}
                <Button
                  size="lg"
                  asChild
                  className="bg-[#FFE254] hover:bg-[#E6CC48] text-black hover:scale-105 transition-transform"
                >
                  <Link href="/quiz" className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pPFvAiUn3n3g440KyUAqEySaVfxpRv.png"
                      alt="Ícone de caixinha"
                      width={24}
                      height={24}
                      className="inline-block"
                      unoptimized
                    />
                    Quero minha caixinha
                  </Link>
                </Button>

                {/* Botão Quero Dar um Dengo */}
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-[#FFE254] text-[#FFE254] hover:bg-[#FFE254]/20 hover:scale-105 transition-transform"
                >
                  <Link href="/produtos" className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pPFvAiUn3n3g440KyUAqEySaVfxpRv.png"
                      alt="Gift icon"
                      width={24}
                      height={24}
                      className="inline-block"
                      unoptimized
                    />
                    Quero Dar um Dengo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-primary/5 to-accent/10">
          <div className="container max-w-6xl">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Os melhores dengos</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Conheça algumas de nossas caixinhas mais populares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.image_url}
                  theme={product.theme}
                  ageRange={product.age_range}
                  isSubscription={product.is_subscription}
                />
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform"
              >
                <Link href="/produtos">Ver Todos os Produtos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Nosso Diferencial */}
        <section className="py-10 md:py-16 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
          <div className="container max-w-6xl">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">✨ Nosso Diferencial</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-primary/20 animate-scale-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 text-white mb-4">
                    <span className="text-2xl">💛</span>
                  </div>
                  <CardTitle className="text-lg">Personalização de verdade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Cada caixinha é pensada a partir do perfil do bebê, garantindo experiências únicas e adequadas à sua
                    fase.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-secondary/20 animate-scale-in animate-delay-100">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 text-white mb-4">
                    <span className="text-2xl">🎈</span>
                  </div>
                  <CardTitle className="text-lg">Aprendizado através do brincar</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Mais do que brinquedos — criamos oportunidades para o desenvolvimento integral da criança.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-accent/20 animate-scale-in animate-delay-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 text-white mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-lg">Cuidado em cada escolha</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Selecionamos marcas e produtos seguros, sustentáveis e alinhados aos nossos valores.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-primary/20 animate-scale-in animate-delay-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <CardTitle className="text-lg">Afeto em cada detalhe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Desde a seleção até a entrega, tudo é feito com amor, carinho e propósito.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1 border-secondary/20 animate-scale-in animate-delay-400">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent text-white mb-4">
                    <span className="text-2xl">🤍</span>
                  </div>
                  <CardTitle className="text-lg">Experiência para toda a família</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    A Dengo na Caixinha aproxima gerações e transforma o simples ato de brincar em momentos de vínculo e
                    conexão.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ganhe um Dengo todo mês */}
        <section className="py-10 md:py-16">
          <div className="container max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 border-primary/30 animate-scale-in">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-4xl md:text-5xl text-balance">Ganhe um Dengo todo mês!</CardTitle>
                <CardDescription className="text-lg text-pretty">
                  Descubra nossos planos de assinatura e receba caixinhas personalizadas todos os meses.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#FFE254] hover:bg-[#E6CC48] text-black hover:scale-105 transition-transform"
                >
                  <Link href="/assinatura">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
