var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingradients = [{"id":1, "text":"ham"}, {"id":2, "text":"vegan"},{"id":3, "text":"chikkus"}]

var List = React.createClass({
  render: function(){
    var listItems = ingradients.map(function(item){
      return <ListItem key={item.id} ingradient={item.text} />
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
