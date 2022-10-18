
import './App.css';
import{ Navbar,Header,Features,Download,Subscribe,Faq, Foooter,FeatureCheck} from "./components"

function App() {
  return (
    <header className="header-bg">
<Navbar/>
<Header />
<FeatureCheck />
<Download />
<Subscribe />
<Faq/>
<Foooter/>
    </header>

    
 
     
  );
}

export default App;
