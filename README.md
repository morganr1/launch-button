# Wayflyer launch button 🚀

> A reusable launch button which is responsible for the ignition of the rocket fuel that will send Wayflyer's rocket ship to the stars! 😄

## **Notes** 📘

First off, I really enjoyed this tech task - well thought out! As I mention to Mike, I'm quite short on time (holidays tomorrow!) and could only devote a few hours over the past 2 nights as well as the guts of the morning today to get this tech assessment back to you guys.

I haven't developed with typescript in nearly 2 years (current company doesn't use it widely), so I'm sadly quite rusty in this regard. If I was to come onboard with Wayflyer, I'd spend time beforehand getting back up to speed with TS. Hopefully I didn't make too much of a mess!

## **Tech** 💾

### Rollup JS

Seeing as this was going to be a component wrapped in a component library I decided to give **Rollup** a try as I've heard about it being a great way to build component libraries.

In retrospect - I probably should have played it safe and just used Webpack 5.

## **Accessibility** 👂 👀

Some notes around accessibility

### Storybook A11y

As part of the storybook implementation I've included an AXE(A11y) plugin which automatically scans components / stories to raise any violations, passes and incompleted a11y items.

When on a story, refresh the page and you will find the accessibility tab in the lower bar updated with the results of the A11y scan done by the plugin.

### General A11y

I've worked to ensure that the button can inform users which are leveraging a screen reader (albeit not quite perfect - more details after) and also ensure it is usable with keyboard.

-   One small issue I came across with the screen reader. I wanted to inform the user about changes to the dynamic content within the tooltip (which describes the buttons functionality). For some reason, the screen reader repeats the tooltip text twice. I've tried a variety of tricks I usually leverage for dynamic content but alas... it just wouldn't play nice for me.

-   I also wanted to note that some of the colors provided as part of the design spec aren't WCAG compliant in terms of contrast between background and foreground. Working color has a contrast ratio of ~2.6 (working) and Error sits at ~4.0. The WCAG contrast minimum is 4.5.
    The closest accessible alternative text colors we could use to maintain the white background are;

    -   `#C75300` instead of `#FF7900`
    -   `#EE0700` instead of `#FF0000`.

    I didn't implement the above color changes as the requirements stated to match the designs closely. This is something I would of normally raise with design to update our theme colours for example and perhaps do a general accessibility check on our palette. Then make the code change.

## **Testing** ✅

I leveraged jest with testing library and some of the various addons you'd typically expect to see for unit testing. I added in coverage report collection and report generation and the test coverage current sits at ~99.4%.

I put in Husky Hooks as a way to enforce the quality gate code coverage thresholds I have in place for the project locally. On pre-commit hook is in place to run unit tests for any commits to ensure no broken code / tests are pushed to remote.

## **Alternate approaches** 🎢

Some notes around some potential different approaches I would take if I'd had a bit more time to refactor.

### Timeout / Abort logic

I'd definitely extract this logic into either context or a custom hook. We could provide a trigger function to fire the request and provide back a set of props which consists of request status, abort callback, requestResponse, etc. This would provide for reusability in other situations where this logic is deemed needed and would clean up the API button significantly away from the complex branching of managing various statuses and requests.

### Bundling / Packaging

After playing around with RollupJS I do think its quite nifty but I've found the documentation and general availability of packages and community help to be a bit lacking at the moment. I'd probably instead stick with good old reliable webpack 5 and bundle the component into a lib and publish it to artifactory.

On the topic of publishing - I was going to publish this to npmjs but then I realised you probably don't want example components of your tech assessment out in the wild :D - So I held off doing that intentionally. Hopefully storybook and the built dist files is sufficient to illustrate the intent.

## **Commands** ✏️

---

#### Install

```sh
yarn install
```

#### Run tests

```sh
yarn test
```

#### Format (prettier)

```sh
yarn prettier
```

#### Build

```sh
yarn build
```

#### Storybook

```sh
yarn storybook
```

```sh
yarn build-storybook
```

### Author

**Reggie Morgan** 🐒

-   LinkedIn: [@regomorgan](https://linkedin.com/in/regomorgan)
