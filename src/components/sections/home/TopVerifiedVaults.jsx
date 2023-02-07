import SectionHeader from "../../SectionHeader";
import VerifiedVaultsCard from "../../ui/cards/VerifiedVaultsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Icons from "../../ui/Icons";

SwiperCore.use([Navigation]);
export default function TopVerifiedVaults() {
	const nextBtn = "top-verified-vault-swiper-button-next";
	const prevBtn = "top-verified-vault-swiper-button-prev";

	return (
		<section className="mt-24">
			<SectionHeader
				title="Top Verified Vaults"
				subTitle="Browse through some of our top verified vaults. "
				seeAllPath="/"
			/>
			<div className="mt-2">
				<section className="relative top-verified-swiper">
					<div
						className={`${prevBtn} flex items-center justify-center rounded-full h-[48px] w-[48px] slider-btn cursor-pointer hover:bg-white absolute -bottom-[68px] right-20 z-10 bg-white/10 border border-white/25`}
					>
						<Icons name="arrowLeft" />
					</div>
					<Swiper
						slidesPerView="auto"
						spaceBetween={20}
						className="quasar-swiper"
						navigation={{
							nextEl: `.${nextBtn}`,
							prevEl: `.${prevBtn}`,
						}}
					>
						{new Array(10).fill(0).map((item, i) => (
							<SwiperSlide key={i}>
								<VerifiedVaultsCard />
							</SwiperSlide>
						))}
					</Swiper>
					<div
						className={`${nextBtn} flex items-center justify-center rounded-full h-[48px] w-[48px] slider-btn cursor-pointer hover:bg-white absolute -bottom-[68px] right-5 z-10 bg-white/10 border border-white/25`}
					>
						<Icons name="arrowRight" />
					</div>
				</section>
			</div>
		</section>
	);
}
