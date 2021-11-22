# HTML: FORMS & TABLES

## Tables

### Introduction

-   Tables are used to contain data.
-   In the past, tables are used to layout content across the webpage.

### Table Elements

-   `<td>`: Table Data Cell -> It defines cell that contains data.
-   `<tr>`: Table Row -> It groups cells into a row.
-   `<th>`: Table headers -> Similar to `<td>` we need to use these in `<tr>`.
-   `<tbody>`: Table Body -> It is wrapped around rows and works similar to main tag
-   `<thead>`: Table Head -> It is wrapped around rows and works similar to header tag
-   `<tfoot>`: Table Foot -> It is wrapped around rows and works similar to footer tag
-   `<colspan>`: Attribute used to specify the number of columns a cell will take up
-   `<rowspan>`: Attribute used to specify the number of rows a cell will take up

## Forms

### Introduction

-   Forms represents a document section containing interactive controls for submitting information.
-   The action attribute specifies WHERE the form data should be sent.
-   The method attribute specifies which HTTP method should be used(like GET, PUT, POST etc).

### Inputs in the Form

-   20+ possible types of inputs, ranging from date pickers to checkboxes.
-   Tag: `<input>`. There is no closing tag
-   Attribute `type = " "` is where the magic happens.
-   Changing type dramatically alters the input's behavior and appearance

### Labels

-   Labels are used to define questions of the fields of inputs.
-   Labels have syntax like `<label><label>` with for attribute that takes in an id of a input.
-   We can also nest input inside label. In this way we dont even need id. Styling this way is difficult.

### Buttons

-   Buttons used outside the form will not to anything until specified with Javascript.
-   Button when used inside of the form will submit the form.
-   This can be stopped by using `type = " "` attribute and specifying it as button. This will make it to behave as normal button.
-   We can also use input tag with type set to "submit" and value to desired text to be displayed on the button to make a submit button.
-   If we dont have a button, the input works even by pressing enter.

### Query

-   We can use name attribute through which we can submit details as values of these names.
-   These are passed as a GET request
