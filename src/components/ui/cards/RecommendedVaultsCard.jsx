import { IbmMono, dunbar } from "@/src/utils/fonts";

export default function RecommendedVaultsCard() {
	return (
		<div className="p-5 rounded-xl border border-white/25 ">
			<div className="flex items-center gap-5">
				<div className="h-14 w-14 rounded-full bg-white/20" />
				<div>
					<h5 className={`text-xl ${dunbar.className} font-bold`}>
						Q-Treasury
					</h5>
					<p className="text-white/60 text-sm">QSR, USDC, ATOM</p>
				</div>
			</div>

			<div className="my-5 flex gap-8">
				<div>
					<p className={`${IbmMono.className}  block mb-1 text-[8px]`}>TVL</p>
					<p className="font-bold">$47,234,495</p>{" "}
				</div>
				<div>
					<p className={`${IbmMono.className}  block mb-1 text-[8px]`}>APY</p>
					<p className="font-bold">13.56%</p>{" "}
				</div>
			</div>
			<button
				className={`bg-white/20 rounded-full w-full text-center p-3 px-5 font-semibold ${dunbar.className}`}
			>
				Deposit
			</button>
		</div>
	);
}
