import { IbmMono, dunbar } from "@/src/utils/fonts";
import SectionHeader from "../../SectionHeader";
import Icons from "../../ui/Icons";

export default function TopPerformers() {
	return (
		<section className="mt-24 pb-24">
			<SectionHeader
				title="Today’s Top Performers"
				subTitle="Explore the top performing vaults from the last 24 hours. "
				seeAllPath="/"
			/>
			<div className="mt-8">
				<div>
					<div className="flex items-center gap-3">
						<div className="h-12 w-12 rounded-full bg-[#d9d9d9]" />
						<h5 className={`text-xl ${dunbar.className} font-bold`}>
							Vault Name
						</h5>
					</div>
					<div className="flex flex-col md:flex-row md:items-center justify-between mt-4 pb-3 border-b border-b-white/25">
						<div className="flex items-center gap-5">
							<div className="flex items-center gap-1">
								<Icons name="users" />{" "}
								<span className="font-bold text-sm">50k Vault Deposits</span>
							</div>
							<div className="flex items-center gap-1">
								<Icons name="snow" />{" "}
								<span className="font-bold text-sm">Low risk</span>
							</div>
						</div>
						<div className="flex gap-5">
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
								<span className="font-bold ml-2 text-sm">
									$394,594,455
								</span>{" "}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
