var data = [
    {FirstName: "Juani", SecondName: "dela Cruz", number: "+639221113434"},
    {FirstName: "Norah", SecondName: "Jones", number: "+639223333434"}
    ];
  
var PhoneBookApp = React.createClass({
loadDataFromVar: function(){
  this.setState({data: data});
},
handleContactSubmit: function(contact){
  this.props.data.push(contact);
  console.log(this.props.data);
},
getInitialState: function(){
  return{data: []};
},
componentDidMount: function(){
  this.loadDataFromVar();
  setInterval(this.loadDataFromVar, this.props.pollInterval);
},
render: function(){
  return (
      <div className="phoneBookApp">
          <h1>My PhoneBook</h1>
        <AddContactForm onContactSubmit={this.handleContactSubmit} />
          <PhoneBookList data={this.props.data} />
      </div>
  )
}
});

var PhoneBookList = React.createClass({
render: function(){
  var contactNodes = this.props.data.map(function(contact) {
      return(
          <Contact FirstName={contact.FirstName} SecondName={contact.SecondName} number={contact.number} />
      )
  });
  return (
      <div className="phoneBookList">
          {contactNodes}
      </div>
  )

}
});

var AddContactForm = React.createClass({
handleSubmit: function(e){
  e.preventDefault();
  var FirstName = React.findDOMNode(this.refs.FirstName).value.trim();
  var SecondName = React.findDOMNode(this.refs.SecondName).value.trim();
  var number = React.findDOMNode(this.refs.number).value.trim();

  if( !FirstName || !SecondName || !number){
      return;
  }
  this.props.onContactSubmit({FirstName: FirstName, SecondName: SecondName, number: number});

  React.findDOMNode(this.refs.FirstName).value = '';
  React.findDOMNode(this.refs.SecondName).value = '';
  React.findDOMNode(this.refs.number).value = '';
  return;
},
render: function(){
  return (
      <form className="addContactForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="FirstName" ref="FirstName" />
          <input type="text" placeholder="SecondName" ref="SecondName" />
          <input type="text" placeholder="Number" ref="number" />
          <button type="submit">Add Contact</button>
      </form>
  );
}
});

var Contact = React.createClass({
render: function(){
  return(
      <div className="contact">
          <h2 className="contactName">{this.props.FirstName}</h2>
          <p className="contactName">{this.props.SecondName}</p>
          <p>{this.props.number}</p>
      </div>
  )
}
});

React.render(
<PhoneBookApp data={data} pollInterval={200} />,
document.getElementById('content')
);