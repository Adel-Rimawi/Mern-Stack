import './App.css'
import Example from './Example';
function App() {
  return (
    <div className="App">
      <Example firstname="Jane" lastname="Doe" age = {45} haircolor="Black" ></Example>
      <Example firstname="John" lastname="Smith" age={88} haircolor="Brown" ></Example>
      <Example firstname="Millard" lastname="Fillmore" age={50} haircolor="Brown" ></Example>
      <Example firstname="Maria" lastname="Smith" age={62} haircolor="Brown" ></Example>
    </div>
  );
}

export default App;