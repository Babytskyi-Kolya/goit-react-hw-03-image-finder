import React from "react";
import { SearchBar } from "./search-bar/SearchBar";
import { ImageGallery } from "./image-gallery/ImageGallery";
import { Button } from "./button/LoadMore";
import { Modal } from "./modal/Modal";
import { fetchImages } from "api";
import {Body} from './App.styled';



export class App extends React.Component{
     state = {
        query: '',
        images: [],
        page: 1,
        showModal: false,
     }


     changeQuery = (newQuery) => {
        this.setState({
          query: `${Date.now()}/${newQuery}`,
          images: [],
          page: 1,
          isLoading: false,
        })
     };

     handleLoadMore = () => {
       this.setState(prevState => ({page: prevState.page + 1}))
     }

     handleOpenModal = () => {
          this.setState({
            showModal: true,
          })
     }

     handleCloseModal = () => {
         this.setState({
          showModal: false
         })
     }

   
     
     async componentDidUpdate (prevProps, prevState) {
       

      if(prevState.query !== this.state.query || prevState.page !== this.state.page){
        const item = this.state.query.split("/");
        const string = item[1];
        await fetchImages(string, this.state.page)
        .then()
        .then(data => {
          // let hasMoreImages = nextPage < Math.ceil((images.length + 1) / 12);
          // console.log(hasMoreImages);
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoading: false,
            // hasMoreImages: hasMoreImages,
          }));
        })
        .catch(error => {
          console.error('Error loading images:', error);
          this.setState({ isLoading: false });
        });
        
      }
     }

     render() {

      const {images} = this.state;

      return(
       <Body>
          <SearchBar
           onSubmit={this.changeQuery}
          />
          <ImageGallery
             images={images}
             openModal={this.handleOpenModal}
          />
          {this.state.images.length > 0 &&  <Button
          onClick={this.handleLoadMore}
          />}


          {/* <Modal
           closeModal={this.handleCloseModal}
           bigUrl={images.largeImageURL}
          /> */}
          {this.state.showModal && 
          <Modal 
          bigUrl={images.largeImageURL}
          closeModal={this.handleCloseModal}/>}
       </Body>

      )
     }

}




  // export const App = () => {
  //   return (
  //     <div
  //       style={{
  //         height: '100vh',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         fontSize: 40,
  //         color: '#010101'
  //       }}
  //     >
  //       React homework template
  //     </div>
  //   );
  // };
