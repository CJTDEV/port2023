import popup from '../styles/popup.module.scss'
import cv from '../styles/cv.module.scss'

export default function StackInfoPopup() {

	return (
		<div className={`${popup.content}`}>
			<div className={`${popup.legend__pill} copy-small`}>
				<span>Interested</span> means I have had an eye on the Technology and there is a high chance I have followed up on this interest by taking part in online courses.
			</div>
			<div className={`${popup.legend__pill} copy-small`}>
                <span>Basic</span> means I have succesfully gathered the prerequsits necessary to use this Technology in privat and work related projects.
			</div>
			<div className={`${popup.legend__pill} copy-small`}>
                <span>Advanced</span> means I have spent a minimum of one year leveraging this Technology and use it frequently for work related and private projects.
			</div>
			<div className={`${popup.legend__pill} copy-small`}>
                <span>Expierenced</span> means I have spent a minimum of two to three years leveraging this Technology for work related and private Porjects and I can gurantee and familiarity with not only the overall structure of the Technology but its intraceses as well.
			</div>
		</div>
	)
}