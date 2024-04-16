import Header from "./components/Header.tsx";

import styles from "./App.module.css";

import { Post } from "./components/Post.tsx";
import SideBar from "./components/SideBar.tsx";
import "./global.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostsProps {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

const posts: PostsProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/79678732?v=4",
      name: "Ramom Oliveira",
      role: "Software Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera, beleza?",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2021-03-15 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "",
      name: "Maik brito",
      role: "Educador na Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera, beleza?",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um novo projeto",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2021-04-22 19:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
