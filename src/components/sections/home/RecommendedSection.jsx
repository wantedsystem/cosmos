import SectionHeader from "../../SectionHeader";
import RecommendedVaultsCard from "../../ui/cards/RecommendedVaultsCard";

export default function RecommendedSection() {
	return (
		<div className="mt-36">
			<SectionHeader
				title="Recommended For You"
				subTitle="Check out some vaults that are similar to yours that may interest you."
				seeAllPath="/"
			/>
			<div className="grid sm:grid-cols-2 gap-5">
				<RecommendedVaultsCard />
				<RecommendedVaultsCard />
				<RecommendedVaultsCard />
				<RecommendedVaultsCard />
			</div>
		</div>
	);
}
