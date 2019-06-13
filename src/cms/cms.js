import CMS from 'netlify-cms';

import HomePagePreview from './preview-templates/HomePagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('index', HomePagePreview);
