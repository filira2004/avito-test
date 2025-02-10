import { itemApi } from "../services/itemService";

const ItemContainerById = () => {
  const {
    data: item,
    error,
    isFetching,
    isLoading,
  } = itemApi.useFetchItemsByIdQuery(1);

  console.log(item);

  if (isLoading) {
    return <h1>222 Loading...</h1>;
  }

  if (isFetching) {
    return <h1>333 Fetching...</h1>;
  }

  if (error) {
    return <h2>{error.data}</h2>;
  }

  return (
    <div>
      <p>ItemContainerById</p>
    </div>
  );
};

export default ItemContainerById;
