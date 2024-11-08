"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { Data } from "@/types/briefs";
import { useState } from "react";

interface Props {
  data: Data[];
}

export function PlaceholdersAndVanishInputDemo({ data }: Props) {
  const [inputValue, setInputvalue] = useState('')

  const placeholders = [
    "Website",
    "Design",
    "Advertising",
    "Content",
    "Application",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value)
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const filteredData = data.filter((item)=>{
    return item.name.toLowerCase().includes(inputValue.toLowerCase())
   })
   console.log(filteredData, 'filtered data')
  };

  return (
    <div className=" ">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
