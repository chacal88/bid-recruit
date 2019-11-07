import home from './home/index';
import github from './github/index';

export default (app) => {
    app.use('/', home);
    app.use('/git_hub', github);
};
