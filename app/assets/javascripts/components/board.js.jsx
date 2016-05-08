var Board = React.createClass({

  render: function() {
    return (
    	<div className="row">
    	  <div className="board z-depth-3 col s6 offset-s3">
    	    <div className='square-grid'>
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />
			  <NineNumberBox />

			 
			</div>  
    	  </div>
    	</div>  
    );
  }
});
