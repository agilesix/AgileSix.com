import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'
import WorkPagePreview from './preview-templates/WorkPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import CapabilitiesPagePreview from './preview-templates/CapabilitiesPagePreview'
import TeamMemberPreview from './preview-templates/TeamMemberPreview'

CMS.registerPreviewTemplate('work', WorkPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('capabilities', CapabilitiesPagePreview)
CMS.registerPreviewTemplate('people', TeamMemberPreview)