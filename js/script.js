function createPost() {

    const postInput = document.getElementById("postInput");

    const content = postInput.value.trim();

    if (content === "") {
        alert("Please write something before posting.");
        return;
    }

    const posts = document.getElementById("posts");

    const newPost = document.createElement("div");

    newPost.className = "card post";

    newPost.innerHTML = `
        <div class="post-header">

            <div class="profile-picture">
                S
            </div>

            <div>
                <h3>Souvik Sadhu</h3>
                <small>Just now</small>
            </div>

        </div>

        <p>${content}</p>

        <div class="post-actions">

            <button onclick="likePost(this)">
                👍 Like <span>0</span>
            </button>

            <button>
                💬 Comment
            </button>

            <button>
                ↗️ Share
            </button>

        </div>
    `;

    posts.prepend(newPost);

    postInput.value = "";
}


function likePost(button) {

    const count = button.querySelector("span");

    let likes = Number(count.textContent);

    likes++;

    count.textContent = likes;
}
