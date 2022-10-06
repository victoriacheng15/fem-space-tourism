# Space tourism website solution

The challenge is to build out this [Space tourism website challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) and get it looking as close to the design as possible.

- [Space tourism website solution](#space-tourism-website-solution)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for each of the website's pages depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] View each page and be able to toggle between the tabs to see new information

## Screenshot

<div align="center">
  <img src="https://user-images.githubusercontent.com/35031228/148137582-7a9a91f6-9129-43be-ae9a-1b8d25c015db.png" alt="mobile view" width="300"/>
  <img src="https://user-images.githubusercontent.com/35031228/148137584-07bf82f0-69d5-4513-aa3b-c01cb89645cf.png" alt="tablet view" width="400"/>
  <img src="https://user-images.githubusercontent.com/35031228/148599848-9358c011-3db4-4a6a-8680-e74d5fad291b.png" alt="desktop view" width="600"/>
</div>

## Links

- [Frontend Mentor Solution](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3/hub/space-tourism-built-with-react-router-react-and-tailwind-46DS14ast)
- [Live Page](https://fem-space-tourism-vc.vercel.app/)

## Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/)
- [React Router - v6](https://reactrouter.com/en/v6.3.0)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

### What I learned

At first, I started this projec to learn about React, Tailwind CSS, and React Router, Keep in mind, I completed this project on `Jan 8th, 2022`. I decided to start updating this code on `Oct 3rd, 2022`.

Now, I am reviewing what I wrote before and realized a couple of things:
- Made changes on `main` branch without open any PRs
- Large component for each routes (pages)
- Underutilize `children` props

From what I realized and then I continued to make improvement
- Create a branch for one type change as much as I can. Also, use `squash and nerge` to make the commit history looks nicer
- Break down large component into smaller components
  - layout components
  - Navigation components
  - PageButton component to reuse cross pages (routes)
- Utilize `index.js` to export components/routes/layouts in one file in each folder


**Utilizing children prop to make layout componments**
- `<main></main>` => `<MainContainer></MainContainer>`
- `<div></div>` (the first div below main) => `<PageContainer></PageContainer>`
- `<div></div>` (the div that holds content) => `<ContentContainer></ContentContainer>`
- `<section></section>` => `<SectionCtonainer></SectionContainer>`

<details close>
<summary>Before - Destination Component Code</summary>

```js
<main className="pt-24 pb-8 text-white main-bg md:pt-36 bpCustom:pt-56 bg-destination-mobile md:bg-destination-tablet bpCustom:bg-destination-desktop before:bg-destination-mobile md:before:bg-destination-table bpCustom:before:bg-destination-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <PageTitle span="01" title="pick your destination" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-20 bpCustom:flex-row">
          <ImageBox
            classes="w-[10.63rem] md:w-[18.75rem] bpCustom:w-[27.81rem] aspect-square"
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
          <section className="flex flex-col items-center">
            <div className="flex items-center justify-center w-full gap-4 mb-7">
              {
                planetList.map((planet) => (
                  <button
                    key={planet.id}
                    onClick={changePlanet}
                    data-planet={planet.name}
                    type="button"
                    className={`relative h-full pb-2 text-lg tracking-widest uppercase content-none link-hover font-barlow ${planet.name === planetName ? 'link-active' : 'inactive'}`}
                  >
                    {planet.name}
                  </button>
                ))
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <InfoTitle title={planetName} largeText />
              <Paragraph
                paragraph={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.description : ''))}
              />
              <div className="w-full h-0.5 bg-white/50 mb-8" />
              <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
                <TravelInfo
                  title="avg. distance"
                  travel={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.distance : ''))}
                />
                <TravelInfo
                  title="est. travel time"
                  travel={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.travel : ''))}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
```

</details>

<details close>
<summary>After - Destination Component Code</summary>

```js
<MainContainer compName={DESTINATIONS}>
      <PageContainer>
        <PageTitle span="01" title="pick your destination" />
        <ContentContainer compName={DESTINATIONS}>
          <ImageBox
            compName={DESTINATIONS}
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
          <SectionContainer compName={DESTINATIONS}>
            <div className="mb-7 flex w-full items-center justify-center gap-4">
              {planetList.map(({ id, name }) => (
                <PageButton
                  key={id}
                  onClick={changePlanet}
                  dataName={name}
                  compName={DESTINATIONS}
                  compClass={name === planetName ? 'link-active' : ''}
                  btnContext={name}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <InfoTitle title={planetName} largeText />
              <Paragraph
                paragraph={data.map((planet) =>
                  planet.name.toLowerCase() === planetName
                    ? planet.info.description
                    : ''
                )}
              />
              <div className="mb-8 h-0.5 w-full bg-white/50" />
              <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
                <TravelInfo
                  title="avg. distance"
                  travel={data.map((planet) =>
                    planet.name.toLowerCase() === planetName
                      ? planet.info.distance
                      : ''
                  )}
                />
                <TravelInfo
                  title="est. travel time"
                  travel={data.map((planet) =>
                    planet.name.toLowerCase() === planetName
                      ? planet.info.travel
                      : ''
                  )}
                />
              </div>
            </div>
          </SectionContainer>
        </ContentContainer>
      </PageContainer>
    </MainContainer>
```

</details>

**Utilizing index.js for export files**

<details close>
<summary>Export all routes in index.js</summary>

File path: `src/routes/index.js`

```js
export { default as Crew } from './Crew';
export { default as Destination } from './Destination';
export { default as Home } from './Home';
export { default as Technology } from './Technology';
```

In `App.jsx`

```js
import { Home, Destination, Crew, Technology } from './routes';
```

If dont use `index.js` to keep all exports, you would need to import each route like code block below.

```js
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';
```

Note: As always, there is no right or wrong way on how to export or import files. It is a personal preference. I decided to do this way for a curiosity reason. I do think this way is pretty good and it reduces the amount of import lines in your component files.

</details>

**Summary**

I utilized on what I have learned to apply this project. It allows me to see how awesome is `squash and merge`, but I will need to remember use `git merge main` into `development` branch to keep `development` branch up to date with the `main` branch. 

Having a large component makes it harder to maintain the code. This project has smaller codebase, but imagine this on much larger codebase. It definitely needs to organzing component files based on its category (like `layout`, `routes` and etc). The goal to keep component to do one thing as much as possible!

I learned about layout components when I was reading about `Nextjs` and `Astro`, and realized that I could have utilize `children` props more.

### Continued development

I think I would like to keep the code as it is now. And serve as a reminder for future me about how far I have came. 

I may use this project to use with the GitHub [Dependabot](https://github.com/dependabot) to update packages in the future.

### Useful resources

- [Layout Component and why we use it in React](https://dev.to/olenadrugalya/layout-component-and-why-we-use-it-in-react-d8b)
  - When use react router, you may have the exact or similar layout throughout pages, you create the layout and then you can `reuse` the layout for other pages
- [Layouts from NEXTjs docs](https://nextjs.org/docs/basic-features/layouts)


## Author

- Frontend Mentor - [@victoriacheng15](https://www.frontendmentor.io/profile/victoriacheng15)
- Github - [@victoriacheng15](https://github.com/victoriacheng15)
- Twitter - [@viktoriacheng15](https://twitter.com/viktoriacheng15)

## Acknowledgments

As always, thanks to people at Frontend Mentor for offering the oportunity to allow me practice my skills.
