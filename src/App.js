
import './App.css';

//import { Entry } from './pages/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
//import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
function App() {
  return (
    <div className="App">
      
      {/*<Entry/>*/}
      <DefaultLayout><AddTicket/></DefaultLayout>
    </div>
  );
}

export default App;
