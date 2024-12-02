// root.js
const blogPosts = [
  {
    title: 'My First Blog Post',
    author: 'John Doe',
    date: 'June 1, 2023',
    content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
    private: true
  },
  {
    title: 'My Second Blog Post',
    author: 'Jane Smith',
    date: 'June 5, 2023',
    content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
    private: false
  },
  {
    title: 'A Day in the Life',
    author: 'Alice Johnson',
    date: 'June 10, 2023',
    content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
    private: false
  },
  {
    title: 'Tips for Healthy Eating',
    author: 'Bob Lee',
    date: 'June 15, 2023',
    content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
    private: true
  },
  {
    title: 'Traveling on a Budget',
    author: 'Susan White',
    date: 'June 20, 2023',
    content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
    private: false
  }
];

function PublicBlogPost(prop) {
  return <div className='blog-post' key={prop.key}>
    <h2>{prop.title}</h2>
    <p className="meta">{`By ${prop.author} on ${prop.date}`}</p>
    <p className="featured">{prop.content}</p>
  </div>;
}

function PrivateBlogPost(prop) {
  return <div className='private-posts' key={prop.key}>
    <h2>{prop.title}</h2>
    <p className="meta">{`By ${prop.author} on ${prop.date}`}</p>
    <p>The content of this post is private.</p>
  </div>;
}

function BlogList(prop) {
  return <div className="blog-list">
    {prop.blogposts.map((blogpost) => {
      return blogpost.private
      ? <PrivateBlogPost key={blogpost.title} title={blogpost.title} author={blogpost.author} date={blogpost.date} content={blogpost.content} />
      : <PublicBlogPost key={blogpost.title} title={blogpost.title} author={blogpost.author} date={blogpost.date} content={blogpost.content} />;
    })}
  </div>;
}

function Header(prop) {
  return <header>
    <h1>{prop.title}</h1>
    <p>{prop.tagline}</p>
  </header>
}

function Footer(prop) {
  return <footer>
    <p>&copy; {prop.year} My Blog. All rights reserved.</p>
  </footer>
};

function App() {
  return <div className="app">
    <Header title="My Blog" tagline="A blog about everything"/>
    <BlogList blogposts={blogPosts} />
    <Footer year="2024"/>
  
  </div>;
};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)
