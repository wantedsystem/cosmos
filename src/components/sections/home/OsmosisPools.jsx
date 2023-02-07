import { getOsmosisClient } from "@/src/utils/getOsmosisClient";
import { useEffect, useState } from "react";
import { osmosis } from "osmojs";
import PoolsCard from "../../ui/cards/PoolsCard";
import SectionHeader from "../../SectionHeader";
import Skeleton from "react-loading-skeleton";
export default function OsmosisPools() {
	const [pools, setPools] = useState([]);
	const [fetchingPools, setFetchingPools] = useState(true);

	// @fetch pools
	async function fetchOsmosisPools() {
		try {
			const osmosisClient = await getOsmosisClient();
			setFetchingPools(true);
			const response = await osmosisClient.osmosis.gamm.v1beta1.pools();

			//   @decode pools
			const pools = response.pools.map(({ typeUrl, value }) => {
				return osmosis.gamm.v1beta1.Pool.decode(value);
			});
			setPools(pools?.slice(0, 6));
		} catch (error) {
			console.log(error);
		} finally {
			setFetchingPools(false);
		}
	}

	// refetch pools after every 60s
	useEffect(() => {
		setInterval(() => {
			fetchOsmosisPools();
		}, 60000);
	}, []);

	return (
		<section className="mb-16">
			<SectionHeader
				title="Osmosis Pools"
				subTitle="Top pools from the osmosis chain"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{!fetchingPools ? (
					pools.map((pool, index) => <PoolsCard key={index} pool={pool} />)
				) : (
					<>
						{new Array(6).fill(0).map((_, i) => (
							<Skeleton
								key={i}
								className="w-full h-28 rounded-md bg-white/20"
								baseColor="rgb(255 255 255 / 0.25)"
								highlightColor="rgb(255 255 255 / 0.25)"
							/>
						))}
					</>
				)}
			</div>
		</section>
	);
}
