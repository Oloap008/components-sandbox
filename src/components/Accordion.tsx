import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { AccordionData } from "../vite-env";

interface Props {
  data: string;
}

function Accordion({ data }: Props) {
  const parsedData = JSON.parse(data);
  const [indexes, setIndexes] = useState<number[]>([]);
  const [multiselect, setMultiselect] = useState(false);

  function handleTriggerClick(index: number): void {
    if (indexes.includes(index))
      return setIndexes((indexes) => indexes.filter((el) => el !== index));

    if (multiselect) return setIndexes((indexes) => [...indexes, index]);

    setIndexes([index]);
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        className="p-2 border border-gray-400 rounded-md mx-auto w-48"
        onClick={() => {
          setMultiselect((multiselect) => !multiselect);
          setIndexes([]);
        }}
      >
        {multiselect ? "Disable" : "Enable"} Multiselect
      </button>

      {parsedData.map((el: AccordionData, i: number) => {
        const included = indexes.includes(i);

        return (
          <div key={el.title} className="min-w-96 rounded-sm overflow-clip">
            <div
              className="flex justify-between items-center p-2 border-b-2 border-gray-600 cursor-pointer"
              onClick={() => handleTriggerClick(i)}
            >
              <h3>{el.title}</h3>
              <IoChevronDown
                className={`${
                  included && "-rotate-180"
                } transition-transform duration-300`}
              />
            </div>

            <p className={`p-2 ${included ? "flex" : "hidden"}`}>
              {el.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
