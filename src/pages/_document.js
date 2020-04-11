/** 
  *Reference: https://nextjs.org/docs/advanced-features/custom-document
  */

 import NextDocument, { Html, Head, Main, NextScript } from "next/document";

 class MyMontalvoDoc extends NextDocument {
   static async getInitialProps(ctx) {
     const initialProps = await Document.getInitialProps(ctx)
     return { ...initialProps }
   }
 
   render() {
     return (
       <Html lang="es">
         <Head/>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
 }
 
 export default MyMontalvoDoc;