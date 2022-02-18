
# Welcome to the Solar System repository!

This was the first project I did using React Library on Trybe! 
Bellow in this readme you can read the project requirements, or check the site [here](https://sataniksystem.netlify.app/). 

---

# In this project I was able to: 

  * Use JSX in React

  * Use the render() component

  * Use import and export to handle files

  * Create class components in React

  * Create multiple components from an Array

  * Use props

  * Use PropTypes in order to validate the props of a component

  * Keep my code clean using Lint rules

  * Use git to commit and push the project requirements
---

## What was developed in this project: 

In this project, I developed a model of the solar system. By using this interface the user would be able to: 

 * See all the solar system planets rendered in the screen;

 * See all the missions and information about them;

# Project requirements:
The following list are the requirements of this project, designed by Trybe.

## 1. Create a componenet called `Header`

- Create a componenet called `Header` inside the folder `src/components`.This componenet will render the main title of the page.
- It must have a `header` tag and, inside of it, a `h1` tag. The text of  `h1` tag must be "Solar System".
- Render the `Header` component inside the main component `App`.

## 2. Create a componenet called `SolarSystem`

- Create a componenet called `SolarSystem` inside the folder `src/components`.
-  It must have a `div` that envolves the component and have an attribute `data-testid="solar-system"`.
- Render the `SolarSystem` component bellow `Header`, inside the main component `App`.

## 3. Create a componenet called `Title`

- Create a componenet called `Title` inside the folder `src/components`.
- The component `Title` must recieve a prop `headline`.
-  It must have a `h2` tag, that must render the title recieved by `headline` prop.

## 4. Render the `Title` componenet inside the `SolarSystem` component

- Render the `Title` component, inside `SolarSystem`.
- The componenet `Title` must be rendered inside a prop `headline` with the value "Planets".

## 5. Create a componenet called `PlanetCard`

-  Create a componenet called `PlanetCard` inside the folder `src/components`.
- The component `PlanetCard` must recieve two props: one called `planetName` and other called `planetImage`.
-The component `PlanetCard` must have a `div` that evolves all its content and has the attribute `data-testid="planet-card"`.
- The component `PlanetCard` must render a text recieved by the prop `planetName`. you can use any HTML tag that make sense, as long as it has the attribute `data-testid="planet-name"`.
- The component `PlanetCard` must render a image that have the attribute `src` with it value recieved by the prop `planetImage`.
- Other than the attribute `src`, the rendered image must have the attribute `alt` with the text `Planeta {planetName}`, where `{planetName}` is the value recieved by the prop `planetName`.

## 6. Render a list with the solar system planets.

- Render a list with the solar system planets inside the component `SolarSystem`.
- Use the component `PlanetCard` to render each item of the planet list.
- you will find a list with the names and images of each solar system planet in the file `src/data/planets.js`.
- you must import a list  The component `SolarSystem`
- For each planeta da list, you must render a component `PlanetCard`, giving the attribute `name` to a prop `planetName` and the attribute `image` to a prop `planetImage`.

## 7. Create a component called `Missions`.

- Create a component called `Missions` inside the folder `src/components`.
- This one  must have a `div` that evolves all its content and have the attribute `data-testid="missions"`.
- Render The component `Missions` bellow of `SolarSystem`, inside the main component`App`.

## 8. Render The component `Title` inside  The component `Missions`.

- Render The component `Title` inside the component `Missions`.
- The component `Title` must ser rendered recieving a prop `headline` with the value "Missões"

## 9. Create a component called `MissionCard`.

- Create a component called `MissionCard` inside the folder `src/components`.
- The component `MissionCard` must recieve four props:
  - `name`
  - `year`
  - `country`
  - `destination`

- The component `MissionCard` must have  a `div` that evolves all its content and have the attribute `data-testid="mission-card"`.
- The component `MissionCard` must render the text recieved by the prop `name`. you can use any tag HTML, as longs as it have the attribute `data-testid="mission-name"`.
- The component `MissionCard` must render the text recieved by the prop `year`. you can use any tag HTML, as longs as it have the attribute `data-testid="mission-year"`.
- The component `MissionCard` must render the text recieved by the prop `country`. you can use any tag HTML, as longs as it have the attribute `data-testid="mission-country"`.
- The component `MissionCard` must render the text recieved by the prop `destination`. you can use any tag HTML, as longs as it have the attribute `data-testid="mission-destination"`.

## 10. Render a list with the spacial missions

- Render a list with the spacial missions inside the component `Missions`.
- Use The component `MissionCard` to render each item of the missions list.
- you will find a list with the information of each spacial mission in the file `src/data/missions.js`.
- For each spacial mission of the list, you must render a  `MissionCard`, giving each attribute to it respective prop.
