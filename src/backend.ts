
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const updateName = async (name: string)=>{
    await sleep(1000);
    console.log("updateName", name);
    return null;
}