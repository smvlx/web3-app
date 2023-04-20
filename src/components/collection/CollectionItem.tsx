import React from "react";

interface IProps {
  name: string;
  img: string;
  price: number;
  buyNow: string;
  vol: string;
  sales: string;
  interest: string;
}

const CollectionItem: React.FC<IProps> = ({
  name,
  img,
  price,
  buyNow,
  vol,
  sales,
  interest,
}) => {
  const round = (arg: number): number => Math.round(arg);

  return (
    <div className="collection-item">
      <div className="collection-item_name">
        <img width={"50px"} src={img} alt="" />
        <span>{name}</span>
      </div>
      <div className="collection-item_group">
        <div className="group-list">
          <span>{`${round(price)} SOL`}</span>
          <span>{buyNow}</span>
          <span className="vol">{vol}</span>
          <span>{sales}</span>
          <span>{interest}</span>
        </div>
        <div>
          <button>Instant buy</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
