import ArrayItem from "./ArrayItem";

// function ArrayList(props) {
function ArrayList({ array }) {
  return (
    <div>
      {array.map((el) => {
        return <ArrayItem element={el} key={el.id} />;
      })}
    </div>
  );
}

export default ArrayList;
