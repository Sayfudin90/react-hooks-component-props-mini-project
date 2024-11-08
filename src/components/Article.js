// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate minutes to read indicator
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const emojiCount = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const minutesDisplay = `${emoji.repeat(emojiCount)} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{minutesDisplay}</small>
    </article>
  );
}

export default Article;
