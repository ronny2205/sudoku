var GamePage = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="section">
    	  <h3 className="pink-text text-lighten-1 center">Sweet sudoku</h3>
    	</div>
    	<div className="section">
    	  <Board />
    	</div>
      </div>

    );
  }
});
