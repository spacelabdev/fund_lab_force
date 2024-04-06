import { useState, useEffect } from "react";
import {
	PayPalScriptProvider,
	usePayPalScriptReducer,
	PayPalButtons,
} from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";
import "./paypalDonate.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

/*LIVE CREDENTIALS*/

// const clientId =
// 	"AacIs63GItjJI69Ktse-8cNOWJKnouUF1bg3Wtem9ErTKrfJSXEhB_q6QIApJlHeBNyuWZfmKQtb0U4X";
// const planIds = [
// 	{
// 		amount: "10",
// 		planId: "P-7XE10582DY6151643MS5LJCY",
// 	},
// 	{
// 		amount: "25",
// 		planId: "P-5E091476E6266123UMTPJLGI",
// 	},
// 	{
// 		amount: "100",
// 		planId: "P-93969204GM7400705MTPJL2A",
// 	},
// ];

/*SANDBOX CREDENTIALS*/
const clientId =
	"AYXrmDQruSv927DeXRGqKjik-aIZNvbB3DUizSd62SuHS6bUc_Enk1WEVwFe2y0EGegUG0lYbY1imHHc";
const planIds = [
	{
		amount: 10,
		planId: "P-4Y256783L52659318MS5NBKY",
	},
	{
		amount: 25,
		planId: "P-2L2687870R001935CMTPKE4Q",
	},
	{
		amount: 100,
		planId: "P-8VD11280BA252920MMTPKFTI",
	},
];

const oneTimeStyle = { layout: "vertical", color: "black", label: "paypal" };
const recurringStyle = {
	layout: "vertical",
	color: "black",
	label: "subscribe",
};

const ButtonWrapper = ({ intent, showSpinner, formData }) => {
	const history = useHistory();
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
	const [planId, setPlanId] = useState("P-4Y256783L52659318MS5NBKY");

	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: formData.currency,
				intent: intent,
			},
		});
	}, [intent, showSpinner, formData.currency]);

	useEffect(() => {
		const plan = planIds.find((e) => e.amount === formData.amount);
		setPlanId(plan !== undefined ? plan.planId : "");
	}, [formData]);

	return (
		<>
			{showSpinner && isPending && (
				<LoadingSpinner showLoadingSpinner={true} />
			)}
			<PayPalButtons
				style={intent === "capture" ? oneTimeStyle : recurringStyle}
				disabled={false}
				forceReRender={[
					intent,
					formData.amount,
					formData.currency,
					oneTimeStyle,
				]}
				fundingSource={undefined}
				createOrder={
					intent === "capture"
						? (data, actions) => {
								return actions.order
									.create({
										purchase_units: [
											{
												amount: {
													currency_code:
														formData.currency,
													value: formData.amount,
												},
											},
										],
									})
									.then((orderId) => {
										return orderId;
									});
						}
						: undefined
				}
				createSubscription={
					intent === "subscription"
						? (data, actions) => {
								return actions.subscription
									.create({
										plan_id:
											planId !== undefined ? planId : "",
									})
									.then((orderId) => {
										return orderId;
									});
						}
						: undefined
				}
				onApprove={function (data, actions) {
					history.push("donate/success", intent);
				}}
				onError={function (err) {
					window.location.href = "/donate/error";
				}}
			/>
		</>
	);
};

/**
 *
 * @param {currency} string
 * @param {amount} string
 * @param {planId} string
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalDonate({ donationType, showForm, formData }) {
	return (
		<div className="paypal-buttons-wrap">
			{/*Need to leave forms this way as options is hardcoded in PayPalScriptProvider*/}
			{showForm && donationType === "One Time Donation" && (
				<PayPalScriptProvider
					options={{
						clientId: clientId,
						components: "buttons",
						currency: formData.currency,
					}}
				>
					<ButtonWrapper
						intent={"capture"}
						showSpinner={true}
						formData={formData}
					/>
				</PayPalScriptProvider>
			)}
			{showForm && donationType === "Recurring Donation" && (
				<PayPalScriptProvider
					options={{
						clientId: clientId,
						components: "buttons",
						currency: formData.currency,
						vault: true,
					}}
				>
					<ButtonWrapper
						intent={"subscription"}
						showSpinner={true}
						formData={formData}
					/>
				</PayPalScriptProvider>
			)}
		</div>
	);
}