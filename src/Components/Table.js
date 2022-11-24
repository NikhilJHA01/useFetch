import useFetch from "../useFetch";
const Table = () => {
  const { loading, error, data } = useFetch();

  if (loading) return <>Loading...</>;
  if (!loading && !error && data) {
    return (
      <>
        {data[9].map((row, index) => {
          return <li key={`${row.login}_${index}`}>{row.login}</li>;
        })}
      </>
    );
  }
};
export default Table;
