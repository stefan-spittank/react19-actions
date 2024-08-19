import { useState } from 'react'
import './App.css'
import {updateName} from "./backend.ts";

function App() {
 const [name, setName] = useState("");
   const [error, setError] = useState(null);
   const [isPending, setIsPending] = useState(false);

   const handleSubmit = async () => {
     setIsPending(true);
     const error = await updateName(name);
     setIsPending(false);
     if (error) {
       setError(error);
       return;
     }
   };

   return (
     <div>
       <input value={name} onChange={(event) => setName(event.target.value)} />
       <button onClick={handleSubmit} disabled={isPending}>
         Update
       </button>
       {error && <p>{error}</p>}
     </div>
   );
}

export default App
