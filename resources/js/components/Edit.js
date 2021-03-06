
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: ''};
  }

  componentDidMount(){
//    console.log( this.state);
    console.log('#edit');
    console.log( this.props );

    axios.get("http://localhost:8000/api/todos/" + this.props.params.id)
    .then(response => {
      this.setState({ 
        title: response.data.title, 
        description: response.data.description 
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChangeTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChangeDesc(e){
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      title: this.state.title,
      description: this.state.description
    }
    let uri = 'http://localhost:8000/api/todos/' + this.props.params.id
    axios.patch(uri, products).then((response) => {
          this.props.history.push('/list');
    });
  }
  render(){
    return (
    <div>
      <h1>Edit ToDo</h1>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/list">&lt;&lt; Back to List</Link>
        </div>
      </div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Title</label>
          <input type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleChangeTitle.bind(this)} />
        </div>

        <div className="form-group">
          <label name="product_price">Item Price</label>
          <input type="text" className="form-control"
            value={this.state.description}
            onChange={this.handleChangeDesc.bind(this)} />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
    )
  }
}
export default Edit;