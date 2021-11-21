# Next Steps & Semantics

## HTML5

- HTML5 is the latest evolution of the standard that defines HTML.
- It is the new version of the language HTML, with new elements, attributes, and behaviors, and along with Javascript APIs to build more diverse and powerful Websites and applications.
- You may sometimes hear about "new HTML5 elements", or find HTML5 described as a new version of HTML.
- HTML5 was the successor to previous HTML versions and introduced new elements and capabilities to the language on top of the previous version, HTML 4.01, as well as improving or removing some existing functionality.
- However, as a Living Standard HTML now has no version.
- This set is sometimes called HTML5 & friends and often shortened to just HTML5

- HTML5 cannot be turned off - [Quora Post](https://www.quora.com/How-do-you-disable-HTML5-in-Google-Chrome)

## Block vs Inline

- Block level elements take up a whole "block" of space
- _Examples:_ Paragraph elements, Heading elements, etc
- Inline elements fit along side other elements
- _Examples:_ Anchor tags, Image elements, etc

## Divs & Spans

- Div tag(`<div></div>`) or The content division element is a generic container for flow content. It has on effect on the content or layout until styled using CSS.
- It is a block level element
- So, if they are multiple inline elements and some of them are put in div, then they take take their own line or block
- Span tag (`<span></span>`) is also a generic container as div but it is an inline element.

## HR, BR, Sup, & Sub tags

- `<hr>`: It is a horizontal divider. They dont have a closing tag.
- `<br>`: Instead of multiple paragraphs, we can use `<br>` to add next line to the paragraphs. They dont have a closing tag.
- `<sup></sup>`: Makes the element render above the word like square in a math equation.
- `<sub></sub>`: Makes the element render below the word like an equation of a chemical compound.

## HTML Entity codes

- We can use these codes in HTML such that they will result in different charecters.
- We generally use these to use difficult charecters.
- We also use these instead of reserved charecters like `<` or `>`.
- Link to all the Entity codes: [Charecter Entity Reference](https://dev.w3.org/html5/html-author/charref)
- _Syntax:_ Similar to `&gt;` directly between normal charecters.

## Semantic Markup

- Semantic means relating to meaning.
- Basically we need to write a meaniful and readable html instead of div soup.
- Some of the examples:
  - `<main></main>`: It generally or should contain the main content of the page, not the navbar or sidebar
  - `<nav></nav>`: It should contain links that takes you to differnet part of website but not page.
  - `<section></section>`: It represents a standalone section which doesn't have a more specific semantic element to represent it.
  - `<article></article>`: It represents a self contained composition in a document, page, application, or site, which is intended to be independently distributable or resusable. Each article should be identified, typically by including a heading(`<h1>`-`<h6>`) as a child of the `<article>` element.
  - `<header></header>` & `<footer></footer>`: It is used to represent a header and footer of a page.
  - `<aside></aside>`: Generally used for sidebar or callouts.
  - `<time></time>`: Time element is used to represent time. You should also give full time which will help when using screen readers. It is an inline element that is just wrapped around date.
  - `<figure></figure>`: It represents a self-contained content, potentially with an original caption, which is specified using the (`<figcaption>`) element.

and there are many more elements like this. We need keep this in mind about semantic elements which will help with accessibility and SEO.
