import React from 'react';
import './Register.css';
import Add_Photo from '../picture/Add_Photo.svg';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
    // this.onDrop = this.onDrop.bind(this);
}
_handleImageChange(e) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }
  reader.readAsDataURL(file)
}

submitRegister(e) {
  this.setState({isLoginOpen: true, isSignUp: false})
}
  render() {
    return (
      <div className='Register'>
        <div className="Account-Info">
          Account Infomation
        </div>
        <div className="Name">
          Name *
        </div>
        <div className="Lastname">
          Lastname *
        </div>
        <div className="Address">
          Address *
        </div>
        <div className="Tel">
          Tel *
        </div>
        <div className="Email">
          Email *
        </div>
        <div className="Password">
          Password *
        </div>
        <div className="Add-Your-Photo">
          Add Your Photo
        </div>
        <div className="Allergy-Ingredients">
          Allergy ingredients 
        </div>
        <a style={{ textDecoration: 'none' }}href='/Profile'>
        <button type='button' className='Finish-Button' onClick={this.submitRegister.bind(this)}>
          FINISH
        </button>
        </a>
        <input
          className ="Name-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Name-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Lastname-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Address-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Apartment,etc(optional)'
        />
        <input
          className ="City"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  City'
        />
        <input
          className ="Province"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Province'
        />
        <input
          className ="Postal-Code"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Postal Code'
        />
        <input
          className ="Tel-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Email-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Password-box"
          type="password"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_01"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_02"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_03"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
          <input
            img src={Add_Photo} 
            className="Add-Photo-box" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
        {/* <ImageUploader className = "Add-Photo-box"/> */}
      </div>
    )
  }
}
// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {file: '',imagePreviewUrl: ''};
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     // TODO: do something with -> this.state.file
//     console.log('handle uploading-', this.state.file);
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }
//     reader.readAsDataURL(file)
//   }

//   render() {
//     let {imagePreviewUrl} = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = (<img src={imagePreviewUrl} />);
//     } else {
//       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//     }

//     return (
//       <div className="previewComponent">
//         <form onSubmit={(e)=>this._handleSubmit(e)}>
//           <input className="fileInput" 
//             type="file" 
//             onChange={(e)=>this._handleImageChange(e)} />
//           <button className="submitButton" 
//             type="submit" 
//             onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
//         </form>
//         <div className="imgPreview">
//           {$imagePreview}
//         </div>
//       </div>
//     )
//   }
// }
  
export default Register;
