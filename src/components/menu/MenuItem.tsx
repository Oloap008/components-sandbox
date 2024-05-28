import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import MenuList from "./MenuList";
import { useState } from "react";
import { ViewItem } from "../../vite-env";

type dataItem = {
  item: ViewItem;
};

export default function MenuItem({ item }: dataItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {item.children ? (
        <>
          <div className="flex">
            <span
              className="my-auto cursor-pointer"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              {!isOpen ? <HiChevronRight /> : <HiChevronDown />}
            </span>
            <p>{item.label}</p>
          </div>
          {isOpen ? <MenuList data={item.children} /> : null}
        </>
      ) : (
        <p className="ml-4">{item.label}</p>
      )}
    </li>
  );
}
