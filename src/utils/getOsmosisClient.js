import { osmosis } from "osmojs";

export async function getOsmosisClient() {
	const { createRPCQueryClient } = osmosis.ClientFactory;
	const client = await createRPCQueryClient({
		rpcEndpoint: process.env.NEXT_PUBLIC_OSMOSIS_RPC,
	});

	return client;
}
