import { Logo } from "@/src/components/ui/Icons";
import { useAuthContext } from "@/src/context/auth";
import { dunbar } from "@/src/utils/fonts";

export default function Home() {
	const { login } = useAuthContext();
	return (
		<main className="h-screen bg-[url(/quasar-bg.png)] bg-cover bg-center">
			<div className="flex flex-col md:flex-row justify-center md:justify-start h-full">
				<div className="md:w-[60%] lg:w-1/2 h-full md:bg-[#8b47c1] p-7">
					<Logo />
					<div className="pt-24">
						<p className={`text-2xl text-white ${dunbar.className} font-bold`}>
							Connect to the cosmos chain with
						</p>

						<div className="bg-black rounded-xl w-full h-20  p-2 mt-4 group ">
							<button
								className={`${dunbar.className} font-bold text-lg bg-black group-hover:bg-white/20 w-full gap-3 rounded-xl outline-none h-full flex items-center justify-center text-white border border-white/30`}
								onClick={() => login()}
							>
								<div className="w-8 h-8 rounded-md border border-white text-semibold flex items-center justify-center">
									K
								</div>{" "}
								Keplr
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
