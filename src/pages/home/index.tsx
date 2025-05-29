import Hero from "../../Components/Hero";
import Sidebar from "../../Components/Sidebar";



function Home() {
    return(
        <>
        <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 ml-0 md:ml-0">
        <Hero/>
      </main>
    </div>
        </>
    )
}

export default Home;
