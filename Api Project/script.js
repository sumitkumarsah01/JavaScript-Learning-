function userprofile(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>{
        if(!raw.ok) throw new Error("this user name are not available any account")
        else return raw.json();
    })
}


let searchbtn=document.querySelector(".btn");
let searchInput=document.querySelector(".searchInput");
// let profileImg=document.querySelector(".profileImg");
let layout=document.querySelector(".layout");

searchbtn.addEventListener("click",function(){
    let username=searchInput.value.trim();
    userprofile(username).then((Data)=>{
        layout.innerHTML=`<aside class="profile" id="profileCard">
        <div class="avatar" id="avatarWrap">
           <img id="avatar" class="profileImg" src="${Data.avatar_url}">
          <div id="avatar" class="skeleton" style="width:100%;height:100%"></div>
        </div>
        <div class="name" id="username">${Data.name}</div>
        <div class="handle" id="userHandle">${Data.login}</div>
        <div class="bio" id="bio">${Data.bio}</div>

        <div class="meta" aria-hidden="true">
          <div class="item">
            <div class="num" id="followersCount">${Data.followers}</div>
            <div class="muted">Followers</div>
          </div>
          <div class="item">
            <div class="num" id="followingCount">${Data.following}</div>
            <div class="muted">Following</div>
          </div>
          <div class="item">
            <div class="num" id="reposCount">${Data.public_repos}</div>
            <div class="muted">Repos</div>
          </div>
        </div>

        <div class="company" id="company">Company: <span class="muted">${Data.company}</span></div>
      </aside>`
        
    })
})

