
import "./Button.css";

function Button({ text, fn }) {
    return <button onClick={fn}>{text}</button>;
  }

export default Button;