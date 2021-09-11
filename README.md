# skytips

![Screenshot from 2021-09-11 16-54-55](https://user-images.githubusercontent.com/87712502/132961743-e8e9e05b-2079-47cf-b069-d3b84f193e75.png)

[live demo](https://gaudren.github.io/skytips/dist/index.html)

## Description

Adds a tooltip to your website with the image of Skyweaver cards either with `<span class="skytips">Card Name</span>` or with `{{Card Name}}` (requires `autolink: true`).

## Usage

Insert the following snippet anywhere on your page:

```html
<script src="https://gaudren.github.io/skytips/dist/main.js"></script>

<!-- with support for {{Card Name}} -->
<script>skytips({autolink: true})</script>

<!-- without support for {{Card Name}} -->
<script>skytips()</script>
```
