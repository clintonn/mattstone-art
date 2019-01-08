import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import GalleryPagePreview from './preview-templates/GalleryPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('galleries', GalleryPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
