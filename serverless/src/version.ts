import { version as chromelessVersion } from '@brin/chromeless'

const serverlessChromelessVersion = require('../package.json').version

export default async (event, context, callback): Promise<void> => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      chromeless: chromelessVersion,
      serverlessChromeless: serverlessChromelessVersion,
    }),
  })
}
