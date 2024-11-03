/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Resume = {
  _id: string;
  _type: 'resume';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  file?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset';
    };
    _type: 'file';
  };
  updatedAt?: string;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type About = {
  _id: string;
  _type: 'about';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Contact = {
  _id: string;
  _type: 'contact';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
  address?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  socialLinks?: Array<{
    platform?: string;
    url?: string;
    icon?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
    _key: string;
  }>;
};

export type Media = {
  _id: string;
  _type: 'media';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  link?: string;
  orderRank?: string;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Experience = {
  _id: string;
  _type: 'experience';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  company?: string;
  startYear?: number;
  endYear?: string;
  description?: string;
  url?: string;
  responsibilities?: Array<string>;
  orderRank?: string;
};

export type Software = {
  _id: string;
  _type: 'software';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  shortDescription?: string;
  url?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  orderRank?: string;
};

export type Research = {
  _id: string;
  _type: 'research';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  orderRank?: string;
};

export type MediaTag = {
  _id: string;
  _type: 'media.tag';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | Resume
  | SanityFileAsset
  | About
  | Contact
  | Media
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Experience
  | Software
  | Research
  | MediaTag
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/app/(site)/page.tsx
// Variable: settingsQuery
// Query: *[_type == "contact"][0]{  email,  address,  socialLinks[]{    platform,    url,    icon  }}
export type SettingsQueryResult = {
  email: string | null;
  address: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }> | null;
  socialLinks: Array<{
    platform: string | null;
    url: string | null;
    icon: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    } | null;
  }> | null;
} | null;

// Source: ./src/app/(site)/about/page.tsx
// Variable: aboutQuery
// Query: *[_type == "about"][0]
export type AboutQueryResult = {
  _id: string;
  _type: 'about';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
} | null;

// Source: ./src/app/(site)/_components/NavigationBar.tsx
// Variable: resumeQuery
// Query: *[_type == "resume"][0]{  "url": file.asset->url}
export type ResumeQueryResult = {
  url: string | null;
} | null;

// Source: ./src/app/(site)/contact/page.tsx
// Variable: contactQuery
// Query: *[_type == "contact"][0]
export type ContactQueryResult = {
  _id: string;
  _type: 'contact';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
  address?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  socialLinks?: Array<{
    platform?: string;
    url?: string;
    icon?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
    _key: string;
  }>;
} | null;

// Source: ./src/app/(site)/experience/page.tsx
// Variable: experienceQuery
// Query: *[_type == "experience"] | order(orderRank)
export type ExperienceQueryResult = Array<{
  _id: string;
  _type: 'experience';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  company?: string;
  startYear?: number;
  endYear?: string;
  description?: string;
  url?: string;
  responsibilities?: Array<string>;
  orderRank?: string;
}>;

// Source: ./src/app/(site)/media/page.tsx
// Variable: mediaQuery
// Query: *[_type == "media"] | order(orderRank)
export type MediaQueryResult = Array<{
  _id: string;
  _type: 'media';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  link?: string;
  orderRank?: string;
}>;

// Source: ./src/app/(site)/research/page.tsx
// Variable: researchQuery
// Query: *[_type == "research"] | order(orderRank)
export type ResearchQueryResult = Array<{
  _id: string;
  _type: 'research';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  orderRank?: string;
}>;

// Source: ./src/app/(site)/software/page.tsx
// Variable: softwareQuery
// Query: *[_type == "software"] | order(orderRank)
export type SoftwareQueryResult = Array<{
  _id: string;
  _type: 'software';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  shortDescription?: string;
  url?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  orderRank?: string;
}>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "contact"][0]{\n  email,\n  address,\n  socialLinks[]{\n    platform,\n    url,\n    icon\n  }\n}': SettingsQueryResult;
    '*[_type == "about"][0]': AboutQueryResult;
    '*[_type == "resume"][0]{\n  "url": file.asset->url\n}': ResumeQueryResult;
    '*[_type == "contact"][0]': ContactQueryResult;
    '*[_type == "experience"] | order(orderRank)': ExperienceQueryResult;
    '*[_type == "media"] | order(orderRank)': MediaQueryResult;
    '*[_type == "research"] | order(orderRank)': ResearchQueryResult;
    '*[_type == "software"] | order(orderRank)': SoftwareQueryResult;
  }
}
