import { createContext, useContext, useEffect, useState } from "react";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { useRouter } from "next/router";

const AuthContext = createContext({
	account: "",
	setAccount: () => {},
	login: () => {},
	logout: () => {},
});

export function useAuthContext() {
	return useContext(AuthContext);
}

function LoadingIcon() {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				style={{
					margin: "auto",

					display: "block",
					shapeRendering: "auto",
				}}
				width="100px"
				height="100px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle cx="84" cy="50" r="10" fill="#0a0a0a">
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="0.8333333333333334s"
						calcMode="spline"
						keyTimes="0;1"
						values="10;0"
						keySplines="0 0.5 0.5 1"
						begin="0s"
					></animate>
					<animate
						attributeName="fill"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="discrete"
						keyTimes="0;0.25;0.5;0.75;1"
						values="#0a0a0a;#665e55;#717070;#28292f;#0a0a0a"
						begin="0s"
					></animate>
				</circle>
				<circle cx="16" cy="50" r="10" fill="#0a0a0a">
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="0;0;10;10;10"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="0s"
					></animate>
					<animate
						attributeName="cx"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="16;16;16;50;84"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="0s"
					></animate>
				</circle>
				<circle cx="50" cy="50" r="10" fill="#28292f">
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="0;0;10;10;10"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-0.8333333333333334s"
					></animate>
					<animate
						attributeName="cx"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="16;16;16;50;84"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-0.8333333333333334s"
					></animate>
				</circle>
				<circle cx="84" cy="50" r="10" fill="#717070">
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="0;0;10;10;10"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-1.6666666666666667s"
					></animate>
					<animate
						attributeName="cx"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="16;16;16;50;84"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-1.6666666666666667s"
					></animate>
				</circle>
				<circle cx="16" cy="50" r="10" fill="#665e55">
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="0;0;10;10;10"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-2.5s"
					></animate>
					<animate
						attributeName="cx"
						repeatCount="indefinite"
						dur="3.3333333333333335s"
						calcMode="spline"
						keyTimes="0;0.25;0.5;0.75;1"
						values="16;16;16;50;84"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						begin="-2.5s"
					></animate>
				</circle>
			</svg>
		</>
	);
}
export default function AuthContextProvider(props) {
	const [account, setAccount] = useState("");
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const chain = localStorage.getItem("chain");
			if (!chain) {
				setPageLoading(false);

				return router.push("/");
			}

			try {
				const accountInfo = await keplr.getKey(chain);
				if (accountInfo) {
					setAccount({ ...accountInfo, address: accountInfo?.bech32Address });
				} else {
					router.push("/");
				}
			} catch (error) {
				router.push("/");
			} finally {
				setPageLoading(false);
			}
		})();
	}, []);

	async function login(chainId = "cosmoshub-4") {
		if (!window.getOfflineSigner || !window.keplr) {
			alert("Please make sure you have the keplr extension installed");
		} else {
			try {
				if (window.keplr.experimentalSuggestChain) {
					try {
						await window.keplr.experimentalSuggestChain({
							chainId: "osmo-test-4",
							chainName: "Osmosis testnet",
							rpc: "https://rpc-test.osmosis.zone",
							rest: "https://lcd-test.osmosis.zone",
							stakeCurrency: {
								coinDenom: "OSMO",
								coinMinimalDenom: "uosmo",
								coinDecimals: 6,
							},

							bip44: {
								coinType: 118,
							},

							bech32Config: {
								bech32PrefixAccAddr: "osmo",
								bech32PrefixAccPub: "osmopub",
								bech32PrefixValAddr: "osmovaloper",
								bech32PrefixValPub: "osmovaloperpub",
								bech32PrefixConsAddr: "osmovalcons",
								bech32PrefixConsPub: "osmovalconspub",
							},
							currencies: [
								{
									coinDenom: "OSMO",
									coinMinimalDenom: "uosmo",
									coinDecimals: 6,
								},
							],
							feeCurrencies: [
								{
									coinDenom: "OSMO",
									coinMinimalDenom: "uosmo",
									coinDecimals: 6,
								},
							],

							coinType: 118,
							gasPriceStep: {
								low: 0.01,
								average: 0.025,
								high: 0.04,
							},
						});
						await window.keplr.experimentalSuggestChain({
							chainId: "qsr-questnet-03",
							chainName: "Quasar testnet",
							rpc: "https://quasar-testnet-rpc.polkachu.com",
							rest: "https://quasar-testnet-api.polkachu.com",
							stakeCurrency: {
								coinDenom: "$QSR",
								coinMinimalDenom: "$qsr",
								coinDecimals: 6,
							},

							bip44: {
								coinType: 118,
							},

							bech32Config: {
								bech32PrefixAccAddr: "quasar",
								bech32PrefixAccPub: "quasarpub",
								bech32PrefixValAddr: "quasarvaloper",
								bech32PrefixValPub: "quasarvaloperpub",
								bech32PrefixConsAddr: "quasarvalcons",
								bech32PrefixConsPub: "quasarvalconspub",
							},
							currencies: [
								{
									coinDenom: "$QSR",
									coinMinimalDenom: "$qsr",
									coinDecimals: 6,
								},
							],
							feeCurrencies: [
								{
									coinDenom: "$QSR",
									coinMinimalDenom: "$qsr",
									coinDecimals: 6,
								},
							],

							coinType: 118,
							gasPriceStep: {
								low: 0.01,
								average: 0.025,
								high: 0.04,
							},
						});
					} catch (error) {
						alert("Failed to suggest the chain");
					}
				} else {
					alert("Please use the recent version of keplr extension");
				}

				await window.keplr.enable(chainId);
				const offlineSigner = window.keplr.getOfflineSigner(chainId);
				const accounts = await offlineSigner.getAccounts();
				setAccount(accounts[0]);
				localStorage.setItem("chain", chainId);
				const cosmJS = new SigningCosmosClient(
					"https://lcd-cosmoshub.keplr.app/rest",
					accounts[0].address,
					offlineSigner
				);
				router.push("/home");
			} catch (error) {
				console.log(error);
			}
		}
	}
	async function logout() {
		if (window) {
			await window.keplr.disable();
			localStorage.removeItem("chain");
			router.push("/");
			setAccount("");
		}
	}
	const defaultValue = { login, logout, account, setAccount };
	return (
		<AuthContext.Provider value={defaultValue}>
			{pageLoading ? (
				<div className="w-full h-screen flex items-center justify-center">
					<LoadingIcon />
				</div>
			) : (
				<div>{props.children}</div>
			)}
		</AuthContext.Provider>
	);
}
