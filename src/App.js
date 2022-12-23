import DogDataProvider from "./context";
import DogSearch from "./container/dogSearch";

import "./App.css";

function App() {
  return (
    <DogDataProvider>
      <div className="App">
        <DogSearch />
      </div>
    </DogDataProvider>
  );
}

export default App;
