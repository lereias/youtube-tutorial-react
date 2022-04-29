import './App.css';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
//import ListMovies from './components/ListMovies';
import RealtimeMovies from './components/RealtimeMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Firebase Firestore React</h1>
      </header>
      <main>
        <div className="card">
          {/*<ListMovies />*/}
          <RealtimeMovies />
          <AddMovie />
          <EditMovie />
        </div>
      </main>
    </div>
  );
}

export default App;
