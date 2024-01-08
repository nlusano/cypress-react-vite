import ReactDOM from "react-dom/client";
import App from "./App";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";
import "./index.css";

const overmind = createOvermind(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider value={overmind}>
    <App />
  </Provider>
);
