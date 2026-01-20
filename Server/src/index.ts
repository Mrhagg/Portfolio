import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { apiHomePage } from "./views/apiHome";

dotenv.config();

const app = express();



app.use(cors( {
  origin: ["http://localhost:3000", "https://portfolio-williamhagg.netlify.app"]
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;


//--API Home Page--//

app.get("/", (req, res) => {
  res.send(apiHomePage());
});


//--GET PROJECTS--//
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

    const repos = response.data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      updated: repo.updated_at,
      owner: repo.owner.login,
      homepage: repo.homepage,
    }));

    const reposWithLanguages = await Promise.all(
      repos.map(async (repo: any) => {
        try {
          const langResponse = await axios.get(
            `https://api.github.com/repos/${repo.owner}/${repo.name}/languages`,
            {
              headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
              }
            }
          );

          const languagesArray = Object.keys(langResponse.data);

          return { ...repo, languages: languagesArray };

        } catch (error) {
          console.error(`Failed to fetch languages for ${repo.name}`);
          return { ...repo, languages: [] };
        }
      })
    );

    res.json(reposWithLanguages);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch repos" });
  }
});



    //--GET ABOUT--//
  app.get("/about", (req, res) => {
    
      const aboutMeData = {
        Name: "William Hägg",
        Title: ".NET Fullstack Developer",
        ShortBio: "I am a .NET web developer with a degree in .NET Web Development (June 2025). I specialize in building scalable backend systems paired with modern, user friendly frontend design.",
        Buttons: "To learn more about my background and qualifications, please find my Resume and Degree Certificate available below",
        Description: "During my internship at Effectsoft, I had the opportunity to work on complex business systems using Blazor and ABP.IO where I learned the importance of clean code and agile collaboration.",
        CurrentWork: "I am currently architecting FootyHub, a football management app built with Clean Architecture and the Vertical Slice pattern, while also constantly refining this portfolio. You can explore the technical details of my work in the projects section.",
        OpenToWork: "I am currently seeking an entry-level software developer role where I can apply my .NET background while continuing to grow and adapt to new technologies and development stacks."
      };
    res.json(aboutMeData);
  });


    
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:4000");
});

