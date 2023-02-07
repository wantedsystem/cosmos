import localFont from "@next/font/local";
import { IBM_Plex_Mono } from "@next/font/google";

export const IbmMono = IBM_Plex_Mono({
	weight: "500",
	subsets: ["latin"],
});
export const dunbar = localFont({
	src: [
		{
			path: "../../public/font/DunbarTall-Bold.otf",
			weight: "700",
			style: "bold",
		},
		{
			path: "../../public/font/DunbarTall-ExtraBold.otf",
			weight: "900",
			style: "extraBold",
		},
		{
			path: "../../public/font/DunbarTall-ExtraLight.otf",
			weight: "300",
			style: "extraLight",
		},
		{
			path: "../../public/font/DunbarTall-light.otf",
			weight: "400",
			style: "light",
		},
	],
});
