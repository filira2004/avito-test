import { itemApi } from "../services/itemService";
import ItemContainerById from "./itemContainerById";

const ItemsContainer = () => {
  const {
    data: items,
    isFetching,
    isLoading,
    error,
  } = itemApi.useFetchAllItemsQuery();

  console.log(items);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isFetching) {
    return <h1>Fetching...</h1>;
  }

  if (error) {
    return <h2>Error by fetching posts</h2>;
  }

  return (
    <div>
      <p>ItemsContainer</p>
      <ItemContainerById />
    </div>
  );
};

export default ItemsContainer;
