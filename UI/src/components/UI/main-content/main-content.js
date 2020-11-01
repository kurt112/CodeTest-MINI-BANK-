import React, { Suspense, lazy, Fragment } from 'react'
import './main-content.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from '../loading/loading'

const Home = lazy(() => import('./home/home'))
const PageNotFound = lazy(() => import('../pageNotFound/page-not-found'))
const Transaction = lazy(() => import('./transaction-list/transaction'))
const User = lazy(() => import('./user-list/user-list'))

const MainContent = ({ user }) => {
    return (
        <div className='main-content'>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    {user.role === "Admin" ?
                        <Fragment>
                            <Route path='/transaction-list' exact component={Transaction} />
                            <Route path='/user-list' exact component={User} />
                        </Fragment> : null
                    }
                    <Route path='/page-not-found' exact component={PageNotFound} />
                    <Redirect to='/page-not-found' />
                </Switch>
            </Suspense>
        </div>
    )
}





export default MainContent