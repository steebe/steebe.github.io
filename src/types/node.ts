export type Node = {
  id: string;
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    updated?: string;
    draft: boolean;
    title: string;
    hidden: boolean;
    tags?: string[];
  };
};
