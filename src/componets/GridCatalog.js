import React from "react";

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "../Form.css";

function SingleLineGridList(props) {
  // const [tapFlag, setTapFlag] = useState(false);

  const { catalogs } = props;
  catalogs.map((catalog) => console.log(catalog));

  return (
    <div className="Flags">
      <ImageList sx={{ width: 600, height: 450 }} cols={3}>
        {catalogs.map((catalog, index) => (
          <ImageListItem key={index}>
            <img
              src={"https://flagcdn.com/160x120/" + catalog.code + ".png"}
              alt={catalog.title}
            />
            <ImageListItemBar title={catalog.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default SingleLineGridList;
