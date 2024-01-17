
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import SearchResult from './Component/SearchResult/SearchResult'
import Sidebar from './Component/Sidebar/Sidebar'

function App() {


  return (
    <>
      <div className='max-w-6xl mx-auto body'>
        <Navbar></Navbar>
        <Banner></Banner>

        <div className='mt-10 max-w-6xl'>
          <div className='md:w-[35%]   shadow-xl     md:top-0 '>
            <Sidebar />
          </div>
          <div className='md:w-[65%] bg-white md:right-0 md:absolute '>
            <SearchResult />
          </div>
        </div>

        <Footer></Footer>
      </div>

    </>
  )
}

export default App
