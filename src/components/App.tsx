import Header from './Header'
import { Hero } from './Hero'
import { Features } from './Features'
import { useMeasure, useWindowScroll } from 'react-use'
import { CTA } from './CTA'
import Footer from './Footer'
import { useMemo } from 'react'

function App() {
  const { y: scrollY } = useWindowScroll()
  const [heroRef, { height: HeroH }] = useMeasure<HTMLDivElement>()
  const [featuresRef, { height: featuresH }] = useMeasure<HTMLDivElement>()

  const isLightStyle = useMemo(() => {
    return scrollY >= HeroH && scrollY < HeroH + featuresH
  }, [HeroH, featuresH, scrollY])
  return (
    <main className="relative w-full">
      <Header lightStyle={isLightStyle} />
      <Hero ref={heroRef} />
      <Features ref={featuresRef} />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
