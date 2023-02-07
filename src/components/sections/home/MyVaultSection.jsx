import React from "react";
import SectionHeader from "../../SectionHeader";
import { IbmMono, dunbar } from "@/src/utils/fonts";

const TrendLargeIcon = () => (
	<svg
		width="90"
		height="32"
		viewBox="0 0 90 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2 15.7463H24.5134C25.5386 15.7463 26.4928 16.2698 27.0436 17.1345L33.4713 27.2247C34.7647 29.2551 37.8025 29.0117 38.7561 26.8012L48.0263 5.31338C48.9896 3.08044 52.07 2.86141 53.3396 4.93557L59.5 15L64.0737 22.5762C65.1232 24.3147 67.5607 24.53 68.8987 23.0024L80 10.3284"
			stroke="white"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<g filter="url(#filter0_d_1_1395)">
			<rect x="74" y="3" width="12" height="12" rx="6" fill="white" />
			<rect
				x="75"
				y="4"
				width="10"
				height="10"
				rx="5"
				stroke="white"
				strokeWidth="2"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_1_1395"
				x="70"
				y="1"
				width="20"
				height="20"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="2" />
				<feGaussianBlur stdDeviation="2" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.268354 0 0 0 0 0.268354 0 0 0 0 0.31049 0 0 0 0.15 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1_1395"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_1_1395"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
const TrendIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask id="path-1-inside-1_1_1399" fill="white">
			<path d="M24 5.66667V13C24 13.3685 23.7018 13.6667 23.3333 13.6667C22.9648 13.6667 22.6667 13.3667 22.6667 13V7.275L13.8042 16.1375C13.675 16.2667 13.5042 16.3333 13.3333 16.3333C13.1625 16.3333 12.9922 16.2683 12.8621 16.138L8 11.275L1.1375 18.1375C1.00792 18.2667 0.837083 18.3333 0.666667 18.3333C0.285875 18.3333 0 18.0208 0 17.6667C0 17.4961 0.0650833 17.3255 0.195333 17.1954L7.52867 9.86208C7.65833 9.73333 7.82917 9.66667 8 9.66667C8.17083 9.66667 8.34117 9.73175 8.47125 9.862L13.3333 14.725L21.725 6.33333H16C15.6315 6.33333 15.3333 6.03517 15.3333 5.66667C15.3333 5.29817 15.6333 5 16 5H23.3333C23.7 5 24 5.3 24 5.66667Z" />
		</mask>
		<path
			d="M24 5.66667V13C24 13.3685 23.7018 13.6667 23.3333 13.6667C22.9648 13.6667 22.6667 13.3667 22.6667 13V7.275L13.8042 16.1375C13.675 16.2667 13.5042 16.3333 13.3333 16.3333C13.1625 16.3333 12.9922 16.2683 12.8621 16.138L8 11.275L1.1375 18.1375C1.00792 18.2667 0.837083 18.3333 0.666667 18.3333C0.285875 18.3333 0 18.0208 0 17.6667C0 17.4961 0.0650833 17.3255 0.195333 17.1954L7.52867 9.86208C7.65833 9.73333 7.82917 9.66667 8 9.66667C8.17083 9.66667 8.34117 9.73175 8.47125 9.862L13.3333 14.725L21.725 6.33333H16C15.6315 6.33333 15.3333 6.03517 15.3333 5.66667C15.3333 5.29817 15.6333 5 16 5H23.3333C23.7 5 24 5.3 24 5.66667Z"
			fill="#2E2C34"
		/>
		<path
			d="M22.6667 7.275H25.6667V0.0323606L20.5453 5.15368L22.6667 7.275ZM13.8042 16.1375L11.6828 14.0162L13.8042 16.1375ZM12.8621 16.138L14.9848 14.018L14.9836 14.0169L12.8621 16.138ZM8 11.275L10.1215 9.15388L8.0002 7.03216L5.87868 9.15368L8 11.275ZM1.1375 18.1375L3.2554 20.2622L3.25882 20.2588L1.1375 18.1375ZM0.195333 17.1954L2.3153 19.3181L2.31665 19.3167L0.195333 17.1954ZM7.52867 9.86208L5.41487 7.73324L5.40735 7.74076L7.52867 9.86208ZM8.47125 9.862L6.34857 11.982L6.34973 11.9831L8.47125 9.862ZM13.3333 14.725L11.2118 16.8461L13.3331 18.9678L15.4547 16.8463L13.3333 14.725ZM21.725 6.33333L23.8463 8.45465L28.9676 3.33333H21.725V6.33333ZM21 5.66667V13H27V5.66667H21ZM21 13C21 11.7116 22.045 10.6667 23.3333 10.6667V16.6667C25.3587 16.6667 27 15.0254 27 13H21ZM23.3333 10.6667C24.6271 10.6667 25.6667 11.7152 25.6667 13H19.6667C19.6667 15.0181 21.3026 16.6667 23.3333 16.6667V10.6667ZM25.6667 13V7.275H19.6667V13H25.6667ZM20.5453 5.15368L11.6828 14.0162L15.9255 18.2588L24.788 9.39632L20.5453 5.15368ZM11.6828 14.0162C12.1296 13.5694 12.7276 13.3333 13.3333 13.3333V19.3333C14.2808 19.3333 15.2204 18.9639 15.9255 18.2588L11.6828 14.0162ZM13.3333 13.3333C13.9263 13.3333 14.5296 13.5623 14.9848 14.018L10.7394 18.258C11.4548 18.9742 12.3987 19.3333 13.3333 19.3333V13.3333ZM14.9836 14.0169L10.1215 9.15388L5.87848 13.3961L10.7406 18.2591L14.9836 14.0169ZM5.87868 9.15368L-0.98382 16.0162L3.25882 20.2588L10.1213 13.3963L5.87868 9.15368ZM-0.980402 16.0128C-0.536748 15.5705 0.0586425 15.3333 0.666667 15.3333V21.3333C1.61552 21.3333 2.55258 20.9628 3.2554 20.2622L-0.980402 16.0128ZM0.666667 15.3333C2.02015 15.3333 3 16.4425 3 17.6667H-3C-3 19.5992 -1.4484 21.3333 0.666667 21.3333V15.3333ZM3 17.6667C3 18.2593 2.77148 18.8625 2.3153 19.3181L-1.92463 15.0727C-2.64132 15.7885 -3 16.7329 -3 17.6667H3ZM2.31665 19.3167L9.64999 11.9834L5.40735 7.74076L-1.92599 15.0741L2.31665 19.3167ZM9.64245 11.9909C9.19963 12.4306 8.6062 12.6667 8 12.6667V6.66667C7.05213 6.66667 6.11704 7.03606 5.41489 7.73325L9.64245 11.9909ZM8 12.6667C7.40702 12.6667 6.80377 12.4377 6.34857 11.982L10.5939 7.74204C9.87857 7.02576 8.93465 6.66667 8 6.66667V12.6667ZM6.34973 11.9831L11.2118 16.8461L15.4549 12.6039L10.5928 7.74088L6.34973 11.9831ZM15.4547 16.8463L23.8463 8.45465L19.6037 4.21201L11.212 12.6037L15.4547 16.8463ZM21.725 3.33333H16V9.33333H21.725V3.33333ZM16 3.33333C17.2884 3.33333 18.3333 4.37831 18.3333 5.66667H12.3333C12.3333 7.69202 13.9746 9.33333 16 9.33333V3.33333ZM18.3333 5.66667C18.3333 6.96039 17.2848 8 16 8V2C13.9819 2 12.3333 3.63595 12.3333 5.66667H18.3333ZM16 8H23.3333V2H16V8ZM23.3333 8C22.0431 8 21 6.95685 21 5.66667H27C27 3.64315 25.3569 2 23.3333 2V8Z"
			fill="white"
			mask="url(#path-1-inside-1_1_1399)"
		/>
	</svg>
);

