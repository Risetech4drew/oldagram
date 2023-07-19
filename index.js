const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.getElementById("post-container")
const iconsWrapper = document.getElementById("icons-wrapper")


for(let i = 0; i < posts.length; i++){
    const post = posts[i]
    
    const postDiv = document.createElement("div")
    postDiv.classList.add("post")

    let postHeader = document.createElement("div")
    postHeader.classList.add("post-header")

    const postAvatar = document.createElement("img")
    postAvatar.src = post.avatar
    postAvatar.classList.add("avatar-post-img")
    postHeader.appendChild(postAvatar)

    // <div> 
    //      <h3></h3>
    //       <p></p>
    // </div> 

    const postHeaderText = document.createElement("div")
    postHeaderText.classList.add("post-header-text")
    const nameEl = document.createElement("h3")
    nameEl.textContent = post.name
    postHeaderText.appendChild(nameEl)
    const userLocationEl = document.createElement("p")
    userLocationEl.textContent = post.location
    postHeaderText.appendChild(userLocationEl)
    postHeader.appendChild(postHeaderText)

    postHeader.appendChild(postHeaderText)

    postDiv.appendChild(postHeader)

    // rendering post image
    const postImg = document.createElement("img")
    postImg.classList.add("post-img")
    postImg.src = post.post
    postDiv.appendChild(postImg)

    const postFooter = document.createElement("div")
    postFooter.classList.add("post-footer")

    const iconsWrapper = document.createElement("div")
    iconsWrapper.classList.add("icons")

    const heartIconImg = document.createElement("img")
    heartIconImg.classList.add("icon")
    heartIconImg.src = "images/icon-heart.png"
    iconsWrapper.appendChild(heartIconImg)

    const commentsIconImg = document.createElement("img")
    commentsIconImg.classList.add("icon")
    commentsIconImg.src = "images/icon-comment.png"
    iconsWrapper.appendChild(commentsIconImg)

    const dmIconImg = document.createElement("img")
    dmIconImg.classList.add("icon")
    dmIconImg.src = "images/icon-dm.png"
    iconsWrapper.appendChild(dmIconImg)

    postFooter.appendChild(iconsWrapper)

    const likesEl = document.createElement("p")
    likesEl.classList.add("likes")
    likesEl.textContent = `${post.likes} likes`
    postFooter.appendChild(likesEl)


    const commentEl =  document.createElement("p")
    commentEl.classList.add("comment")


    const spanEl = document.createElement("span")
    spanEl.classList.add("boldUserName")
    spanEl.textContent = post.username
    // spanEl.style.fontWeight = "bold"

    commentEl.appendChild(spanEl)
    commentEl.insertAdjacentText("beforeend",post.comment)

    

    postFooter.appendChild(commentEl)


    postDiv.appendChild(postFooter)

    postContainer.appendChild(postDiv)
    
    
    

}

