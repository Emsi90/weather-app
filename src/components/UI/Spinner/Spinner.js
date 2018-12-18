import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
  <div className={classes.loader}>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
   <span className={classes.loaderItem}></span>
  </div>
);

export default spinner;