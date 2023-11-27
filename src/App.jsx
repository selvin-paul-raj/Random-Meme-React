import React, { useEffect,useState} from 'react'
import Loading from './components/Loading';


const App = () => {
    const data = new Date().getFullYear()
    const [ meme , setMeme] = useState("");
    const generateMeme = () =>{
        setMeme("")
        fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response)=> response.json())
        .then((data)=>setMeme(data))
    }
   const {url , title} = meme
    useEffect(()=>{
        generateMeme()
        console.log("Meme Generated");
    },[])
   

    return (
    <>
     <header>
        <h1>Random <span>Meme</span> Generator</h1>
     </header>
    <div className='container'>
         <div className="card">
                { meme ? (
                <>
                    <img src={url} alt="meme" />
                    <p>{title}</p>
                </>) :
                <Loading/>
                }
            </div>
            <button onClick={generateMeme} >Click</button>
    </div>
    <footer>&copy; {data} SPRHackz</footer>
    </>
    
  )
}

export default App