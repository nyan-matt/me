# Content Metadata

Blog and work pages are built for every file in their collection, even when an
entry is hidden from indexes. Use these optional fields to control where content
appears without changing its URL.

## Shared Editorial Fields

```yaml
archived: false
category: design-systems
featuredHome: true
featuredIndex: true
featuredOrder: 10
```

- `archived`: builds the page, but removes it from normal listing surfaces.
- `category`: primary editorial grouping.
- `featuredHome`: controls homepage visibility.
- `featuredIndex`: controls collection index and tag listing visibility.
- `featuredOrder`: lower numbers appear first on curated surfaces.

If `featuredHome` or `featuredIndex` is omitted, the site falls back to the
legacy `featuredpost` value.

## Dates

For blog posts, `date` is the publish date. Use optional `updatedDate` when a
post is materially refreshed.

For work, `workdate` is the audience-facing project timeframe. Use
`featuredOrder` for manual ordering instead of adjusting `date`.
