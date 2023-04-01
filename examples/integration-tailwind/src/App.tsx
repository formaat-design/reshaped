import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";
import Demo from "./components/Demo";
import "./index.css";

const App = () => {
  return (
    <Reshaped theme="reshaped">
      <Demo />
    </Reshaped>
  );
};

export default App;
