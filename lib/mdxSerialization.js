import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Avatar from '../components/avatar';

const components = { Avatar };
export async function mdxToString(mdx) {
  return await renderToString(mdx, { components });
}
export function stringToMdx(string) {
  return hydrate(string, { components });
}
