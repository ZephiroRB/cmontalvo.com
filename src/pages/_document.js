/** 
  *Reference: https://nextjs.org/docs/advanced-features/custom-document
  */

 import NextDocument, { Html, Head, Main, NextScript } from "next/document";

 class MyMontalvoDoc extends NextDocument {
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
 
 MyMontalvoDoc.getInitialProps = (ctx) => NextDocument.getInitialProps(ctx)

 export default MyMontalvoDoc;