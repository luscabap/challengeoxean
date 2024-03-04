import './App.scss';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import products from "./products.json";
import categories from "./categories.json";

function App() {

  return (
    <div className="App">
      <p>
        <DropDownList 
          data={categories}
          dataItemKey="CategoryID"
          textField="CategoryName"
        />
      </p>
      <Grid data={products}>
        <GridColumn field="ProductName" title="Product Name" format="{0:c}"/>
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
    </div>
  );
}

export default App;
