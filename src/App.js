import {useEffect, useState} from 'react';
import './App.css';
import './assets/fonts.css'
import Paginator from './components/Pagination/Paginator';
import Table from './components/Table/Table';
import TableForm from './components/TableForm/TableForm';
import {data} from './data';


// TODO: Move data.js to node server
// TODO: Create "Not found " sign if results of filter == none
function App() {

  const [sortData, setSortData] = useState(data)
  const [sortCfg, setSortCfg] = useState({
    sortDirection: 'ASC',
    sortBox: 'name',
    filterBox: undefined,
    filterRule: undefined,
    filterArgument: undefined,
  });

  const [renderData, setRenderData] = useState(sortData)
  const [pagesConfig, setPagesConfig] = useState({
    currentPage: 1,
    pageCount: Math.ceil(sortData.length / 5)
  })

  function handleSort(box) {
    if (sortCfg.sortBox === box) {
      if (sortCfg.sortDirection === 'ASC') {
        setSortCfg({
          ...sortCfg,
          sortDirection: 'ASC',
          sortBox: box
        });
        return;
      }
    }
    setSortCfg({ ...sortCfg, sortDirection: 'ASC', sortBox: box})
  }

  function onFilterSubmit(config) {
    console.log(config);
    setSortCfg({
      ...sortCfg,
      filterBox: config.name,
      filterRule: config.rule,
      filterArgument: config.argument
    });
  }

  function onResetHandle() {
    setSortData([...data]);
    setPagesConfig({...pagesConfig, currentPage: 1});
  }

  function onChoosePageHandler(page) {
    setPagesConfig({
      ...pagesConfig, currentPage: page
    })
  }

  useEffect(
    () => {
      if (sortCfg.sortBox === 'name') {
        sortCfg.sortDirection === 'ASC'
        ? setSortData([...sortData.sort((first, second) => (first.name > second.name ? 1: -1))])
        : setSortData([...sortData.sort((first, second) => (first.name < second.name ? 1: -1))]);
      }

      if (sortCfg.sortBox === 'points') {
        sortCfg.sortDirection === 'ASC'
        ? setSortData([...sortData.sort((first, second) => first.name - second.name )])
        : setSortData([...sortData.sort((first, second) => second.name - first.name )])
      }

      if (sortCfg.sortBox === 'distance') {
        sortCfg.sortDirection === 'ASC'
        ? setSortData([...sortData.sort((first, second) => first.distance - second.distance )]) 
        : setSortData([...sortData.sort((first, second) => second.distance - first.distance )]) 
      }

      if (sortCfg.filterBox && sortCfg.filterRule && sortCfg.filterArgument) {
        if (sortCfg.filterRule === 'equal') {
          setSortData([
            ...sortData.filter((e) => e.name === sortCfg.filterArgument)
          ]);
        }
        
        if (sortCfg.filterRule === 'contain') {
          setSortData([
            ...sortData.filter((e) => e.name.includes(sortCfg.filterArgument))
          ]);
        }

        if (sortCfg.filterRule === 'greater') {
          setSortData([
            ...sortData.filter((e) => e.name.length > sortCfg.filterArgument)
          ]);
        }

        if (sortCfg.filterRule === 'less') {
          setSortData([
            ...sortData.filter((e) => e.name.length < sortCfg.filterArgument)
          ]);
        }
      }
      if (sortCfg.filterBox === 'points') {
        if (sortCfg.filterRule === 'equal') {
          setSortData([
            ...sortData.filter(
              (e) => e.points === Number(sortCfg.filterArgument)
            )
          ]);
        }

        if (sortCfg.filterRule === 'contain') {
          setSortData([
            ...sortData.filter(
              (e) => e.points.toString().includes(sortCfg.filterArgument)
            )
          ]);
        }
        
        if (sortCfg.filterRule === 'greater') {
          setSortData([
            ...sortData.filter(
              (e) => e.points > Number(sortCfg.filterArgument)
            )
          ]);
        }

        if (sortCfg.filterRule === 'less') {
          setSortData([
            ...sortData.filter(
              (e) => e.points < Number(sortCfg.filterArgument)
            )
          ]);
        }
      }
      if (sortCfg.filterBox === 'distance') {
        if (sortCfg.filterRule === 'equal') {
          setSortData([
            ...sortData.filter(
              (e) => e.distance === Number(sortCfg.filterArgument)
            )
          ]);
        }

        if (sortCfg.filterRule === 'contain') {
          setSortData([
            ...sortData.filter(
              (e) => e.distance.toString().includes(sortCfg.filterArgument)
            )
          ]);
        }
        
        if (sortCfg.filterRule === 'greater') {
          setSortData([
            ...sortData.filter(
              (e) => e.distance > Number(sortCfg.filterRule)
            )
          ]);
        }

        if (sortCfg.filterRule === 'less') {
          setSortData([
            ...sortData.filter(
              (e) => e.distance < Number(sortCfg.filterRule)
            )
          ]);
        }
      }
    },
    [ sortCfg ]
  );
  
  useEffect(
		() => {
			setPagesConfig({ ...pagesConfig, pageCount: Math.ceil(sortData.length / 5) });
		},
		[ sortData ]
	);

	useEffect(
		() => {
			setRenderData(
				sortData.slice(
					pagesConfig.currentPage === 1
						? pagesConfig.currentPage - 1
						: (pagesConfig.currentPage - 1) * 5,
					pagesConfig.currentPage * 5
				)
			);
		},
		[ pagesConfig, sortData ]
	);
  return (
    <>
      <div className="page">
        <TableForm 
          filterSubmit={onFilterSubmit} 
          onReset={onResetHandle}
        />
        <Table 
          data={renderData} 
          onSort={handleSort} 
        />
        <Paginator 
          currentPage={pagesConfig.currentPage}
          pageCount={pagesConfig.pageCount}
          onChoosePage={onChoosePageHandler}
        />
      </div>
    </>
  );
}

export default App;
