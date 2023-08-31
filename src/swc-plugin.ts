import { transform } from "@swc/core";
import { createUnplugin } from "unplugin";

/**
 * SWC Build Plugin
 */
export default createUnplugin((option: any) => {
    return {
        name: "swc-plugin",
        async transform(code, id) {
            const result = await transform(code, {});
            return {
                code: result.code,
                map: result.map
            };
        }
    }
})