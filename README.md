# skytips


![Screenshot from 2021-10-06 17-19-16](https://user-images.githubusercontent.com/87712502/136285513-0108ba03-727e-41bc-8f6b-ee2092a6952c.png)

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
