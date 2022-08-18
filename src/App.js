import "./styles.css";
import { Mos } from "./component/mos";

export default function App() {
  return (
    <div className="App">
      <Mos
        title="Mobile Operating System"
        details={[
          {
            context: "Android",
            styletype: "disc"
          },
          {
            context: "Blackberray",
            styletype: "disc"
          },
          {
            context: "iphone",
            styletype: "disc"
          },
          {
            context: "windows Phone",
            styletype: "disc"
          }
        ]}
      />
      <Mos
        title="Mobile Manufacturers"
        details={[
          {
            context: "Samsung",
            styletype: "square"
          },
          {
            context: "HTC",
            styletype: "square"
          },
          {
            context: "Micromax",
            styletype: "disc"
          },
          {
            context: "Apple",
            styletype: "circle"
          }
        ]}
      />
    </div>
  );
}
