import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListItem from './components/listitem';
import Section from './components/section';
import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        name="Jaya Negara" 
        title="Software Developer" 
        contact="Email: jayanegara517@gmail.com | Phone: 123-456-7890"
      />
      
      <main className="flex-grow">
        <Home />
      </main>
      
      <Footer />
    </div>
  );
}


export default App;
