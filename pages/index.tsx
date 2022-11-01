/* eslint-disable @next/next/no-sync-scripts */
// Import components from Next / React
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

// Import custom components
import { Footer, Header, TabBar, Presentation } from "../components";

// Other imports
import { clientGraphQL, queryHomePage } from "../utils";

interface HomePageProps {
	homePage: any;
}

const Home = ({ homePage }: HomePageProps) => {
	console.log(homePage);
	const linkID = homePage.video_link.substr(32);
	return (
		<>
			<div>
				<Head>
					<script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
				</Head>
				<Header isHomePage={true} />
				<TabBar />
				<Presentation intro={homePage.presentation} video_id={linkID} />
			</div>
			<Footer isScroll={true} />
		</>
	);
};

export async function getStaticProps() {
	// Log only on server side
	console.log("This is server side");
	// Get data from API
	const data = await clientGraphQL.query({
		query: queryHomePage,
	});

	return {
		props: {
			homePage: data.data.allHomepages.edges[0].node,
		},
	};
}

export default Home;
