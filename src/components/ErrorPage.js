import classes from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={classes['error-page']}>
            <div className={classes['error-page__overlay']}>
                404, PAGE NOT FOUND !!
            </div>
        </div>
    );
}

export default ErrorPage;