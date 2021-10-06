// //concept of states-for this we will use hook useState
// //What is hook-They let you use state and other React features without writing a class.

import React, { useState } from 'react'


export default function Textform(props) {

    const [text, setText] = useState("");//What this line saying is Text is my varible and its value is Enter your text and if we want to update this text value we do it by useText function 
    //rat lo this syntax
    // text="Enter your text here 23"//Thsi is the wrong way to update the text
    // setText("Enter your text here 23");//Right way to update text
    const handleOnChange = (event) => {
        setText(event.target.value)//by doing this nowwecan type in this text area also

    }
    const handleUpClick = () => {
        // console.log("upper click button was clicked" +text);
        let newtext = text.toUpperCase()
        console.log(newtext);
        setText(newtext)
        props.showAlert("Text is converted into uppercase","success")
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Text is converted into lowercase","success")
    }
    const handleTrimClick=()=>{
        let newText=text.trim()
        setText(newText)
        props.showAlert("Text is converted trimmed","success")
    }
    const handleClearClick=()=>{
        let newtext=""
        setText(newtext)
        props.showAlert("Text is cleared","success")
    }
    const handleCapClick=()=>{
     var list=text.split(" ")
     let emptyList=[]
      list.forEach(function(e){
          var a=e[0].toUpperCase()+e.substr(1)
            emptyList.push(a)
      })
      let newtext=emptyList.join(" ")
      setText(newtext)
      props.showAlert("Every first letter of text is converted into capital","success")

    }
    const sentanceCount=()=>{
        let count=0;
        for(var i=0;i<=(text.length);i++){
            if(text[i]==="."){
                count++;
            }
        }
        return count;

    }

    return (
        <>

            <h1>{props.heading}</h1>
            <div className="mb-3 my-4">

                <textarea className="form-control" id="mybox" rows="7" cols="100" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Covert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleTrimClick}>Trim Text</button>
            {/* <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button> */}
            <button className="btn btn-primary mx-3" onClick={handleCapClick}>Capitalize every first letter</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            {/* H.w-
            create the triming btn,clear btn,replacing btn,capitalizing btn */}
            

            <div className="container my-4">
                <h2>Your Text summary</h2>
                <p><b>{text.split(" ").length}</b> words and<b> {text.length}</b> characters in above text and <b>{sentanceCount()}</b> Sentences </p>
                {/* Add sentace reader ,space reader, puctuation reader,paragraph reader */}
                <p><b>{0.008 * text.split(" ").length}</b> minutes will be enough to read the above text</p>
                {/* 0.008 minutes it takes to read one word */}
                <h2>
                    Preview
                </h2>
                <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
            </div>
        </>
    )
}



