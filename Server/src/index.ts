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
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "User-Agent": "MyPortfolioApp"
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
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
                "User-Agent": "Portfolio-Backend" 
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

    const customOrder = [
      "BlazorGraduateAssignment",
      "FootyHub",
      "FreseSkyltar",
      "Portfolio"
    ];

    const sortedRepos = reposWithLanguages.sort((a, b) => {
      let indexA = customOrder.indexOf(a.name);
      let indexB = customOrder.indexOf(b.name);

      if (indexA === -1) indexA = 99;
      if (indexB === -1) indexB = 99;

      return indexA - indexB;

      
    });

    
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
        Title: ".Fullstack .NET Developer",
        ShortBio: "Fullstack Developer specializing in the Microsoft .NET ecosystem, modern web technologies, and clean software design. I hold a degree in .NET Web Development from a Higher Vocational Education (Yrkeshögskola), where i focused on turning complex logic into robust, scalable applications.  ",
        Buttons: "Explore my technical qualifications and academic background below:",
        Description: "I focus on writing clean, maintainable, and well-tested code. While my core strength lies in C# and .NET, I am highly versatile and equally comfortable working frontend with TypeScript, JavaScript, and React.",
        CurrentWork: "To showcase my architectural foundation, I am currently building FootyHub a football management platform designed around Clean Architecture and the Vertical Slice Pattern. This project serves as a real demonstration of how i design APIs, and structure business logic.",
        OpenToWork: "I am actively seeking an entry-level software engineering role where I can hit the ground running, contribute to production-ready code, and continue expanding my expertise within cloud architecture and modern system design."
      };
    res.json(aboutMeData);
  });


    
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:4000");
});

