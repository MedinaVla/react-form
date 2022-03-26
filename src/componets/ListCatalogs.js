import React from "react";
import SingleLineGridList from "./GridCatalog";

import "../Form.css";
const ListCatalogs = (props) => {
  const { catalogs } = props;

  return (
    <div>
      <SingleLineGridList catalogs={catalogs} />
    </div>
  );
};
export default ListCatalogs;
