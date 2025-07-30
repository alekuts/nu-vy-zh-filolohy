import nextra from 'nextra'
 
// Set up Nextra with its configuration

// Export the final Next.js config with Nextra included
  // ... Add regular Next.js options here
  export default nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './docs.config.js', // або './theme.config.js', якщо в тебе так називається
})
