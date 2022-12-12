import Image from 'next/image'
import SectionCV from './(sections)/SectionCV'
import SectionIntro from './(sections)/SectionIntro'


export default function Home() {
  return (
    <div className="container">
      <main>
              <SectionIntro></SectionIntro>
            <SectionCV></SectionCV>   
             <SectionIntro></SectionIntro>

      </main>
    </div>
  )
}
