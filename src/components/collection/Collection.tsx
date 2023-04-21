import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchData } from "../../app/reducers/collectionReducer";
import { Key, useEffect } from "react";
import CollectionItem from "./CollectionItem";
import MenuColumnIcon from "../../icons/MenuColumnIcon";
import MenuRowIcon from "../../icons/MenuRowIcon";
import axios from "axios";
import "./collection.css";

interface IProps {
  collectionData: any;
}

const Collection: React.FC<IProps> = ({ collectionData }) => {
  const collection = useAppSelector((state) => state.collectionReducer.data);
  const loading = useAppSelector((state) => state.collectionReducer.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!collectionData) {
      dispatch(fetchData());
    }
  }, [collectionData, dispatch]);

  if (loading && !collectionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="collection-wrapper">
        <div className="collection_title">
          <h2>Trending Collections</h2>
          <div className="display-mod">
            <button className="bg-gray">
              <MenuColumnIcon />
            </button>
            <button className="bg-white">
              <MenuRowIcon />
            </button>
          </div>
        </div>
        <ul className="title-list">
          <div>
            <li>Collection</li>
          </div>
          <div className="list_content">
            <li>Floor price</li>
            <li>Buy Now Price</li>
            <li>24h Vol %</li>
            <li>24h Sales</li>
            <li>Interest (14 days)</li>
          </div>
        </ul>
      </div>
      <div className="collection">
        {(collectionData || collection).map(
          (item: {
            collection_id: Key | null | undefined;
            project: { display_name: string; img_url: string };
            floor_price: number;
          }) => {
            return (
              <CollectionItem
                key={item.collection_id}
                name={item.project.display_name}
                img={item.project.img_url}
                price={item.floor_price}
                buyNow={"1200 SOL"}
                vol={"+100%"}
                sales={"50.000"}
                interest={"10%"}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Collection;

export async function getStaticProps() {
  const collectionData = await axios.get("http://localhost:3000/");
  const data = await collectionData.data;
  return {
    props: {
      data,
    },
  };
}
