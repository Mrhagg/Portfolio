import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/projects", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/Mrhagg/repos?sort=updated",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );

  app.get("/about", (req, res) => {
    
      const aboutMeData = {
        Name: "William Hägg",
        Title: "Junior Fullstack Developer",
        ShortBio: "A Fullstack Developer primarily focused on .NET and C# development. I like to work with modern front-end frameworks like React, Blazor, and Next.js to build innovative, robust, and impactful software. I completed my two-year web development program (focused on .NET) in June 2025. (Feel free to download my graduation certificate below.)",
        Description: "I'm William Hägg, 27, a dedicated developer with a genuine passion for building scalable and responsive websites. I live in Helsingborg, Sweden, with my girlfriend and our dog. I am a very grounded person who values living in the present and prioritizing my physical and mental health, which helps me maintain focus and operate effectively in my day-to-day life. In my spare time, I enjoy getting creative with personal coding projects or spending time at the gym."
      };
    res.json(aboutMeData);
  });

    const repos = response.data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      updated: repo.updated_at,
    }));

    res.json(repos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch repos" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
