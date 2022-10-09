import CustomCard from "./Card";
function Main({ table, showName }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {table.map((elt, index) => (
        <CustomCard key={index} elt={elt} showName={showName} />
      ))}
    </div>
  );
}
export default Main;
