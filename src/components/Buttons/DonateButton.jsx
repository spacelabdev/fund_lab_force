import './DonateButton.scss';
import ExternalNavButton from '../styleComponents/navigationButtons/ExternalNavButton';


export default function DonateButton() {
	return (
		<div className='button-wrap'>
			<ExternalNavButton
				url='https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C'
				buttonText='Donate'></ExternalNavButton>
		</div>
	);
}
