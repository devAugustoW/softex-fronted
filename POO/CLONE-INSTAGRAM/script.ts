import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string = randomUUID();
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _isLiked: boolean = false;
  private _description: string;
  private _createdAt: Date = new Date();
  private _numberOfLikes: number = 0;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName.toLowerCase();
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
  }

  like() {
    const postContainer = document.getElementById(this._id);

    if (!postContainer) return;

    this.updateLikeIcon(postContainer);
    this.updateTextNumberOfLikes(postContainer);

    this._isLiked = !this._isLiked;
  }

  private updateLikeIcon(postHTML: HTMLElement) {
    const iconInIcons = postHTML.querySelector(
      ".post-icons .fa-heart-o, .post-icons .fa-heart"
    );
    const iconInLikes = postHTML.querySelector(
      ".post-likes .fa-heart-o, .post-likes .fa-heart"
    );

    if (!iconInIcons || !iconInLikes) return;

    // Alterna o ícone na seção de ícones
    iconInIcons.classList.toggle("fa-heart");
    iconInIcons.classList.toggle("fa-heart-o");

    // Alterna o ícone na seção de likes
    iconInLikes.classList.toggle("fa-heart");
    iconInLikes.classList.toggle("fa-heart-o");
  }

  private updateTextNumberOfLikes(postHTML: HTMLElement) {
    const postLikes = postHTML.querySelector(".post-likes");
    const span = postLikes?.querySelector("span");

    if (!span) return;

    if (this._isLiked) {
      this._numberOfLikes -= 1;
    } else {
      this._numberOfLikes += 1;
    }

    span.textContent = this._numberOfLikes.toString();
  }

  toHTML() {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";
    postContainer.id = this._id;

    const postHeader = `
      <div class="post-header">
        <div class="profile-img-space">
          <img class="profile-img" title="Avatar image"
            src=${this._avatarUrl}>
        </div>
        <span>${this._userName}</span>
        <button class="follow-btn">FOLLOW</button>
        <i class="fa fa-ellipsis-h"></i>
      </div>
    `;

    const postImage = `
     <div class="post-image">
        <img title="Post image"
          src=${this._imageUrl}>
      </div>
    `;

    const postIcons = `
      <div class="post-icons">
        <div class="post-icons-space">
          <i class="fa fa-heart-o"></i>
          <i class="fa fa-comment-o"></i>
          <i class="fa fa-paper-plane-o"></i>
        </div>
        <i class="fa fa-bookmark-o"></i>
      </div>
    `;

    const postLikes = `
      <div class="post-likes">
        <i class="fa fa-heart-o"></i>
        <span>${this._numberOfLikes} likes</span>
      </div>
    `;

    const postDescription = `
      <div class="post-description">
        <p>Título da postagem</p>
        <span>#hashtag</span>
        <span>#loremipsum</span>
      </div>
    `;

    postContainer.innerHTML = postHeader;
    postContainer.innerHTML += postImage;
    postContainer.innerHTML += postIcons;
    postContainer.innerHTML += postLikes;
    postContainer.innerHTML += postDescription;

    const btnLike = postContainer.querySelector(".post-icons .fa-heart-o");
    btnLike?.addEventListener("click", () => this.like());

    document.querySelector('main')?.appendChild(postContainer);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index < 15; index++) {
    const userName = faker.person.firstName();
    const avatarUrl = faker.image.avatarGitHub();
    const imageUrl = faker.image.urlLoremFlickr();
    const description = "Título da postagem"; // Texto fixo para a descrição

    const post = new Post(userName, avatarUrl, imageUrl, description);

    post.toHTML();
  }
});