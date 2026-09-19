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

// =========================
// Login Form
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        if (email === "" || password === "") {

            alert("Please fill in all fields.");

            return;
        }

        alert("Login system will be connected to the backend soon!");

    });
}


// =========================
// Registration Form
// =========================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }

        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }

        alert("Registration system will be connected to the backend soon!");

    });
}