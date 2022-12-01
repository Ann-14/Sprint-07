import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <>
   <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
   <button className='bg-primary text-white'>Ok</button>
   </>
  );
}

export default App;
