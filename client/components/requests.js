import $ from 'jquery';

var requests = {
  get: function(url, product, success, error = null) {
    $.ajax({
      url: `/${url}/${product}`,
      type: 'GET',
      success: success,
      error: error || function() {
        console.error('Cannot get reviews')
      }
    })
  }
};

export default requests;