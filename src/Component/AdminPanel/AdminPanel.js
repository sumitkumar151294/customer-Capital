import React from 'react'

const AdminPanel = () => {
  return (
    <>
    <div id="main-wrapper">
    <div className="nav-header">
            <a href="#" className="brand-logo">
            		<img className="w-100" src="https://beta.shop-loyalty.com/images/logo.png" />


            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
    </div>
    <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
							<div className="nav-item">
								<div className="input-group search-area">
									<input type="text" className="form-control" placeholder="Search here" />
									<span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
								</div>
							</div>
                        </div>
                        <ul className="navbar-nav header-right ">
							
							
						
							<li className="nav-item dropdown  header-profile">
								<a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
									<img src="img/user-profile.png" width="56" alt=""/>
								</a>
								
							</li>
							
                        </ul>
                    </div>
				</nav>
			</div>
		</div>
    </>
  )
}

export default AdminPanel