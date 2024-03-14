import logo from './logo.svg';
import './assets/css/main.css';
import { Button } from './components/button';

function App() {
  return (
    <main>
      <section id='ui-buttons'>
        <div>
          <h2>Buttons</h2>
        </div>
        <div>
          <div>
            <div>
              <h3>Primary</h3>
            </div>
            <div>
              <Button variant='primary'>Create account</Button>
            </div>
          </div>
          <div>
            <div>
              <h3>Secondary</h3>
            </div>
            <div>
              <Button variant='secondary'>Create account</Button>
            </div>
          </div>
          < div>
            <div>
              <h3>Outline</h3>
            </div>
            <div>
              <Button variant='outline'>Create account</Button>
            </div>
          </div>
          <div>
            <div>
              <h3>Light</h3>
            </div>
            <div>
              <Button variant='light'>Create account</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
