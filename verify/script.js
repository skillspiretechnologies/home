document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var batch = document.getElementById('batch').value;
    var code = document.getElementById('code').value;
  
    // Redirect based on selected batch and entered code
    window.location.href = 'SSP-' + batch + '-' + code + '.html';
  });
  