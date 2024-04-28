import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, items, onSelectItem }: Props) => {
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length !== 0 && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                index === selectIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectIndex(index);
                onSelectItem(item);
              }}
            >
              {`${1 + index}, ${item}`}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
