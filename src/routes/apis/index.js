const ROUTE_PARAMS = {
    ID: ':id'
}

const ROUTES = {
    ROOT: '/',
    ALL_USER: '/users',
    REGISTER: '/register',
    LOG_IN: '/login',
    TASK_BY_ID: `/task/${ROUTE_PARAMS.ID}`
}

export default ROUTES;
