import { useState } from "react";
import "./App.css";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

function App() {
    const [pageToRender, setPageToRender] = useState(0);

    return (
        <div>
            <div className="container">
                <div className="Header">
                    <Header />
                </div>
                <div className="Nav-Bar">
                    <NavBar setPageToRender={setPageToRender} />
                </div>
                <div className="Body">
                    {pageToRender === 0 && (
                        <Body setPageToRender={setPageToRender} />
                    )}
                    {pageToRender === 1 && <p>1</p>}
                    {pageToRender === 2 && <p>2</p>}
                    {pageToRender === 3 && <p>3</p>}
                    {pageToRender === 4 && <p>4</p>}
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
