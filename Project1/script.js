const posts = [
  {
    id: 1,
    title: "Understanding Flexbox",
    body: "Flexbox is a CSS layout mode that helps align items.",
    category: "tech",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "10 Travel Tips",
    body: "Pack light and always carry a power bank!",
    category: "travel",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Work-Life Balance",
    body: "Learn how to separate work from your personal life.",
    category: "lifestyle",
    author: "Emily Davis",
  },
  {
    id: 4,
    title: "Async/Await in JS",
    body: "Async/await makes handling promises easier.",
    category: "tech",
    author: "Mark Green",
  },
];

//get them by id
const postList = document.getElementById("post-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalAuthor = document.getElementById("modal-author");
const closeModalBtn = document.getElementById("close-modal");

const renderPosts = (postArray) => {
  postList.innerHTML = postArray
    .map(({ id, title, body, category }) => `
      <article class="post-card" data-id="${id}">
        <h3>${title}</h3>
        <p>${body.slice(0, 50)}...</p>
        <small>Category: ${category}</small>
      </article>
    `)
    .join("");
};

const filterPosts = (category) => {
  return category === "all"
    ? posts
    : posts.filter(post => post.category === category);
};

const showModal = (id) => {
  const post = posts.find(post => post.id === Number(id));
  if (!post) return;
  const { title, body, author } = post;
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modalAuthor.textContent = `Written by: ${author}`;
  modal.classList.remove("hidden");
};

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

postList.addEventListener("click", (e) => {
  const card = e.target.closest(".post-card");
  if (!card) return;
  const id = card.dataset.id;
  showModal(id);
});

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const filtered = filterPosts(category);
    renderPosts(filtered);
  });
});

renderPosts(posts);
