import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "grey" }}>Grey</button>
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }}>Olive</button>
          <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "violet" }}>violet</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "white" }}>white</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "pink" }}>pink</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>blue</button>
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "brown" }}>brown</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>green</button>
          <button onClick={() => setColor("Silver")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Silver" }}>Silver</button>
          <button onClick={() => setColor("Indigo")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Indigo" }}>Indigo</button>
          <button onClick={() => setColor("Aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Aqua" }}>Aqua</button>
          <button onClick={() => setColor("Crimson")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Crimson" }}>Crimson</button>
          <button onClick={() => setColor("Gold")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Gold" }}>Gold</button>
         
        </div>
      </div>
    </div>
  );
}

export default App;
