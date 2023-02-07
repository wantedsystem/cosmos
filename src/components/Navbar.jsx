import Link from "next/link";
import Icons, { Logo, NotificationIcon } from "./ui/Icons";
import { IBM_Plex_Mono } from "@next/font/google";
import { dunbar } from "../utils/fonts";
import { useState } from "react";
import { useAuthContext } from "../context/auth";

const NavLinks = [
	{
		path: "/explore",
		label: "Explore",
	},
	{
		path: "/manage",
		label: "Manage",
	},
	{
		path: "/develop",
		label: "Develop",
	},
	{
		path: "/community",
		label: "Community",
	},
];

const IbmMono = IBM_Plex_Mono({
	weight: "500",
	subsets: ["latin"],
});

const ChainDropdown = ({ setSelectedChain }) => {
	const { login, logout } = useAuthContext();
	async function chainSwitchHandler(chain, chainId) {
		await login(chainId);
		setSelectedChain(chain);
	}

	return (
		<div className="bg-white transition-all p-3 absolute top-[3.5rem] shadow-lg w-full z-10 left-0 rounded-md">
			<button
				className="text-black outline-none mb-2 block"
				onClick={() => chainSwitchHandler("Quasar Testnet", "qsr-questnet-03")}
			>
				Quasar Testnet
			</button>
			<button
				className="text-black outline-none mb-2 block"
				onClick={() => chainSwitchHandler("Osmosis Mainnet", "osmosis-1")}
			>
				Osmosis Mainnet
			</button>
			<button
				className="text-black outline-none block"
				onClick={() => chainSwitchHandler("Osmosis testnet", "osmo-test-4")}
			>
				Osmosis Testnet
			</button>
			<div className="mt-5 border-t pt-3">
				<button
					className="outline-none rounded-sm text-red-600  w-full"
					onClick={logout}
				>
					Sign out
				</button>
			</div>
		</div>
	);
};

export default function Navbar() {
	const [selectedChain, setSelectedChain] = useState("Cosmos hub");
	const [showChains, setShowChains] = useState(false);
	const { account } = useAuthContext();
	return (
		<nav className="flex items-center justify-between py-4">
			<Link
				href="/home"
				className={`${dunbar.className} text-white text-3xl font-bold`}
			>
				<Logo />
			</Link>
			<ul className="hidden md:flex items-center gap-3 lg:gap-x-5">
				{NavLinks.map((navLink) => (
					<li key={navLink.label}>
						<Link
							className={`text-white/60 font-normal ${IbmMono.className}`}
							href={navLink.path}
						>
							{navLink.label}
						</Link>
					</li>
				))}
			</ul>
			<div className="hidden sm:flex items-center gap-3 lg:gap-6">
				<button className="border-0 outline-none">
					<Icons name="search" />
				</button>
				<button className="border-0 outline-none">
					<NotificationIcon width="38" height="38" />
				</button>
				<div
					className="cursor-pointer border border-gray-400 rounded-sm px-2 py-[0.15rem] w-40 relative"
					onClick={() => setShowChains(!showChains)}
				>
					<p className="text-white/60 text-sm">{selectedChain}</p>
					<p className="text-white text-sm">
						{account?.address?.substring(0, 8)}...
						{account?.address?.substring(12, 18)}
					</p>
					{showChains && <ChainDropdown setSelectedChain={setSelectedChain} />}
				</div>
				<button className="border-0 outline-none">
					<Icons name="settings" />
				</button>
			</div>
		</nav>
	);
}
