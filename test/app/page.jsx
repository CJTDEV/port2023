"use client"
import Landing from './(sections)/Landing'
import About from './(sections)/About'
import Journey from './(sections)/Journey'
import Projects from './(sections)/Projects'
import Services from './(sections)/Services'
import LoadingPage from './components/LoadingPage'
import PageBackground from './components/PageBackground'
import Frame from './components/Frame'
import Navigation from './Navigation'
import Footer from './Footer'
import { useEffect, useContext, createContext, useState } from "react";
import { GlobalContext } from "./GlobalContext"
import { useWindowDimensions } from '../hooks/useWindowsDimensions'



export default function Home() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true)
  const [isTouch, setIsTouch] = useState(false)
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      setIsTouch(true)
    }

  }, []);

  useEffect(() => {
    if (globalState.dimensionalModulesLoaded) {
      setIsLoading(false)
    }
  }, [globalState])

  useEffect(() => {
    document.documentElement.style.setProperty("--screen", `${width}px`);
  }, [width, height])


  return (
    <div data-touch={isTouch} >

      <header>
        <Navigation></Navigation>
      </header>

      <main className={`gsap-main-trigger`}>
        <PageBackground></PageBackground>
        <Frame>
          <Landing></Landing>
          <About></About>
          {/* <Journey></Journey> */}
          <Projects></Projects>
          <Services></Services>
        </Frame>
      </main>

      {/* <div style={{ display: isLoading ? "contents" : "none" }}>
        <LoadingPage />
      </div> */}

    </div >
  )
}
