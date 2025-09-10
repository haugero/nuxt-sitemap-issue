## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Reproduce the issue

Generate the static files and check the prerendered routes in the console and the generated sitemap.xml afterwards.
The prerendered routes with slug `/partner/partner.2` and `partner..3..2.1` are missing in the sitemap.xml.

```bash
# npm
npm run generate
```
