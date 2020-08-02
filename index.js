import { merged } from '../dirdata/index.js'

export default async (inputPath, templatePath, outputPath) => {
  console.log(await merged(inputPath))
}