export default function MyVaultSection() {
	return (
		<section>
			<SectionHeader
				title="My Vaults"
				subTitle="Here’s how your vaults are performing. "
				seeAllPath="/"
			/>
			<div className="mb-12 rounded-2xl p-5 border border-white/25">
				<div className="flex flex-col gap-y-4 md:flex-row items-start justify-between">
					<div>
						<p className="uppercase text-white/60 text-sm">Balance</p>
						<h4 className={`${dunbar.className} font-bold text-3xl my-2`}>
							$284,949
						</h4>
						<div className="flex items-center gap-4">
							<p className="text-white/60 uppercase text-sm">
								Overall performance
							</p>
							<div className="flex items-center">
								<TrendLargeIcon />
								<div className="flex items-center gap-1">
									<TrendIcon /> 4%
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<button
							className={`${IbmMono.className} text-sm bg-white/10 flex items-center gap-2 text-white rounded-full py-2 px-4`}
						>
							<div className="w-4 h-4 bg-white bg-white/20" />
							<p>Deposit</p>
						</button>
						<button
							className={`${IbmMono.className} text-sm bg-white/10 flex items-center gap-2 text-white rounded-full py-2 px-4`}
						>
							<div className="w-4 h-4 bg-white bg-white/20" />
							<p>Withdraw</p>
						</button>
						<button
							className={`${IbmMono.className} text-sm bg-white/10 flex items-center gap-2 text-white rounded-full py-2 px-4`}
						>
							<div className="w-4 h-4 bg-white bg-white/20" />
							<p>Claim</p>
						</button>
					</div>
				</div>
				<div className="my-7 h-[0.1rem] w-full bg-white/25" />
				{/* VAULTS */}
				<div className="flex gap-3 items-start">
					<div className="h-11 w-11 rounded-full bg-white/20 " />
					<div>
						<span className="text-sm text-white/60 mr-3">Q-Treasury</span>
						<span className="text-sm bg-white/20 py-[0.15rem] px-2">
							+12.01%
						</span>
						<p className={`text-xl font-bold ${dunbar.className} mt-2`}>
							$108,947
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
