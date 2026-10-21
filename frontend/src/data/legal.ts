import type { LegalDocumentContent } from '../types/content';

export const legalReviewNotice =
'Draft for review — this content must be reviewed and confirmed by VisionSpring Agency (and ideally a qualified legal adviser) before publication.';

export const privacyPolicy: LegalDocumentContent = {
  title: 'Privacy Policy',
  intro:
  'This Privacy Policy explains how VisionSpring Agency collects, uses, and protects personal information when you visit our website or contact us about our services.',
  sections: [
  { id: 'information-we-collect', heading: 'Information we collect', paragraphs: ['When you submit an enquiry, we may collect your name, business or organization name, email address, phone number, the service you are interested in, your estimated budget, your preferred contact method, and the project details you share.', 'We may also collect basic technical information such as your browser type and pages visited, through analytics tools where these are enabled.'] },
  { id: 'how-we-use-information', heading: 'How we use your information', paragraphs: ['We use the information you provide to respond to your enquiry, prepare quotations, deliver agreed services, and communicate with you about your project.', 'We do not sell your personal information. We will only send marketing communication where you have agreed to receive it.'] },
  { id: 'whatsapp-and-email', heading: 'WhatsApp and email communication', paragraphs: ['If you contact us through WhatsApp or email, your messages are processed by those third-party services under their own privacy policies. Please avoid sharing sensitive information you do not want transmitted through these channels.'] },
  { id: 'sharing', heading: 'Sharing of information', paragraphs: ['We may share information with trusted service providers (such as hosting or form-processing providers) only as needed to operate our website and deliver our services, or where required by law.'] },
  { id: 'data-retention', heading: 'Data retention and security', paragraphs: ['We keep enquiry information only for as long as needed to respond to you and to meet legitimate business or legal requirements. We take reasonable steps to protect your information, but no method of online transmission is completely secure.'] },
  { id: 'your-rights', heading: 'Your rights', paragraphs: ['You may request access to, correction of, or deletion of the personal information we hold about you, subject to applicable law. To make a request, contact us at visionspringagency@gmail.com.'] },
  { id: 'external-links', heading: 'External links', paragraphs: ['Our website links to external websites, including client projects and social platforms. We are not responsible for the privacy practices or content of those websites.'] },
  { id: 'changes', heading: 'Changes to this policy', paragraphs: ['We may update this Privacy Policy from time to time. The latest version will always be available on this page.'] }]

};

export const termsAndConditions: LegalDocumentContent = {
  title: 'Terms and Conditions',
  intro:
  'These Terms and Conditions govern your use of the VisionSpring Agency website. By using this website, you agree to these terms.',
  sections: [
  { id: 'use-of-website', heading: 'Use of this website', paragraphs: ['You may use this website for lawful purposes only. You must not use it in a way that damages the website, interferes with others, or attempts to gain unauthorized access to any system.'] },
  { id: 'information-accuracy', heading: 'Information on this website', paragraphs: ['We aim to keep information accurate and up to date, but content is provided for general information only. Sample articles, illustrative designs, and mockups are clearly labelled and do not represent client work or guaranteed outcomes.'] },
  { id: 'enquiries-and-quotes', heading: 'Enquiries and quotations', paragraphs: ['Submitting an enquiry does not create a contract. Any quotation we provide depends on project requirements, scope, timeline, and agreed deliverables, and becomes binding only when confirmed in a written agreement.'] },
  { id: 'advertising', heading: 'Advertising and results', paragraphs: ['Advertising spend on platforms such as Google, Facebook, and Instagram is separate from our management fees. We do not guarantee search rankings, sales, leads, or specific advertising results.'] },
  { id: 'intellectual-property', heading: 'Intellectual property', paragraphs: ['Unless otherwise stated, the design, text, graphics, and code on this website belong to VisionSpring Agency. Client project names and websites remain the property of their respective owners. Ownership of deliverables created for clients is set out in each project agreement.'] },
  { id: 'external-links', heading: 'External links', paragraphs: ['Links to external websites are provided for convenience. We do not control and are not responsible for the content or availability of those websites.'] },
  { id: 'liability', heading: 'Limitation of liability', paragraphs: ['To the extent permitted by law, VisionSpring Agency is not liable for any loss arising from use of this website or reliance on its general information.'] },
  { id: 'governing-law', heading: 'Governing law', paragraphs: ['These terms are intended to be governed by the laws of Kenya. [Confirm the applicable jurisdiction before publication.]'] },
  { id: 'contact', heading: 'Contact', paragraphs: ['Questions about these terms can be sent to visionspringagency@gmail.com.'] }]

};