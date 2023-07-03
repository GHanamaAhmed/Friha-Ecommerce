"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import Search from "./search";
import { selep } from "../../../../lib/sleep";
import CardGridLoading from "./cardGridLoading";
import { Button } from "@material-tailwind/react";
export default function CardGrid() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selep().then(setIsLoading(false));
  }, []);
  const content = () => {
    return !isLoading ? (
			<>
				<Search />
				<div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
					{[...Array(10)].map((e, i) => {
						return <Card key={i} />;
					})}
				</div>
				<div className="flex w-full justify-center py-3">
					<Button
						variant="outlined"
						size="md"
						className={`font-Hacen-Tunisia border-lightContent ${

								"text-lightContent Focus:border-none focus:bg-scandaryColor focus:text-white"
						} focus:ring-0`}
					>
						المزيد
					</Button>
				</div>
			</>
		) : (
			<CardGridLoading />
		);
  };
  return content();
}
