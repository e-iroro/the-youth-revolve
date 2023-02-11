
import Navbar from './components/Navbar';
import Header from './components/Header';
import Rank from './components/Rank';
import About from './components/About';
import UserPosts from './components/UserPosts';
import Process from './components/Process';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      {/* <Process /> */}
      <Rank />
      <UserPosts/>
      <Footer />


    </div>

  );
}

export default App;
