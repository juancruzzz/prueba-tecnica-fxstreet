export interface Author {
    name: string;
    imageUrl: string;
    companyName: string;
  }
  
  export interface Post {
    isPopular: boolean;
    id: number;
    author: Author;
    title: string;
    feed: string;
    subFeed: string;
    publicationTime: string;
    content: string;
  }
  