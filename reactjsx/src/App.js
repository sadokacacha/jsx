import logo from './logo.svg';
import './checkpoint.jsx';

function App() {
  return (
    <div>
    <div className="App" style={{border:'solid 1px black',maxWidth: '100vw' }} >
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={"/imageInSrc.png"} />
        <br />
        <img src={"/imageInPublic.png"} />
    </div>
    <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
    </video>
    </div>
  );
}

export default App;
