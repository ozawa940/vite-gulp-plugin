import { ViteBuildOption } from "./build.js";
import * as through from "through2";

/**
 * vite-gulp-plugin is usefull for gulp with vite.  
 * 
 * @param args 
 * @param done 
 */
export default function() {

    const build: through.TransformFunction = (file, encode, callback) => {
        if (!file) {
            return;
        }
    }

    return through.obj(build)

}