import '../styles/globals.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner dismissible={false}>📰 Останні новини: нічого</Banner>
const navbar = (
  <Navbar

logo={
<>
  <svg  width="30" height="30" strokeWidth="1.5" viewBox="0 1 22 22" fill="none" >
  <path stroke="currentColor" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
</svg>

    <span style={{ fontSize: 20, fontWeight: 800, marginLeft: '0.4em' }}>
      Ну ви ж філологи
    </span>
</>
}
  />
)


const footer = <Footer>А?</Footer>



export default async function RootLayout({ children }) {
  

  return (

    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          search={false}
          //banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          //footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
