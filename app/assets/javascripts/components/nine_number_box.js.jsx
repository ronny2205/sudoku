var NineNumberBox = React.createClass({

  render: function() {
    return (
    	<div className='square-grid__cell'>
		  <div className='square-grid__content'>
            <table className="sudoku-table">
		        
		        <tbody>
		          <tr>
		            <td className="td-cell col s4">1</td>
		            <td className="td-cell col s4">2</td>
		            <td className="td-cell col s4">7</td>
		          </tr>
		          <tr>
		            <td className="td-cell col s4">6</td>
		            <td className="td-cell col s4">6</td>
		            <td className="td-cell col s4">6</td>
		          </tr>
		          <tr>
		            <td className="td-cell col s4">4</td>
		            <td className="td-cell col s4">3</td>
		            <td className="td-cell col s4">0</td>
		          </tr>
		        </tbody>
		    </table>
		                

		  </div>
	    </div>

    );
  }
});
