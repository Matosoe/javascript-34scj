
const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";
fetch(url)
.then(function(response){
    if(response.ok){
        response.json()
        .then(
            function(data){
                var blogWrapper = document.getElementById("demo");
                var allPosts = data;
                var allPosts = data.map(item => {
                    var title = `<h2>${item.title}</h2>`
                    return title;
                    
                })
                .join("")
                blogWrapper.innerHTML = allPosts;

    
            }
        )
    }
})

// function reqListener() {
//     this.responseText
//     //console.log(this.responseText)
// }


// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs", true);
// oReq.send();