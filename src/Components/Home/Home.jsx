import Banner from "../Banner/Banner";
import Category from './../Category/Category';
import Featured from './../Featured/Featured';


const Home = () => {
    return (
        <div>
            <div className="bg-[#eef2ff]">
            <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto pb-40">
            <Category></Category>
            </div>
            <div className="bg-[#eef2ff] pt-20">
            <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;