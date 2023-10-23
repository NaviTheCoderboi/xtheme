# xtheme

A tailwindcss plugin to make custom themes, it is a minimal plugin that allows you to create your own themes and use them in your projects.

## Installation

```bash
npm install git+https://github.com/navithecoderboi/xtheme.git
```

## Configuration

```js
const { xtheme } = require("xtheme");

const options = {
    themes: [
        {
            name: "...",
            selector: "...",
        },
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {},
    },
    plugins: [xtheme(options)],
};
```

## Usage

```html
<div class="<selector>:<class>">hello world</div>
```

## demo

demo is available [here](https://github.com/navithecoderboi/xtheme/blob/main/demo)

## contributing

Contributions are welcome, feel free to open a pull request or an issue.
