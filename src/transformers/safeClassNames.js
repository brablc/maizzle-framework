module.exports = async (html, env) => {
  if (env !== 'local') {
    return html
      // Rewrite class names in `<head>` CSS
      .replace(/(\..+)(\\:|\\\/|\\%)/g, group => {
        return group
          .replace(/\\:|\\\//g, '-') // replace `\/` and `\:` with `-`
          .replace(/\\%/g, 'pc') // replace `%` with `pc`
      })
      // Rewrite class names in `<body>` HTML
      .replace(/class\s*=\s*["'][^"']*[/:][^"']*["']/g, group => {
        return group
          .replace(/\/|:/g, '-') // replace `\/` and `\:` with `-`
          .replace(/%/g, 'pc')
      })
  }

  return html
}
