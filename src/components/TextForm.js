
import React,{useState} from 'react'

const TextForm = (props) => {
    const [text,setText]=useState("Enter the  Text Here")
    const handlertoUpercase=(e)=>{    
    setText(e.target.value)
    }
    const convert=()=>{
     let newtext= text.toUpperCase()
    setText(newtext)
     props.Alertshow('Text is succfully converted to uppercase',"successs")
    }
    const convert1=()=>{
        let newtext= text.toLowerCase()
       setText(newtext)
       
        props.Alertshow('Text is succfully converted to lowercase',"successs")
       }
       const capitalize=()=>{
                const arr=text.split(" ")
                 
                 for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                
                }
                const str2 = arr.join(" ");
                setText(str2)
                

        }
        const handleExpress=()=>{
            let newtext=text.split(/[ ]+/);
            setText(newtext.join(" "))
           
        }
        const copy=()=>{
           let text=document.getElementById("mybox")
           text.select();
           navigator.clipboard.writeText(text.value)
           }
            // props.Alertshow('Text is succfully copies',"successs")
       const clear=()=>{
        
       setText('')
    
       }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handlertoUpercase}     id="mybox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={convert}>Conver To Uper Case</button>
             <button className='btn btn-primary mx-3' onClick={convert1}>Conver To Lower Case</button> 
             <button className='btn btn-primary mx-3' onClick={capitalize}>Capitalize </button> 
             <button className='btn btn-primary mx-3' onClick={handleExpress}>RemoveExtraSpace </button> 
             <button className='btn btn-primary mx-3' onClick={copy}>CopyText </button> 
             <button className='btn btn-danger mx-3' onClick={clear}>Clear</button> 
             
        </div>
        <div className='container  my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length } words and {text.length}</p>
            <p>{0.008*text.split(" ").length }Minutes Time to Read The Above Text</p>
            <h2>Preview</h2>
            <p className='bg-red'>{text}</p>
           
        </div>
        </>
          
    )
}

export default TextForm
