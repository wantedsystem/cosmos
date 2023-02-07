import AuthContextProvider from "@/src/context/auth";
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {
	NProgress.configure({ showSpinner: false });
	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());
	return (
		<AuthContextProvider>
			<Component {...pageProps} />
		</AuthContextProvider>
	);
}
