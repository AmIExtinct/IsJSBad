This Branch Toasts A Toaster While Being Toasted


And no that sentence doesnt mean shit



Wanna Visit It? 
https://amiextinct.github.io/IsJSBad

## Build, lint, and deploy

The site is built with [Parcel](https://parceljs.org/). From the repository
root, run:

```sh
npm ci
npm run build
```

Parcel bundles the HTML pages and their CSS and JavaScript assets, then
minifies them for production. The build uses `index.html` when present, or the
existing `index.htm` otherwise; Parcel publishes either one as
`dist/index.html`, which is the filename GitHub Pages expects. HTML pages
added anywhere under `docs/` are included in the build.

The GitHub Actions workflow runs when `index.html` or `index.htm`, anything
under `css/`, `js/`, or `docs/`, or the build configuration changes. It runs
HTML, CSS, and JavaScript linters before building. Lint failures are reported
but do not prevent the build or deployment. Pull requests run the checks and
build without deploying; pushes to `main` (and a manual run on `main`) deploy
the built `dist/` site.

To enable deployment, open the repository's **Settings → Pages** and set
**Build and deployment → Source** to **GitHub Actions**. After that, a change
to one of the watched files on `main` will publish the site automatically.
