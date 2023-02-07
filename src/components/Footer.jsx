import Link from "next/link";
import { dunbar, IbmMono } from "../utils/fonts";
import { Logo } from "./ui/Icons";

const FooterTabs = [
	{
		title: "Application",
		items: [
			{
				path: "/explore",
				label: "Explore",
			},
			{
				path: "/manage",
				label: "Manage",
			},
			{
				path: "/develop",
				label: "Develop",
			},
			{
				path: "/community",
				label: "Community",
			},
		],
	},
	{
		title: "Support & Resources",
		items: [
			{
				path: "/about",
				label: "About",
			},
			{
				path: "/documentation",
				label: "Documentation",
			},
			{
				path: "/articles",
				label: "Articles",
			},
			{
				path: "/privacy",
				label: "Privacy Policy",
			},
			{
				path: "/terms",
				label: "Terms & conditions",
			},
		],
	},
];
export default function Footer() {
	return (
		<footer className="p-8  bg-white/10">
			<div className="max-w-6xl mx-auto">
				<div className="grid  gap-8 sm:gap-0 sm:grid-cols-3">
					<Logo />
					{FooterTabs.map((footerItem, index) => (
						<div key={index}>
							<h5
								className={`${dunbar.className} font-bold mb-3 text-xl text-white`}
							>
								{footerItem.title}
							</h5>
							<ul>
								{footerItem.items.map((items, index) => (
									<Link
										key={index}
										href={items.path}
										className={`text-white/60 mb-3 font-normal block ${IbmMono.className}`}
									>
										{items.label}
									</Link>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
