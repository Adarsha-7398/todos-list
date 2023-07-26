import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick= ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text" //Wrong way to change text
    // setText("new text") // correct way to change text
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}} >
        <h1>{props.heading}</h1>
    <div class="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white' , color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower case</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}} >
      <h2>Your text summery</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something above to preview here"}</p>
    </div>
    </>
  )
}
