# express-hbs-helpers-test

Testing global variables with Handlebars helpers.

## WHY

Trying to see if we can inject global variables into Handlebars without needing to mess with passing values between templates.

## HOW

```js
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: "default",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  helpers: {
    LOGO_ROOT: "https://logohost/foo/bar/",
    HIBP_ROOT: "https://haveibeenpwned.com/api/v3/breaches"
  }
});
```

First, we're adding some global variables into the `helpers` object.

Now we can use the `LOGO_ROOT` and `HIBP_ROOT` constants in our templates, as seen in <views/home.hbs>:

```hbs
{{!< default }}

<p>What, did this work?</p>

<p>in template:</p>
<pre>{{ LOGO_ROOT }}</pre>

<hr />

<p>in partial:</p>
{{> snippet }}
```

You can use the global `{{ LOGO_ROOT }}` in our templates, or in any partials, as seen in <views/partials/snippet.hbs>:

```hbs
<pre>{{ HIBP_ROOT }}</pre>
```
