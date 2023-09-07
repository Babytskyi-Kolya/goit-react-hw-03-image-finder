import React, {Component} from "react";
import { LiItem, ItemImg } from "./ImageItem.Styled";
// import Modal from 'react-modal';


export const ImageItem = ({ url, alt }) => {

    return(
<LiItem className="gallery-item">
  <ItemImg src={url} alt={alt} />
</LiItem>
    )
}

// Modal.setAppElement('#root');

// export class ImageItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { id, webformatURL, largeImageURL, tags } = this.props.item;
//     const { isModalOpen } = this.state;

//     return (
//       <LiItem key={id}>
//         <ItemImg
//           src={webformatURL}
//           alt={tags}
//           onClick={this.openModal}
//         />

//         {/* <Modal
//           isOpen={isModalOpen}
//           onRequestClose={this.closeModal}
//           contentLabel="Image Modal"
//         >
//           <img src={largeImageURL} alt={tags} />
//           <button  onClick={this.closeModal}>
//             x
//           </button>
//         </Modal> */}
//       </LiItem>
//     );
//   }
// }
