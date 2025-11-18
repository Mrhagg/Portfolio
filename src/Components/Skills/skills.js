import './skills.css';
import JsLogo from '../../images/Js.png';
import NetLogo from '../../images/net logo.png'
import SqlLogo from '../../images/SQL.png';
import UmbracoLogo from '../../images/Umbraco.webp';
import HtmlAndCss from '../../images/csshtml.png';

const skills = [
  {id: 1, text: 'During my education and spare time i been experimenting with Javascript, mainly react with typescript to get a better understanding and knowledge with the Javascript syntax. For example have i choosen to build this whole portfolio project in React JS with bootstrap CSS.', image: JsLogo},
  {id: 2, text: '.NET has been my main language to learn during my education. Blazor has been my most effecient .NET framework to work with, both WebbAssembly and Server, but i have also good expertise when it comes to MVC, ASP.NET CORE and building rest API using ASP.NET Web apis.  ' ,image: NetLogo},
  {id: 3, text: 'SQL has been something i been using more or less every course i been taking, from MySql to SqlServer and i have also been developing using azures database mainly CosmosDB with NoSQL data. ' ,image: SqlLogo},
  {id: 4, text: 'When it comes to CMS development i been using Umbraco, i found it very easy to use and smooth to implement your solutions.' ,image: UmbracoLogo},
  {id: 5, text: 'HTML & CSS is the language that laid the foundation for my coding journey. Many of my school projects have implemented HTML & CSS so has this portfolio for exmaple. When it comes to CSS i been experimenting with both bootstrap sowell as Tailwind. But for this project i chose bootstrap.', image: HtmlAndCss}
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