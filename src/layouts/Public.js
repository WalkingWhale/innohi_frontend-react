import { Route, Routes } from "react-router-dom";

import Main from '../views/main/Main';

import Introduction from '../views/intro/Introduction';
import Propel from '../views/intro/Propel';
import History from '../views/intro/History';

import StartupSourcing from '../views/program/StartupSourcing';
import ExternalCooperation from '../views/program/ExternalCooperation';
import Suggestion from '../views/program/Suggestion';

import InnoPick from '../views/insight/InnoPick';
import Contest from '../views/insight/Contest';
import Detail from '../views/insight/InnoPickDetail';


import Member from '../views/contact/Member'

import CouncilMain from '../views/council/CouncilMain';
import CouncilAnnounce from "../views/council/CouncilAnnouce";
import AnnouceDetail from "../views/council/AnnouceDetail";
import OINewsletter from "../views/council/OINewsletter"
import NewsletterDetail from "../views/council/NewsletterDetail"
import StartupArchive from '../views/council/StartupArchive';
// import StartupArchive from '../views/council/StartupArchive copy';
import ArchiveDetail from '../views/council/ArchiveDetail';

import RequestForm from '../views/request/RequestForm'

import ErrorPage from '../views/common/ErrorPage';

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';

import * as CouncilCommon from '../views/council/CouncilCommon'
import RouteChangeTracker from '../components/common/RouteChangeTracker';


import Client from './Client';
import Test from './Test';

const sessionCheck = () => {
    setTimeout(() => {
        if (localStorage.getItem("amplify-signin-with-hostedUI")) {
            // localStorage.clear();
            CouncilCommon.loginOut();
        }
    }, 3000000); //페이지 진입 후 30분 세션 out
}

const Public = () => {

    sessionCheck();
    RouteChangeTracker();

    return (
        <>
       
            
            <Header />

            <Routes>
                <Route path='/' element={<Main />}></Route>

                <Route exact path='/test' element={<Test />}></Route>

                <Route exact path='/intro'>
                    <Route exact path='introduction' element={<Introduction />}></Route>
                    <Route exact path='propel' element={<Propel />}></Route>
                    <Route exact path='history' element={<History />}></Route>
                </Route>

                <Route exact path='/program'>
                    <Route exact path='startup' element={<StartupSourcing />}></Route>
                    <Route exact path='external' element={<ExternalCooperation />}></Route>
                    <Route exact path='suggest' element={<Suggestion />}></Route>
                </Route>

                <Route exact path='/insight' >
                    <Route path='innopick' element={<InnoPick />}></Route>
                    <Route path='detail/:bno/:content' element={<Detail />}></Route>
                    <Route path='contest' element={<Contest />}></Route>
                </Route>

                <Route exact path='/contact'>
                    <Route exact path='member' element={<Member />}></Route>
                    <Route exact path='question' element={<StartupArchive />}></Route>
                </Route>

                <Route exact path='/council'>
                    <Route exact path='main' element={<CouncilMain />}> </Route>
                    <Route exact path='announce' element={<CouncilAnnounce />}> </Route>
                    <Route exact path='announce/detail/:bno' element={<AnnouceDetail />}> </Route>
                    <Route exact path='oi' element={<OINewsletter />}> </Route>
                    <Route exact path='oi/detail/:bno' element={<NewsletterDetail />}> </Route>
                    <Route exact path='archive' element={<StartupArchive />}></Route>
                    <Route exact path='archive/detail/:bno' element={<ArchiveDetail />}></Route>
                    
                    <Route exact path='requestform' element={<RequestForm />}> </Route>
                </Route>

                {/* <Route exact path='/login' element={<Login />}></Route> */}


                <Route path="/*" element={<ErrorPage />} />

            </Routes>

            <Footer />
       

        </>
    );
}

export default Public;
 