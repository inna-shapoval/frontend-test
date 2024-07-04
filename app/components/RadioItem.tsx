"use client";

import { IItem } from "../@types";
import { cn } from "clsx-tailwind-merge";

type TProps = {
  onChange: (id: number) => void;
  item: IItem;
};

export default function RadioItem({ item, onChange }: TProps) {
  const { id, countSticks, percentage, price, isEach, isBestDeal, checked } =
    item;

  return (
    <>
      <div
        className={cn(
          "flex flex-initial w-74 mb-4 border-2  border-slate-400 p-6 rounded-[20px] flex-nowrap bg-slate-100 justify-start relative w-64 md:w-auto lg:w-64",
          {
            "border-indigo-500/100 bg-indigo-100": checked,
            "before:px-3 before:py-1 before:text-center before:font-normal before:text-base  before:content-['Best_Deal'] before:text-white before:bg-slate-400 before:color-white before:uppercase before:absolute before:top-[-15%] before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-xl":
              isBestDeal,
            "before:bg-indigo-600": checked && isBestDeal,
          }
        )}
      >
        <div>
          <label htmlFor={`option-${id}`} className="group cursor-pointer">
            <input
              type="radio"
              name="selector"
              id={`option-${id}`}
              className="peer w-0"
              checked={checked}
              onChange={() => onChange(id)}
            />
            <span className="inline-block w-7 h-7 rounded-full border-gray-200 bg-white ring-1 ring-slate-400 peer-checked:border-[7px] peer-checked:bg-white peer-focus:ring-indigo-600 peer-checked:border-indigo-600"></span>
          </label>
        </div>
        <div className="flex flex-col">
          <div className="ms-2 text-xl font-semibold text-gray-900">
            {countSticks} Sticks ({percentage}%)
          </div>
          <div className="text-gray-900 font-light text-base ml-2 whitespace-nowrap">
            ${price}
            {isEach ? "/each" : ""}
          </div>
        </div>
      </div>
    </>
  );
}
