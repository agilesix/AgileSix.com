import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'
import WorkPagePreview from './preview-templates/WorkPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import CapabilitiesPagePreview from './preview-templates/CapabilitiesPagePreview'
import CaseStudyPagePreview from './preview-templates/CaseStudyPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import TeamMemberPreview from './preview-templates/TeamMemberPreview'
import CapabilityPreview from './preview-templates/CapabilityPreview'
import CareersPagePreview from './preview-templates/CareersPagePreview'

CMS.registerPreviewTemplate('work', WorkPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('capabilitiesPage', CapabilitiesPagePreview)
CMS.registerPreviewTemplate('capabilities', CapabilityPreview)
CMS.registerPreviewTemplate('casestudies', CaseStudyPagePreview)
CMS.registerPreviewTemplate('people', TeamMemberPreview)
CMS.registerPreviewTemplate('careers', CareersPagePreview)