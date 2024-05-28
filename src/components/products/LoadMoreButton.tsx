export default function LoadMoreButton({
  onButtonClick,
  isLoading,
  totalProducts,
  skipAmount,
  productsLength,
}) {
  const isNext = totalProducts > productsLength;
  console.log(isNext);

  return (
    <button
      className="p-2 border border-black rounded-md mt-3"
      onClick={() => onButtonClick((page) => page + 1)}
      disabled={!isNext}
    >
      {isLoading ? "Loading... " : "Load more"}
    </button>
  );
}
