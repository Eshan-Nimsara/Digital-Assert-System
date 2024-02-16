import React, { Component } from 'react'
import axios from 'axios'

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }


  render() {
      const {aname, atag, serialno, model, modelno, brand, category, Department, pur_cost, pur_date, company, warrenty_type, warrenty_ex, user, note, job, status, update_date} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
         <h4>Reports</h4>
         <hr/>
         <d1 className="row">
             <dt className='col-sm-3'>Asset Name</dt>
             <dd className='col-sm-9'>{aname}</dd>

             <dt className='col-sm-3'>Asset</dt>
             <dd className='col-sm-9'>{atag}</dd>

             <dt className='col-sm-3'>Serial No</dt>
             <dd className='col-sm-9'>{serialno}</dd>

             <dt className='col-sm-3'>Model</dt>
             <dd className='col-sm-9'>{model}</dd>

             <dt className='col-sm-3'>Model no:</dt>
             <dd className='col-sm-9'>{modelno}</dd>

             <dt className='col-sm-3'>Brand</dt>
             <dd className='col-sm-9'>{brand}</dd>

             <dt className='col-sm-3'>Category</dt>
             <dd className='col-sm-9'>{category}</dd>

             <dt className='col-sm-3'>Departments</dt>
             <dd className='col-sm-9'>{Department}</dd>


             <dt className='col-sm-3'>purchased Cost</dt>
             <dd className='col-sm-9'>{pur_cost}</dd>

             <dt className='col-sm-3'>Spurchased Date </dt>
             <dd className='col-sm-9'>{pur_date}</dd>

             <dt className='col-sm-3'>Supplier/Company</dt>
             <dd className='col-sm-9'>{company}</dd>

             <dt className='col-sm-3'>Warrenty Type</dt>
             <dd className='col-sm-9'>{warrenty_type}</dd>

             <dt className='col-sm-3'>Warrenty Expires</dt>
             <dd className='col-sm-9'>{warrenty_ex}</dd>

             <dt className='col-sm-3'>User</dt>
             <dd className='col-sm-9'>{user}</dd>

             <dt className='col-sm-3'>Note</dt>
             <dd className='col-sm-9'>{note}</dd>

             <dt className='col-sm-3'>Job</dt>
             <dd className='col-sm-9'>{job}</dd>


             <dt className='col-sm-3'>Status</dt>
             <dd className='col-sm-9'>{status}</dd>

             <dt className='col-sm-3'>Update Date </dt>
             <dd className='col-sm-9'>{update_date}</dd>

           


         </d1>
      </div>
    )
  }
}
