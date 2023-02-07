import { IbmMono, dunbar } from "@/src/utils/fonts";
import Icons from "../Icons";

export default function VerifiedVaultsCard() {
	return (
		<div className="p-5 rounded-xl border border-white/25 sm:w-[350px]">
			<div className="flex items-center justify-between">
				<h5 className={`text-xl ${dunbar.className} font-bold`}>Vault Name</h5>
				<div className="h-14 w-14 rounded-full bg-[#d9d9d9]" />
			</div>
			<div className="flex items-center gap-5 mt-4">
				<div className="flex items-center gap-1">
					<Icons name="users" />{" "}
					<span className="font-bold text-sm">50k Vault Deposits</span>
				</div>
				<div className="flex items-center gap-1">
					<Icons name="snow" />{" "}
					<span className="font-bold text-sm">Low risk</span>
				</div>
			</div>
			<div className="my-4">
				<span className={`${IbmMono.className} font-light block mb-1`}>
					TVL
					<span className="font-bold ml-2 text-sm">$47,234,495</span>{" "}
				</span>
				<span className={`${IbmMono.className} font-light block mb-1`}>
					APY
					<span className="font-bold ml-2 text-sm">13.56%</span>{" "}
				</span>
				<span className={`${IbmMono.className} font-light mb-1`}>
					Reserves
					<span className="font-bold ml-2 text-sm">$394,594,455</span>{" "}
				</span>
			</div>
			<button
				className={`bg-white/20 rounded-full w-full text-center p-3 px-5 font-semibold ${dunbar.className}`}
			>
				Deposit
			</button>
		</div>
	);
}
