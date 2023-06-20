"use client";
import React from "react";
import {
	Menu as Menu2,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Input as Input2,
} from "../imports";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export default function InputBar() {
	return (
		<>
			<Menu text={"النوع"} />
			<Input />
		</>
	);
}
function Menu({ text }) {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenu = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<Menu2 open={isOpen} handler={setIsOpen}>
			<MenuHandler>
				<Button
					color="cyan"
					variant="outlined"
					size="md"
					className="flex items-center font-Hacen-Tunisia"
					onClick={handleMenu}
				>
					{text}
				</Button>
			</MenuHandler>
			<MenuList className="bg-card1 text-lightSolid font-Hacen-Tunisia">
				<MenuItem>النوع 1</MenuItem>
				<MenuItem>النوع 2</MenuItem>
				<MenuItem>النوع 3</MenuItem>
			</MenuList>
		</Menu2>
	);
}
function Input() {
	return (
		<div className="relative h-11 w-full  min-w-[200px]">
			<Input2
				color="cyan"
				variant="outlined"
				className="text-white"
				label="ماهي الملابس التي تبحث عنها"
			/>
		</div>
	);
}
