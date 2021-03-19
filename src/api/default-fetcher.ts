async function defaultJsonFetcher(url: string) {
  const req = await fetch(url);
  const json = await req.json();

  return json;
}

export { defaultJsonFetcher };
