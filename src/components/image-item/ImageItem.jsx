import React from "react";
import { LiItem, ItemImg } from "./ImageItem.Styled";
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';



export const ImageItem = ({ url, alt, openModal }) => {

    return(
<LiItem className="gallery-item">
  <ItemImg src={url} alt={alt} onClick={openModal} />
</LiItem>

      
    )
}


