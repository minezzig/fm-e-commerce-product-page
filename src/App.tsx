import Header from "./components/Header";
import ShoeItem from "./components/ShoeItem";

function App() {
  return (
    <div className="m-auto max-w-[1248px]">
      <Header />
      <div>
        <ShoeItem />
      </div>
    </div>
  );
}

export default App;
