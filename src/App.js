import './App.css';
import officeImage from './image.jpg';
function App() {
  return (
    <div className='fullsize'>
      
    <div className="App">
      
      <div className="left">
      <h1>
        Get <span style={{color:'purple'}}>Insights</span> that help your business grow .
      </h1>
      <p>
        Discover the benefits of data analytics and make better decisions regarding revenue,customer experience and overall efficiency.
      </p>
      <div className='three'>
      <div className='1'>
       <h2>10K+</h2>
       <p>COMPANIES</p>
      </div>
       
      <div className='2'>
        <h2>314</h2>
       <p>TEMPLATES</p>
      </div>
      
      <div className='3'>
        <h2>12M+</h2>
       <p>QUERIES</p>
      </div>
    </div>
    </div>
    
    <div className="right">
      <img src={officeImage} />
    </div>
    </div>
    </div>
  );
}

export default App;
