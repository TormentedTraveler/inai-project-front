import Cart from "./components/Cart";
import person1 from "./img/person1.jpeg"

function App() {

  return (
    <div className="App">
      <Cart name="Alia" surname="Alia" image={person1} dateOfBirth="01/01/2005" dateOfMissing="12/12/2002" />
    </div>
  );
}

export default App;
