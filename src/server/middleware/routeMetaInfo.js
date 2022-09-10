import routeInfo from '../routeInfo';

const routeMetaInfo = (req, res, next) => {
    req.routeInfo = routeInfo[req.path];
    next();
};

export default routeMetaInfo;
