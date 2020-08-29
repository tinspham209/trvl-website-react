import React from "react";
import "./style.css";
import CardItem from "./CardItem";
const Cards = ({ blogsLarge, blogsMedium }) => {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						{blogsLarge.map((blog) => {
							return (
								<CardItem
									key={blog.id}
									id={blog.id}
									src={blog.src}
									text={blog.text}
									label={blog.label}
									path={blog.path}
								/>
							);
						})}
					</ul>
					<ul className="cards__items">
						{blogsMedium.map((blog) => {
							return (
								<CardItem
									key={blog.id}
									id={blog.id}
									src={blog.src}
									text={blog.text}
									label={blog.label}
									path={blog.path}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
