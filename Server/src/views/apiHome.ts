export function apiHomePage(): string {
  return `

    <style>

    body { background-color: #272424ff; box-shadow: 5px, 5px, 2px, 5px, #7147a5ff #dbc8c8ff}

    h1 { display: flex; align-items: center; Justify-content: center;
        color: #FFFFFF; font-weight: bold; 
        }

    h3 { color: #FFFFFF; font-weight: 600; margin-left: 2rem; }
    ul { display: flex; flex-direction: column; gap: 1rem; }
    li { color: #958484ff; }
    a { text-decoration: none; color: #FFFFFF;}
    a:hover { color: #bb5b5bff; }
    .method { color: #FFFFFF; }
    .disabled { color: #ef3232ff; }
    </style>


    <div>
      <h1>Portfolio API Managment</h1>
      <h3>Browse through different endpoints below</h3>
     <ul>
        <li>
          <span class="method get">GET</span>
          <a href="/about">/about</a>
        </li>

        <li>
          <span class="method get">GET</span>
          <a href="/projects">/projects</a>
        </li>

        <li>
          <span class="method post">POST</span>
          <span class="disabled">/contact</span>
        </li>
      </ul>
    </div>
    
  `;
}