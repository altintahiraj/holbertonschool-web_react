import "./Login.css";

function Login() {
  return (
    <div className="App-body">
      <p> Login to access the full dashboard</p>
      <label htmlFor="email">email</label>
      <input type="email" id="email" />

      <label htmlFor="password">password</label>
      <input type="password" id="password" />

      <button type="submit">Ok</button>
    </div>
  );
}

export default Login;
