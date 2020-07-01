import React from 'react';
import {Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;



class CustomForm extends React.Component {

	handleSubmit = (event,requestType,ID) =>{
		event.preventDefault();
		const firstname = event.target.elements.firstname.value;
		const lastname = event.target.elements.lastname.value;
		const address = event.target.elements.address.value;
		const dob = event.target.elements.dob.value;
		const city = event.target.elements.city.value;
		const mobile = event.target.elements.mobile.value;

		switch (requestType){

			case 'post':
					return axios.post('http://127.0.0.1:8000/api/',{
						firstname:firstname,lastname:lastname,address:address,dob:dob,city:city,mobile:mobile
					})
					.then(res =>console.log(res))
					.catch(error => console.error(error));
			case 'put':
					return axios.put(`http://127.0.0.1:8000/api/${ID}/`,{
						firstname:firstname,lastname:lastname,address:address,dob:dob,city:city,mobile:mobile
					})
					.then(res =>console.log(res))
					.catch(error => console.error(error));
		}



	}
	render(){
		return(
			<div>
				<form method="post" onSubmit={(event)=>this.handleSubmit(event,
					this.props.requestType,
					this.props.ID)}>
			      <FormItem label="Firstname">
			        <Input name="firstname" placeholder="Put a Firstname" type="text"  />
			       </FormItem>
			       <FormItem label="Lastname">
			        <Input name="lastname" placeholder="Put a Lastname" type="text"  />
			       </FormItem>
			       <FormItem label="Address">
			        <Input name="address" placeholder="Put a Address" type="text"  />
			       </FormItem>
			       <FormItem label="DOB">
			        <Input name="dob" placeholder="Put a DOB" type="text"  />
			       </FormItem>
			       <FormItem label="City">
			        <Input name="city" placeholder="Put a City" type="text" />
			       </FormItem>
			       <FormItem label="Mobile">
			        <Input name="mobile" placeholder="Put a Mobile" type="number" />
			       </FormItem>

			        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
			      </form>
			</div>
		);
	}
}

export default CustomForm;