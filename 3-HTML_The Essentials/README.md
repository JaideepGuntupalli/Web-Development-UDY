# HTML: The Essentials

## Introduction to HTML

### About HTML:

- HTML is markup language not a programming language.
- 1989/90 HTML was created to help describe structure of academic research papers.
- HTML is nothing but instructions to browser on how display content.
- For example,
  * Make this part bold
  * Make this part of link
  * Make this a paragraph

### HTML elements

- To write HTML, we use HTML elements.

- Some examples of HTML elements:
  * `<p>` element: represents a paragraph of text
  * `<h1>` element: represents the main header of the page
  * `<img>` element: embeds an image
  * `<form>` element: represents a form

- Syntax:
  *`<p>I am a paragraph</p>`
    * `<p>` : It is an opening tag
    * `</p>`: It is a closing tag

## Our very first HTML page

- Trying to replicate part of wikipedia page about [Chickens](https://en.wikipedia.org/wiki/Chicken) with HTML.
- If you don't close a tag, browser assumes that everything from there till the end needs to be bolded.

## About Mozilla Developer Network

- Resources that covers about web technologies.
- Link: [Moz://a Developer Network](https://developer.mozilla.org/en-US/)
- Mozilla is not the creater of HTML, CSS or Javascript.
- But, it is like a wiki to these technologies.

## Paragraph elements

- Update the HTML file with `<p>` tags.
- It is fine to nest tags with in them.
- `<p>` tag is used to mark it as a paragraph.

## Heading elements

- Update the HTML file with heading tags.
- There are 6 levels of headings starting with h1 upto h6.
- Heading elements shouldn't be used for size.
- They should be used as per the hierarchy as we change sizes of them using CSS.
- For example, we should try to keep a maximum of one h1 tag in a page.
- Heading tag will take up its own full line i.e anything after it will be pushed to next line

### Lorem Ipsum

- We can use an emmet abreviation called `lorem` to input placeholder text.
- `lorem * N` will input lorem ipsum sentence n times, where `N` is some natural number.
- If it's `loremN` will input N words of lorem ipsum, where `N` is some natural number.

## Intro to Chrome Developer Tools

- You can `right click` and select `Inspect` to bring up chrome developer tools.
- You can also use shortcut `Ctrl + Shift + C` in `Win` and `Cmd + Opt + C` in `MacOS`.
- We can select an element in the page to learn how and why the element is rendered in the way it rendered.

## HTML Boilerplate

- `<!DOCTYPE html>` -> This indicates that we are using HTML5 or instructing browser to use the latest HTML features.
- `<html>` -> It is the root element of HTML. Every other element on the page is descendant of this element.
- `<head>` -> Document's metadeta element contains basically things that don't show up on the page.
- `<title>` -> This is what will be shown on tab of a browser and Google also uses this title for indexing results or bringing up those results.
- `<body>` -> It includes all the elements that will be displayed on webpage.

- Shortcut: With help of emmet, `!` followed by pressing `Tab` in VS Code will give you the whole HTML boiler plate.

## Lists

- There are two types of lists. Namely-Ordered and Unordered.
- But both the lists can contain list tags to represent an element of the list.
- `<ol>` -> Ordered list
- `<ul>` -> Unordered list
- `<li>` -> List tag
- We can also nest Ordered / Unordered list inside the `li` tag

## Anchor Tags

- `<a>` tag or Anchor tag is used to create hyperlinks on a webpage.
- Anchor tag doesnt work without an attribute `href`.
- `href` will contain the link to where we want our users to redirect.
- `href` stands for Hypertext REFerence
- We can also link to another html file
- They are inline instead of taking up a whole line like heading elements.

## Image element

- `<img>` tag is used to embed an image into a page.
- It doesnt have any closing tag.
- All the properties are given as attributes to the tag.
  Some important attributes:
  * `src` -> This will take an address of an image, either on local machine or from internet.
  * `alt` -> It holds a text description of the image, which is incredibly useful for accessibility.
- We can change dimensions of a image using html but it is a bad practice.
