import './App.scss';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { useEffect, useState } from 'react';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import axios, { AxiosResponse  } from 'axios'
import { IPropsReq } from './interface/IPropsRequisicao';

const initialFilter: CompositeFilterDescriptor = {
  logic: "and",
  filters: [{ field: "episode", operator: "contains", value: "" }]
};

function App() {
  const [filter, setFilter] = useState(initialFilter);
  
  const [resultado, setResultado] = useState<IPropsReq[]>([])

    useEffect(() => {
    const reqRickMorty = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        const resultado = response.data.results;
        setResultado(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    reqRickMorty();
  }, []);

  return (
    <div className="App">
      <Grid 
        data={filterBy(resultado, filter)}
        filterable={true}
        filter={filter}
        onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
        style={{ backgroundColor:"#f0F" }}
      >
        <Column field="id" title="ID" width="200px" />
        <Column field="episode" title="Episódio" width="240px" />
        <Column
          field="air_date"
          width="240px"
          filter="date"
          format="{0:Y}"
          title='Data'
        />
        <Column field="name" title="Nome do episódio" width="180px" format="{0:c}" />
      </Grid>
    </div>
  );
}

export default App;
