import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { IbmMono } from "@/src/utils/fonts";

export default function CwPage() {
	async function instantiateContract() {
		console.log("instantiate Contract");
	}
	async function sendToken() {
		console.log("send token");
	}
	async function queryContract() {
		console.log("query contract");
	}
	return (
		<main className="bg-black text-white">
			<div className="max-w-6xl mx-auto">
				<Navbar />
			</div>
			<section className="bg-white/10 py-10">
				<div className="max-w-6xl mx-auto flex items-center gap-5">
					<button
						onClick={instantiateContract}
						className={`${IbmMono.className} bg-black py-3 px-5 rounded-md outline-none shadow-lg drop-shadow-lg`}
					>
						Instantiate contract
					</button>
					<button
						onClick={sendToken}
						className={`${IbmMono.className} bg-black py-3 px-5 rounded-md outline-none shadow-lg drop-shadow-lg`}
					>
						Send token
					</button>
					<button
						onClick={queryContract}
						className={`${IbmMono.className} bg-black py-3 px-5 rounded-md outline-none shadow-lg drop-shadow-lg`}
					>
						Query contract
					</button>
				</div>
			</section>
			<section className="max-w-6xl mx-auto h-[30rem] py-8">
				<p>Contract details will be display here</p>
			</section>
			<Footer />
		</main>
	);
}
