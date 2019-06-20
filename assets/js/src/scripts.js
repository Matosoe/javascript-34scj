const posts = (function () {

    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";

    return {
        getPosts: function () {
            fetch(url)
                .then(function (response) {
                    if (response.ok) {
                        response.json()
                            .then(
                                function (data) {
                                    var blogWrapper = document.getElementById("demo");
                                    var allPosts = data;
                                    var allPosts = data.map(item => {
                                        var capitalLetter = item.title.charAt(0).toUpperCase();
                                        var title = `<h2 calss='blog-post-title'>${capitalLetter + item.title.slice(1)}</h2>`;
                                        var body = `<p>${item.body}</p>`;
                                        var meta = `<p class="blog-post-meta">post #<a href='#'${item.id}</a></p>`
                                        var blogPost = `<div class = 'blog=post'>${title + meta + '<hr/>' + body + body + body + body + body}</div>`;
                                        return title;

                                    })
                                        .splice(0, 4)
                                        .join("")
                                    blogWrapper.innerHTML = allPosts;


                                }
                            )
                    }
                })

        }
    }




}())

posts.getPosts();

