import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { apiHomePage } from "./views/apiHome";

dotenv.config();

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});


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
      owner: repo.owner.login
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
        Title: "Junior Fullstack Developer",
        ShortBio: "A Fullstack Developer primarily focused on .NET and C# development. I enjoy working with modern front-end frameworks like React, and .NET frameworks preferably Blazor to build innovative, robust, and impactful software. I completed my two-year web development program (focused on .NET) in June 2025. (Feel free to download my graduation certificate below.)",
        Description: "I'm William Hägg, 27, a dedicated developer with a genuine passion for building scalable and responsive websites. I live in Helsingborg, Sweden, with my girlfriend and our dog. I am a very grounded person who values living in the present and prioritizing my physical and mental health, which helps me maintain focus and operate effectively in my day-to-day life. In my spare time, I enjoy getting creative with personal coding projects or spending time at the gym."
      };
    res.json(aboutMeData);
  });

  //--Post Contact //

  app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "williamhaegg@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({
      message: "Failed to send message",
    });
  }
});



    
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:4000");
});

