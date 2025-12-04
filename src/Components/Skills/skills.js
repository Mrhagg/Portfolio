import './skills.css';
import JsLogo from '../../images/Js.png';
import NetLogo from '../../images/net logo.png'
import SqlLogo from '../../images/SQL.png';
import UmbracoLogo from '../../images/Umbraco.webp';
import HtmlAndCss from '../../images/csshtml.png';

const skills = [
  {id: 1, text: 'During my education and spare time I\'ve been experimenting with JavaScript, mainly React with TypeScript, to gain a better understanding and knowledge of the JavaScript syntax. For example, I chose to build this entire portfolio project in React JS with Bootstrap CSS.', image: JsLogo},
  {id: 2, text: '.NET has been my main learning language during my education. Blazor has been my most efficient .NET framework to work with, both WebAssembly and Server, but I also have good expertise when it comes to MVC, ASP.NET Core, and building REST APIs using ASP.NET Web APIs.' ,image: NetLogo},
  {id: 3, text: 'SQL has been something I\'ve used more or less in every course I\'ve taken, from MySQL to SQL Server. I have also gained development experience using Azure databases, mainly CosmosDB with NoSQL data.' ,image: SqlLogo},
  {id: 4, text: 'When it comes to CMS development, I\'ve been using Umbraco. I found it very easy to use and smooth to implement solutions with.' ,image: UmbracoLogo},
  {id: 5, text: 'HTML & CSS is the language that laid the foundation for my coding journey. Many of my school projects have implemented HTML & CSS, as has this portfolio, for example. When it comes to CSS, I\'ve been experimenting with both Bootstrap as well as Tailwind. For this project, I chose Bootstrap.', image: HtmlAndCss}
];



function Skills() {

  
  return (
    <section className="main-container">
      <div className="main-content">
        <h2>I'm dedicated webbdeveloper with an degree in webbdevelopment mainly focused on the .NET syntax.</h2>
        <p className="main-info">During my education i have also gotten some other valuable skills that has to do with programming and development, some of them are:</p>
        
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="skill-name">{skill.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;