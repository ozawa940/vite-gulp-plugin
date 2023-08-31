import { InlineConfig, build } from "vite";
import swcPlugin from "./swc-plugin.js";


/**
 * build Option
 */
export interface ViteBuildOption extends InlineConfig {
    // if isSwc is true, esbuild is disabled and building by swc.
    isSwc?: boolean;
}

/**
 * Build by vite
 * 
 * @param option 
 */
export default async function (option: ViteBuildOption) {

    if (option.isSwc) {
        // Enabled swc option
        option.esbuild = false;
        option.plugins = [swcPlugin.rollup()];
    }

    const result = await build(option);
} 
