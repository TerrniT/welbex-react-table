import './App.css';
import Table from './components/Table/Table';
import TableForm from './components/TableForm/TableForm';
import {data} from './data';

function App() {
  return (
    <>
      <div className="page">
         <h1 className='page__title'>
             Table
         </h1>
        <TableForm />
        <Table data={data} />
      </div>
    </>
  );
}

export default App;
