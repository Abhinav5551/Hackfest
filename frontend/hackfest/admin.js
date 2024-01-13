document.addEventListener('DOMContentLoaded', function() {
    // Fetch submissions from the server
    axios.get('http://localhost:8000/submissions/')
      .then(response => {
        const submissions = response.data;
  
        // Assuming submissions are stored in an object
        const submissionsList = document.getElementById('transfer-details');
  
        // Iterate through each submission and create a list item
        for (const key in submissions) {
          if (submissions.hasOwnProperty(key)) {
            const submission = submissions[key];
            for(k in submission){
             console.log(submission[k])
                const path = './uploads'+'/'+submission[k].file_path
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                <img src = ${path} alt= "submitted image" height=200 width=200>
                <strong>Description:</strong> ${submission[k].description} <br>
                <strong>Latitude:</strong> ${submission[k].latitude} <br>
                <strong>Longitude:</strong> ${submission[k].longitude} <br>
                <hr>
               `;
  
            submissionsList.appendChild(listItem);
            }
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
  