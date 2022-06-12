# Commenter

Commenter is a [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) based comment system that allows you to use GitHub's issues as your comments backend. 

This project works in conjunction with [lynx.rs](https://github.com/Zyzle/lynx.rs) to authenticate with Github's oauth, or rather it will once comment and reaction submission is added.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Usage

Commenter, when built consists of 3 js files; runtime, polyfills, and main. These three files simply need to be included as you would any other js files:

```html
<head>
  <!-- ... --->
  <script src="/runtime.2c67ee1ba12e0065.js" type="module"></script>
  <script src="/polyfills.550f56bf1e9d0256.js" type="module"></script>
  <script src="/main.d33242095a6e4424.js" type="module"></script>
</head>
```

Once this is done add the custom `zyzle-commenter` tag to your body where you want comments to appear and give it the required attributes:

```html
<body>
  <!-- ... -->
  <zyzle-commenter 
    gh-repo="zyzle.github.io"
    owner="Zyzle"
    issue-number="7">
  </zyzle-commenter>
</body>
```

The required attributes are as follows:

| Attribute    | Description |
| ------------ | ----------- |
| gh-repo      | The repository where the selected issue exists |
| owner        | The repository owner, either organisation name or github user |
| issue-number | The repository issue number to pull comments from |