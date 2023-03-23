import './App.css';
import { MyClock, CheckClock } from './clock';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyClock
                    src={'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg'}
                    name={'Image'}/>
            </header>
        </div>
    );
}

export default App;