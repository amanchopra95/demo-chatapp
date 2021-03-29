import './App.css';
import SocketContext, { socket } from './context/socket'
import Layout from './container/Layout/Layout'

function App() {

  return (
    <SocketContext.Provider value={socket}>
      <Layout />
    </SocketContext.Provider>
  );
}

export default App;
