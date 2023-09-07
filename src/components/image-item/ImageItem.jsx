import React from "react";
import { LiItem, ItemImg } from "./ImageItem.Styled";



export const ImageItem = ({ url, alt }) => {

    return(
<LiItem className="gallery-item">
  <ItemImg src={url} alt={alt} />
</LiItem>
    )
}


