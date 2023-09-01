import { useState } from "react";
import "./App.css";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { PatientsTable } from "./Customer-page/PatientsTable";

export const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://dental-management-app.onrender.com"
        : "http://localhost:4000";

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
                    {pageToRender === 3 && <PatientsTable />}
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
