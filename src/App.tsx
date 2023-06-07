import "./App.css";
import AuthButtons from "./components/AuthButtons";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      {/* cần đưa break point */}
      <div className="grid md:grid-cols-5">
        <Nav />
        <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
          <AuthButtons />
          <Header />
          <Trending />
        </main>
      </div>
    </>
  );
}

export default App;
/**
 * Các code xây dựng ban đầu với tailwind css được tính mặc định cho mobile
 */
