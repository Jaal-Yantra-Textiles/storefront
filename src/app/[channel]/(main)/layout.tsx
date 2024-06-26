import { type ReactNode } from "react";
import Script from "next/script";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
	title: "Cici Label Store - A Jaal Yantra Product",
	description: "Cici Label is a brand powered by weavers and designers from all around the globe.",
};

export default function RootLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			<Script src="https://analytics.cynsar.capital/js/script.js" data-domain="shop.cicilabel.com" defer />
			<Header channel={props.params.channel} />
			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">{props.children}</main>
				<Footer channel={props.params.channel} />
			</div>
		</>
	);
}
