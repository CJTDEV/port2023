"use client"
import Image from 'next/image'
import SectionCV from './(sections)/SectionCV'
import SectionIntro from './(sections)/SectionIntro'
import SectionLanding from './(sections)/SectionLanding'
import SectionJourney from './(sections)/SectionJourney'
import SectionStack from './(sections)/SectionStack'
import SectionProjects from './(sections)/SectionProjects'
import LoadingPage from './components/LoadingPage'
import Navigation from './Navigation'
import type { AppProps } from "next/app";
import { useEffect, useContext, createContext, useState } from "react";
import { Modal } from "../utils/modal_utils";
import { ModalWrapper } from "../app/molecules"
import { GlobalContext } from "./GlobalContext"




//our modal ref
let globalModalRef: any;

export const metadata = {
  title: "Just a Webdev looking for his next Adventure."
}


export default function Home() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      setIsTouch(true)
    }

  }, []);

  useEffect(() => {
    console.log(globalState)
  }, [globalState])


  Modal.registerModal(globalModalRef);



  return (
    <div data-touch={isTouch} >

      <div style={{ display: globalState.dimensionalModulesLoaded ? "none" : "contents" }}>
        <LoadingPage></LoadingPage>
      </div>

      <header>
        <Navigation></Navigation>
      </header>
      <main>

        <section id="landing">
          <SectionLanding></SectionLanding>
        </section>

        {/* <section id="journey">
            <SectionJourney></SectionJourney>
          </section> */}

        {/* <section id="projects">
            <SectionProjects></SectionProjects>
          </section> */}

        <section id="stack">
          <SectionStack></SectionStack>
        </section>

        {/* <SectionCV></SectionCV> */}

        <ModalWrapper ref={(ref) => (globalModalRef = ref)} />

      </main>
    </div>
  )
}
