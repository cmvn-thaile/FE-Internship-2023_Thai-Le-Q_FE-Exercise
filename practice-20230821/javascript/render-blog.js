const blogs = [
  {
    id: 1,
    author: {
      name: "Trang Nguyen",
      image: "./assets/img/user-img.png",
    },
    posted_day: "Aug 15, 2019",
    title: "WFH: A Comprehensive Guide to Working Remotely from Home",
    description:
      "First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force ...",
    image: "./assets/img/blog-img.png",
    likes: 12,
    comments: 12,
    tags: ["React", "JavaScript", "Remote Work"],
  },
  {
    id: 2,
    author: {
      name: "John Smith",
      image: "./assets/img/user-img.png",
    },
    posted_day: "Sep 1, 2019",
    title: "10 Tips for Writing Clean Code in JavaScript",
    description:
      "Writing clean code is essential for any developer who wants to create maintainable and scalable applications. In this post, we'll share 10 tips for writing clean code in JavaScript.",
    image: "./assets/img/blog-img.png",
    likes: 8,
    comments: 4,
    tags: ["JavaScript", "Clean Code", "Best Practices"],
  },
  {
    id: 3,
    author: {
      name: "Jane Doe",
      image: "./assets/img/user-img.png",
    },
    posted_day: "Oct 15, 2019",
    title: "Getting Started with React Native",
    description:
      "React Native is a popular framework for building mobile applications using JavaScript and React. In this post, we'll show you how to get started with React Native and build your first mobile app.",
    image: "./assets/img/blog-img.png",
    likes: 10,
    comments: 6,
    tags: ["React", "React Native", "Mobile Development"],
  },
];

const renderBlog = (blogs) => {
  const blogList = document.querySelector(".blog-list");
  blogs.map((blog) => {
    blogList.innerHTML += `
    <li class="blog-item">
                <div class="blog ">
                  <div class="blog-header">
                    <div class="blog-author">
                      <img
                        class="blog-author-img"
                        src=${blog.author.image}
                        alt="${blog.author.name} avatar"
                      />
                      <span class="blog-author-name">${blog.author.name}</span>
                      <span>&middot;</span>
                      <span class="blog-author-name">${blog.author.name}</span>
                      <span class="blog-author-date">${blog.posted_day}</span>
                    </div>

                    <button class="btn btn-outline-transparent"><i class="icon icon-more"></i></button>
                  </div>
                  <a href="blog.html" class="blog-link">
                  <div class="blog-content row">
                    <div class="col col-8">
                      <h3 class="blog-title">
                        ${blog.title}
                      </h3>
                      <p class="blog-desc text-truncate">
                      ${blog.description}
                      </p>
                    </div>
                    <img
                      class="col col-4"
                      src=${blog.image}
                      alt=${blog.title}
                    />
                  </div>
                  </a>
                  <div class="blog-footer  col-8">
                    <div class="blog-action">
                      <button class="btn btn-outline-transparent">
                        <i class="icon icon-like"></i>
                        <span class="action-count">${blog.likes}</span>
                      </button>
                      <a class="btn btn-outline-transparent">
                        <i class="icon icon-comment"></i>
                        <span class="action-count">${blog.comments}</span>
                      </a>
                    </div>

                    <ul id="blog-content-list-${blog.id}" class="blog-tag-list">
                    </ul>
                  </div>
                </div>
              </li>`;
  });
};

const renderTag = (blog) => {
  let tagList = document.getElementById(`blog-content-list-${blog.id}`);
  if (tagList === null) return "";
  blog.tags.map((tag) => {
    tagList.innerHTML += `
    <li class="blog-tag-item">
      <a class="blog-tag" href="#">${tag}</a>
    </li>
    `;
  });
};

renderBlog(blogs);
blogs.map((blog) => {
  renderTag(blog);
});
