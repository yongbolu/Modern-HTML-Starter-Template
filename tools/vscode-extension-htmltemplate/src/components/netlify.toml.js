export default `
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Content-Security-Policy = "frame-ancestors 'self'"
    Cache-Control = "max-age=31536000"
    Link = '''
    </css/style.css>; rel=preload; as=style, \\
    </css/modules/footer.css>; rel=preload; as=style, \\
    </css/modules/header.css>; rel=preload; as=style, \\
    </css/modules/loader.css>; rel=preload; as=style, \\
    </css/modules/main.css>; rel=preload; as=style, \\
    </script.js>; rel=preload; as=script, \\
    </js/modules/create-timer.js>; rel=preload; as=script, \\
    </js/modules/loader.js>; rel=preload; as=script, \\
    </js/src/assets.js>; rel=preload; as=script'''
`
