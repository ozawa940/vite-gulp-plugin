import {default as gulp} from "gulp";
import main from "../src/main.js";
import logger from "fancy-log";

export const test = () => {
    logger.info("Run gulpfile.ts test");
    return gulp.src(".", {"allowEmpty": true})
        .pipe(main())
        .end();
}

export default { test };