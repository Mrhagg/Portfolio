"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000/", "https://portfolio-williamhagg.netlify.app"]
}));
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
app.get("/projects", async (req, res) => {
    try {
        const response = await axios_1.default.get("https://api.github.com/users/Mrhagg/repos?sort=updated", {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        });
        app.get("/about", (req, res) => {
            const aboutMeData = {
                Name: "William Hägg",
                Title: "Junior Fullstack Developer",
                ShortBio: "A Fullstack Developer primarily focused on .NET and C# development. I like to work with modern front-end frameworks like React, Blazor, and Next.js to build innovative, robust, and impactful software. I completed my two-year web development program (focused on .NET) in June 2025. (Feel free to download my graduation certificate below.)",
                Description: "I'm William Hägg, 27, a dedicated developer with a genuine passion for building scalable and responsive websites. I live in Helsingborg, Sweden, with my girlfriend and our dog. I am a very grounded person who values living in the present and prioritizing my physical and mental health, which helps me maintain focus and operate effectively in my day-to-day life. In my spare time, I enjoy getting creative with personal coding projects or spending time at the gym."
            };
            res.json(aboutMeData);
        });
        const repos = response.data.map((repo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            updated: repo.updated_at,
        }));
        res.json(repos);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch repos" });
    }
});
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:4000");
});
//# sourceMappingURL=index.js.map