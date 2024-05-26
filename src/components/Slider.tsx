import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type SliderProps = {
  url: string;
  limit?: string;
};

type Image = {
  id: string;
  author: string;
  download_url: string;
  height: number;
  width: number;
  url: string;
};

export default function Slider({ url, limit = "5" }: SliderProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(
    function () {
      (async function fetchImages() {
        const res = await fetch(`${url}?page=1&limit=${limit}`);
        const data = await res.json();

        setImages(data);
      })();
    },
    [url, limit]
  );

  console.log(index);

  function handlePrev(): void {
    if (index === 0) return setIndex(images.length - 1);

    setIndex((index) => index - 1);
  }

  function handleNext(): void {
    if (index === images.length - 1) return setIndex(0);

    setIndex((index) => index + 1);
  }

  return (
    <div className="w-[40rem] h-[26rem] relative mx-0 my-auto overflow-hidden rounded-md">
      {images.map((image, i) => {
        return (
          <div
            key={image?.id}
            className="absolute top-0 flex items-center justify-center w-full h-full transition-transform duration-1000"
            style={{ transform: `translateX(${100 * (i - index)}%)` }}
          >
            <img src={image?.download_url} className="object-cover" />
          </div>
        );
      })}

      <button
        className="absolute z-50 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/70 text-gray-800 rounded-full w-[2.5rem] h-[2.5rem] flex justify-center items-center"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-0 z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/70 text-gray-800 rounded-full w-[2.5rem] h-[2.5rem] flex justify-center items-center"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>

      <div className="z-50 absolute flex gap-2 bottom-4 left-1/2 -translate-x-1/2">
        {Array.from({ length: images.length }).map((_, i) => (
          <button
            key={i}
            className={` h-3 w-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
