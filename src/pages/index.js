import Home from "../components/Home";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Interests from "../components/Interests";

const Index = () => {
    return (
        <div className="index-page">
            <Home />
            <Work />
            <Contact />
            <Interests />
        </div>
    );
};

export default Index;
