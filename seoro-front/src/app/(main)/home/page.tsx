import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Homequiz from "@/components/Homequiz";

const Home = () => {
    return (
        <>
        <div className={'bg-[#DCDCF4] min-h-screen'}>
            <Homequiz></Homequiz>
            <Navbar></Navbar>
            <Header></Header>

        </div>
        </>
    )
}
export default Home;
