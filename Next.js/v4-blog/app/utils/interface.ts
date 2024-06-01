export interface Post {
  title: string;
  slag: {
    current: string;
  };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
}

export interface Tag {
  name: string;
  slag: {
    current: string;
  };
  _id: string;
}
