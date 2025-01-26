export default function Head() {
  return (
    <>
      {/* Apple Touch Icon (iPhone, iPad) */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/_static/favicons/apple-icon.png"
      />
      {/* Favicon for most modern desktop browsers */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/_static/favicons/favicon-32x32.png"
      />
      {/* ICO Fallback */}
      <link
        rel="shortcut icon"
        href="/_static/favicons/favicon.ico"
      />
      {/* PWA manifest */}
      <link
        rel="manifest"
        href="/_static/favicons/manifest.json"
      />      
      <link
        rel="mask-icon"
        href="/_static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="google-site-verification"
        content="br9AjaAyJgS4OVigpXtHmm2DwdzuzMqzpK4G77lD2TY"
      />
    </>
  );
}
