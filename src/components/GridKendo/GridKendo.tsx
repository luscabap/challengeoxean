import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
import { GridColumn as Column, Grid, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { useState } from 'react';
import { IPropsGrid } from '../../interface/IPropsGrid';
import styles from './GridKendo.module.scss';

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "episode", operator: "contains", value: "" }]
  };

export default function GridKendo({ resultadoReq, subtitulo }: IPropsGrid){
    const [filter, setFilter] = useState(initialFilter);

    return (
      <div className={styles.container}>
        <h2 id='Episódios' className={styles.container__titulo}>{subtitulo}</h2>
        <Grid
            data={filterBy(resultadoReq, filter)}
            filterable={true}
            filter={filter}
            onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
            className={styles.container__grid}
          >
            <Column field="id" title="ID" width="200px" filter='numeric' className={styles.container__grid__column}/>
            <Column field="episode" title="Episódio" width="240px" className={styles.container__grid__columnlight}/>
            <Column field="name" title="Nome do episódio" width="180px" format="{0:c}" className={styles.container__grid__column}/>
          </Grid>
      </div>
    )
}