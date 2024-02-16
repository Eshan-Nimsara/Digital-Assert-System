import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
   if(res.data.success){
     this.setState({
       posts:res.data.existingPosts
     });

     console.log(this.state.posts)
   } 
  });
}

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Deleted successfully")
    this.retrievePosts();
  })
}


 
filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.serialno.includes(searchKey) ||
  post.user.includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea = (e) =>{
  const searchKey=e.currentTarget.value;
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    } 
   });
}

  render() {
    return (




      
      <div className="container">
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
           <h4>All Details</h4>
           </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
           
         </div>
       </div>
     

       
        <table className="table">
          <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col"></th>
              <th scope="col">Asset name</th>
              <th scope="col">Asset Tag</th>
              <th scope="col">Serial No:</th>
              <th scope="col">Model</th>
              <th scope="col">Model No:</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Department</th>
              <th scope="col">Purchase cost</th>
              <th scope="col">Purchase date</th>
              <th scope="col">Supplier</th>
              <th scope="col">Warrenty Period</th>
              <th scope="col">Warrenty Expires</th>
              <th scope="col">Note</th>
              <th scope="col">User</th>
              <th scope="col">Job title</th>
              <th scope="col">Status</th>
              <th scope="col">Updated Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>
                 
             </td>
             <td>{posts.aname}</td>
              <td>{posts.atag}</td>
              <td>{posts.serialno}</td>
              <td>{posts.model}</td>
              <td>{posts.modelno}</td>
              <td>{posts.brand}</td>
              <td>{posts.category}</td>
              <td>{posts.Department}</td>
              <td>{posts.pur_cost}</td>
              <td>{posts.pur_date}</td>
              <td>{posts.company}</td>
              <td>{posts.warrenty_type}</td>
              <td>{posts.warrenty_ex}</td>
              <td>{posts.note}</td>
              <td>{posts.user}</td>
              <td>{posts.job}</td>
              <td>{posts.status}</td>
              <td>{posts.update_date}</td>
              
              <td>
  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
    <i className="fas fa-edit"></i>Edit
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
    <i className="far fa-trash-alt"></i> Delete
  </a>
</td>


            </tr>
            ))}
          </tbody>
        </table> 
        <button className="btn btn-success"  ><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Stock</a></button>       
    </div>  
    )
  }
}
