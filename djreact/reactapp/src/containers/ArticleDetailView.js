import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';

import CustomForm from './Form';

class ArticleDetail extends React.Component{

	state = {
		article: {}
	}

	componentDidMount(){
		const ID = this.props.match.params.ID;
		console.log(ID)
		axios.get(`http://127.0.0.1:8000/api/${ID}`)
			.then(res =>{
				this.setState({
					article: res.data
				});
			});

	}

	handleDelete = (event) =>{
		const ID = this.props.match.params.ID;
		console.log(ID)
		axios.delete(`http://127.0.0.1:8000/api/${ID}`);
		this.props.history.push('/');
	}

	render() {
		return(
			<div>
			<Card title={this.state.article.id}>
			<p>{this.state.article.firstname}&nbsp;{this.state.article.lastname}</p>


			</Card>
			 <CustomForm requestType="put" ID={this.props.match.params.ID} btnText="Update" />
			 <br/>
			 <form onSubmit={this.handleDelete} >
			 	<Button htmlType="submit" type="danger">Delete</Button>
			 </form>
			</div>

			);
	}
}

export default ArticleDetail;