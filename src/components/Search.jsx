var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={_.debounce(()=>props.onFetchQuery($('.form-control').val()), 500)} className="form-control" type="text" />
    <button onClick={()=>props.onFetchQuery($('.form-control').val())} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
