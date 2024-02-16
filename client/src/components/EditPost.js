import React, { Component } from 'react'
import axios from 'axios';
<link rel="stylesheet" href="style.css"/>

export default class EditPost extends Component {

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
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const {aname, atag, serialno, model, modelno, brand, category, Department, pur_cost, pur_date, company, warrenty_type, warrenty_ex, user, note, job, status, update_date} = this.state;

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
      user:user,
      note:note,
      job:job,
      status:status,
      update_date:update_date
    }
    console.log(data)
    axios.put(`/post/update/${id}`,data).then((res)=>{
      if(res.data.success){
        alert("report updated sucessfully")
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
            update_date:""
          }
        )
      }
    })
  }


  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
             aname:res.data.post.aname,
              atag:res.data.post.atag,
              serialno:res.data.post.serialno,
              model:res.data.post.model,
              modelno:res.data.post.modelno,
               brand:res.data.post.brand,
              category:res.data.post.category,
              Department:res.data.post.Department,
              pur_cost:res.data.post.pur_cost,
              pur_date:res.data.post.pur_date,
              company:res.data.post.company,
              warrenty_type:res.data.post.warrenty_type,
              warrenty_ex:res.data.post.warrenty_ex,
              note:res.data.post.note,
              user:res.data.post.user,
              job:res.data.post.job,
              status:res.data.post.status,
              update_date:res.data.post.update_date
              
              
            });
            console.log(this.state.post);
        }
    });
}



  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Report</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Assert Name</label>
            <input type="string"
            className="form-control"
            name="aname"
            placeholder="Enter assert name"
            value={this.state.aname}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.anameError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Asset Tag</label>
            <input type="String"
            className="form-control"
            name="atag"
            placeholder="Enter Asset Tag"
            value={this.state.atag}
            onChange={this.handleInputChange}/>
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
      value="12 Months"
      checked={this.state.warrenty_type === "12 Months"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="12 Months">12 Months</label>
  </div>
  <div>
    <input
      type="radio"
      name="warrenty_type"
      value="24 Months"
      checked={this.state.warrenty_type === "24 Months"}
      onChange={this.handleInputChange}
    />
    <label htmlFor="24 Months">24 Months</label>
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
            <label style={{marginBottom:'5px'}}>Job</label>
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
            <label style={{marginBottom:'5px'}}>Job Title</label>
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
    type="submit"
    onClick={this.onSubmit}
  >
    <i className="far fa-check-square"></i>
    &nbsp;Update
  </button>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <button className="btn btn-warning custom-btn">
    <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
      <i className="far fa-check-square"></i>
      &nbsp;Back
    </a>
  </button>
</div>
 


        
         

          </form>
          
      </div>
    )
  }
}
