import { groq } from 'next-sanity';

export const resumeQuery = groq`*[_type == "resume"][0]{
  "url": file.asset->url,
  updatedAt
}`;