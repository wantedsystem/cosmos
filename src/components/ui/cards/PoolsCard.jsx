import { dunbar } from "@/src/utils/fonts";

export default function PoolsCard({ pool }) {
	// format pools weight
	const weightFormatter = new Intl.NumberFormat(undefined, {
		notation: "compact",
	});
	return (
		<div className="p-5 rounded-xl border border-white/25 xl:w-[350px]">
			<div className="flex items-center justify-between gap-4">
				{pool.poolAssets.map((asset, index) => (
					<div key={index}>
						<h5 className={`text-lg ${dunbar.className} font-bold`}>
							{!asset?.token.denom.startsWith("ibc") && asset?.token.denom}
						</h5>
						<p className={`${dunbar.className} text-sm`}>
							Weight: {weightFormatter.format(asset?.weight)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
