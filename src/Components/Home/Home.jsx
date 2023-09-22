import Banner from "../Banner/Banner";
import Category from './../Category/Category';
import Featured from './../Featured/Featured';


const Home = () => {
    return (
        <div>
            <div className="bg-[#eef2ff]">
            <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto">
            <Category></Category>
            <Featured></Featured></div>
        </div>
    );
};

export default Home;