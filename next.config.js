/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false


let assetPrefix = ''
let basePath = '/Next-Todo'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}


const nextConfig = {
    distDir: 'build',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      loader: 'imgix',
      path: 'the "domain" of your Imigix source',
  },
}


module.exports = nextConfig
