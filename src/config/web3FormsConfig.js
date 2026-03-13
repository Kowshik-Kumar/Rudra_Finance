/**
 * Web3Forms configuration
 *
 * Add your key in .env as:
 * VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
 */
export const web3FormsConfig = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
}
