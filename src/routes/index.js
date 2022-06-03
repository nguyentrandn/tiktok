//  Layout
import {HeaderOnly} from "~/components/Layout"

import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
//ko can dang nhap
const publicRoutes = [
    {path: '/', component: Home}, 
    {path: '/following', component: Following}, 
    {path: '/@:nickname', component: Profile}, 
    {path: '/upload', component: Upload, layout: HeaderOnly}, 
    {path: '/search', component: Search, layout: null}, 
] ;

// Can dang nhap moi xem dc
const privateRoutes = [
    
] 
export {publicRoutes,privateRoutes }