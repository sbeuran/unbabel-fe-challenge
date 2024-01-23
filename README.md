# Ovidiu Beuran Solution - VueJS

## 1. Brief Summary
The current project is a proposal for solving the frontend challenge presented by Unbabel. This time around I used VueJS for solving the problem.

## 2. Structure

### Component structure:
I kept on using the same logic that I used for structring the project in my react solution - the atomic design structure (know more about Brad Frost's approach [here](http://atomicdesign.bradfrost.com/)).

This time around I didn't prepare a storybook but indeed there is a storybook library dedicated to VueJS so it is possible to follow the same idea of presenting your components in isolation.

### State management:
Being a VueJS project I used [VueX](https://vuex.vuejs.org/) for state management. I also kept using the philosophy proposed by [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for separating presentational components (don't know or have access to the store, their only responsibility is purely presentational) from container components (don't have any responsibility on presentation / styles, their main responsibility is to communicate with the store and pass down data).

I also created a file to keep track of all store action and mutation types and pure functions that serve as action generators.

Communications with the API are done via a services folder alleviating the store out of this responsibility allowing it to care only about state management.

### CSS-IN-JS:
I chose to go with a CSS-IN-JS approach (as I did in my React project) and get rid of the `<style>` tags all together for the following reasons:

- My code is less polluted, no class names, no ids, no style tags.
- No margin for leaking styles out of their intention as the styles are the component itself;
- Provides dynamic rendering and solves most of the CSS limitations that other pre-compiler like SASS / LESS try to but in a more elegant / maintainable way than pre-compilers.
- A more isomorphic code. Opposite to the pre-compilers approach, you don't have to introduce another language (that browsers don't know about) and compile those into vanilla CSS. With styled components there is no need for after-compilation / build.
- CSS-in-JS helps to avoid non-deterministic source order specificity.
- A better development experience: CSS-in-JS gives the developer more expressiveness while encouraging more maintainable patterns than cascading.
- Styled Components gives developers API to describe state-based styles in a better way than using a bunch of conditional class names.
- This approach also helps with removing dead code.


## 3. Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
