# same-advantages

i'm reviewing gatsby tutorial before launching teacher site

## set up

* verify *node.js*, *npm*, and *git* are installed ```node --version```
* install the *gatsby* cli tool ```npm install -g gatsby-cli```
* from terminal load a starter site ```gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world```
* ```cd hello-world```
* ```gatsby develop``` to launch site
* site will display on ```http://127.0.0.1:8000/```

## gatsby building blocks

* home page = ```src/pages/index.js```
* any new pages should also go in ```src/pages/```
* sub-components should go in a ```src/components/``` folder
* use `<Link>` to link Gatsby page components, use `<a>` for external links
* to import Link use `import { Link } from 'gatsby`

## styles in gatsby

### global stylesheet

* create a folder for stylesheets ```src/styles/``` and create a file ```global.css```
* create a file in the root called ```gatsby-browser.js```
* import the global stylesheet ```import './src/styles.global.css';```

### css modules

* create a css file ending with `.module.css` e.g. `container.module.css`
* link to this module in the component file e.g. `container.js`
    * use prefix with camelCased word "Styles"
    * e.g. ```import containerStyles from './container.module.css';```
* set the class of the parent div with .selector e.g. ```className=containerStyles.container```
* css modules will handle the class naming and ensure styles are limited to container