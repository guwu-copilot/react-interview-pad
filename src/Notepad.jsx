import { useState } from 'react';

function Notepad() {
  const list = ['string', 'react', 'javascript', 'next', 'typeScript'];
  const [inputQuery, setInputQuery] = useState('');
  const filtered = inputQuery ? list.filter(x => x.toLowerCase().includes(inputQuery.toLowerCase())) : list;

  
  return(
    <div>
      <input value={inputQuery} onChange={(e) => setInputQuery(e.target.value)}/>
      {filtered.length === 0 ? <div>No result</div> 
      : filtered.map((str,idx)=>(
        <div key ={str}>{str}</div>
      ))}
    </div>
  )
}

export default Notepad;