import './App.css'
import { Header, Menu }  from './components';
import LogsList from './pages/logs-list/logs-list';

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <Header />
      <Menu />
      <div className="flex-1 lg:pl-64 pl-0 overflow-auto">
        <LogsList />
      </div>
    </div>
  )
}

export default App
