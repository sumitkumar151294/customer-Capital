import React from 'react'

const VendorMasterContent = () => {
  return (
    <>
     <div class="content-body">
            <div class="container-fluid">
				
               
                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Vendor Master</h4>
                            </div>
                            <div class="card-body ">
								<div class="container mt-3">
  <form>
    <div class="row">
      
      <div class="col-sm-4 form-group mb-2">
        <label for="name-f">Vendor Name</label>
        <input type="text" class="form-control" name="fname" id="name-f" placeholder="" required/>
      </div>
     <div class="col-sm-4 form-group mb-2">
        <label for="name-l">Client ID</label>
        <input type="text" class="form-control" name="lname" id="name-l" placeholder="" required/>
      </div>
      <div class="col-sm-4 form-group mb-2">
        <label for="email">Client Secret</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="" required/>
      </div>

        <div class="col-sm-4 form-group mb-2">
        <label for="email">Username</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="" required/>
      </div>
     

       <div class="col-sm-4 form-group mb-2">
        <label for="pass">Password</label>
        <input type="Password" name="password" class="form-control" id="pass" placeholder="" required/>
      </div>


  <div class="col-sm-4 form-group mb-2">
        <label for="status">Status</label>
        <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="Active">Active</option>
  <option value="Non-Active">Non-Active</option>

</select>
      </div>


 <div class="col-sm-6 form-group mb-2">
        <label for="zip">End Point</label>
        <input type="zip" class="form-control" name="Zip" id="zip" placeholder="" required/>
      </div>


       <div class="col-sm-6 form-group mb-2">
        <label for="pass">Authorization Code</label>
        <input type="Password" name="password" class="form-control" id="pass" placeholder="." required/>
      </div>

    
     

      <div class="col-sm-12 form-group mb-0 mt-2">
        <button class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
      </div>

    </div>
  </form>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  <div class="container-fluid pt-0">
            <div class="row">
        <div class="col-lg-12">
                        <div class="card">
                             <div class="card-header">
                                <h4 class="card-title">Vendor List</h4>
                            </div>
                            
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table header-border table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Vendor Name</th>
                                                <th>Client ID</th>
                                                <th>Username</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jaswant Rawat<a href="javascript:void();"></a>
                                                </td>
                                                <td>#26589</td>
                                                <td><span class="text-muted">JOJO</span>
                                                </td>
                                                <td>******</td>
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                            </tr>
                                            <tr>
                                                <td>Manish Gautam<a href="javascript:void();"></a>
                                                </td>
                                                <td>#58746</td>
                                                <td><span class="text-muted">MG</span>
                                                </td>
                                                <td>************</td>
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                            </tr>
                                            <tr>
                                                <td>Naveen Jha<a href="javascript:void();"></a>
                                                </td>
                                                <td>#09808</td>
                                                <td><span class="text-muted">It's Naveen Jha</span>
                                                </td>
                                                <td>*********</td>
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                            </tr>
                                            <tr>
                                                <td>Vithal Chaudhary<a href="javascript:void();"></a>
                                                </td>
                                                <td>#45686</td>
                                                <td><span class="text-muted">Mr.Vithal</span>
                                                </td>
                                                <td>**************</td>
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
        
        </div>
    </div>


        </div>
    </>
  )
}

export default VendorMasterContent