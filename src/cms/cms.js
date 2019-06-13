import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import PostPreview from './preview-templates/PostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import BlogPagePreview from './preview-templates/BlogPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('blog', BlogPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('post', PostPreview);
