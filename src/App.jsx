import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Jenkins Frontend Deployment</h1>

        <p className="success">
          Application deployed successfully!
        </p>

        <div className="info">
          <p><strong>Application:</strong> React Frontend</p>
          <p><strong>CI/CD:</strong> Jenkins</p>
          <p><strong>Web Server:</strong> Nginx</p>
          <p><strong>Container:</strong> Not Used</p>
        </div>

        <button onClick={() => alert("Jenkins deployment is working!")}>
          Test Application
        </button>
      </div>
    </div>
  );
}

export default App;
