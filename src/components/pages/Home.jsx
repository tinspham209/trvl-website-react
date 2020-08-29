import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import { uniqueId } from "../../utils";

const getTravelBlogsLarge = () => {
	const json = {
		blogs: [
			{
				id: uniqueId(),
				src: "images/img-9.jpg",
				text: "Explore the hidden waterfall deep inside the Amazon Jungle",
				label: "Adventure",
				path: "/services",
			},
			{
				id: uniqueId(),
				src: "images/img-2.jpg",
				text: "Travel through the Islands of Bali in a Private Cruise",
				label: "Luxury",
				path: "/services",
			},
		],
	};
	return json.blogs;
};

const getTravelBlogsMedium = () => {
	const json = {
		blogs: [
			{
				id: uniqueId(),
				src: "images/img-3.jpg",
				text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
				label: "Mystery",
				path: "/services",
			},
			{
				id: uniqueId(),
				src: "images/img-4.jpg",
				text: "Experience Football on Top of the Himilayan Mountains",
				label: "Adventure",
				path: "/products",
			},
			{
				id: uniqueId(),
				src: "images/img-8.jpg",
				text: "Ride through the Sahara Desert on a guided camel tour",
				label: "Adrenaline",
				path: "/sign-up",
			},
		],
	};
	return json.blogs;
};

const Home = () => {
	const blogsLarge = getTravelBlogsLarge();
	const blogsMedium = getTravelBlogsMedium();

	return (
		<>
			<HeroSection />
			<Cards blogsLarge={blogsLarge} blogsMedium={blogsMedium} />
		</>
	);
};

export default Home;
