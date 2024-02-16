import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';//v
<link rel="stylesheet" href="style.css"/>


export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      aname:"",
      atag:"",
      serialno:"",
      model:"",
      modelno:"",
      brand:"",
      category:"",
      Department:"",
      pur_cost:"",
      pur_date:"",
      company:"",
      warrenty_type:"",
      warrenty_ex:"",
      note:"",
      user :"",
      job:"",
      status:"",
      update_date:"",

      anameError:"",//v
      atagError:"",//v
      serialnoError:"",//v
      modelError:"",//v
      modelnoError:"",//v
      brandError:"",//v
      categoryError:"",//v
      DepartmentError:"",//v
      pur_costError:"",//v
      pur_dateError:"",//v
      companyError:"",//v
      warrenty_typeError:"",//v
      warrenty_exError:"",//v
      userError:"",//v
      noteError:"",
      jobError :"",//v
      statusError:"",//v
      update_dateError:""//v
     
    }
  }

  validate =() =>{//v
    let anameError="";
    let atagError ="";
    let serialnoError="";
    let modelError ="";
    let modelnoError="";
    let brandError="";
    let categoryError="";
    let DepartmentError="";
    let pur_costError="";
    let pur_dateError="";
    let companyError="";
    let warrenty_typeError="";
    let warrenty_exError="";
    let userError="";
    let noteError="";
    let jobError="";
    let statusError="";
    let update_dateError="";
   

    if(!this.state.aname){
       anameError = "Field cannot be blank"
   }
   if(!this.state.atag){
       atagError = "Field cannot be blank"
   }
   if(!this.state.serialno){
       serialnoError = "Field cannot be blank"
   }
   if(!this.state.model){
       modelError = "Field cannot be blank"
   }
   if(!this.state.modelno){
       modelnoError = "Field cannot be blank"//v
   }

   if(!this.state.brand){
    brandError = "Field cannot be blank"//v
}
if(!this.state.category){
  categoryError = "Field cannot be blank"//v
}
if(!this.state.Department){
  DepartmentError = "Field cannot be blank"//v
}
if(!this.state.pur_cost){
  pur_costError = "Field cannot be blank"//v
}
if(!this.state.pur_date){
  pur_dateError = "Field cannot be blank"//v
}
if(!this.state.company){
  companyError = "Field cannot be blank"//v
}
if(!this.state.warrenty_type){
  warrenty_typeError = "Field cannot be blank"//v
}
if(!this.state.warrenty_ex){
  warrenty_exError = "Field cannot be blank"//v
}
if(!this.state.user){
  userError = "Field cannot be blank"//v
}
if(!this.state.note){
  noteError = "Field cannot be blank"//v
}
if(!this.state.job){
  jobError = "Field cannot be blank"//v
}
if(!this.state.status){
  statusError = "Field cannot be blank"//v
}
if(!this.state.update_date){
  update_dateError = "Field cannot be blank"//v
}


   if(anameError || atagError || serialnoError || modelError || modelnoError || brandError || categoryError || DepartmentError || pur_costError || pur_dateError || companyError || warrenty_typeError || warrenty_exError || userError || noteError  || jobError || statusError || update_dateError){
    this.setState({anameError, atagError, serialnoError, modelError, modelnoError, brandError, categoryError, DepartmentError, pur_costError, pur_dateError, companyError, warrenty_typeError, warrenty_exError, userError, noteError, jobError, statusError, update_dateError});//v
    return false;
}

return true;//v
};


  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  cancelCourse = () => { 
    this.setState({
    
      aname:"",
      atag:"",
      serialno:"",
      model:"",
      modelno:"",
      brand:"",
      category:"",
      Department:"",
      pur_cost:"",
      pur_date:"",
      company:"",
      warrenty_type:"",
      warrenty_ex:"",
      note:"",
      user :"",
      job:"",
      status:"",
      update_date:"",
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {aname,atag,serialno,model,modelno,brand,category,Department,pur_cost,pur_date,company, warrenty_type,warrenty_ex,note,user,job,status,update_date} = this.state;

    const data ={
      aname:aname,
      atag:atag,
      serialno:serialno,
      model:model,
      modelno:modelno,
      brand: brand,
      category:category,
      Department:Department,
      pur_cost:pur_cost,
      pur_date:pur_date,
      company:company,
      warrenty_type: warrenty_type,
      warrenty_ex:warrenty_ex,
      note:note,
      user:user,
      job:job,
      status:status,
      update_date:update_date

    }
    console.log(data)
    axios.post("/post/save",data).then((res)=>{
      alert("Details Added successfully");
      if(res.data.success){
        this.setState(
          {
            aname:"",
            atag:"",
            serialno:"",
            model:"",
            modelno:"",
            brand:"",
            category:"",
            Department:"",
            pur_cost:"",
            pur_date:"",
            company:"",
            warrenty_type:"",
            warrenty_ex:"",
            note:"",
            user :"",
            job:"",
            status:"",
            update_date:"",

    anameError:"",
    atagError :"",
    serialnoError:"",
    modelError :"",
    modelnoError:"",
    brandError:"",
    categoryError:"",
    DepartmentError:"",
    pur_costError:"",
    pur_dateError:"",
    companyError:"",
    warrenty_typeError:"",
    warrenty_exError:"",
    userError:"",
    noteError:"",
    jobError:"",
    statusError:"",
    update_dateError:""
          }
        )
      }
    })
  }

  render() {
    return (
      <><BrowserRouter>
               

                
            </BrowserRouter>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New Report</h1>
        <form className="needs-validation" noValidate>



          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Assert Name</label>
            <input type="string"
            className="form-control"
            name="aname"
            placeholder="Enter asset name"
            value={this.state.aname}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.anameError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Assert Tag</label>
            <input type="string"
            className="form-control"
            name="atag"
            placeholder="Enter assert tag"
            value={this.state.atag}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.atagError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Serial No</label>
            <input type="text"
            className="form-control"
            name="serialno"
            placeholder="Enter Serial No"
            value={this.state.serialno}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.serialnoError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Model</label>
            <input type="string"
            className="form-control"
            name="model"
            placeholder="Enter the model"
            value={this.state.model}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.modelError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Model No</label>
            <input type="string"
            className="form-control"
            name="modelno"
            placeholder="Enter the modelno"
            value={this.state.modelno}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.modelnoError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Brand</label>
            <input type="string"
            className="form-control"
            name="brand"
            placeholder="Enter the brand"
            value={this.state.brand}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.brandError}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
  <label style={{ marginBottom: '5px' }}>Category</label>
  <select
    className="form-control"
    name="category"
    value={this.state.category}
    onChange={this.handleInputChange}
  >
    <option value="">Select a category</option>
    <option value="cpu">CPU</option>
    <option value="moniter">moniter</option>
    <option value="laptop">Laptop</option>
    <option value="All In One">All in one</option>
    <option value="Ups">UPS</option>
    <option value="Scanner">Scanner</option>
    <option value="Printer">Printer</option>
   
  </select>
  <div style={{ color: "red" }}>
    {this.state.categoryError}
  </div>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Department</label>
            <input type="string"
            className="form-control"
            name="Department"
            placeholder="Enter the Department"
            value={this.state.Department}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.DepartmentError}
            </div>
          </div>



          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Purchased Cost</label>
            <input type="string"
            className="form-control"
            name="pur_cost"
            placeholder="Enter the purchased cost"
            value={this.state.pur_cost}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.pur_costError}
            </div>
          </div>


<div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Purchased Date</label>
            <input type="date"
            className="form-control"
            name="pur_date"
            placeholder="Enter the purchased date"
            value={this.state.pur_date}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.pur_dateError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Supplier/Company</label>
            <input type="string"
            className="form-control"
            name="company"
            placeholder="Enter the supplier/company"
            value={this.state.company}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.companyError}
            </div>
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
  <label style={{ marginBottom: '5px' }}>Warranty Period</label>
  <div>
    <input
      type="radio"
      name="warrenty_type"
      value="12 months"
      checked={this.state.warrenty_type === "12 months"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="12 months">12 Months</label>
  </div>
  <div>
    <input
      type="radio"
      name="warrenty_type"
      value="24 months"
      checked={this.state.warrenty_type === "24 months"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="24 months">24 Months</label>
  </div>
  <div style={{ color: "red" }}>
    {this.state.warrenty_typeError}
  </div>
</div>



          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Warrrenty expires</label>
            <input type="date"
            className="form-control"
            name="warrenty_ex"
            placeholder="Enter the warrenty expires"
            value={this.state.warrenty_ex}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.warrenty_exError}
            </div>
          </div>


         


          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Note*</label>
            <input type="note"
            className="form-control"
            name="note"
            placeholder="Enter do you have any notes"
            value={this.state.note}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.noteError}
            </div>
          </div>


          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>User</label>
            <input type="string"
            className="form-control"
            name="user"
            placeholder="Enter user"
            value={this.state.user}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.userError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Job Titlt</label>
            <input type="string"
            className="form-control"
            name="job"
            placeholder="Enter job"
            value={this.state.job}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.jobError}
            </div>
          </div>

          
          <div className="form-group" style={{ marginBottom: '15px' }}>
  <label style={{ marginBottom: '5px' }}>Status</label>
  <div>
    <input
      type="radio"
      name="status"
      value="active"
      checked={this.state.status === "active"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="active">Active</label>
  </div>
  <div>
    <input
      type="radio"
      name="status"
      value="inactive"
      checked={this.state.status === "inactive"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="inactive">Inactive</label>
  </div>
  <div style={{ color: "red" }}>
    {this.state.statusError}
  </div>
</div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Updated Date</label>
            <input type="date"
            className="form-control"
            name="update_date"
            placeholder="Enter update date"
            value={this.state.update_date}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.update_dateError}
            </div>
          </div>




         

          <div class="button-container">
  <button
    className="btn btn-success custom-btn"
    onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
    &nbsp;Save
  </button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className="btn btn-warning custom-btn">
    <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
      <i className="far fa-check-square"></i>
      &nbsp;Back
    </a>
  </button>
</div>


          </form>
          
      </div></>
    )
  }
}




