// 此文件用来保存将在整个应用程序中使用的字体。
// 在使用 next/font 模块时会自动优化应用程序中的字体。
// 它在构建时下载字体文件，并将其托管在您的其他静态资产之中。
// 这意味着当用户访问应用程序时，不会有额外的字体网络请求，从而不会影响性能。


import {Inter, Lusitana} from 'next/font/google';


export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({subsets: ['latin'], weight:['400', '700']});