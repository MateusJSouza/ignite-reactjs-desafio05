/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default async function exit(__, res) {
  res.clearPreviewData();

  // Redirecionando para a página inicial da aplicação
  res.writeHead(307, { Location: '/' });
  res.end();
}
