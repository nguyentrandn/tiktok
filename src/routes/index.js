import routesConfig from "~/config/routes"

//  Layout
import {HeaderOnly} from "~/components/Layout"

import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
//ko can dang nhap
const publicRoutes = [
    {path: routesConfig.home, component: Home}, 
    {path: routesConfig.following, component: Following}, 
    {path: routesConfig.profile, component: Profile}, 
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly}, 
    {path: routesConfig.search, component: Search, layout: null}, 
] ;

// Can dang nhap moi xem dc
const privateRoutes = [
    
] 
export {publicRoutes,privateRoutes }