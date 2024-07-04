"use client";

import { useState } from "react";
import { IItem } from "../@types";
import RadioItem from "./RadioItem";

const ITEMS = [
  {
    id: 1,
    countSticks: 3,
    percentage: -32,
    price: 64,
    isEach: true,
    isBestDeal: true,
    checked: true,
  },
  {
    id: 2,
    countSticks: 2,
    percentage: -22,
    price: 71,
    isEach: true,
    isBestDeal: false,
    checked: false,
  },
  {
    id: 3,
    countSticks: 1,
    percentage: 15,
    price: 75,
    isEach: false,
    isBestDeal: false,
    checked: false,
  },
];

export default function RadioGroup() {
  const [items, setItems] = useState<IItem[]>(ITEMS);

  const handleChange = (id: number) => {
    setItems((prevState) =>
      prevState.map((item) => ({
        ...item,
        checked: id === item.id ? true : false,
      }))
    );
  };

  return (
    <div className="flex flex-row gap-6 flex-wrap md:flex-nowrap justify-center">
      {items.map((item) => {
        return <RadioItem key={item.id} item={item} onChange={handleChange} />;
      })}
    </div>
  );
}
