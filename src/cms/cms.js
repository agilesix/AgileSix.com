import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'
import WorkPagePreview from './preview-templates/WorkPagePreview'

CMS.registerPreviewTemplate('work', WorkPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)