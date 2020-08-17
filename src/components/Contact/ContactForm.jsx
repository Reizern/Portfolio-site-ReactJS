import React from "react";


export default class ContactForm extends React.Component {

  state={
    name: '',
    surname: '',
    email: '',
    message: ''
  };

  handleSubmit(event) {
    event.preventDefault();
    alert('Ми отримали ваше повідомлення і ваші дані. Звяжемся з Вами в найближчий час. Дякуємо. ');
    console.log('Дані:');
    console.log('Імя:', this.state.name);
    console.log('Прізвище:', this.state.surname);
    console.log('E-mal:', this.state.email);
    console.log('Повідомлення:', this.state.message);
  };
  handleNameChange(event) {
    this.setState({name: event.target.value});
  };
  handleSurnameChange(event) {
    this.setState({surname: event.target.value});
  };
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  };
  handleMessageChange(event) {
    this.setState({message: event.target.value});
  };

  render() {
    return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input required type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          <input required type="text" placeholder="Surname" value={this.state.surname} onChange={this.handleSurnameChange.bind(this)}/>
          <input required type="email" placeholder="E-mail"  value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          <textarea required placeholder="Message" value={this.state.message} onChange={this.handleMessageChange.bind(this)}/>
          <button>SEND</button>
        </form>
    )
  }
}
