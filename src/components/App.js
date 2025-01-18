import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image="https://via.placeholder.com/215" about="This is my blog" />
      <ArticleList
        posts={[
          { id: 1, title: "Post 1", date: "January 1, 2023", preview: "Preview 1" },
          { id: 2, title: "Post 2", date: "February 1, 2023", preview: "Preview 2" },
          { id: 3, title: "Post 3", preview: "Preview 3" },
        ]}
      />
    </div>
  );
}

export default App;
