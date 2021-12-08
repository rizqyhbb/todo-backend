const ROUTE_PARAMS = {
    ID: ':id',
    ID_TASK: ':id_task',
}

const ROUTES = {
    ROOT: '/',
    ALL_USER: '/users',
    REGISTER: '/register',
    LOG_IN: '/login',
    ALL_TASK: '/task',
    TASK_BY_ID: `/task/${ROUTE_PARAMS.ID_TASK}` 

}

export default ROUTES;
