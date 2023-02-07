import Link from "next/link";
import { dunbar } from "../utils/fonts";

export default function SectionHeader({ title, subTitle, seeAllPath }) {
	return (
		<div className="flex items-start justify-between mb-6">
			<div>
				<h5 className={`${dunbar.className} font-bold text-2xl`}>{title}</h5>
				<p className="text-white/60 text-sm">{subTitle}</p>
			</div>
			{seeAllPath && (
				<Link
					href={seeAllPath}
					className="font-bold border border-white rounded-full py-1 sm:px-4 px-2 text-center hover:bg-white hover:text-black text-sm sm:txt-[16px]"
				>
					View All
				</Link>
			)}
		</div>
	);
}
