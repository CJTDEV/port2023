import navigation from './styles/navigation.module.scss'

//icons
import ILogo from '/public/vercel.svg'
import IHTML from '/public/icons/html5.svg'


export default function Navigation () {

	return (
		<div>
            <div className={`${navigation.main}`}>
                <div className={`${navigation.inner}`}>
                    <div className={`${navigation.logo}`}>
                       <ILogo />
                    </div>
                    <div className={`${navigation.items}`}>
                        <ul>
                            <li>
                                About Me
                            </li>
                            <li>
                                Curriculum vitae
                            </li>
                            <li>
                                Stack & Skills
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className={`${navigation.profile}`}>
                        <IHTML />
                    </div>
                </div>
            </div>
        </div>
	)
}