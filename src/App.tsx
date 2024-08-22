import './App.css'
import {addSubscription} from "./backend.ts";
import { useActionState } from "react";

// function App() {
//    const [email, setEmail] = useState("");
//    const [error, setError] = useState(null);
//    const [isPending, setIsPending] = useState(false);
//
//    const handleSubmit = async () => {
//      setIsPending(true);
//      const error = await addSubscription(email);
//      setIsPending(false);
//      if (error) {
//        setError(error);
//        return;
//      }
//    };
//
//    return (
//      <div>
//        <label htmlFor="name">Email:</label>
//        <input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//        <button onClick={handleSubmit} disabled={isPending}>
//          Newsletter abonnieren
//        </button>
//        {error && <p>{error}</p>}
//      </div>
//    );
// }

function App() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData: FormData) => {
      const error = await addSubscription(formData.get("name")?.toString()||"");
      if (error) {
        return error;
      }
      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <label htmlFor="name">Email:</label>
         <input name="email" type="email" />
         <button type="submit" disabled={isPending}>
           Newsletter abonnieren
         </button>
         {error && <p>{error}</p>}
    </form>
  );
}


export default App
