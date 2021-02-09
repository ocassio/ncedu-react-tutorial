import React from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import Delivery from '../delivery/delivery.component'

const Checkout = () => {
    const { path } = useRouteMatch()

    return (
        <div>
            <h1>Оформление покупки</h1>
            <Switch>
                <Redirect from={path} exact to={`${path}/delivery`} />
                <Route path={`${path}/delivery`}>
                    <Delivery />
                </Route>
                <Route path={`${path}/payment`}>
                    Оплата
                </Route>
                <Route path={`${path}/success`}>
                    Заказ успешно оформлен!
                </Route>
            </Switch>
        </div>
    )
}

export default Checkout
