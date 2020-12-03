
/**
 * Write data to file. with full path name: '{path}/{name}.{ext}'
 * @param {Uint8Array} data - Array that contains the data to save
 * @param {string} path - path to save, can or not have a '/' at the end
 * @param {string} name - Name to save without extension
 * @param {string} ext - extension of the file. Without '.' in front
 */
export const writeFile = async (data: Uint8Array, path: string, name: string, ext: string = "zip") => {
    const filename = `${name}.${ext}`;
    const fullPath = path + (path.endsWith('/') ? '' : '/');
    await Deno.mkdir(fullPath, { recursive: true });
    await Deno.writeFile(fullPath + filename, data);
}