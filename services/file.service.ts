export const writeFile = async (data: Uint8Array, path: string, name: string, ext: string = "zip") => {
    const filename = `${name}.${ext}`;
    const fullPath = path + (path.endsWith('/') ? '' : '/');
    await Deno.mkdir(fullPath, { recursive: true });
    await Deno.writeFile(fullPath + filename, data);
}