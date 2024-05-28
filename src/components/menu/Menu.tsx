import { ViewItem } from "../../vite-env";
import MenuList from "./MenuList";

type MenuProps = {
  data: ViewItem[];
};

export default function Menu({ data = [] }: MenuProps) {
  return (
    <div className="w-screen h-full">
      <div className="w-[10rem] h-svh pt-5 border-r border-gray-300 sticky left-0">
        <MenuList data={data} />
      </div>
    </div>
  );
}
