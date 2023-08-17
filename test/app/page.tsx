'use client';
import Image from 'next/image'
import SectionCV from './(sections)/SectionCV'
import SectionIntro from './(sections)/SectionIntro'
import SectionLanding from './(sections)/SectionLanding'
import MovingGrid from './components/MovingGrid'
import Navigation from './Navigation'
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Modal } from "../utils/modal_utils";
import { ModalWrapper } from "../app/molecules"


//our modal ref
let globalModalRef: any;


export default function Home() {
  useEffect(() => {
    Modal.registerModal(globalModalRef);
  }, []);
  return (
    <div className="container">
      {/* <header>
        <Navigation></Navigation>
      </header> */}
      <main>
        <SectionLanding></SectionLanding>
        <SectionIntro></SectionIntro>
        <SectionCV></SectionCV>
        <SectionIntro></SectionIntro>
        <ModalWrapper ref={(ref) => (globalModalRef = ref)} />

      </main>
    </div>
  )
}
