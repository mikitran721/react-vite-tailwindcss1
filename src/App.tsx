import "./App.css";
import AuthButtons from "./components/AuthButtons";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="grid grid-cols-5">
        <Nav />
        <main className="px-12 py-6 col-span-4 bg-cyan-50">
          <AuthButtons />
          MAIN CONTENT Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae obcaecati incidunt eum tempora perspiciatis quis quaerat
          odit laboriosam voluptatem, itaque, temporibus molestiae, fugiat
          distinctio non natus hic dignissimos eveniet? Pariatur? Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem sunt amet similique minus rem provident aliquam
          perspiciatis dolorum cupiditate, rerum magni qui eius quo odit est
          possimus pariatur eum.
        </main>
      </div>
    </>
  );
}

export default App;
