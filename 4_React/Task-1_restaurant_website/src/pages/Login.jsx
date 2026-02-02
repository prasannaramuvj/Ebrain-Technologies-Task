function Login(){




  return(
    <>
    <section className="my-2">
      <div className="login-container bg-white">
        <div className="left-container d-flex justify-content-center align-items-center">
          <form action="" style={{width:"500px"}}>
            <h4 className="text-align-center"><i>Login</i></h4>
            <div>
              <label htmlFor="" className="form-label">Username</label>
              <input type="text" className="form-control" />
            </div>
             <div className="mt-2">
              <label htmlFor="" className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
          </form>

        </div>
        <div className="right-container d-flex justify-content-center align-items-center flex-column">
          <h2>Hello Friends !</h2>
          <p className="lead">Register with you valid Credential to utilize feature</p>
          <button className="btn btn-outline-white">Sign Up</button>
          

        </div>

      </div>
    </section>

    </>
  )
}

export default Login