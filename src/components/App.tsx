// src/App.tsx
import css from "./App.module.css";
import CafeInfo from "./CafeInfo/CafeInfo";

const [votes, setVoute] = useState(0);

export default function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo></CafeInfo>
      </div>
    </>
  );
}
