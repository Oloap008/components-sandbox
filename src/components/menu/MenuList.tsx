import { ViewItem } from "../../vite-env";
import MenuItem from "./MenuItem";

type ListProps = {
  data: ViewItem[];
};

export default function MenuList({ data = [] }: ListProps) {
  return (
    <ul className="ml-5">
      {data.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </ul>
  );
}
