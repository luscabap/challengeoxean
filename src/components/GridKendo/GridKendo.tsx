import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
import { GridColumn as Column, Grid, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { useState } from 'react';
import { IPropsResultadoReq } from '../../interface/IPropsRequisicao';
import styles from './GridKendo.module.scss';

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "episode", operator: "contains", value: "" }]
  };

export default function GridKendo({ resultadoReq }: IPropsResultadoReq){
    const [filter, setFilter] = useState(initialFilter);

    return (
        <Grid
            data={filterBy(resultadoReq, filter)}
            filterable={true}
            filter={filter}
            onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
            className={styles.container__tabela__grid}
          >
            <Column field="id" title="ID" width="200px" filter='numeric' className={styles.container__tabela__grid__column}/>
            <Column field="episode" title="Episódio" width="240px" />
            <Column field="name" title="Nome do episódio" width="180px" format="{0:c}" />
          </Grid>
    )
}