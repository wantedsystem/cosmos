import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<main className="bg-black">
			<div className="max-w-6xl mx-auto text-white px-4 ">
				<Navbar />
				{children}
			</div>
			<Footer />
		</main>
	);
}
